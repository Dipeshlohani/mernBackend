const router = require("express").Router();
const Controller = require("../controller/db.controller");

router.get("/", async (req, res, next) => {
    let data;
    let filter = { title: { $exists: true } };
    let title = req.query.title;
    if (title) data = await Controller.findByTitle(title);
    else
        data = await Controller.findAll(filter, title);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data, {}, 6));
    // res.json(data);
});


router.get("/:tutorialId", async (req, res, next) => {
    let id = req.params.tutorialId;
    if (!id) throw new Error("Missing Id Argument");
    let data = await Controller.findOne(id)
    res.json(data);
})


router.post("/", async (req, res, next) => {
    let payload = req.body;
    if (!req.body.username && !req.body.description) throw new Error("Missing arguments.");
    let data = await Controller.create(payload);
    console.log(data);
    res.json(data);
})


router.put("/:tutorialId", async (req, res, next) => {
    let payload = req.body;
    let id = req.params.tutorialId;
    if (!id) throw new Error("Missing Id Argument");
    let data = await Controller.update(id, payload);
    console.log(data);
    res.json(data);
});


router.delete("/:tutorialId", async (req, res, next) => {
    let id = req.params.tutorialId;
    if (!id) throw new Error("Missing Id Argument");
    let data = await Controller.delete(id);
    res.json(data);
});

module.exports = router;