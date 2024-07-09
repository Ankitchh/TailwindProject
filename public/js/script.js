document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('bg-slate-500');
    } else {
        menu.classList.add('hidden');
    }
});





// validiting booking

function selector(id,val){
    element = getElementById(id);
    element.getElementsByClassName("error")[0].innerHtml= val;
}

function validator (){
    var working = flase;
    var name = document.forms["booking"]["name"].value;
    
if (name.length == "" || name.length < 3){
    selector("name","Lenght of name is too short");
    
}
let num = name.length;
    console.log(num);

    return false;
} 