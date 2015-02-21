Template.feed.helpers({
  activities: function() {
    return Activities.find({}, {sort: {date: -1}});
  },
  ready: function() {
    return Router.current().feedSubscription.ready();
  },
    messages: function() {
    return Messages.find({}, {sort: {date: -1}});
  },
});


Template.chat.events({
  "submit form": function (event) {
    // This function is called when the new task form is submitted
    event.preventDefault();
    var msg = event.target.msg.value;
    console.log(msg);
    Meteor.call("addMsg", msg);
    // Clear form
    event.target.msg.value = "";
    return false;
  }
});

