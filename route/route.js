var express = require("express");
let router = express.Router();
let controller = require('../controller/controller')


router.post('/api/Cats', (req, res) => {
    controller.createCat(req, res);

});

router.get('/api/Cats', (req, res) => {
    controller.getAllCats(req, res);

});

router.delete('api/Cats', (req, res) => {
    controller.deleteCats(req, res);

});



module.exports = router;