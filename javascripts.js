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
        inputBox.remove();
        question.remove();
        createDivs(Number(e.target.value));
      }
      opacity -= 0.3;
    }, 100)
  }
});
function createDivs(n){
  let board = document.createElement('div');
  board.className = "board";
  body.appendChild(board);
  console.log(typeof(board.offsetHeight));
  for (let i = 0; i < n; i++)
  {
    let row = document.createElement('div');
    row.className = "row";
    row.style.height = board.offsetHeight/n + "vw";
    for (let u = 0; u < n; u++)
    {
      let column = document.createElement('div');
      column.className = "column";
      column.style.height = "100%";
      column.style.width = board.offsetWidth/n + "vw";
      row.appendChild(column);
    }
    board.appendChild(row);
  }
}