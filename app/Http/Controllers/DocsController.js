import { responseErrors, responseSuccess } from "../../Common/helper.js";
import DocsRepository from "../../Repositories/DocsRepository.js";
import BaseController from "./BaseController.js";

function stringToSlug(str) {
    var from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
        to = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(RegExp(from[i], "gi"), to[i]);
    }

    str = str
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\-]/g, "-")
        .replace(/-+/g, "-");

    return str;
}
class DocsController extends BaseController {
    base(req, res) {
        try {
            return responseSuccess(res, null);
        } catch (error) {
            return responseErrors(res, 400, error.message);
        }
    }
    async store(req, res) {
        try {
            const slug = stringToSlug(req.body.title);
            if (!req.body.title || req.body.title.trim() === "")
                throw new Error("Tên tài liệu không được để trống");
            if (!req.body.content || req.body.content.trim() === "")
                throw new Error("Nội dung tài liệu không được để trống");
            let data = await DocsRepository.store({
                title: req.body.title,
                content: req.body.content,
                slug,
            });

            return responseSuccess(res, data);
        } catch (error) {
            return responseErrors(res, 400, error.message);
        }
    }
    async filter(req, res) {
        try {
            const { q, page } = req.query;
            const conditions = {};
            let arr = stringToSlug(q || "").split("-");
            let regexString = "";
            arr.forEach((element) => {
                regexString += `(?=.*${element})`;
            });
            if (q) conditions.slug = new RegExp(regexString, "gi");
            let data = await DocsRepository.findBy(
                { ...conditions },
                {
                    updated_at: -1,
                }
            );
            return responseSuccess(res, data);
        } catch (error) {
            return responseErrors(res, 400, error.message);
        }
    }
    async getById(req, res) {
        try {
            const { id } = req.params;
            let data = await DocsRepository.findById(id);
            return responseSuccess(res, data);
        } catch (error) {
            return responseErrors(res, 400, error.message);
        }
    }
    async update(req, res) {
        try {
            const slug = stringToSlug(req.body.title);
            if (!req.body.title || req.body.title.trim() === "")
                throw new Error("Tên tài liệu không được để trống");
            if (!req.body.content || req.body.content.trim() === "")
                throw new Error("Nội dung tài liệu không được để trống");
            let data = await DocsRepository.update(req.params.id, {
                title: req.body.title,
                content: req.body.content,
                slug,
            });
            return responseSuccess(res, data);
        } catch (error) {
            return responseErrors(res, 400, error.message);
        }
    }
    async destroy(req, res) {
        try {
            let data = await DocsRepository.destroy(req.params.id);
            console.log(data);
            return responseSuccess(res, data);
        } catch (error) {
            return responseErrors(res, 400, error.message);
        }
    }
}

export default new DocsController();
