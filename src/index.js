import "./styles.css";

function handleClose() {
  console.log("close button clicked!!");
  document.getElementById("toast").innerHTML = ``;
}

function flash(text, obj) {
  console.log("show flash clicked!!");
  document.getElementById("toast").innerHTML += `
  <div class="toastDiv" style="background-color: ${obj.backgroundColor};">
  <div class="toastCloseBtnDiv">
  <button class="btn">x</button>
  </div>
  <div class="toastContent" style="color: ${obj.fontColor}">
  <h3>${(obj && obj.title && obj.title) || "Sample Flash Message Title"}</h3>
  <p>${text}</p>
  </div>
  </div>`;
  var closeButtons = document.getElementsByClassName("btn");
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", handleClose);
  }
  obj && obj.autohide && setTimeout(handleClose, obj.timeout);
}

document.getElementById("showFlashBtn").addEventListener("click", () =>
  flash("Sample Flash Message Text", {
    title: "Flash message Title Baby!!",
    backgroundColor: "rgb(92, 209, 180)",
    fontColor: "white",
    autohide: true,
    timeout: 7000
  })
);

// multiple cards on clicks
// disappearing after 5 seconds
