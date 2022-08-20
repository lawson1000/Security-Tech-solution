$(document).ready(function(){
    $("#nav-icon").click(function(){
        $("ul").toggleClass("show");
        $("body").toggleClass("hide-overflow");
    })
    const toTop = document.querySelector(".to-top")
    window.addEventListener("scroll", () =>{
        if(window.pageYOffset > 100){
            toTop.classList.add("press")
        } else{
            toTop.classList.remove("press")
        }
    })

    
});

function myFunction(){
   document.getElementById("btn-read").onclick = location.href = "contact.html";
}

