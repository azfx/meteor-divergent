
RandomUsers = {
  "get" : function(count , callback) {
    HTTP.call("GET", "http://api.randomuser.me/?results=" + count, function (error, result) {
      if (!error) {
        callback(result.data.results);
      }
    })
  }
}
