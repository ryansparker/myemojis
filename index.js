const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

console.log(emojiContainer)


function renderEmojis() {
    
    for (let i=0; i<myEmojis.length; i++) {
        const emoji = document.createElement("span")
        emoji.textContent = myEmojis[i]
        console.log(emoji)
        emojiContainer.append(emoji)
    }

}
renderEmojis()

// emojiContainer.classList.add("magenta")


pushBtn.addEventListener('click', function() {
   
    //input value
    let emojiInput = document.getElementById("emoji-input")

   if (emojiInput.value) {
       myEmojis.push(emojiInput.value)
       emojiInput.value =""
       emojiContainer.innerHTML = ""
       console.log(myEmojis)
       renderEmojis()
   }
})

unshiftBtn.addEventListener('click', function() {

    //input value  
    let emojiInput = document.getElementById("emoji-input")

   if (emojiInput.value) {
       myEmojis.unshift(emojiInput.value)
       emojiInput.value =""
       emojiContainer.innerHTML = ""
       console.log(myEmojis)
       renderEmojis()
   }
})

shiftBtn.addEventListener('click', function() {

    //input value  
    let emojiInput = document.getElementById("emoji-input")

       myEmojis.shift(emojiInput.value)
       emojiInput.value =""
       emojiContainer.innerHTML = ""
       console.log(myEmojis)
       renderEmojis()

})


popBtn.addEventListener('click', function() {

    //input value  
    let emojiInput = document.getElementById("emoji-input")

       myEmojis.pop(emojiInput.value)
       emojiInput.value =""
       emojiContainer.innerHTML = ""
       console.log(myEmojis)
       renderEmojis()

})


