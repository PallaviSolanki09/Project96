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

user_name=localStorage.getItem("User Name");
console.log(user_name);
document.getElementById("welcome").innerHTML="Welcome "+user_name+"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  console.log(room_name);
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
  console.log(room_name);
  localStorage.setItem("Room Name",room_name);
  window.location="kwitterpg.html";
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
     row="<div id='"+Room_names+"' class='room_name' onclick='redirecttoRoomname(this.id)'>#"+Room_names+"</div><hr style='background-color:black'>";
     document.getElementById("output").innerHTML+=row;

//End code
});});}
getData();

function redirecttoRoomname(Name){
  console.log(Name);   
  localStorage.setItem("Room Name",Name);
  window.location="kwitterpg.html";
}

function logout(){
  localStorage.removeItem("user name");
  localStorage.removeItem("Room Name");
  window.location="index.html";
}



  
  