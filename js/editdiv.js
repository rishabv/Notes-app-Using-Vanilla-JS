let divElem=document.createElement('div');
let val=localStorage.getItem('text');
let text;
if (val==null){
    text=document.createTextNode('this is my element cick to edit it');
}
else{
    text=document.createTextNode(val);
}
divElem.appendChild(text);

divElem.setAttribute('Id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border:2px solid black;width:150px;margin:30px;padding:23px;');

let container=document.querySelector('.container');
let first=document.getElementById('myfirst');

container.insertBefore(divElem,first);
console.log(divElem,container,first);

divElem.addEventListener('click', function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
    let html = elem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }
    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});