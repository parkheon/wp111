/**
 * Created by 5304-20 on 2016-06-17.
 */
Meteor.publish("fileUploads", function () {
    console.log("publishing fileUploads");
    return YourFileCollection.find();
});