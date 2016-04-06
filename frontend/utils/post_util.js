PostActions = require( '../actions/post_actions' );

var PostUtil = {
  fetchPost: function ( id ) {
    $.ajax({
      url: 'api/posts/' + id,
      dataType: 'json',
      success: function ( post ) {
        PostActions.receivePost( post );
      }
    });
  }
};

module.exports = PostUtil;
