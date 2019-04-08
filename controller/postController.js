require("dotenv").config();
var Posts = require('../model/Posts')

exports.savePosts = async function (req, res) {
  console.log('req:', req.body)
  try {
    if (req.body.text.length > 0) {
      let postContent = req.body.text;
      let post = await Posts.findOne({
        post_content: postContent
      });
      if (post == null) {
        let newPost = new Posts({
          post_content: postContent,
          created_on: Date.now()
        })

        let savedPost = await newPost.save();

        if (savedPost) {
          res.json({
            isSuccess: true,
            data: savedPost
          });
        }
      } else {
        res.json({
          isSuccess: false,
          msg: "post already exists"
        });
      }
    }
    else {
      res.json({
        isSuccess: false,
        error: 'data incorrect'
      })
    }
  } catch (err) {
    console.log('err:', err)
    res.json({
      isSuccess: false,
      error: err
    })
  }

}

exports.getAllPosts = async function (req, res) {
  // console.log('idd', req.body)
  let data = await Posts.find({}).sort({ created_on: -1 })
  if (data) {
    res.json({
      isSuccess: true,
      data
    })
  }
}

exports.upvote = async function (req, res) {
  // console.log('idd', req.body)
  let data = await Posts.findOne({ _id: req.body.id })
  console.log('data:', data)
  data.upvote_count += 1;
  await data.save();
  if (data) {
    res.json({
      isSuccess: true,
      data
    })
  }
}