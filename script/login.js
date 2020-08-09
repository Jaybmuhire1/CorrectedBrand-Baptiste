var firebaseConfig = {
    apiKey: "AIzaSyAl_3Zfm_LWNJvQ6SMSVHmqXyVbveEcY9A",
    authDomain: "correctedbrand-baptiste.firebaseapp.com",
    databaseURL: "https://correctedbrand-baptiste.firebaseio.com",
    projectId: "correctedbrand-baptiste",
    storageBucket: "correctedbrand-baptiste.appspot.com",
    messagingSenderId: "332771326335",
    appId: "1:332771326335:web:031bfd23ac72a7d263024a",
    measurementId: "G-9SBQ4TJN1J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  var db=firebase.firestore();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     window.alert('Login successfully');
    } else {
     window.alert('failed');
    }
  })
  document.getElementById('signinCntn'). addEventListener('submit', submitSigninForm);
  function submitSigninForm(e){
      e.preventDefault()
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passLogin').value;
    console.log(password)
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: "+ errorMessage)
      });
}