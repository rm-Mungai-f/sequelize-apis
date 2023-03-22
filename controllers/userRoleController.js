import db from "../models/index.js";

const UserRole = db.UserRole;

const getAllUserRoles = async (req, res) => {
    try {
        const response = await UserRole.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No User role found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getUserRoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await UserRole.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "User role not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createUserRole = async (req, res) => {
    try {
        const response = await UserRole.create(req.body);
        if(!response){
            res.status(500).json({"message": "Internal server error"});
        }else if(response){
            res.status(201).json({"message": "User role created."});
        }
    } catch (error) {
        res.status(401).json(error);
    }
}

const updateUserRoleById = async (req, res) => {
    const { id } = req.params;
    const { username, email, password} = req.body;
    try {
        const [ response ] = await UserRole.update(
            {
                "role_id": role_id,
                "user_id": user_id,
                "password": password},
                { where: { role_id: id}});
        if(response === 0){
            res.status(404).json({"message": "Role not found"});
        }else if(response){
            res.status(201).json({"message": "Role updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteUserRoleById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await UserRole.destroy({where: {role_id: id}})
        if(response === 0){
            res.status(404).json({"message": "Role not found"});
        }else if(response){
            res.status(200).json({"message": "ROLE deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export {getAllUserRoles,getUserRoleById,createUserRole,updateUserRoleById,deleteUserRoleById};