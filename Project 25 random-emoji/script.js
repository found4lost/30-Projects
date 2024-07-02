const btnE1 = document.getElementById("btn");
const emojiNameE1 = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=29996768f2ccf83c3e6c03bf6f740de96c7c8270");

    data = await response.json()

    for (let i=0; i<1500;i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    };
}

getEmoji()

btnE1.addEventListener("click", ()=>{
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnE1.innerText = emoji[randomNum].emojiName
    emojiNameE1.innerHTML = emoji[randomNum].emojiCode;
})