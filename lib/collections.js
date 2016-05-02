//Profile images collection 
ProfileImages = new FS.Collection("Profile Images", {
  stores: [new FS.Store.GridFS("ProfileImages")]
});

UserImages = new Mongo.Collection("UserImages"); 
