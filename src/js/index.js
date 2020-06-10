import '../scss/main.scss';

const loadButton = document.querySelector(".load");
const saveButton = document.querySelector(".save");

saveButton.addEventListener("click",(e)=>{
    const note = document.querySelector(".note");
    localStorage.setItem("note",note.value);
})

loadButton.addEventListener("click",(e)=>{
    const note = document.querySelector(".note");

    var savedNote = localStorage.getItem("note");

    if(savedNote){
        note.value=savedNote;
    }
})