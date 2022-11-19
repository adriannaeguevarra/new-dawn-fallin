import React from 'react'
import { Auth } from 'aws-amplify';

function Home() {
  async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
  return (
    <div>
      Home
      <button onClick={signOut}>Sign out</button>
    </div>
  )
}

export default Home