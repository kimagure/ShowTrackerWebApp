App = Ember.Application.create();
App.Store = DS.Store.extend({
//  adapter: DS.FixtureAdapter
});

App.ShowsController = Ember.ArrayController.extend({
  rowNewTitle: null,
  rowNewEpisode: 1,

  actions: {
    increment: function (item) {
      // var id = item.get('id');
      // var existingShow = this.store.find('show', id).then( function (result) {
      //   result.incrementProperty('episode');
      // }, function (error) {
      //   console.log("error: " + error);
      // });
      var episode = parseInt(item.get('episode'));
      episode += 1;
      item.set('episode', episode);
      item.save();
    },
    decrement: function (item) {
      var episode = parseInt(item.get('episode'));
      episode -= 1;
      item.set('episode', episode);
      item.save();
    },
    createShow: function () {
      var newTitle = this.get('rowNewTitle');
      var newEpisode = this.get('rowNewEpisode');
      var newShow = this.store.createRecord('show', {
        id: 3,
        title: newTitle,
        episode: newEpisode
      });
    }
  }
});

App.EditshowController = Ember.ObjectController.extend({
  newTitle: null,
  newEpisode: null,
  actions: {
    doneEditing: function (item) {
      var newTitle = this.get('newTitle');
      var newEpisode = this.get('newEpisode');
      if (newTitle != null) {
        item.set('title', newTitle);
      }
      if (newEpisode != null) {
        item.set('episode', newEpisode);
      }      
      item.save();
    }
  }
});
