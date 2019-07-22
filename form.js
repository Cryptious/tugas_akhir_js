function buat_login() {
  var elem = document.getElementById("x");
  elem.parentElement.removeChild(elem);


  var p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "Silahkan Login";
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  // form
  var form = document.createElement("FORM");
  element.appendChild(form);

  // Nama User
  var label = document.createElement("label");
  label.innerHTML = "Nama User";
  form.appendChild(label);

  var nUser = document.createElement("input");
  nUser.type = "text";
  nUser.name = "nUser";
  nUser.placeholder = "Nama User ..";
  nUser.className="form_login";
  form.appendChild(nUser);

  // Nope
  var label = document.createElement("label");
  label.innerHTML = "nope";
  form.appendChild(label);

  var nope = document.createElement("input");
  nope.type = "text";
  nope.name = "nope";
  nope.placeholder = "Nomor Handphone ..";
  nope.className="form_login";
  form.appendChild(nope);

  // username
  var label = document.createElement("label");
  label.innerHTML = "Username";
  form.appendChild(label);

  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.placeholder = "Username atau email ..";
  input_username.className="form_login";
  form.appendChild(input_username);

  // password
  var label = document.createElement("label");
  label.innerHTML = "Password";
  form.appendChild(label);

  var input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.placeholder = "Password ..";
  input_password.className="form_login";
  form.appendChild(input_password);

  var submit = document.createElement("input");
  submit.type = "submit";
  submit.className="tombol_login";
  form.appendChild(submit);
}
