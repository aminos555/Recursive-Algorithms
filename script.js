



const container1 = document.getElementById("email")

const container2 = document.getElementById("password")

const btn = document.getElementsByTagName("button")

const ShowPass = document.getElementById("Show_pass")

const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



function Verifmail(email) {
    if (email.includes("@") ) {
        alert("email is Valid")
        return true ;
         

    }
    else{
        alert("email is not Valid")
        return false;
    }
    
}





function VerifPassword(password) {
    
    

    if (passwordRegex.test(password)) {
        alert("Password is Valid");
    } else {
        alert("Password must be at least 8 characters, Contain at least one number, One Uppercase letter, One special Symbol .");
    }
}



function ShowThePass(pass) {

    if (pass) {
        return container2.type = "text"
        
    } else {
        return container2.type = "password"
    }
}

ShowPass.addEventListener("click", ()=> {
    ShowThePass(ShowPass.checked); 
});



btn[0].addEventListener("click", (event) => {
    event.preventDefault();

    const email = container1.value; 
    if (!Verifmail (email)) {
        return
    } 
    
    const password = container2.value; 
    VerifPassword(password);

    

});







