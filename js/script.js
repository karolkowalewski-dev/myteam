

    const button = document.querySelector(".menu");
    const menu = document.querySelector(".pop-menu");
    const closeButton = document.querySelector(".close-icon");
    const bg = document.querySelector(".background");
    


    button.addEventListener("click", function(e) {
            e.preventDefault();
            menu.classList.add("show");
            bg.classList.add("show");        
        })

    closeButton.addEventListener("click", function(e) {
            e.preventDefault();
            menu.classList.remove("show");
            bg.classList.remove("show");
        })    
   