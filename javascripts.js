const question = document.querySelector(".size-input");
const inputBox = document.querySelector("#user");
const body = document.querySelector('body');
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
  const time = 1000/(n*n);
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
function fuse(s, rgb){
  const end1 = s.indexOf(',');
  const end2 = s.slice(end1+1).indexOf(',')+end1;
  const end3 = s.slice(end2+1).indexOf(')')+end2;
  const r = Number(s.slice(4, end1));
  const b = Number(s.slice(end1+1, end2+1));
  const g = Number(s.slice(end2+2, end3+1));
  return "rgb(" +(r+rgb[0])/2 +"," +(b+rgb[1])/2 +"," +(g+rgb[2])/2 +")";
}
function addColor(){
  //wont random to white
  const r = Math.random()*254+1;
  const b = Math.random()*254+1;
  const g = Math.random()*254+1;
  return "rgb(" +r +"," +b +"," +g +")";
}
// draw function
function changingColor(e, color, rgb){
  const square = e.target;
  const background = square.style;
  if (square.className == "colored")
  {
    background.backgroundColor = fuse(background.backgroundColor, rgb);
  }
  else if (square.className == "column")
  {
    square.className = "colored";
    background.backgroundColor = color;
  }
}
window.addEventListener('mousedown', function(e){
  const color = addColor()
  const end1 = color.indexOf(',');
  const end2 = color.slice(end1+1).indexOf(',')+end1;
  const end3 = color.slice(end2+1).indexOf(')')+end2;
  const r = Number(color.slice(4, end1));
  const b = Number(color.slice(end1+1, end2+1));
  const g = Number(color.slice(end2+2, end3+1));
  const rgb = [r, g, b];
  changingColor(e, color, rgb);
  this.window.addEventListener('mouseover', draw = function(e){
    changingColor(e, color, rgb);
  })
})
window.addEventListener('mouseup', function(){
  this.window.removeEventListener('mouseover', draw);
})