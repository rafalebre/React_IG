const { body } = require("express-validator")

const userCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("The name is mandatory")
            .isLength({ min: 3 })
            .withMessage("The name must have at least 3 characters."),
        body("email")
            .isString()
            .withMessage("The e-mail is mandatory.")
            .isEmail()
            .withMessage("Insert a valid e-mail address"),
        body("password")
            .isString()
            .withMessage("The password is mandatory.")
            .isLength({ min: 5 })
            .withMessage("The password must have at least 5 characters."),
        body("confirmpassword")
            .isString()
            .withMessage("The password confirmation is mandatory.")
            .custom((value, { req }) => {
                if (value != req.body.password) {
                    throw new Error("The passwords do not match.")
                }
                return true
            })
    ]
}

const loginValidation = () => {
    return [
        body("email")
            .isString()
            .withMessage("The e-mail is mandatory.")
            .isEmail()
            .withMessage("Insert a valid e-mail."),
        body("password")
            .isString()
            .withMessage("The password is mandatory.")
    ]
}

module.exports = {
    userCreateValidation,
    loginValidation,
}