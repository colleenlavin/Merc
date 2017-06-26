const firebase = require('firebase')

// -- // -- // -- // Firebase Config // -- // -- // -- //
const config = {

   apiKey: "AIzaSyCds_pOhWC_F9BLoPWHd7NsOHzT9k6_xpE",
    authDomain: "mercury-c8534.firebaseapp.com",
    databaseURL: "https://mercury-c8534.firebaseio.com",
    projectId: "mercury-c8534",
    storageBucket: "mercury-c8534.appspot.com",
    messagingSenderId: "22146840200"

}
// -- // -- // -- // -- // -- // -- // -- // -- // -- //

// Initialize the app, but make sure to do it only once.
//   (We need this for the tests. The test runner busts the require
//   cache when in watch mode; this will cause us to evaluate this
//   file multiple times. Without this protection, we would try to
//   initialize the app again, which causes Firebase to throw.
//
//   This is why global state makes a sad panda.)
firebase.__bonesApp || (firebase.__bonesApp = firebase.initializeApp(config))


// const messages = firebase.database().ref('scratchpads')
// //console.log("mess!ages", messages, "****")


// console.log(firebase.database().ref('whiteboards/welcome'))
// var ref = firebase.database().ref('whiteboards/welcome')
// console.log(ref, "KIKI")
// ref.on('value', function(snapshot) {
//   console.log("FSFSF")
//     snapshot.forEach(function(childSnapshot) {
//       var childData = childSnapshot.val();
//       console.log(childData, "HALALA")
//     });
// });


// var dbRef = firebase.database().ref().child('scratchpads/ns');
// dbRef.on('value', snapshot => {
//   console.log(snapshot.val());
// });


function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users').set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

// var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = snapshot.val().username;
//   // ...
// })

writeUserData("keti", "nino", "emaailchik", "nop")


firebase.__bonesApp.database().ref('chat').set('hey')

module.exports = firebase
