
Clan = new Mongo.Collection('clan');

Clan.attachSchema(
  new SimpleSchema({
    title: {
      type: String,
      label: "Title"
} }));
