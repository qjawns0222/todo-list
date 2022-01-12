
const input=document.querySelector("#todo-input");
const list=document.querySelector(".todo-list");
const del=document.querySelector(".delete");

del.addEventListener("click",()=>{
    while(list.firstChild)
    {
        list.removeChild(list.firstChild);
    }
})
    
input.addEventListener("keypress",e=>{
    if(e.keyCode===13){
        Gentodo(input.value);
        input.value="";
    }
})

const Gentodo=(todo)=>{
    const li=document.createElement("li");//li라는 요소를 만든다
    const like=Gelike();
    const item=Geitem(todo);
    const manage=Gemanage();
   //i.appendChild()//li 라는 변수 안에 자식으로 뭐를 넣는다
    li.appendChild(like);
    li.appendChild(item);
    li.appendChild(manage);
    
    list.appendChild(li);
    
}
const Gelike=()=>{
    const span=document.createElement("span");
    span.classList.add("todo-like");
    const i=document.createElement("i");
    i.classList.add("material-icons");//괄호안에 빈칸안됨
    i.classList.add("like");
    i.innerText="accessibility";//내부에 글자 넣는다
    span.appendChild(i);
    i.addEventListener("click",()=>{
        i.classList.item(1) === 'like'?
        i.classList.replace("like","nonelike") : i.classList.replace("nonelike","like")

    })
    
    return span;

}
const Geitem = (todo) =>{
    const span=document.createElement("span")
    span.classList.add("todo-item");
    
    span.innerText = todo;  
    return span;
}
const Gemanage=()=>{
    const span=document.createElement("span")
    
    span.classList.add("todo-manage");
    const i=document.createElement("i");
    const ii=document.createElement("i");
    i.classList.add("material-icons");//괄호안에 빈칸안됨
    i.classList.add("check");
    i.innerText="check";//내부에 글자 넣는다
    ii.classList.add("material-icons");//괄호안에 빈칸안됨
    ii.classList.add("clear");
    ii.innerText="clear";
    span.appendChild(i);
    span.appendChild(ii);
    i.addEventListener("click",(e)=>{
        e.target.parentNode.parentNode.classList.add("done");
        
    })
    ii.addEventListener("click",(e)=>{
        list.removeChild(e.target.parentNode.parentNode);
        
    })
    return span;
}
