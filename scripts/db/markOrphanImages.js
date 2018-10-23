#!/usr/bin/mongo

var db = new Mongo().getDB("hissues");

var used_ids = [];

db.houses.find( {}, {images:1, title:1})
.forEach( function( house) {
  house.images.forEach( function( img) {
    if( img.indexOf( '/') === -1){
      used_ids.push( ObjectId( img));
    }
  });
});

db.images.updateMany( {}, {$set: {orphan: true}});
db.images.updateMany( { _id: {$in: used_ids}}, {$set: {orphan:false}});
