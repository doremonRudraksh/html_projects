const firebaseConfig = {
    apiKey: "AIzaSyDdryZ-EhscfZtnHsmwjVHqQ1OiRzxStgg",
    authDomain: "dubaincarshowroom.firebaseapp.com",
    projectId: "dubaincarshowroom",
    storageBucket: "dubaincarshowroom.appspot.com",
    messagingSenderId: "642823362772",
    appId: "1:642823362772:web:7583a16ed3f0cc7afe4341",
    measurementId: "G-C427S08PR3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  //document.getElementById("user_name").innerHTML = "Welcome to Kwitter" + "-" + user_name + "!";//
  document.getElementById("user_name").innerHTML = "Welcome" + " - " + user_name + "!"
  
