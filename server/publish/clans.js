Meteor.publish('clans', function () {
  return Clan.find();
});


Meteor.publish('clan', function (id) {
 return Clan.find(id);
});
