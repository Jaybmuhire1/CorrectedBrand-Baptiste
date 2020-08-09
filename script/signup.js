



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
document.getElementById('signupCntn'). addEventListener('submit', submitSignupForm);
function submitSignupForm(e) {
	e.preventDefault();
	var email=myInput('email');
    var password=myInput('pass');
    
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred.user)
        window.alert('user successfully created');
      })
	
}


function myInput(id) {
	return document.getElementById(id).value;
}
