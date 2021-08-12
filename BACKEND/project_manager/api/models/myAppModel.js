var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var myAppSchema = new Schema({
    title : String,
    content : String
});

var myApp = mongoose.model('note', myAppSchema);

module.exports = myApp;