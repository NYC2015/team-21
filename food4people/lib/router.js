Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'signin',

});

Router.route('/', function () {
  this.render('Home');
});

Router.route('signin');
