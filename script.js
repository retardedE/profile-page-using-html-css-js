'use strict'
const postBox=document.querySelectorAll('.postBox')
const clickedPost=document.querySelectorAll('.clickedPost')
const closePost=document.querySelectorAll('.closePost')
let isOpen=false
let arrayBoxes= Array.from(postBox)
let arrayBoxesClicked= Array.from(clickedPost)
let arrayClosePost= Array.from(closePost)
for(let i=0; i<arrayBoxes.length;i++){
    arrayBoxes[i].addEventListener('click', ()=>{
        arrayBoxesClicked[i].classList.toggle('nonActive')
    })
}