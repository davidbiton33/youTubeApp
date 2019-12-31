const express = require('express');
const router = express.Router();
const connection = require('../data/database');
const videoModel = require('../model/videos');

/* GET all. */
router.get('/', function(req, res, next) {
  videoModel.find({},(err,data) => {
    err? console.log(err): res.send(data); 
  })
});
/* GET by key. */
router.get('/:key', (req, res) => {
  videoModel.find({ key: req.params.key }, (err, data) => {
    err ? console.log (err) : res.send(data)
  })
});
/* post new video. */
router.post('/', (req,res) =>{
 var video = new videoModel({
  id: req.body.id,
  key: req.body.key,
  title: req.body.title
 })
 video.save().then( () => console.log(`${video.title} Saved! `) )
})

/* update videos title. */
router.put('/', (req,res) => {
  var query = {key: req.body.key};
  videoModel.findOneAndUpdate(query, { $set: { title: req.body.newtitle } } , (err,doc) =>{
    err? console.log(err) : res.send(doc)
  })

})

/* delete video by id. */
router.delete('/', (req,data) => {
  videoModel.findOneAndDelete({id: req.body.id}, (err) =>{
    err? console.log(err) : console.log(`item  ${req.body.id} deleted!`)
  })
})








module.exports = router;
