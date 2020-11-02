const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer")

console.log(emojiContainer)

for (let i=0; i<myEmojis.length; i++) {
    
    const emoji = document.createElement("span")
    emoji.textContent = myEmojis[i]
    console.log(emoji)
    emojiContainer.append(emoji)
}

emojiContainer.classList.add("magenta")

