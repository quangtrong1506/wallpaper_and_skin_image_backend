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
            let data = await DocsRepository.store({
                url: req.body.url,
            });
            return responseSuccess(res, data);
        } catch (error) {
            return responseErrors(res, 400, error.message);
        }
    }
    async filter(req, res) {
        try {
            const { limit = 12, page = 1 } = req.query;
            console.log({
                limit,
                skip: (page - 1) * limit,
            });
            const data = await DocsRepository.findBy(
                {},
                {},
                {
                    limit,
                    skip: (page - 1) * limit,
                }
            );
            const total = await DocsRepository.count();
            const result = {
                page: parseInt(page),
                limit: parseInt(limit),
                data,
                total,
            };
            return responseSuccess(res, result);
        } catch (error) {
            return responseErrors(res, 400, error.message);
        }
    }
    async destroy(req, res) {
        try {
            let data = await DocsRepository.destroy(req.params.id);

            return responseSuccess(res, data);
        } catch (error) {
            return responseErrors(res, 400, error.message);
        }
    }
}

export default new DocsController();
