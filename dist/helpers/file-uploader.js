"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleImageUploader = exports.singleImageUploader = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const destinationPath = "./public/uploads/";
const maxSize = 1000000000;
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
        const fileExtension = path_1.default.extname(file.originalname);
        const fileName = file.originalname
            .replace(fileExtension, "")
            .toLowerCase()
            .replace(/ /g, "-") +
            "-" +
            Date.now();
        cb(null, fileName + fileExtension);
    },
});
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: maxSize,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg") {
            cb(null, true);
        }
        else {
            cb(new Error("File type only .jpg, .png or .jpeg format allowed!"));
        }
    },
});
// single file uploader
const singleImageUploader = (fieldName) => {
    return upload.single(fieldName);
};
exports.singleImageUploader = singleImageUploader;
// multiple file uploader
const multipleImageUploader = (fieldsName) => {
    const dynamicFields = fieldsName === null || fieldsName === void 0 ? void 0 : fieldsName.map((field) => {
        return { name: field, maxCount: 100 };
    });
    return upload.fields(dynamicFields);
};
exports.multipleImageUploader = multipleImageUploader;
