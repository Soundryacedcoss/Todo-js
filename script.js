var todo=[];
var complete=[];
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
}
}
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
function deletetask(val){
      for(let i=0; i < todo.length; i++){
        if(val == todo[i].id){
            todo.splice(i,1);
            console.log('hii');
        }
      }
      display();
}
function edit_task(val){
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
function updatetodo(){
console.log(' you have clicked on update todo');
add();
display();
}
function completetask(){
    var comp='<table><tr></tr>'
    complete.forEach( (element) => {
        comp+='<tr><td>'
            +'<input type="checkbox"/>'+
           '</td><td>'+
            element.data+ 
            '</td><td>'+
            '<input type="button" value="Edit" onclick="editcomplete(\''+ element.id +'\')"/><input type="button" value="Delete" onclick="deletecomplete(\''+ element.id +'\')"/>'+
            '</td></tr>';
    });
    comp+='</table>';  
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
function deletecomplete(val){
    for(let i=0 ; i < complete.length ; i++){
        if(val==complete[i].id){
            console.log('hii');
            complete.splice(i,1);
        }
    }
    completetask();
}
function editcomplete(val){
for (let i = 0; i < complete.length; i++) {
    if(val==complete[i].id){
        document.getElementById('new-task').value=complete[i].data;
        complete.splice(i,1);
    }
    completetask();
}
}
function updatecomplete(){
    document.getElementById("Compupdate").style.display="none";
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
    }
}