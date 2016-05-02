Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  //Posts route
  this.route('posts', {
    path: '/' , 
    template: 'posts' 
  });

  //About route
  this.route('about'); // has same name as template

  //profile route
  this.route('profile'); // has same name as template
});
