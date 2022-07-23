let ImagesLinks=[
    "https://d64lkarmo2mrq.cloudfront.net/img/home/freedom2222.webp",
    "https://d64lkarmo2mrq.cloudfront.net/img/home/bluetooth2022.webp",
    "https://d64lkarmo2mrq.cloudfront.net/img/home/womenswatches2022.webp",
    "https://d64lkarmo2mrq.cloudfront.net/img/home/nordic2022.webp"
    ]

    let Leftbtn=document.getElementById("left-btn");
    let Rightbtn=document.getElementById("rigth-btn");
    let crauser=document.getElementById("Slider-img");


    let imgstate=0;
    Rightbtn.addEventListener("click",function(){
        imgstate++;
        if(imgstate==ImagesLinks.length){
            imgstate=0;
        }
        crauser.src=ImagesLinks[imgstate];
    })
    Leftbtn.addEventListener("click",function(){
        imgstate--;
        if(imgstate<0){
            imgstate=ImagesLinks.length-1;
        }
        crauser.src=ImagesLinks[imgstate];
    })