var path = require('path');
var mongoose = require('mongoose');
// We probably won't need knex?
/*var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '../db/shortly.sqlite')
  }
});
var db = require('bookshelf')(knex);*/
//--------------------

//what shoudl this path be?
mongoose.connect('mongodb://127.0.0.1:4568/db');
var Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Things are working with the connection');
});

var UserSchema = new Schema({
  name: String,
  password: String,
  'created_at': Date,
  'updated_at': Date
});

var LinkSchema = new Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  'updated_at': Date,
  'created_at': Date
});

module.exports = db;


//This will be used in place of create in the posts
//var userInstance = new User({name:'Phillip'});


/*db.knex.schema.hasTable('urls').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('urls', function (link) {
      link.increments('id').primary();
      link.string('url', 255);
      link.string('baseUrl', 255);
      link.string('code', 100);
      link.string('title', 255);
      link.integer('visits');
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 100).unique();
      user.string('password', 100);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});
*/
