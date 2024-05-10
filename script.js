document.getElementById("container").addEventListener("mouseover", function(event){
    console.log("hovered over outer div")
    event.stopPropagation
})

document.getElementById("outerDiv").addEventListener("click", function(event){
    alert("you clicked the outer div")
    event.stopPropagation();
})

document.getElementById("midDiv").addEventListener("click", function(event){
    alert("you clicked the midDiv")
    event.stopPropagation();
})

document.getElementById("innerDiv").addEventListener("click", function(){
    alert("Hi, I am Elize Lutus")
})