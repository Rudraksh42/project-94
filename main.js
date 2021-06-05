 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBRNDY_8edz2_FXwgU_LIE0ZH27ugvjyf4",
  authDomain: "glitter-1ad75.firebaseapp.com",
  databaseURL: "https://glitter-1ad75-default-rtdb.firebaseio.com",
  projectId: "glitter-1ad75",
  storageBucket: "glitter-1ad75.appspot.com",
  messagingSenderId: "160517487329",
  appId: "1:160517487329:web:72fd821610d069f70715a0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  function addUser(){
  var username;
  username=document.getElementById("user_name").value;
  localStorage.setItem("user_name", username);
  window.location = "glitter_room.html";
  firebase.database().ref("/").child(username).update({
      purpose:"addinguser"
  });
  }