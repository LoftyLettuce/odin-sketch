let question = document.querySelector(".size-input");
let inputBox = document.querySelector("#user");
let opacity = 1;
inputBox.addEventListener("keydown", function(e){
  if (e.key == "Enter")
  {
    let opacing = setInterval(function()
    {
      inputBox.style.opacity = opacity;
      question.style.opacity = opacity;
      if (opacity <= 0)
      {
        console.log("stop");
        clearInterval(opacing);
        inputBox.remove();
        question.remove();
      }
      opacity -= 0.3;
    }, 200)
  }
});