module.exports = {
  key: 'hackernews-post',

  // Route url strings are passed to lodash's 'template' function.
  // You can also provide a function that should return the newly built URL
  // @see https://lodash.com/docs#template
  url: 'https://news.ycombinator.com/item?id=<%= query.id %>',

  scraper: function($) {
    var $post = $('tr.athing').first();

    return {
      items: [{
        key: $post.attr('id'),
        title: $post.find('.title a').text(),
        href: $post.find('.title a').attr('href'),
        postedBy: $post.find('.hnuser').text(),

        // for the sake of this tutorial let's just save most voted comment
        bestComment: $('.comment').first().text()
      }]
    };
  }
}
