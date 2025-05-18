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
});
