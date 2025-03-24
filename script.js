/* Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.*/

//set up interfaces for two people
//create a way for the computer to know who won (if, else if, else?)
//9 box grid, click each square, lisening events will display 'X' and 'O'

document.querySelector('.box1').addEventListener('click',(playerOneBox1))
document.querySelector('.box2').addEventListener('click',(playerOneBox2))
document.querySelector('.box3').addEventListener('click',(playerOneBox3))
document.querySelector('.box4').addEventListener('click',(playerOneBox4))
document.querySelector('.box5').addEventListener('click',(playerOneBox5))
document.querySelector('.box6').addEventListener('click',(playerOneBox6))
document.querySelector('.box7').addEventListener('click',(playerOneBox7))
document.querySelector('.box8').addEventListener('click',(playerOneBox8))
document.querySelector('.box9').addEventListener('click',(playerOneBox9))

function playerOneBox1() {
    document.querySelector('.box1').innerHTML='X'
}

function playerOneBox2() {
    document.querySelector('.box2').innerHTML='X'
}

function playerOneBox3() {
    document.querySelector('.box3').innerHTML='X'
}

function playerOneBox4() {
    document.querySelector('.box4').innerHTML='X'
}

function playerOneBox5() {
    document.querySelector('.box5').innerHTML='X'
}

function playerOneBox6() {
    document.querySelector('.box6').innerHTML='X'
}

function playerOneBox7() {
    document.querySelector('.box7').innerHTML='X'
}

function playerOneBox8() {
    document.querySelector('.box8').innerHTML='X'
}

function playerOneBox9() {
    document.querySelector('.box9').innerHTML='X'
}

document.querySelector('.box1').addEventListener('click',(playerTwoBox1))
document.querySelector('.box2').addEventListener('click',(playerTwoBox2))
document.querySelector('.box3').addEventListener('click',(playerTwoBox3))
document.querySelector('.box4').addEventListener('click',(playerTwoBox4))
document.querySelector('.box5').addEventListener('click',(playerTwoBox5))
document.querySelector('.box6').addEventListener('click',(playerTwoBox6))
document.querySelector('.box7').addEventListener('click',(playerTwoBox7))
document.querySelector('.box8').addEventListener('click',(playerTwoBox8))
document.querySelector('.box9').addEventListener('click',(playerTwoBox9))

function playerTwoBox1() {
    document.querySelector('.box1').innerHTML='O'
}

function playerTwoBox2() {
    document.querySelector('.box2').innerHTML='O'
}

function playerTwoBox3() {
    document.querySelector('.box3').innerHTML='O'
}

function playerTwoBox4() {
    document.querySelector('.box4').innerHTML='O'
}

function playerTwoBox5() {
    document.querySelector('.box5').innerHTML='O'
}

function playerTwoBox6() {
    document.querySelector('.box6').innerHTML='O'
}

function playerTwoBox7() {
    document.querySelector('.box7').innerHTML='O'
}

function playerTwoBox8() {
    document.querySelector('.box8').innerHTML='O'
}

function playerTwoBox9() {
    document.querySelector('.box9').innerHTML='O'
}

document.querySelector('button').addEventListener('click',(clearBoard))
function clearBoard(){
    document.querySelector('.box1').innerHTML=''
    document.querySelector('.box2').innerHTML=''
    document.querySelector('.box3').innerHTML=''
    document.querySelector('.box4').innerHTML=''
    document.querySelector('.box5').innerHTML=''
    document.querySelector('.box6').innerHTML=''
    document.querySelector('.box7').innerHTML=''
    document.querySelector('.box8').innerHTML=''
    document.querySelector('.box9').innerHTML=''
}


function nextTurn(){
	if (playerOneBox1 == 'X' ){
        
	}
}