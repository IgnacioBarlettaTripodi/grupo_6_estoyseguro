const path = require ('path');
const fs = require ('fs');

const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const user = {
    // Buscar un usuario segun el ID
    findByPk: (id) => {
        let allUsers = users
        let userFound = allUsers.find(oneUser => oneUser.id === id)
        return userFound
    },
    // Buscar un usuario segun un campo, para el pais recordar que trae el primero que encuentre y no todos
    findByField: (field,text) => {
        let allUsers = users
        let userFound = allUsers.find(oneUser => oneUser[field] === text)
        return userFound
    },
    generateId: ()=> {
        let allUsers = users
        let lastUser = allUsers.pop()
        if(lastUser){
            return lastUser.id + 1
        }
        return 1
    },
    // Guardar un usario en la DB (BASE DE DATOS)
    create: (userData) => {
        let allUsers = users
        let newUser = {
            'id': allUsers[allUsers.length-1].id +1,
            ...userData
        }
        allUsers.push(newUser)
        fs.writeFileSync(usersFilePath, JSON.stringify(allUsers,null,'\t'))
        return newUser
    }, 
    // Generar un ID para un nuevo usuario
  
    //Eliminar un usuario de la DB
    delete: (id) => {
        let allUsers = users
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id)   // Esto devuelve todos los usuarios menos el que queremos eliminar justamente

        fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers,null,'\t'))

    }
    
}

module.exports = user