// const fileBtn = document.getElementById("btn");
// const fileInput = document.getElementById("fileInput");
// const imgContainer = document.getElementById("container");

// function eventFn(e){
//     if(e.type === "click"){
//         fileInput.click()
//     }else if(e.type === "change"){
//         let selectedFile = e.target.files[0];
//         let img = document.createElement("img");
//         img.src += selectedFile.name;
//         imgContainer.append(img)
//     }
    
// }

// fileBtn.addEventListener("click",eventFn)
// fileInput.addEventListener("change",eventFn)

const fileBtn = document.getElementById("btn");
const fileInput = document.getElementById("fileInput");
const imgContainer = document.getElementById("container");

function eventFn(e) {
    if (e.type === "click") {
        fileInput.click();
    } else if (e.type === "change") {
        let selectedFile = e.target.files[0];
        let img = document.createElement("img");
        img.src = URL.createObjectURL(selectedFile);
        console.log(img)
        imgContainer.append(img);
    }
}

fileBtn.addEventListener("click", eventFn);
fileInput.addEventListener("change", eventFn);