Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});


Router.map(function () {
  this.route('home', {path: '/'});
  this.route('clans', {path: '/clans'});
  this.route('clan', {path: '/clan/:id'});
});
