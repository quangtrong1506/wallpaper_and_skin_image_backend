import express from "express";
import DocsController from "../../app/Http/Controllers/DocsController.js";
const albumsRouter = (app) => {
    const router = express.Router();
    router.get("/", DocsController.filter);
    router.post("/", DocsController.store);
    router.delete("/:id", DocsController.destroy);
    app.use("/images", router);
};

export default albumsRouter;
