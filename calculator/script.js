let res=document.getElementById('res');
let buttons=document.querySelectorAll('button');

let btnVal="";
for(let i=0;i<buttons.length;i++){
    
    buttons[i].addEventListener("click",(e)=>{
        let txt=e.target.innerText;
        // console.log(txt);
        if(txt=="C"){
            btnVal="";
            res.innerHTML="";
        }
        else if(txt=="del"){
            let len=btnVal.length;
            btnVal=btnVal.substring(0,len-1);
            res.innerHTML=btnVal;
        }
        else if(txt=="="){
            try{
                res.innerHTML=eval(btnVal);
            }
            catch(err){
                res.innerHTML="Expression Error";
            }
        }
        else{
            btnVal+=txt;
            res.innerHTML=btnVal;
        }
    })
    console.log(btnVal);
}