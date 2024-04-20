let myImage=document.querySelector("img");

myImage.onclick=function(){
    let mySrc=myImage.getAttribute("src");
    if (mySrc ==="images/atri.png") {
        myImage.setAttribute("src","images/arti1.png");
    }
    else
    {
        myImage.setAttribute("src","images/atri.png");
    }
};

let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");

function setUerName(){
    let myName=prompt("请输入你的名字");
    if(!myName){
        setUerName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent="好吃就是高兴哦."+myName;
    }
}

if (!localStorage.getItem("name")) {
    setUerName();
}
else{
    let storedName=localStorage.getItem("name");
    myHeading.textContent="好吃就是高兴o,"+storedName;
}
myButton.onclick=function(){
    setUerName();
}