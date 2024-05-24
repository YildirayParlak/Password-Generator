const password_in = document.querySelector("#password");
const length = document.querySelector("#length");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

const generateBtn = document.querySelector("#generatePassword");
generateBtn.addEventListener("click",generatePassword);
const copyBtn = document.querySelector("#copybtn");
copyBtn.addEventListener("click",copyPassword);

const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "0123456789";
const symbols_chars = "!@#$%^&*()";

function generatePassword(){
    let password = "";
    let passwordLength = length.value;
    let chars = "";

    chars += uppercase.checked ? uppercase_chars:"";
    chars += lowercase.checked ? lowercase_chars:"";
    chars += numbers.checked ? numbers_chars:"";
    chars += symbols.checked ? symbols_chars:"";


    for(let i =0; i <=passwordLength; i++){
        let rand = Math.floor(Math.random() * chars.length);
        password += chars.substring(rand,rand+1);
    }

    password_in.value=password;
}

async function copyPassword(){
    if(navigator.clipboard){
        await navigator.clipboard.writeText(password_in.value);
        alert('password copied succesfully');
    }
};