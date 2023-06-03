const mongoose = require("mongoose");


const videoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    videoLink: {
        type: String,
        required: true,
        trim: true,
        unique: true,
       
    },
    contentRating: {
        type: String,
        required: true,
        trim: true,
        
    },
    genre: {
        type: String,
        required: true,
        trim: true,
        
    },
    releaseDate: {
        type: Date,
        default: Date.now(),
        required: true,
        trim: true,
    },
    previewImage: {
        type: String, 
        trim: true,
        defalut: "https://i.ibb.co/nbYsmJB/Xflix.jpg"
    },
    viewCount: {
        type: Number,
        default: 0,
    },
    votes: {
        upVotes: {
            type: Number,
            default: 0,
        },
        downVotes: {
            type: Number,
            default: 0,
        }
    }
});

videoSchema.static.isTitleTaken = async (title) => {
    const video = await this.findOne({ title });
    return !!video;
}

const Video = mongoose.model("Video", videoSchema);

// module.exports.Video = Video;
module.exports = {Video};