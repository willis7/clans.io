ClansController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('clans');
  },
  data: function () {
    return Clan.find().fetch();
} });
