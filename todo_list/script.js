const form=document.getElementById('form');
const desc=document.getElementById('ipdesc');
const task=document.getElementById('iptxt');
let row=0;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    addlist();
});

const addlist=()=>{ 
    if(task.value.length==0){
        alert("Enter a task");
    }
    else if(desc.value.length==0){
        alert("Enter description of task");
    }
    else{
        let table=document.querySelector("table");
        let tbody=table.createTBody();
        let row=tbody.insertRow();
        // insert task
        let th=document.createElement("th");
        let text=document.createTextNode(task.value);
        th.appendChild(text);
        row.appendChild(th);
        //insert description
        let td=document.createElement("td");
        td.classList.add('tab22');
        let des=document.createTextNode(desc.value);
        td.appendChild(des);
        row.appendChild(td);
        //insert delete button
        let btn_td=document.createElement("td");
        btn_td.classList.add('tab3');
        let btn=document.createElement("button");
        btn.innerHTML="X";
        btn.classList.add('del');
        btn_td.appendChild(btn);
        row.appendChild(btn_td);
        //clear table values
        task.value="";
        desc.value="";

        //now go through all delete buttons
        let tasks=document.querySelectorAll('.del');
        for(let i=0;i<tasks.length;i++){
            tasks[i].onclick=function(){
                this.parentNode.parentNode.remove();
            }
        }
    }
}


