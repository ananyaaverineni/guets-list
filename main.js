array_of_guests=[];
function submit()
{var name1=document.getElementById("name_1").value;
var name2=document.getElementById("name_2").value;
var name3=document.getElementById("name_3").value;
var name4=document.getElementById("name_4").value;
var name5=document.getElementById("name_5").value;
var name6=document.getElementById("name_6").value;
var name7=document.getElementById("name_7").value;

array_of_guests.push(name1)
array_of_guests.push(name2)
array_of_guests.push(name3)
array_of_guests.push(name4)
array_of_guests.push(name5)
array_of_guests.push(name6)
array_of_guests.push(name7)
document.getElementById("result").innerHTML=array_of_guests;
}