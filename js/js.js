$('.owl-carousel').owlCarousel({
    loop:true, /*carousel repete*/
    margin:10,
    nav:false,
    responsive:{
        0:{ /*proximidade de 0 px, 1 item*/
            items:1
        },
        600:{ /*600 px, 3 itens*/
            items:3
        },
        1000:{ /*1000 px, 5 itens*/
            items:5
        }
    }
})