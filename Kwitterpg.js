const firebaseConfig = {
    apiKey: "AIzaSyAXgYGwQ7vOVYlC5RGTGKd_RZ5gtZcDUWo",
    authDomain: "chat-box-1a036.firebaseapp.com",
    databaseURL: "https://chat-box-1a036-default-rtdb.firebaseio.com",
    projectId: "chat-box-1a036",
    storageBucket: "chat-box-1a036.appspot.com",
    messagingSenderId: "585248722170",
    appId: "1:585248722170:web:d47ec7e9cc612882560d43"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Room Name");
  user_name = localStorage.getItem("User Name");

  function send() {
    msg = document.getElementById("message").value;
    console.log("Message "+msg);
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0,
    });
    document.getElementById("message").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
   firebase_message_id = childKey;
   message_data = childData;
//Start code

//End code
} });  }); }
getData();

function logout(){
    localStorage.removeItem("user name");
    localStorage.removeItem("Room Name");
    window.location="index.html";
  }