Template.activity.rendered = function() {
  var self = this;

  // If the activity is in a list, scroll it into view. Note, we can't just use
  // element.scrollIntoView() because it attempts to scroll in the X direction
  // messing up our animations
  if (Router.current().params.activityId === self.data._id) {
    var $activity = $(self.firstNode);
    var top = $activity.offset().top;
    var $parent = $(self.firstNode).closest('.content-scrollable');
    var parentTop = $parent.offset().top;
    $parent.scrollTop(top - parentTop);
  }
}



Template.activity.helpers({
  firstName: function() {
    return this.userName.split(' ')[0];
  },
  postTitle: function() {
    return BlogData[this.postName].title;
  },
  path: function() {
    return Router.path('post', { name: this.postName },
      { query: { activityId: this._id } })
  },
  messages: function() {
    return Messages.find();
  },
})

// Template.input.events({
//   "submit .new-msg": function (event) {
//     event.preventDefault();
//     var text = event.target.text.value
//     var postTitle = event.target.postTitle.value
//     Meteor.call("createActivity", text, postTitle);
//     event.target.text.value = "";
//     return false;
    
//   }
// });

