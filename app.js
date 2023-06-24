function set(){
    var set = document.getElementById("inp1");
    localStorage.setItem("Budget",set.value);
}
var bal = document.getElementById("inp3");
function expen() {
    let prev = localStorage.getItem("payment");
    let arr = prev ? JSON.parse(prev) : [];
    var exp = document.getElementById("inp2");
    var data = {
      expense: exp.value,
     pro_price: bal.value
    };
    arr.push(data);
    var json = JSON.stringify(arr);
    localStorage.setItem("payment", json);
  
    var oldBalance =parseFloat(localStorage.getItem("balance"))||0;
    var newBalance =parseFloat(document.getElementById("inp3").value)||0; 
    var totalBalance = oldBalance + newBalance; 
  
    localStorage.setItem("balance", totalBalance); 
  }
  

function show() {
    var amount=document.getElementById("amount");
    var tit=document.getElementById("expence");
    var bal=document.getElementById("balance");

    var gtdata=localStorage.getItem("payment");


    var json=JSON.parse(gtdata);
    amount.innerText=localStorage.getItem("Budget")
    tit.innerText=localStorage.getItem("balance");
bal.innerText=amount.innerText-tit.innerText

for(var i=0;i<json.length;i++){
var div=document.createElement("div");
div.setAttribute("id","remove");
var div2=document.createElement("div");
div.style.display="flex";
div.style.justifyContent="space-between";
var p=document.createElement("p");
var edit=document.createElement("i");
edit.setAttribute("class","fa-regular fa-pen-to-square")
edit.setAttribute("onclick",
"edit()")
var del=document.createElement("i");
del.setAttribute("onclick",
"delete1()")
del.setAttribute("class","fa-solid fa-trash-can me-2")

div.textContent=json[i].expense;
p.textContent=json[i].pro_price
div.appendChild(p)
div2.appendChild(del)
div2.appendChild(edit)
div.appendChild(div2)
document.getElementById("card").appendChild(div)
}
}
show()



function delete1() {
    // var gtdata=localStorage.getItem("payment");
    // var json=JSON.parse(gtdata)
var rem=document.getElementById("remove");
rem.remove()
// localStorage.removeItem("payment",json.expense)

}
// function edit() {

// }