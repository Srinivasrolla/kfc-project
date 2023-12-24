const username_data=[];
const password_data=[];

// Signup form Validations
function funsignup(){
    if (username_data.includes(document.getElementById('rusername').value)){
        alert('This username already Existed. Please login to your account....')
        return false
    }
    else if (document.getElementById('rusername').value==='' || document.getElementById('rpassword').value==='' || document.getElementById('againrpassword').value===''){
            document.getElementById('error-message').innerHTML='All fields are mandatory'
            document.getElementById('error-message').style.color='red'
            return false
            
    }
    else if (document.getElementById('rpassword').value!==document.getElementById('againrpassword').value){
        document.getElementById('error-message').innerHTML='Both passwords are not matching'
        document.getElementById('error-message').style.color='red'
        return false
    }
    else{
        username_data.push(document.getElementById('rusername').value)
        password_data.push(document.getAnimations('rpassword').value)
        alert('Your SignUP is Successfully....\n and Please login')
        return true
    }
}

//login form validations
function funlogin(){
    console.log(username_data)
    console.log(password_data)
    if (document.getElementById('lusername').value==='' || document.getElementById('lpassword').value===''){
        document.getElementById('lerror').innerHTML='All fields are mandatory'
        document.getElementById('lerror').style.color='red'
        return false
    }
    /*else if (username_data.includes(document.getElementById('lusername').value) && password_data.includes(document.getElementById('lpassword').value)){
        alert('Your Login is Successfully')
        return true
    }*/
    else{
        //document.getElementById('lerror').innerHTML='Invalid username or password'
        //document.getElementById('lerror').style.color='red'
        alert('Your Login is Successfully')
        return true
    }
}


// Simulated array to store registered users
/*let users = [];

function isExistingUser(username) {
    return users.some(user => user.username === username);
  }

  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    const existingUser = users.find(user => user.username === username);
  
    if (!existingUser) {
      alert("User does not exist. Please register.");
    } else if (existingUser.password !== password) {
      alert("Incorrect password. Please try again.");
    } else {
      alert("Login successful!");
      // Actions for a logged-in user (e.g., redirecting to a dashboard)
    }
  });

  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const regUsername = document.getElementById("regUsername").value;
    const regEmail = document.getElementById("regEmail").value;
    const regPassword = document.getElementById("regPassword").value;
  
    if (isExistingUser(regUsername)) {
      alert("Username already exists. Please choose another username.");
    } else {
      users.push({ username: regUsername, email: regEmail, password: regPassword });
      alert("Registration successful!");
      // Simulating user registration by adding to the users array
      // In a real app, this data would be sent to a server
    }
  });*/