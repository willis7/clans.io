Meteor.publish('clans', function () {
  return Clan.find();
});
