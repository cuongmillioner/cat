function testForm()
{
  var frm = document.forms["signin"];
  //Test Email
  var emai = frm["email"].value;
  if(emai == "")
  {
    alert("Please enter your email!");
    return false;
  }
  //Test password
  var ps = frm["password"].value;
  if(ps == "")
  {
    alert("Please enter your password!");
    return false;
  }
  //Test Username
  var uname = frm["username"].value;
  if(uname == "")
  {
    alert("Please enter your username!");
    return false;
  }
  var x = /[A-Z]@[a-z]+{2,10}$/;
  uname = x;
  if(uname == false)
  {
    alert("Wrong!");
  }
  return true;
}
