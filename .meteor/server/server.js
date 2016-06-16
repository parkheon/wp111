/**
 * Created by 5304-20 on 2016-06-17.
 */
Meteor.methods({
    'file-upload': function (fileInfo, fileData) {
        console.log("received file " + fileInfo.name + " data: " + fileData);
        fs.writeFile(fileInfo.name, fileData);
    }
});