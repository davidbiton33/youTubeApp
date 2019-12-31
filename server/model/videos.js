var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var videoSchema = new Schema({
    key: String,
    title: String,
    id: Number
});
module.exports = mongoose.model('videos', videoSchema);

