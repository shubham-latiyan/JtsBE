"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    post_content: {
        type: String,
        trim: true,
    },
    upvote_count: {
        type: Number,
        default: 0
    },
    created_on: {
        type: Date,
        default: new Date()
    },
}, { versionKey: false });

var Posts = mongoose.model('Posts', PostSchema);
module.exports = Posts;
