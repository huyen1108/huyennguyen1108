function fullscreen()
{
   var sp1= document.getElementById("screenp1");
   var sp2= document.getElementById("screenp2");
   var back=document.getElementById("back")
   sp2.style.display= "none";
   sp1.classList.remove("col-9");
   sp1.classList.add("col-12");
   back.style.display="block";
}
function partscreen()
{
    var sp1= document.getElementById("screenp1");
    var sp2= document.getElementById("screenp2");
    var back=document.getElementById("back")
    sp2.style.display= "block";
    sp1.classList.remove("col-12");
    sp1.classList.add("col-9");
    back.style.display="none";
}
function showitem()
{
    var _showitem = document.getElementById("bh");
    _showitem.style.display = " none";
    var _btn = document.getElementById("btn1");
    var btn = `<button onclick="hid()"><i class="fas fa-chevron-up"></i></button>`;
    _btn.innerHTML = btn ;
}
function hid()
{
    var _item = document.getElementById("bh");
    console.log(_item);
    _item.style.display = "block";
    var _btn = document.getElementById("btn1");
    var btn = `<button onclick="showitem()"><i class="fas fa-chevron-down"></i></button>`;
    _btn.innerHTML = btn;
}
function showitem1()
{
    var _showitem = document.getElementById("bh2");
    _showitem.style.display = " none";
    var _btn = document.getElementById("btn2");
    var btn = `<button onclick="hid1()"><i class="fas fa-chevron-up"></i></button>`;
    _btn.innerHTML = btn ;
}
function hid1()
{
    var _item = document.getElementById("bh2");
    _item.style.display = "block";
    var _btn = document.getElementById("btn2");
    var btn = `<button onclick="showitem1()"><i class="fas fa-chevron-down"></i></button>`;
    _btn.innerHTML = btn;
}