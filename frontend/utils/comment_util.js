var CommentUtil = {
  fetchAllComments: function ( postIds ) {
    $.ajax({
      url: 'api/comments',
      data: { ids: postIds },
      dataType: 'json',
      success: function ( comments ) {
        console.log( comments );
        // update comment store
      }
    });
  }
};

module.exports = CommentUtil;
