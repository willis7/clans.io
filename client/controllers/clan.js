ClanController = RouteController.extend({
  waitOn: function () {
    var id = this.params.id;
    return Meteor.subscribe('clan', id);
  },
  data: function () {
    var id = this.params.id;
    return Clan.findOne(id);
} });
