const express = require('express');
const app = express();
// Require bodyParser to use req.body
const bodyParser = require('body-parser');

// Tell express to use bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// Use EJS files in 'view' Directory
app.set('view engine', 'ejs');

// Only Making This Global as We are not Incorporating Databases yet
var friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/friends', (req, res) => {
  res.render('friends', {friends: friends});
});

// First Post Route. Adding Data, add to Database
// New Comment, New User, etc. 
// Form on /friends page will post to /addfriend
app.post('/addfriend', (req, res) => {
  // Object that contains all
  // data of request body
  // NEED TO INSTALL BODY PARSER!
  // The 'newfriend' comes from the 'name'
  // used in the input form on friends.ejs
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  // Will redirect you back to the page 
  res.redirect('/friends');
});

app.listen(3000, () => console.log('Server has started!'));