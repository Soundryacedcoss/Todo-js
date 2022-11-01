var todo=[];
var complete=[];
document.getElementById("Todoupdate").style.display="none";
document.getElementById("Compupdate").style.display="none";
// function for add task in in todo section
function add(){
var task=document.getElementById("new-task").value;
var obj={
    data:task,
    id: Math.random().toString(16).slice(2),
}
if(obj.data==""){
    alert("write something");
}
else{
    todo.push(obj);
    display();
    document.getElementById("new-task").value=""
}
}
// display function
function display(){
    
var  list='<ul>'
todo.forEach((element) => {
    list+=
    '<li><input margin: 0 10px;position: relative;top: 15px; type="checkbox" onclick="comp(\'' + element.id +"')\"><label>" +
      element.data +
      '</label><input type="button" class="edit" onclick="edit_task(\'' +
      element.id +
      '\')" value="Edit"><input type="button" class="delete" onclick="deletetask(\'' +
      element.id +
      '\')" value="Delete"><br></li>';
});
 list+='</ul>'; 
 document.getElementById("output").innerHTML=list;
 
}
// for deleting the todo task
function deletetask(val){
      for(let i=0; i < todo.length; i++){
        if(val == todo[i].id){
            todo.splice(i,1);
            console.log('hii');
        }
      }
      display();
}
// for editing the todo task
function edit_task(val){
    document.getElementById("Todoupdate").style.display="block";
    document.getElementById("add").style.display="none";
    console.log('hiii');
    for(let i=0;i<todo.length;i++){
        if(val == todo[i].id){
            console.log(todo[i].data);
            document.getElementById('new-task').value=todo[i].data;
            todo.splice(i,1);
        }
    }
    display();
}
// updating todo
function updatetodo(){
console.log(' you have clicked on update todo');
document.getElementById("Todoupdate").style.display="none";
document.getElementById("add").style.display="block";
add();
display();
}
// functinality for complete task section
function completetask(){
    var comp='<ul>'
    complete.forEach( (element) => {
        comp+='<li><label>'+
            element.data+ 
            '</label>'+
            '<input type="button" value="Edit" onclick="editcomplete(\''+ element.id +'\')"/><input type="button" value="Delete" onclick="deletecomplete(\''+ element.id +'\')"/>'+
            '</li>';
    });
    comp+='</ul>';  
    document.getElementById("res").innerHTML=comp; 
}  
function comp(val) {
    for (let i = 0; i < todo.length; i++) {
      if (val == todo[i].id) {
        complete.push(todo[i]);
        todo.splice(i, 1);
      }
    }
    display();
    completetask();
}
// delete complete task
function deletecomplete(val){
    for(let i=0 ; i < complete.length ; i++){
        if(val==complete[i].id){
            console.log('hii');
            complete.splice(i,1);
        }
    }
    completetask();
}
// edit complete task
function editcomplete(val){
    document.getElementById("Compupdate").style.display="block";
    document.getElementById("add").style.display="none";
    for (let i = 0; i < complete.length; i++) {
    if(val==complete[i].id){
        document.getElementById('new-task').value=complete[i].data;
        complete.splice(i,1);
    }
    completetask();
}
}
// update complete task
function updatecomplete(){
    document.getElementById("Compupdate").style.display="none";
    document.getElementById("add").style.display="block";
    var task=document.getElementById("new-task").value;
    var obj={
        data:task,
        id: Math.random().toString(16).slice(2),
    }
    if(obj.data==""){
        alert("write something");
    }
    else{
        complete.push(obj);
        completetask();
        document.getElementById("new-task").value="";
    }
}