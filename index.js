const url="http://api.quotable.io/random";
const para=document.querySelector(".para");
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");
const copiedAlert=document.querySelector(".app span");
let quote=async ()=>{
    let x=await fetch(url);
    let result=await x.json();
    return result;
}
async function laodQuote(){
    
        let x= await quote();
    para.innerHTML="";
   
    let p=document.createElement("p");
    let div=document.createElement("div");
    div.setAttribute("class","author");
    p.innerHTML=x.content;
    div.innerHTML=x.author;
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

   },900)
   
   

}
btn2.addEventListener("click",copyText)


function tweet(){
    const p=document.querySelector(".para p");
    const a=document.querySelector(".author");
    const quotee=p.innerText;
    const author=a.innerText;
    const linkT=`https://twitter.com/intent/tweet?text=${quotee} ~${author}
    `;
    window.open(linkT,"Tweet Window","width=600px,height=400px")
}
btn3.addEventListener('click',tweet);
