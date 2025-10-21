import  {userService} from '../services/userServices.js';

export const userController = {
    async getUsers(req, res){
        try{
            const users = await userService.getAllUsers();
            res.status(200).json({
                succes: true,
                data:users
            })
        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            })
        }
    },

    async createUser (req, res){
        try{
            const {email, name}= req.body;
            //Validacion basica
            if(!email || !name){
                return res.status(400).json({
                    succes:false,
                    message:'Email y nombre son obligatorios'
                });
            }
            const newUser = await userService.createUser({email, name});
            res.status(201).json({
                succes:true,
                data: newUser,
                message: 'Usuario creado correctamente'
            });
        }catch(error){
            res.status(500).json({
                sucess:false,
                message:error.message
            })
        }
    },

    async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const updatedUser = await userService.updateUser(id, updateData);
      
      res.status(200).json({
        success: true,
        data: updatedUser,
        message: 'Usuario actualizado exitosamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}