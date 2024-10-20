function checkTrafficLight() {
  const lightColor = document.getElementById("lightColor").value.trim();
  const message = document.getElementById("message");

  if (lightColor === "red") {
      message.innerHTML = "Must Stop";
  } else if (lightColor === "yellow") {
      message.innerHTML = "Ready to move";
  } else if (lightColor === "green") {
      message.innerHTML = "Move Now!";
  } else {
      message.innerHTML = "Enter a Valid traffic color";
  }
}
