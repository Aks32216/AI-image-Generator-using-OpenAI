let button=document.querySelector(".button");
let descImg=document.querySelector("#prompt");
let imgSize=document.querySelector("#size");

async function generateImageRequest(prompt,size){
    try {
        showSpinner();
        let response=await fetch('/openai/generateimage',{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt,
                size
            }),
        })
    
        if(!response.ok){
            removeSpinner();
            throw new Error('That Image could not be generated');
        }

        const data=await response.json();
        const imgUrl=data.data;

        document.querySelector('.mainImg').src=imgUrl;
        removeSpinner();
    } catch (error) {
        document.querySelector('.msg').textContent=error;
    }
    
}

function showSpinner(){
    document.querySelector('.spinner').classList.add('show');
}

function removeSpinner(){
    document.querySelector('.spinner').classList.remove('show');
}

button.addEventListener('click',()=>{
    let prompt=descImg.value;
    let size=imgSize.value;
    document.querySelector('.mainImg').src="";
    document.querySelector(".msg").textContent="";
    if(prompt===""){
        alert("Plese add some text");
        return;
    }

    generateImageRequest(prompt,size);

    descImg.value="";
    imgSize.selectedIndex=1;

})