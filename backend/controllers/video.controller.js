const catchAsync = require("../utils/catchAsync");
const { videoService } = require("../services");
const httpStatus = require("http-status");

const addVideo = catchAsync(async (req, res) => {
  try {
    const video = await videoService.addVideo(req.body);
    res.status(201).send(video);
  } catch (err) {
    res.send({
      statusCode: httpStatus.BAD_REQUEST,
      message: "Video not created",
    });
  }
});

const getVideos = catchAsync(async (req, res) => {
  try {
    // const title = req.query.title ? req.query.title : "";
    // const contentRating = req.query.contentRating ? req.query.contentRating : "";
    // const genres = req.query.genres ? req.query.genres : ["All"];
    // const sortBy = req.query.sortBy ? req.query.sortBy : "releaseDate";
    const { title, genres, sortBy, contentRating } = req.query;

    const videos = await videoService.getVideos(
      title,
      genres,
      sortBy,
      contentRating
    );
    res.status(200).send({ videos: videos });
  } catch (e) {
    res
      .status(httpStatus.NOT_FOUND)
      .send({ statusCode: httpStatus.NOT_FOUND, message: "Videos not found" });
  }
});
const getVideo = catchAsync(async (req, res) => {
  try {
    const video = await videoService.getVideo(req.params.videoId);
    res.status(201).send(video);
  } catch (err) {
    res.send({ statusCode: httpStatus.NOT_FOUND, message: "Video not found" });
  }
});

const changeViews = catchAsync(async (req, res) => {
  try {
    const video = await videoService.changeViews(req.params.videoId);
    res.status(204).send(video);
  } catch (err) {
    res.send({
      statusCode: httpStatus.BAD_REQUEST,
      message: "video Id must be valid Id",
    });
  }
});

const changeVotes = catchAsync(async (req, res) => {
  try {
    const video = await videoService.changeVotes(req);
    console.log(video)
    res.status(201).send(video);
  } catch (err) {
    res.send({
      statusCode: httpStatus.BAD_REQUEST,
      message: "Some parameter is missing or id is invalid",
    });
  }
});

module.exports = {
  addVideo,
  getVideos,
  getVideo,
  changeVotes,
  changeViews,
};
