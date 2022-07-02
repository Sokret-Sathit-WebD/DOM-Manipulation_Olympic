let newHeader = document.createElement("header")
    newHeader.innerHTML = "<p><h1>JavaScript Made This!!</h1><br><h3><span style='color: gold;'>[Sokret Sathit] </span> wrote the JavaScript!</h3></p>";
    document.body.prepend(newHeader)

newHeader.style.textAlign = "center";
newHeader.style.fontFamily = "fantasy";

const newMemoOne = document.getElementById("memoOne")
    newMemoOne.textContent = "Are you the Doom Slayer?"

const newMemoTwo = document.getElementById("memoTwo")
    newMemoTwo.textContent = "Hmm"

const newMemoThree = document.getElementById("memoThree")
    newMemoThree.textContent = "Can you help me slay demons?"

const newMemoFour = document.getElementById("memoFour")
    newMemoFour.textContent = "Hmmm"

const newNewText = document.getElementById("newText")
    

const clearButtonPush = document.getElementById("clearButton")

clearButtonPush.addEventListener('click', function () {
    newMemoOne.remove();
    newMemoTwo.remove();
    newMemoThree.remove();
    newMemoFour.remove();
    newNewText.remove();
 });

 let dropDownSelection = document.getElementById("themeDropDown")
    let themeOneSelect = document.getElementById("themeOne") //red/green
    let themeTwoSelect = document.getElementById("themeTwo") // black/gold
    console.log ("theme changed");

dropDownSelection.addEventListener('change', function (e) {
    var value = e.target.value;
    let messageLeft = document.querySelectorAll(".message.left")
    let messageRight = document.querySelectorAll(".message.right")

    if (value === "themeOne"){
        messageLeft.forEach(element => {
            element.style.backgroundColor = "red";
            element.style.color = "black";
           
        }) 
        messageRight.forEach(element => {
         element.style.backgroundColor = "green";   
        })
        
    } else if (value === "themeTwo"){
        messageLeft.forEach(element => {
            element.style.backgroundColor = "black";
            element.style.color = "purple";
            
        })
        messageRight.forEach(element => {
            element.style.backgroundColor = "gold";
            element.style.color = "red"; 
        })
        
    }
    
}) 
let pushSendIt = document.getElementById("sendIt");
let typeMessage = document.getElementById("inputIt");
let sendNewText = document.getElementById("newText");
let form = document.getElementById("form");

form.addEventListener('submit', function(e) {
    e.preventDefault()   
    let newMessage = document.createElement("div")
    newMessage.className= "message left"
    console.log(typeMessage.value)
    newMessage.textContent = typeMessage.value
    sendNewText.appendChild(newMessage)  
    typeMessage.value = '';
})




