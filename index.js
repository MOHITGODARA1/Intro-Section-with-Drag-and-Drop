document.addEventListener("DOMContentLoaded", () => {
  const hoveritem = document.querySelector("#hoveritem");
  const hoveritem2 = document.querySelector("#hoveritem2");
  const scrooldown = document.querySelector(".scrooldown");
  const scrooldown1 = document.querySelector(".scrooldown1");
  const arrowimage=document.querySelector(".lowerarrow");
  const arrowimage2=document.querySelector(".lowerarrow2");
  if (hoveritem && scrooldown) {
    hoveritem.addEventListener("mouseover", () => {
      scrooldown.style.display = "block";
      arrowimage.src="icon-arrow-up.svg";

    });
    hoveritem.addEventListener("mouseleave", () => {
      // scrooldown.style.display = "none";
      let valid=false;
      scrooldown.addEventListener("mouseover", () => {
        scrooldown.style.display = "block";
         arrowimage.src="icon-arrow-down.svg";
        valid =true;
      });
      scrooldown.addEventListener("mouseleave", () => {
        scrooldown.style.display = "none";
        arrowimage.src="icon-arrow-down.svg";
      });
      if(!valid){
         scrooldown.style.display = "none";
         arrowimage.src="icon-arrow-down.svg";
      }
    });

  }

  if (hoveritem2 && scrooldown1) {
    hoveritem2.addEventListener("mouseover", () => {
      scrooldown1.style.display = "block";
      arrowimage2.src="icon-arrow-up.svg";
    });
    hoveritem2.addEventListener("mouseleave", () => {
      let valid=false;
      scrooldown1.addEventListener("mouseover", () => {
        scrooldown1.style.display = "block";
        arrowimage2.src="icon-arrow-up.svg";
        valid=true;
      });
      scrooldown1.addEventListener("mouseleave", () => {
        scrooldown1.style.display = "none";
        arrowimage2.src="icon-arrow-down.svg";
      });
      if(!valid){
         scrooldown1.style.display = "none";
         arrowimage2.src="icon-arrow-down.svg";
      }
    });

  }

  const menuimage=document.querySelector(".menuimage");
  const phonesection=document.querySelector(".allphonemenu");
  const closemenu=document.querySelector(".closemenu");
  const feature=document.querySelector(".phonefeature");
  const arrowup=document.querySelector(".phonearrowdown");
  
  
  const feature1 = document.querySelector(".featuresection1 > .phonefeature1");
const featureOption1 = document.querySelector(".featureoption1");
const arrowIcon = feature1.querySelector(".phonearrowdown");

feature1.addEventListener("click", () => {
  const isVisible = featureOption1.style.display === "block";
  
  featureOption1.style.display = isVisible ? "none" : "block";
  arrowIcon.src = isVisible ? "icon-arrow-down.svg" : "icon-arrow-up.svg";
});





feature.addEventListener("click",()=>{
  
    const option=document.querySelector(".featureoption");
    const isvisibal=option.style.display==="block";
    option.style.display=isvisibal?"none":"block";
    arrowup.src=isvisibal?"icon-arrow-down.svg":"icon-arrow-up.svg";
    
  });
  
  
  const bulereffect = document.querySelector(".left");
  menuimage.addEventListener("click",()=>{
    phonesection.style.display="block";
    bulereffect.style.display="block";
  });
  closemenu.addEventListener("click",()=>{
    phonesection.style.display="none";
  })



















});
