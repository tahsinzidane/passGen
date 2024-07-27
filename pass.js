console.log('hello friend, wussssssup')

// Define the array x
const x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '/', '$', '%', '^', '&', '*', '(', ')'
];

// Function to shuffle the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to generate a random password
function generatePassword(length) {
    if (length > x.length) {
        throw new Error("Length cannot be greater than the array size");
    }
    const shuffledArray = shuffleArray(x.slice());
    return shuffledArray.slice(0, length).join('');
}


document.getElementById('btn').addEventListener('click', function () {
    const passwordLength = 18;
    const password = generatePassword(passwordLength);
    document.getElementById('text-to-copy').innerHTML = password


})

let alertMsg = document.getElementById('alert-msg');
alertMsg.innerText = 'Text copied to clipboard'
alertMsg.style.display = 'none'
function popupMsg() {
    alertMsg.style.display = 'block'
    setTimeout(() => {
        alertMsg.style.display = 'none'
    }, 3000);
}

// copy btn script
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        // alert('Text copied to clipboard');
        popupMsg()
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

function copyText() {
    const text = document.getElementById('text-to-copy').innerText;
    copyToClipboard(text);
}
