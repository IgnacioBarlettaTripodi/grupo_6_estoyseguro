const user = require('../models/Users')

function userLoggedMiddleware(req,res,next){
    res.locals.isLogged = false

    let emailInCookie = req.cookies.userEmail
    let userFromCookie = user.findByField('email', emailInCookie)

    if(userFromCookie){
        req.session.userLogged = userFromCookie
    }

    if(req.session && req.session.userLogged){
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
    }

    next()
}

// LO QUE HACE ESTE MIDDLEWARE ES QUE CUANDO NOS LOGUEAMOS, SE DEJA DE MOSTRAR EL "INGRESAR" Y EL "REGISTRARSE", Y SOLO SE MUESTRA EL VER PERFIL

module.exports = userLoggedMiddleware