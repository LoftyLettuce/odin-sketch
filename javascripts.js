let question = document.querySelector(".size-input");
let inputBox = document.querySelector("#user");
let body = document.querySelector('body');
inputBox.addEventListener("keydown", function(e){
  let opacity = 1;
  if (e.key == "Enter" && isNaN(e.target.value) == 0 && Number(e.target.value) != 0)
  {
    let opacing = setInterval(function()
    {
      inputBox.style.opacity = opacity;
      question.style.opacity = opacity;
      if (opacity <= 0)
      {
        console.log("stop");
        clearInterval(opacing);
        createDivs();
        inputBox.remove();
        question.remove();
      }
      opacity -= 0.3;
    }, 100)
  }
});
function createDivs(){
  let board = document.createElement('div');
  board.className = "board";
  body.appendChild(board);
}