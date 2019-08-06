var mongoose = require("mongoose");

var Schema = mongoose.Schema;



var Post = mongoose.model('Posts', postSchema)
module.exports = Post;