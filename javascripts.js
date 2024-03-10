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
function darken(s, d, e, f){
  let end1 = s.indexOf(',');
  let end2 = s.slice(end1+1).indexOf(',')+end1;
  let end3 = s.slice(end2+1).indexOf(')')+end2;
  let a = Number(s.slice(4, end1));
  let b = Number(s.slice(end1+1, end2+1));
  let c = Number(s.slice(end2+2, end3+1));
  return "rgb(" +(a+d)/2 +"," +(b+e)/2 +"," +(e+f)/2 +")";
}
function addColor(){
  let a = Math.random()*254+1;
  let b = Math.random()*254+1;
  let c = Math.random()*254+1;
  return "rgb(" +a +"," +b +"," +c +")";
}
// draw function
function changingColor(e, color, r, b, g){
  if (e.target.className == "colored")
  {
    e.target.style.backgroundColor = darken(e.target.style.backgroundColor, r, b, g);
  }
  else if (e.target.className == "column")
  {
    e.target.className = "colored";
    e.target.style.backgroundColor = color;
  }
}
window.addEventListener('mousedown', function(e){
  let color = addColor()
  let end1 = color.indexOf(',');
  let end2 = color.slice(end1+1).indexOf(',')+end1;
  let end3 = color.slice(end2+1).indexOf(')')+end2;
  let r = Number(color.slice(4, end1));
  let b = Number(color.slice(end1+1, end2+1));
  let g = Number(color.slice(end2+2, end3+1));
  changingColor(e, color, r, b, g);
  this.window.addEventListener('mouseover', draw = function(e){
    changingColor(e, color, r, b, g);
  })
})
window.addEventListener('mouseup', function(){
  this.window.removeEventListener('mouseover', draw);
})