data = [
  { userId: 1, username: "Sam", password: "123456" },
  { userId: 2, username: "Dean", password: "654321" },
];
userId = 0;

document.querySelector("button").addEventListener("click", function (e) {
  // prevent page from refreshing
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  //
  data.forEach(function (user) {
    if (username === user.username && password == user.password) {
      return (document.querySelector(
        "form"
      ).innerHTML = `<h1>Sucessful Login!</h1>`);
    } else if (document.querySelector("#loginerror") !== null) {
      document.querySelector(
        "#loginerror"
      ).innerHTML = `Username/ Password Incorrect`;
    }
  });
  //
});
