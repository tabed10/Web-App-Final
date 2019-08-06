var Article = require('Article.js');

module.exports.new = function(request, response) {
  response.render('form.ejs');
}

module.exports.create = function(request, response) {
  var new_article = new Article(request.body);
  new_article.save(function(err, data) {
    if (err)
      return response.status(400)
        .json({
          error: "Error"
        });
    console.log(data);
    return response.status(200)
      .json({
        message: "Done"
      });

  })
  console.log(request.body);
}

module.exports.list = function(request, response) {
Article.find(function(err, data){
  if(err){
    response.status(400)
      .json({
        error: "error"
      });
  }

  response.status(200).json({
    articles: data
  });
});

}
