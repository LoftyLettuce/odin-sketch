let question = document.querySelector(".size-input");
let inputBox = document.querySelector("#user");
let body = document.querySelector('body');
inputBox.addEventListener("keydown", function(e){
  let opacity = 1;
  if (e.key == "Enter" && isNaN(e.target.value) == 0 && Number(e.target.value) != 0)
  {
    // create fading effect
    let fading = setInterval(function()
    {
      inputBox.style.opacity = opacity;
      question.style.opacity = opacity;
      if (opacity <= 0)
      {
        clearInterval(fading);
        inputBox.remove();
        question.remove();
        createDivs(Number(e.target.value));
      }
      opacity -= 0.3;
    }, 100)
  }
});
function createDivs(n){
  //create a whole board in 1 sec
  let time = 1000/(n*n);
  let board = document.createElement('div');
  board.className = "board";
  body.appendChild(board);
  for (let i = 0; i < n; i++)
  {
    let row = document.createElement('div');
    row.className = "row";
    row.style.height = board.offsetHeight/n + "vw";
    board.appendChild(row);
    for (let u = 0; u < n; u++)
    {
      setTimeout(function(){
        let column = document.createElement('div');
        column.className = "column";
        column.style.width = "100%";
        row.appendChild(column);
        // so the squares will appear one by one
      }, time*(u+i*n));
    }
  }
}
function addColor(){
  let a = Math.random()*255;
  let b = Math.random()*255;
  let c = Math.random()*255;
  return "rgb(" +a +"," +b +"," +c +")";
}
// draw function
function changingColor(e){
  if (e.target.className == "column")
  {
    e.target.style.backgroundColor = addColor();
  }
}
window.addEventListener('mousedown', function(e){
  changingColor(e);
  this.window.addEventListener('mouseover', draw = function(e){
    changingColor(e);
  })
})
window.addEventListener('mouseup', function(){
  this.window.removeEventListener('mouseover', draw);
})