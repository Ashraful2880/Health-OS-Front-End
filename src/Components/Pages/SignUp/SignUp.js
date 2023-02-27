import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCtkqHm_JPWGxDye6dww141k2EdI0524t4",
  authDomain: "alijahan-academy-b6bab.firebaseapp.com",
  projectId: "alijahan-academy-b6bab",
  storageBucket: "alijahan-academy-b6bab.appspot.com",
  messagingSenderId: "647218034961",
  appId: "1:647218034961:web:a2759e896326813d2734b0",
};

firebase.initializeApp(config);

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSendCode = (e) => {
    e.preventDefault();

    const appVerifier = new firebase.auth.RecaptchaVerifier(
      "send-code-button",
      {
        size: "invisible",
        callback: () => {
          // reCAPTCHA verification completed, submit the phone number to Firebase.
        },
        "expired-callback": () => {
          // reCAPTCHA verification expired, reset the reCAPTCHA widget.
          appVerifier.reset();
        },
      }
    );

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();

    confirmationResult
      .confirm(verificationCode)
      .then((result) => {
        firebase.auth().createUserWithEmailAndPassword(email, password);
      })
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    const appVerifier = new firebase.auth.RecaptchaVerifier(
      "send-code-button",
      {
        size: "invisible",
        callback: () => {
          // reCAPTCHA verification completed, submit the phone number to Firebase.
        },
        "expired-callback": () => {
          // reCAPTCHA verification expired, reset the reCAPTCHA widget.
          appVerifier.reset();
        },
      }
    );

    return () => {
      // Cleanup the appVerifier instance.
      appVerifier.clear();
    };
  }, []);

  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    // Listen for changes to the authentication state
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        setUser(user);
      } else {
        // User is logged out
        setUser(null);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen">
      <form onSubmit={handleSendCode}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="email"
          id="phone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="phone"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button id="send-code-button" type="submit">
          Send Verification Code
        </button>
      </form>

      {confirmationResult && (
        <form onSubmit={handleVerifyCode}>
          <label htmlFor="verification-code">Verification Code</label>
          <input
            type="text"
            id="verification-code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button type="submit">Verify Code</button>
        </form>
      )}

      {error && (
        <div>
          <p>An error occurred: {error.message}</p>
        </div>
      )}
    </div>
  );
};

export default SignUp;
