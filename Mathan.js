// Selecting popup box popup add popup overlay button 
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

// Change the display in block
addpopupbutton.addEventListener("click",function(){
  popupoverlay.style.display="block"
  popupbox.style.display="block"
})

// Select the cancel popup
var cancelpopup = document.querySelector(".cancel-popup")
cancelpopup.addEventListener("click",function(event){
  event.preventDefault()
  popupoverlay.style.display="none"
  popupbox.style.display="none"
})

// Select the container,add-title,book-title-input,book-author-input,Short-description-textarea
var container = document.querySelector(".container")
var addtitle = document.querySelector(".add-title")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var Shortdescriptiontextarea = document.getElementById("Short-description-textarea")

addtitle.addEventListener("click",function(event){
  event.preventDefault()
  var div = document.createElement("div")
  div.setAttribute("class","book-container")
  div.innerHTML =`<h2>${booktitleinput.value}</h2>
  <h3>${bookauthorinput.value}</h3>
  <p>${Shortdescriptiontextarea.value}</p>
  <button onclick="deletebook(event)">Delete</button>`
  container.append(div)
  popupoverlay.style.display="none"
  popupbox.style.display="none"
})

function deletebook(event)
{
  event.target.parentElement.remove()
}