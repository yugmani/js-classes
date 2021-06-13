function writeCookie() {
  if (document.myForm.customer.value == '') {
    alert('Enter the value!');
    return;
  }

  cookievalue = escape(document.myForm.customer.value) + ';';
  document.cookie = 'name=' + cookievalue;
  alert('Setting Cookies: ' + 'name=' + cookievalue);
}

function readCookie() {
  let allcookies = document.cookie;
  alert('All cookies:' + allcookies);

  //Get all the cookies pairs in an array
  const cookie_array = allcookies.split(';');

  //now takey key value pair out of this array
  for (let i = 0; i < cookie_array.length; i++) {
    name = cookie_array[i].split('=')[0];
    value = cookie_array[i].split('=')[1];
    alert('key is: ' + name + ' and value is: ' + value);
  }
}
