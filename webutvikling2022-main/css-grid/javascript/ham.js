const menu = document.getElementById("main-menu");
//main-menu hentet fra id i index.html

const hamMenu = () =>{
    if(menu.style.display == "block"){

        menu.style.display = "none";

//.style for å koble js med css
    }
    else{
        menu.style.display = "block";
    }

}

//for å teste at dette fungerte bruker vi console.log("jeg skal f-ing syns");   , dette kommenterer i js
/*denne for å 
kommentere for flere linjer*/
