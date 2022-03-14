const hcodeinfo = [
    {
        fname: "Bob",
        lname: "Builder",
        username: "bbuilder",
        address: "1234 something place",
        password: "12345",
        gallons: 33 
    }
]

app.get('/api/loginfo', (req, res) => res.json(hcodeinfo));
function validateLogIn()
{
    var usernameLog = document.getElementById("username").value;
    var passwordLog = document.getElementById("password").value;

    if(hcodeinfo.find(o => o.username === usernameLog) && hcodeinfo.find(o => o.password === passwordLog))
    {
        window.open("home32.html");
        return false;
    }
    else
    {
        alert("Login Unsuccessful");
    }
}

app.get('/api/signupinfo', (req, res) => res.json(hcodeinfo));
function validateSignUp()
{
    //change this to more specific if statements
    var userInput = document.getElementById("username").value;
    var fnameInput = document.getElementById("fname").value;
    var lnameInput = document.getElementById("lname").value;
    var addressInput = document.getElementById("address").value;
    var passwordInput = document.getElementById("password").value;

    if(userInput && fnameInput && lnameInput && addressInput && passwordInput)
    {
        window.open("home32.html");
        return false;
    }
    else
    {
        alert("Register Unsuccessful: All fields required!!!");
    }
}

app.get('/api/setProfile', (req, res) => res.json(hcodeinfo));
function setProfile()
{
    //change this to more specific if statements
    var userInput = document.getElementById("username").value;
    var fnameInput = document.getElementById("fname").value;
    var lnameInput = document.getElementById("lname").value;
    var addressInput = document.getElementById("address").value;
    var passwordInput = document.getElementById("password").value;

    if(userInput && fnameInput && lnameInput && addressInput && passwordInput)
    {
        window.open("home32.html");
        return false;
    }
    else
    {
        alert("Register Unsuccessful: All fields required!!!");
    }
}

