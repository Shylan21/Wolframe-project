function follower() {
  let question = prompt("Hey, do you follow me on Twitch?");
  question = question.toLowerCase();
  question = question.trim();
  if (question === "yes") {
    alert("Great! Check out my merch on the link below!");
  } else {
    alert(
      "What are you waiting for? Click the button below to become part of the pack!🐺"
    );
  }
}
follower();

function greetings() {
  let name = prompt("What's your name?");
  let heading = document.querySelector("h2");
  heading.innerHTML = "Welcome to the pack, " + name + "!";
}

greetings();

function follow() {
  alert(
    "Thanks for following me, " + name + "stay tuned for new live streams!"
  );
  let button = document.querySelector("button");
}

let followButton = document.querySelector("button");
followButton.addEventListener("click", follow);
