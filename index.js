const allicon=document.querySelectorAll('.forhoverxyz');
allicon.forEach((icon)=>{
    icon.addEventListener("mouseover",()=>{
        
        icon.firstElementChild.style.backgroundColor="#081828"
    })
    icon.addEventListener("mouseleave",()=>{
        icon.firstElementChild.style.backgroundColor="rgba(255, 255, 255, 0.07)"
    })
})