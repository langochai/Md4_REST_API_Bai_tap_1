import express from "express";
import {ApiBlog} from "../controllers/api/apiBlog";
const apiRouter = express.Router();
import multer from "multer";
const upload = multer();

apiRouter.get('/blog',ApiBlog.show)
apiRouter.post('/blog/create',upload.none(),ApiBlog.create)
apiRouter.post('/blog/update',upload.none(),ApiBlog.update)
apiRouter.post('/blog/delete',upload.none(),ApiBlog.delete)

export default apiRouter