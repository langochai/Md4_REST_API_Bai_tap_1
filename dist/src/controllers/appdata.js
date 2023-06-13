"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRepo = void 0;
const data_source_1 = require("../data-source");
const Blog_1 = require("../entity/Blog");
data_source_1.AppDataSource
    .initialize()
    .then(() => {
    console.log(`connect succeeded`);
})
    .catch((err) => {
    console.log(err.message);
});
exports.BlogRepo = data_source_1.AppDataSource.getRepository(Blog_1.Blog);
//# sourceMappingURL=appdata.js.map