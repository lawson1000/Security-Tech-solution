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
    const currentpage = location.pathname;
    console.log(currentpage)
    const pages = document.querySelectorAll("nav ul a").forEach(link => {
            if(link.href.includes(`${currentpage}`)){
                link.classList.add('active');
            }
        });
    

    
});

function myFunction(){
   document.getElementById("btn-read").onclick = location.href = "contact.html";
}

