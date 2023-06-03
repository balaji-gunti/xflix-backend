const express = require("express");
const videoController = require("../../controllers/video.controller");

const router = express.Router();

// const validate = require("../middlewares/validate");
// const videoValidation = require("../validations/video.validation") ;
// const { videoController } = require("../controllers");

router.get("/", videoController.getVideos);
router.get("/:videoId", videoController.getVideo);
router.post("/", videoController.addVideo);
router.patch("/:videoId/votes", videoController.changeVotes);
router.patch("/:videoId/views", videoController.changeViews);


module.exports = router;