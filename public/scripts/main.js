let button=document.querySelector(".button");
let descImg=document.querySelector("#prompt");
let imgSize=document.querySelector("#size");

async function generateImageRequest(prompt,size){
    try {
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
            throw new Error('That Image could not be generated');
        }

        const data=await response.json();
        const imgUrl=data.data;

        document.querySelector('.mainImg').src=imgUrl;
    } catch (error) {
        document.querySelector('.msg').textContent=error;
    }
    
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