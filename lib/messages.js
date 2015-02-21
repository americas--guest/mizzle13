  Messages = new Mongo.Collection('messages');

  Messages.latest = function() {
  return Messages.findOne({}, {sort: {date: -1}, limit: 1});
}

  Meteor.methods({
    addMsg: function (msg) {
        console.log(msg);

    Messages.insert({
      message: msg
    })
    }
});