const {body} = require("express-validator")

const photoInsertValidation = () => {
    return [
        body("title")
        .not()
        .equals("undefined")
        .withMessage("The title is mandatory.")
        .isString()
        .withMessage("The title is mandatory.")
        .isLength({min: 3})
        .withMessage("The title must have at least 3 characters."),
        body("image").custom((value, {req}) => {
            if(!req.file) {
                throw new Error("The image is mandatory.")
            }
            return true;
        })
    ]
}

module.exports = {
    photoInsertValidation,
}