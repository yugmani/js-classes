function writeCookie() {
  if(document.myForm.customer.value == ""){
    alert("Enter the value!");
    return;
  }

  cookievalue = escape(document.myForm.customer.value) + ";";
  document.cookie = "name=" + cookievalue;
  alert("Setting Cookies: " + "name=" + cookievalue);  
}