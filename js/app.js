
shownotes();
let addbtn=document.getElementById('addbtn');
addbtn.addEventListener('click',function(e) {
    let addtxt=document.getElementById('addtxt');
    let addtitle=document.getElementById('addtitle');
    let notes=localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let myObj={
        title:addtitle.value,
        text:addtxt.value,
    }
    notesObj.push(myObj);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addtxt.value='';
    addtitle.value='';
    console.log(notes);
    shownotes();
})
function shownotes() {
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    } 
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`<div class="card  bg-info mx-3 my-3 col-md-11" style="max-width: 18rem;">
        <span id="${index}" onclick="deleteNote(this.id)" style='cursor:pointer;'>x</span> 
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
        </div>
      </div>`;
    });
    let notesElm=document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothing to show .Add notes above `
    }
}

function deleteNote(index) {
    //   console.log("I am deleting", index);
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      shownotes();
    }
    
    
    let search = document.getElementById('searchtxt');
    search.addEventListener("input", function(){
    
        let inputVal = search.value.toLowerCase();
        // console.log('Input event fired!', inputVal);
        let noteCards = document.getElementsByClassName('notecard');
        Array.from(noteCards).forEach(function(element){
            let cardtxt = element.getElementsByTagName("h5")[0].innerText;
            if(cardtxt.includes(inputVal)){
                element.style.display = "block";
            }
            else{
                element.style.display = "none";
            }
            // console.log(cardtxt);
        })
    })
