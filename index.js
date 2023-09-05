let quotes=[
    {
        quote:`"The purpose of our lives is to be happy."`,
        author:"Dalai Lama"
    }, {
        quote:`"Life is what happens when you're busy making other plans."`,
        author:"John Lennon"
    }, {
        quote:`"Get busy living or get busy dying."`,
        author:"Stephen King"
    }, {
        quote:`"You only live once, but if you do it right, once is enough."`,
        author:"Mae West"
    }, {
        quote:`"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
        author:"Thomas A Edison"
    }

]
const para=document.querySelector(".para");
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const copiedAlert=document.querySelector(".buttons span");

function laodQuote(){
    para.innerHTML="";
    const randomIndex = Math.floor(Math.random() * quotes.length);
    let p=document.createElement("p");
    let div=document.createElement("div");
    div.setAttribute("class","author");
    p.innerHTML=quotes[randomIndex].quote;
    div.innerHTML=quotes[randomIndex].author;
    para.appendChild(p);
    para.appendChild(div);
}
laodQuote();
btn1.addEventListener('click',laodQuote);

const copyText=()=>{
    const paragragh=document.querySelector("p");
    let x=paragragh.innerText;
navigator.clipboard.writeText(x);
   copiedAlert.style.visibility="visible";
   setTimeout(()=>{
    copiedAlert.style.visibility="hidden";

   },1300)
   
   

}
btn2.addEventListener("click",copyText)