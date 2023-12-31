function signIn(e) {
    e.preventDefault()
    var userId = document.getElementById("fName").value;
    var pass = document.getElementById("passward").value;

    var users = localStorage.getItem("allusers");
    users = JSON.parse(users);
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        
        // console.log(element);

        if(element.email == userId){
               alert("successfully login");

       
        }
    }
    
       alert("Wrong id and passward");
    
    // if (userId.length > 0 && pass.length > 0) {
    //     localStorage.setItem("userId", userId)
    //     localStorage.setItem("pass", pass)

    //     // window.location.href = "C:/Users/OraSoft/Desktop/Login-Signup-main/userdata/userdata.html";
    //     location.replace("C:/Users/OraSoft/Desktop/Login-Signup-main/userdata/userdata.html");
    //     var users = localStorage.getItem('userId')
    //     document.write(users);
    //     document.write(pass);


    // }


    // console.log(userId.length);
    // console.log(pass.length);
}

//constructor
let UserData = function (userName, lastName, email, passward) {
    this.userName = userName
    this.lastName = lastName
    this.email = email
    this.passward = passward
}

function signUp(e) {
    e.preventDefault()
    var userName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var email = document.getElementById("emailId").value;
    var passward = document.getElementById("passward").value;


    //constructor
    var data = new UserData(userName, lastName, email, passward)
    console.log(data);

    let obj = {
        email: email,
        passward: passward
    }

    var users = localStorage.getItem("allusers");
    console.log(users)

    if (users === null) {
        users = []
    } else {
        users = JSON.parse(users)
    }
    users.push(obj)
    console.log(users)

    let jsonData = JSON.stringify(users)
    localStorage.setItem("allusers", jsonData)
    location.replace("C:/Users/OraSoft/Desktop/Login-Signup-main/index.html");






    // console.log(userName);
    // console.log(lastName);
    // console.log(email);
    // console.log(passward);
}