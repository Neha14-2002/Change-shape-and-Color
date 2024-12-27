const changeColor = document.querySelector('#changeColor');
const changeShape = document.querySelector('#changeShape');
const shapebg = document.querySelector('.shapes');
const shapeIcons = document.querySelector('.shapeIcons');
 

changeColor.addEventListener('click', ()=>{
shapebg.style.backgroundColor = changingColor();
});

let letters = [1,2,3,4,5,6,7,8,9,0, 'A','B','C','D','E','F'];
function changingColor(){
    let color = '#';

    for(let i = 0; i<=5;i++){
        let randomNumber = Math.random() * 10;
        color += letters[Math.floor(randomNumber)];
    }

    return color;
}

changeShape.addEventListener('click', changingShape);
 
function changingShape(){
    let shapeNames = ['square','round','diamond','triangle','arrow','frame','star','cross'];
    let randomIdx = Math.floor(Math.random()* shapeNames.length);
    console.log(shapeIcons);
    shapeIcons.id = shapeNames[randomIdx];
}