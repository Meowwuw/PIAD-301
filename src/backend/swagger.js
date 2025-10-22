import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: { 
        title: "API REST - Proyecto PIAD-301", 
        version: "1.0.0",
        description:"Documentacion de API REST con Express, Prisma y PostgreSQL",
        contact:{
            email:"paredesponcemagenta@gmail.com"
        }
    },
    servers: [{ 
        url: "http://localhost:3000",
        description:"Servidor de Desarrollo" 
    }],
  },
  apis: ["./routes/*.js"],
};
export const swaggerSpec = swaggerJsdoc(swaggerOptions);
