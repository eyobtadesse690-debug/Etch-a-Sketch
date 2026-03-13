const container=document.querySelector("#container");
let changeButton=document.querySelector('#change');
let size=16
function gridSize(size){
container.innerHTML="";
let totalCells=size*size;
for (i=0;i<totalCells;i++){
const newDiv=document.createElement('div');
 newDiv.classList.add('bip');
newDiv.style.height=`${960 / size}px`;
newDiv.style.width=`${960 / size}px`;

newDiv.addEventListener('mouseenter',()=>{
  newDiv.style.backgroundColor="black";
});
  container.appendChild(newDiv);
}
}
changeButton.addEventListener('click',()=>{
  let input=prompt("Enter size below 100");
  if (input>100){
    alert('Wrong value')
  }
  else{
    gridSize(input)
  }
});
gridSize(16)
