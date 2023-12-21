"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationHandler = void 0;
const validationHandler = (validationSchema) => {
    return (req, res, next) => {
        var _a;
        try {
            let errorMessages = [];
            let errorExist = false;
            let customError = {};
            let err;
            (_a = Object.keys(validationSchema)) === null || _a === void 0 ? void 0 : _a.map((key) => {
                var _a;
                let schema, reqData;
                if (key === "body" && validationSchema.body) {
                    schema = validationSchema.body;
                    reqData = req.body;
                }
                else if (key === "query" && validationSchema.query) {
                    schema = validationSchema.query;
                    reqData = req.query;
                }
                else if (key === "params" && validationSchema.params) {
                    schema = validationSchema.params;
                    reqData = req.params;
                }
                else if (key === "headers" && validationSchema.headers) {
                    schema = validationSchema.headers;
                    reqData = req.headers;
                }
                if (schema && reqData) {
                    const { error } = schema.validate(reqData, {
                        abortEarly: false,
                        errors: {
                            wrap: {
                                label: "",
                            },
                        },
                    });
                    if (error) {
                        errorExist = true;
                        (_a = error.details) === null || _a === void 0 ? void 0 : _a.map((err) => {
                            let path = err.path[0];
                            customError = Object.assign(Object.assign({}, customError), { [path]: err.message });
                        });
                    }
                }
            });
            // check the messages object is empty or not
            if (errorExist) {
                return res
                    .status(422)
                    .json({
                    success: false,
                    errors: customError,
                    message: "Validation Error!",
                });
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
exports.validationHandler = validationHandler;
