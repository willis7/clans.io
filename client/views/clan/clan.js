Template.Clan.helpers({
  isEditing: function() {
    return Session.get('isEditing');
  }
});

Template.Clan.events({
   'click .edit': function() {
     Session.set('isEditing', true);
   }
});

AutoForm.addHooks('updateClansForm', {
  onSuccess: function () {
    Session.set('isEditing', false);
  }
});

Template.Clan.destroyed = function () {
  Session.set('isEditing', false);
};
