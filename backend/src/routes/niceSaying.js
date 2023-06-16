const express = require("express");
const router = express.Router();
const sayingController = require("../app/controllers/SayingController");

router.put("/update/:saying_id", sayingController.updateSaying);
router.post("/create-saying", sayingController.createSaing);
router.delete("/delete-saying/:saying_id", sayingController.deleteSaying);
router.get("/", sayingController.getSaying);

module.exports = router;
