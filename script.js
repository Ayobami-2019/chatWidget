const showChats= document.getElementById("show");
const chats=document.getElementById("chats");
const userInput=document.getElementById("userInput");
const getImage=document.getElementById("showIMG");
const chatDiv=document.getElementById("chats-widget");
const sentMessage=document.getElementsByClassName("outgoing-mesasges");
const receivedMessage=document.getElementsByClassName("incoming-mesasges");

//A function that rotate the arrow icon
const changeButton =() =>{
    if (chats.style.display=== "none"){
        getImage.style.rotate="180deg"
    } else if( chats.style.display=== "block"){
        getImage.style.rotate="0deg"
    }
} 
//A function that show or hide the chat widget when the button is clicked
const showHide = () =>{
    changeButton()
    if (chats.style.display=== "block"){
        chats.style.display="none";
    } else{
        chats.style.display = "block";
    }
    
}
showChats.addEventListener("click", showHide)

//A funtion that pop up what is in Array
// const userPopUp =() => {
//     let count=0;
//     let userMessages=  ["Can I talk to someone please?", "Oh finally a human, wohoo!", "whatsup"]
//     for (let userMessage of userMessages){
//         console.log(userMessage)
//         userInput.value=userMessage;
//     };
// }
// userInput.addEventListener("focus", userPopUp)

// A function that allows enter to send
userInput.addEventListener("keydown", (e) =>{ 
    if (e.keyCode === 13){
        e.preventDefault()
        handleChat();
        userInput.value=''
    }
})

//A fuction that handles the chat
const handleChat =() => {
    let userMessage = userInput.value;
    if(userMessage){
        handleUserChat (userMessage, "outgoing-messages");
        setTimeout(() => {
            handleBotChat("incoming-messages");
            }, 3000) 
    } 
    // else{
    //     handleUserChat (userMessage, "outgoing-messages");
    // }
}

//A fuction that handles the User messages
const handleUserChat=(userMessage, className) =>{
    const wrapper = document.createElement("div");
    const newItem=document.createElement("p");
    wrapper.classList.add("newItem", className);
    newItem.textContent = userMessage;
    
    wrapper.appendChild(newItem);
    if(new Date().getMinutes()<1){
        const time = document.createElement("p");
        wrapper.classList.add("time")
        time.textContent = "Just now・Not seen yet"
        wrapper.appendChild(time);
    }
    chatDiv.appendChild(wrapper);
}

//A fuction that handles the bot messages

const handleBotChat=(className) =>{
    const newItem = document.createElement("p");
    let aiMessages = ["No problem! Let me connect you to a customer support agent.", "Hi there! I’m Ayobami. How can I help you?", "Ah, I see. How can I assist you today?", "I'm here to help! What do you need?"];
    let count =2
    for (let aiMessage of aiMessages){
        newItem.textContent = aiMessages[count];
    };
    count++
    const wrapper = document.createElement("div");
    const newImg = document.createElement("img");
    wrapper.classList.add("newImg", className);
    wrapper.classList.add("newItem", className);
    newImg.innerHTML= `<img src="images/bot.png" alt="">`;
    
    
    wrapper.appendChild(newImg);
    wrapper.appendChild(newItem);
    if(new Date().getMinutes()<1){
        const time = document.createElement("p");
        wrapper.classList.add("time", className);
        time.textContent = "Hannah・Just now"
        wrapper.appendChild(time);
    }
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