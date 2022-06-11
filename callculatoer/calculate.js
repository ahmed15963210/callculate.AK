let btnC=document.getElementById("btn-c");
let btnNo=document.getElementById("btn-no");
let btnDel=document.getElementById("btn-Del");
let btnDiv=document.getElementById("btn-div");
let btn7=document.getElementById("btn-7");
let btn8=document.getElementById("btn-8");
let btn9=document.getElementById("btn-9");
let btnX=document.getElementById("btn-x");
let btn4=document.getElementById("btn-4");
let btn5=document.getElementById("btn-5");
let btn6=document.getElementById("btn-6");
let btnMINUS=document.getElementById("btn-");
let btn1=document.getElementById("btn-1");
let btn2=document.getElementById("btn-2");
let btn3=document.getElementById("btn-3");
let btnPlus=document.getElementById("btn-+");
let btnDot=document.getElementById("btn-dot");
let btn0=document.getElementById("btn-0");
let btnEqual=document.getElementById("equal");
let audio=document.getElementById("sound");
let inp=document.getElementById("input");
//********************************************************************************************************* */
let x=0;
let y=0;
let xS="",yS="";
let proc="";
//********************************************************************************************************* */

btnC.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value="";
}
btnC.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//******************************************************************* */
btnNo.onclick=function() {
    audio.src="/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
}
btnNo.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//******************************************************************* */
btnDel.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
}
btnDel.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btnDiv.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "/";
}
btnDiv.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btn7.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "7";
    x= x.value + 7;
}
btn7.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btn8.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "8";
    x= x.value + 8;
}
btn8.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btn9.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "9";
    x= x.value + 9;
}
btn9.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btnX.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "*";
}
btnX.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btn4.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "4";
    x= x.value + 4;
}
btn4.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btn5.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "5";
    x= x.value + 5;
}
btn5.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btn6.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "6";
    
}
btn6.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btnMINUS.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "-";
}
btnMINUS.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btn1.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "1";
}
btn1.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btn2.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "2";
}
btn2.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btn3.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "3";
}
btn3.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btnPlus.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "+";
}
btnPlus.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btnDot.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + ".";
}
btnDot.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btn0.onclick=function() {
    audio.src="/callculate.AK/callculatoer/mixkit-modern-click-box-check-1120.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    inp.value=inp.value + "0";
}
btn0.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
btnEqual.onclick=function() {
    x=0;
    y=0;
    xS="";
    yS="";
    proc="";
    audio.src="/callculate.AK/callculatoer/equal.wav";
    this.style.cssText=
    `
    transform: scale(0.9);
    transition: all 0.3s;
    `;
    for(let i=0;i<inp.value.length;i++)
    {
        if(inp.value[i]!=="+" && inp.value[i]!=="-" && inp.value[i]!=="*" && inp.value[i]!=="/"){
            xS+=inp.value[i];
        }
        else{
            proc=inp.value[i];
            i++;
            for(;i<inp.value.length;i++)
            {
                yS+=inp.value[i];
            }
        }
    }
    if(proc==="+")
    {
        inp.value=parseInt(xS)+parseInt(yS);
    }
    else if(proc==="-")
    {
        inp.value=parseInt(xS)-parseInt(yS);
    }
    else if(proc==="*")
    {
        inp.value=parseInt(xS)*parseInt(yS);
    }
    else if(proc==="/")
    {
        inp.value=parseInt(xS)/parseInt(yS);
    }
}
btnEqual.onmouseout=function() {
    this.style.cssText=
    `
    transform: scale(1);
    transition: all 0.3s;
    `;
}
//********************************************************************* */
//********************************************************************* */
//********************************************************************* */
//********************************************************************* */
//********************************************************************* */
//********************************************************************* */
//********************************************************************* */
let background=document.forms[1].background;
let secondBackColor=document.forms[1].secondBackColor;
let mainColor=document.forms[1].mainColor;
let secondColor=document.forms[1].secondColor;
let equalColor=document.forms[1].equalColor;
let submit=document.getElementById("submit");
let reset=document.getElementById("reset");

    // localStorage.background_="grey";
    // localStorage.secondBackColor_="#F0F2F5";
    // localStorage.mainColor_="white";
    // localStorage.secondColor_="rgb(204, 0, 255)";
    // localStorage.equalColor_="red";
    //localStorage.clear();
    background.onkeyup=function(){
    localStorage.setItem("background_",background.value);
}
secondBackColor.onkeyup=function(){
    localStorage.setItem("secondBackColor_",secondBackColor.value);
}
mainColor.onkeyup=function(){
    localStorage.setItem("mainColor_",background.mainColor);
}
secondColor.onkeyup=function(){
    localStorage.setItem("secondColor_",secondColor.value);
}
equalColor.onkeyup=function(){
    localStorage.setItem("equalColor_",equalColor.value);
}

submit.onclick=function() {
    document.querySelector(":root").style.setProperty("--background",localStorage.background_);
    document.querySelector(":root").style.setProperty("--secondBackColor",localStorage.secondBackColor_);
    document.querySelector(":root").style.setProperty("--mainColor",localStorage.mainColor_);
    document.querySelector(":root").style.setProperty("--secondColor",localStorage.secondColor_);
    document.querySelector(":root").style.setProperty("--equalColor",localStorage.equalColor_);
}
reset.onclick=function() {
    localStorage.background_="grey";
    localStorage.secondBackColor_="#F0F2F5";
    localStorage.mainColor_="white";
    localStorage.secondColor_="rgb(204, 0, 255)";
    localStorage.equalColor_="red";
    document.querySelector(":root").style.setProperty("--background",localStorage.background_);
    document.querySelector(":root").style.setProperty("--secondBackColor",localStorage.secondBackColor_);
    document.querySelector(":root").style.setProperty("--mainColor",localStorage.mainColor_);
    document.querySelector(":root").style.setProperty("--secondColor",localStorage.secondColor_);
    document.querySelector(":root").style.setProperty("--equalColor",localStorage.equalColor_);
}
window.onload=function(){
    background.value=localStorage.background_;
    secondBackColor.value=localStorage.secondBackColor_;
    mainColor.value=localStorage.mainColor_;
    secondColor.value=localStorage.secondColor_;
    equalColor.value=localStorage.equalColor_;
    document.querySelector(":root").style.setProperty("--background",localStorage.background_);
    document.querySelector(":root").style.setProperty("--secondBackColor",localStorage.secondBackColor_);
    document.querySelector(":root").style.setProperty("--mainColor",localStorage.mainColor_);
    document.querySelector(":root").style.setProperty("--secondColor",localStorage.secondColor_);
    document.querySelector(":root").style.setProperty("--equalColor",localStorage.equalColor_);
}









