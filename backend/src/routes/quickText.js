const express = require("express");
const router = express.Router();

const quickTextController = require("../app/controllers/QuickTextController");

router.post("/save-quick-text/:quicktext_id", quickTextController.saveQuickText);
router.get("/", quickTextController.getQuickText);

module.exports = router;
