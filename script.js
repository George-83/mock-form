function formValidation() {
    let firstName = document.forms["Form"]["firstName"].value;
    let lastName = document.forms["Form"]["lastName"].value;
    let email = document.forms["Form"]["email"].value;
    let password = document.forms["Form"]["password"].value;
    let confirmPassword = document.forms["Form"]["confirmPassword"].value;
  
    if (firstName === "") {
      alert("First name is empty");
      return false;
    }
    if (!/^[a-zA-Z]+$/.test(firstName)) {
      alert("Only alphabetical characters allowed in first name");
      return false;
    }
  
    if (lastName === "") {
      alert("Last name is empty");
      return false;
    }
    if (!/^[a-zA-Z]+$/.test(lastName)) {
      alert("Only alphabetical characters allowed in last name");
      return false;
    }
  
    if (email === "") {
      alert("Email is empty");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter valid email address");
      return false;
    }

    if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(password)) {
      alert("Please enter only alphanumeric characters and symbols");
      return false;
    }
  
    if (confirmPassword === "") {
      alert("Please enter your password again");
      return false;
    }
    if (confirmPassword !== password) {
      alert("There is no match with your password");
      return false;
    }

    let submitted = document.createElement("p");
    submitted.className = "success";
    submitted.textContent = "Form has been sent successfully!";
    document.body.appendChild(submitted);
    setTimeout(function() {
      submitted.remove();
    }, 5000);
    return false;
  };