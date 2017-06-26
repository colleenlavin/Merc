import React from 'react'

import firebase from 'APP/fire'

const google = new firebase.auth.GoogleAuthProvider()

// Firebase has several built in auth providers:
// const facebook = new firebase.auth.FacebookAuthProvider()
// const twitter = new firebase.auth.TwitterAuthProvider()
// const github = new firebase.auth.GithubAuthProvider()
// // This last one is the email and password login we all know and
// // vaguely tolerate:
 const email = new firebase.auth.EmailAuthProvider()

// If you want to request additional permissions, you'd do it
// like so:
//
// google.addScope('https://www.googleapis.com/auth/plus.login')
//
// What kind of permissions can you ask for? There's a lot:
//   https://developers.google.com/identity/protocols/googlescopes
//
// For instance, this line will request the ability to read, send,
// and generally manage a user's email:
//
// google.addScope('https://mail.google.com/')

// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

export default ({ user, auth }) =>
  // signInWithPopup will try to open a login popup, and if it's blocked, it'll
  // redirect. If you prefer, you can signInWithRedirect, which always
  // redirects.

  <div>

  <button className='google login'
          onClick={() => auth.signInWithPopup(google)}>Login with Google</button>

<form onSubmit={(evt) =>
            {console.log("in clcikkk", evt.target)
             evt.preventDefault()
auth.signInWithEmailAndPassword(evt.target.email.value, evt.target.password.value).catch(function(error) {

  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
})}}>
 <label>
   Email:
   <input type="text" name="email" />
 </label>
<label>
   Password:
   <input type="text" name="password" />
 </label>
 <input type="submit" value="Submit" />
</form>


<form onSubmit={(evt) =>
            {console.log("in clcikkk", evt.target)
             evt.preventDefault()

           let email =  evt.target.email.value,
           password = evt.target.password.value
            evt.target.email.value = ""
           evt.target.password.value= ""

auth.createUserWithEmailAndPassword(email, password).catch(function(error, evt) {
alert("you are not a new user you asshole!")
  // Handle Errors here.
  // console.log(evt, "evt", evt.target)
  // evt.target.email.value = ""
  // evt.target.password.value= ""

  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
})}}>
 <label>
   Email:
   <input type="text" name="email" />
 </label>
<label>
   Password:
   <input type="text" name="password" />
 </label>
 <input type="submit" value="Submit" />
</form>


</div>


