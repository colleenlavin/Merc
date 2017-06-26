const firebase = require('firebase')

// -- // -- // -- // Firebase Config // -- // -- // -- //
const config = {
  apiKey: "AIzaSyB9hPY6PmsdpXvFYMS6uGYEv1TM1xTXVe8",
    authDomain: "anything-c198d.firebaseapp.com",
    databaseURL: "https://anything-c198d.firebaseio.com",
    projectId: "anything-c198d",
    storageBucket: "",
    messagingSenderId: "290843500604"
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
