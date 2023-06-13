"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiBlog = void 0;
const appdata_1 = require("../appdata");
class ApiBlog {
    static async show(req, res) {
        const blogSearch = await appdata_1.BlogRepo.find();
        if (!blogSearch) {
            res.status(500).json({
                message: "Xay ra loi"
            });
            return;
        }
        res.status(200).json({
            message: "Get list successfully",
            blog: blogSearch
        });
    }
    static async create(req, res) {
        const blogSearch = await appdata_1.BlogRepo.findOneBy({ title: req.body.title });
        if (blogSearch) {
            res.status(500).json({
                message: "Blog đã tồn tại"
            });
            return;
        }
        const blogData = {
            title: req.body.title,
            content: req.body.content
        };
        const blog = await appdata_1.BlogRepo.save(blogData);
        if (blog) {
            res.status(200).json({
                message: "Create blog success",
                blog: blog
            });
        }
    }
    static async update(req, res) {
        const blogSearch = await appdata_1.BlogRepo.findOneBy({ id: req.body.id });
        if (!blogSearch) {
            res.status(500).json({
                message: "Blog khong ton tai"
            });
            return;
        }
        const { title, content } = req.body;
        blogSearch.title = title;
        blogSearch.content = content;
        const blog = await appdata_1.BlogRepo.save(blogSearch);
        if (blog) {
            res.status(200).json({
                message: "Update blog success",
                blog: blog
            });
        }
    }
    static async delete(req, res) {
        const blogSearch = await appdata_1.BlogRepo.findOneBy({ id: req.body.id });
        if (!blogSearch) {
            res.status(500).json({
                message: "Blog khong ton tai"
            });
            return;
        }
        const blog = await appdata_1.BlogRepo.remove(blogSearch);
        if (blog) {
            res.status(200).json({
                message: "Delete blog success",
                blog: blog
            });
        }
    }
}
exports.ApiBlog = ApiBlog;
//# sourceMappingURL=apiBlog.js.map