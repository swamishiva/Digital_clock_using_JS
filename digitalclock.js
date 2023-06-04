// console.log(t.getDate())
// console.log(t.getMonth())
// console.log(t.getTime())
// console.log(t.toLocaleDateString())
// console.log(t.toLocaleTimeString())
// console.log(days[t.getDay()])
//
let days=['Sunday','Monday','Tuesday',"Wednesday",'Thursday','Friday','Saturday']
// let target
// let target2
let t;
let time;
let date;
let target1;
let target2;
let day;
setInterval(() => {
    t=new Date();
    time=t.toLocaleTimeString();
    target1=document.getElementById("id1").innerHTML;
    document.getElementById('id1').innerHTML=time
    date=t.toLocaleDateString();
    day=t.getDay()
    document.getElementById("id2").innerHTML="  &nbsp;"+ days[day]+" &nbsp; &nbsp;" +date;
}, 1000);
    // document.getElementById("id1")
    // document.getElementById("id2")
