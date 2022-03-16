window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myForm");
  form.onsubmit = validateForm;
}

function validateForm() {
    var lastname = document.forms["myForm"]["lastname"];
    var gender = document.forms["myForm"]["gender"];
	var birthday = document.forms["myForm"]["birthday"];
    var email = document.forms["myForm"]["email"];
    var username = document.forms["myForm"]["username"];
    var pass1 = document.forms["myForm"]["password"];
    var pass2 = document.forms["myForm"]["repassword"];
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    pass1=pass1.value;
    pass2=pass2.value;
    
    if(lastname.value=="")
    {
      alert("Fill lastname");
      document.getElementById("errormsg").innerHTML = "Please fill Lastname";
      return false;
    }
    else if(gender.value=="")
    {
      alert("Fill gender");
      document.getElementById("errormsg").innerHTML = "Please fill Gender";
      return false;
    }
    else if(birthday.value=="")
    {
      alert("Fill birthday");
      document.getElementById("errormsg").innerHTML = "Please fill Birtday";
      return false;
    }
    else if(email.value=="")
    {
      alert("Fill email");
      document.getElementById("errormsg").innerHTML = "Please fill Email";
      return false;
    }
    else if(username.value=="")
    {
      alert("Fill username");
      document.getElementById("errormsg").innerHTML = "Please fill Username";
      return false;
    }
    else if (pass1!=pass2) {
        alert("Retype Password is wrong");
        return false;
      }
    else if (pass1==pass2){
      alert("Success");
    }
    
    
}