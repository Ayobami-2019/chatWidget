const showChats= document.getElementById("show");
const chats=document.getElementById("chats");
const userInput=document.getElementById("userInput");
const getImage=document.getElementById("showIMG");
const chatDiv=document.getElementById("chats-widget");
const sentMessage=document.getElementsByClassName("outgoing-mesasges");
const receivedMessage=document.getElementsByClassName("incoming-mesasges");
const botImg=document.getElementById("botImg")


//A function that show or hide the chat widget and rotate the arrow when the button is clicked
const showHide = () =>{
    // changeButton()
    if (chats.style.display=== "block"){
        chats.style.display="none";
        getImage.style.rotate="0deg"
    } else{
        chats.style.display = "block";
        getImage.style.rotate="180deg"
    }
    
}
showChats.addEventListener("click", showHide)

//A funtion that pop up what is in Array
const userPopUp =() => {
    if(count<userMessages.length){
        userInput.value=userMessages[count];
    }
    else{
        userInput.value=userInput.value
    }
    
}
userInput.addEventListener("focus", userPopUp)

//A fuction that handles the chat
const handleChat =() => {
  handleUserChat(userInput.value, "outgoing-messages");
  setTimeout(() => {
    handleBotChat(aiMessages[count], "incoming-messages");
  }, 3000) 
    count++
}
userInput.addEventListener("keydown", (e) =>{ 
    // A function that allows enter to send
    if (e.keyCode === 13){
        e.preventDefault()
        handleChat();
        userInput.value=""
    }    
})
//A fuction that handles the User messages
let userMessages=  ["Can I talk to someone please?", "Oh finally a human, wohoo!"]
count=0
const handleUserChat=(message, className) =>{
    const wrapper = document.createElement("div");
    const newItem=document.createElement("p");
    wrapper.classList.add("newItem", className);
    newItem.textContent = message;
    wrapper.appendChild(newItem);
    // if(new Date().getMinutes()<1){
    //     const time = document.createElement("p");
    //     wrapper.classList.add("time")
    //     time.textContent = "Just now・Not seen yet"
    //     wrapper.appendChild(time);
    // }
    chatDiv.appendChild(wrapper);
}

//A fuction that handles the bot messages
let aiMessages = ["No problem! Let me connect you to a customer support agent.", "Hi there! I’m Ayobami. How can I help you?", "Ah, I see. How can I assist you today?", "I'm here to help! What do you need?"];

const handleBotChat=(message, className) =>{ 
    const newItem = document.createElement("p");
    newItem.classList.add("message");
    const wrapper = document.createElement("div");
    const human= document.createElement("div");
    human.classList.add("human");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", "images/bot.png");
    const humanImg=document.createElement("img");
    humanImg.setAttribute("src", "images/lady.png");
    wrapper.classList.add("incomingItem", className);
    newItem.textContent = message
    if(aiMessages[count]===0){
        human.appendChild(newImg);
        human.appendChild(newItem);
        wrapper.appendChild(human);
    }else{
        human.appendChild(humanImg);
        human.appendChild(newItem);
        const time = document.createElement("p");
        // wrapper.classList.add("time", className);
        time.textContent = "Hannah・Just now";
        time.classList.add("sender");
        wrapper.appendChild(human);
        wrapper.appendChild(time);
    }
    
    // if(aiMessages[count]===)
    // if(new Date().getMinutes()<1){
    //    
    // }
    
    chatDiv.appendChild(wrapper);
}
// function getTime(){
//     let today = new Date();
//     minutes = today.getMinutes();
// }
    // if (hours < 10){
    //     hours= "0" + hours
    // }
    // if (minutes< 10){
    //     minutes="0" + minutes;
    // }
    // let time = hours+ ":" + minutes;
    // return time;

