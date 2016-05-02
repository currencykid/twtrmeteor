Meteor.startup(function () {
  AccountsEntry.config({
    homeRoute: '/',                     // mand
    dashboardRoute: '/'      // mandatory - path to redirect to after successful sign-in
  });
});
