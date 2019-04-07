"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    post_content: {
        type: String,
        trim: true,
        lowercase: true
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


// PostSchema.pre('save', function (next) {
//     var user = this;
//     if (this.isModified('password') || this.isNew) {
//         bcrypt.genSalt(10, function (err, salt) {
//             if (err) {
//                 return next(err);
//             }
//             bcrypt.hash(user.password, salt, function (err, hash) {
//                 if (err) {
//                     return next(err);
//                 }
//                 user.password = hash;
//                 next();
//             });
//         });
//     } else {
//         return next();
//     }
// });


var Posts = mongoose.model('Posts', PostSchema);
module.exports = Posts;
