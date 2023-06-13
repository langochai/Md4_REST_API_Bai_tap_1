import {BlogRepo} from "../appdata";
export class ApiBlog {
    static async show(req,res){
        const blogSearch = await BlogRepo.find();
        if (!blogSearch){
            res.status(500).json({
                message: "Xay ra loi"
            })
            return
        }
        res.status(200).json({
            message: "Get list successfully",
            blog: blogSearch
        });
    }
    static async create(req,res){
        const blogSearch = await BlogRepo.findOneBy({ title: req.body.title });
        if (blogSearch) {
            res.status(500).json({
                message: "Blog đã tồn tại"
            })
            return
        }
        const blogData = {
            title : req.body.title,
            content : req.body.content
        };
        const blog = await BlogRepo.save(blogData);
        if (blog) {
            res.status(200).json({
                message: "Create blog success",
                blog: blog
            });
        }
    }

    static async update(req,res){
        const blogSearch = await BlogRepo.findOneBy({ id:req.body.id});
        if (!blogSearch){
            res.status(500).json({
                message: "Blog khong ton tai"
            })
            return
        }
        const {title,content} = req.body
        blogSearch.title = title;
        blogSearch.content = content;
        const blog = await BlogRepo.save(blogSearch);
        if (blog) {
            res.status(200).json({
                message: "Update blog success",
                blog: blog
            });
        }
    }
    static async delete(req,res){
        const blogSearch = await BlogRepo.findOneBy({ id:req.body.id});
        if (!blogSearch){
            res.status(500).json({
                message: "Blog khong ton tai"
            })
            return
        }
        const blog = await BlogRepo.remove(blogSearch);
        if (blog) {
            res.status(200).json({
                message: "Delete blog success",
                blog: blog
            });
        }
    }
}