/**
 * Created by 5304-20 on 2016-06-17.
 */
"change .file-upload-input" ;
    function a(event, template){
    var func = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function(fileLoadEvent) {
        Meteor.call('file-upload', file, reader.result);
    };
    reader.readAsBinaryString(file);
}