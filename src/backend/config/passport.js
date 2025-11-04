import passport from "passport";
import { PrismaClient } from "@prisma/client";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const prisma = new PrismaClient();

passport.use(
    new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const email = profile.emails[0].value;
            const googleId = profile.id;

            let user = await prisma.user.findUnique({
                where: { googleId },
            });

            if (!user) {
                user = await prisma.user.findUnique({
                    where: { email },
                });

                if (user) {
                    user = await prisma.user.update({
                        where: { email },
                        data: {
                            googleId: googleId,
                            avatar: profile.photos[0].value,
                        },
                    });
                } else {
                    user = await prisma.user.create({
                        data: {
                            email: email,
                            name: profile.displayName,
                            googleId: googleId,
                            avatar: profile.photos[0].value,
                        },
                    });
                }
            }
            
            return done(null, user);

        } catch (error) {
            
            return done(error, null);
        }
    })
);


passport.serializeUser((user, done) => {
    done(null, user.id.toString()); 
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: parseInt(id, 10) } });
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});