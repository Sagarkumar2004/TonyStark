console.log("javascript is running")
document.querySelector(".cross").style.display = "none";
document.querySelector(".ham").addEventListener("click", () =>{

    document.querySelector(".sidebar").classList.toggle("sidebarIn");
    document.querySelector(".ham").style.display = "none";
    document.querySelector(".cross").style.display = "block";
});

document.querySelector(".cross").addEventListener("click", () =>{

    document.querySelector(".sidebar").classList.toggle("sidebarIn");
    document.querySelector(".ham").style.display = "block";
    document.querySelector(".cross").style.display = "none";
    
   
     
});