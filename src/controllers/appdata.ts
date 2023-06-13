import {AppDataSource} from "../data-source";
import {Blog} from "../entity/Blog";

AppDataSource
    .initialize()
    .then(()=>{
        console.log(`connect succeeded`)
    })
    .catch((err)=>{
        console.log(err.message)
    });
export const BlogRepo = AppDataSource.getRepository(Blog);