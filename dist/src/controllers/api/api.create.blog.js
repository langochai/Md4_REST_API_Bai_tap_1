"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCreateBlog = void 0;
const appdata_1 = require("../appdata");
class ApiCreateBlog {
    static async create(req, res) {
        const blogSearch = await appdata_1.BlogRepo.findOneBy({ title: req.body.name });
        if (blogSearch) {
            res.status(500).json({
                message: "Blog đã tồn tại"
            });
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
}
exports.ApiCreateBlog = ApiCreateBlog;
//# sourceMappingURL=api.create.blog.js.map