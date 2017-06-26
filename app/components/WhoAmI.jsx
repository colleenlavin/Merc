import React from 'react'
import firebase from 'APP/fire'
const auth = firebase.auth()

import Login from './Login'

export const name = user => {
  console.log('this is my user ', user)
  if(user)
  console.log('is Anonymous?', user.isAnonymous)
  if (!user) return 'Nobody'
  if (user.isAnonymous) return 'Anonymous'
  return user.displayName || user.email
}

export const WhoAmI = ({user, auth}) =>
  <div className="whoami">
    <span className="whoami-user-name">Hello, {name(user)}</span>
    { // If nobody is logged in, or the current user is anonymous,
      (!user || user.isAnonymous)?
      // ...then show signin links...
      <Login user={user} auth={auth}/>
      /// ...otherwise, show a logout button.
      : <button className='logout' onClick={() => auth.signOut()}>logout</button> }
  </div>

export default class extends React.Component {
  componentDidMount() {
    const {auth} = this.props
    this.unsubscribe = auth.onAuthStateChanged(user => {
      console.log('AuthStateChange user',user)
      this.setState({user})
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const {user} = this.state || {}
    return <WhoAmI user={user} auth={auth}/>
  }
}
