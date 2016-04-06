var LikeUtil = {
  createLike: function ( target, callback ) {
    $.ajax({
      type: 'POST',
      url: 'api/' + target + '/likes',
      dataType: 'json',
      success: function () {
        callback();
      }
    });
  },

  destroyLike: function ( target, callback ) {
    $.ajax({
      type: 'DELETE',
      url: 'api/' + target + '/unlike',
      dataType: 'json',
      success: function () {
        callback();
      }
    });
  }
};

module.exports = LikeUtil;
