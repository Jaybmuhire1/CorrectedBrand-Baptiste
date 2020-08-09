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

const postsList = document.getElementById('tableBody')
db.collection("posts").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    postsList.innerHTML += "<tr> <td>"+ doc.data().title +"</td> <td>"+ doc.data().content +"</td> <td class='all-btn' ><button  onclick='viewContent()' class='button button1'> "+ 'View' +" </button> <button  onclick='editContent()' class='button button2'>"+ 'Edit' +"</button> <button onclick='deletePost()' class='button button3'>"+ 'Delete' +"</button> </td> </tr>" 
   });
});