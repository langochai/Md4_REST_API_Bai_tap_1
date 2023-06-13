"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiBlog_1 = require("../controllers/api/apiBlog");
const apiRouter = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
apiRouter.get('/blog', apiBlog_1.ApiBlog.show);
apiRouter.post('/blog/create', upload.none(), apiBlog_1.ApiBlog.create);
apiRouter.post('/blog/update', upload.none(), apiBlog_1.ApiBlog.update);
apiRouter.post('/blog/delete', upload.none(), apiBlog_1.ApiBlog.delete);
exports.default = apiRouter;
//# sourceMappingURL=api.router.js.map