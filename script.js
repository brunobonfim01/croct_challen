const index = require("./src/index");
import index from "./src/index";
import home from "./src/home";

$(document).ready(fuction(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
})


