import React from 'react'
import firebase from './firebase'

const Signup = () => {
    const setUpcapcha =(e)=>{
        e.preventDefault();
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': function(response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});
    }
const onSignInSubmit=(event)=>{
            event.preventDefault();
    var phoneNumber = '+918600201306';
var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
        console.log('success');
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
        console.log(error);
      // Error; SMS not sent
      // ...
    });
}

    return (
        <div className='signup'>
            <div className="signup__container">
                <form action="" onSubmit={()=>onSignInSubmit()}>
              <p>Enter your mobile number</p>
              <input type="number"/>
              <button type="submit">Submit</button>
              </form>
            </div>
        </div>
    )
}

export default Signup
