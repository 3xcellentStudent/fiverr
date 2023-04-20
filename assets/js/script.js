$(document).ready(function() {
    $('.slider').slick({
        slidesToShow:4,
        slidesToScroll:4,
        responsive: [
            {
                breakpoint: 1229,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:3,
                }
            },
            {
                breakpoint: 889,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    });
});
/* Slider 3 */

/* Slider 2*/
$(document).ready(function() {
    $('.slider1').slick({
        slidesToShow:1,
        slidesToScroll:1,
    });
});
/* Slider 2 */


/* Slider 1 */
$(document).ready(function() {
    $('.slider0').slick({
        slidesToShow:5,
        slidesToScroll:5,
        responsive: [
            {
                breakpoint: 1229,
                settings: {
                    slidesToShow:4,
                    slidesToScroll:4,
                }
            },
            {
                breakpoint: 889,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:3,
                }
            },
            {
                breakpoint: 606,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    });
});
/* Slider 1 */

/* Slider */


/* Header Scrolled */
window.addEventListener('scroll', e => {
    let header = document.getElementById('header').classList
    let active_header = "header_scrolled"
    
    console.log(pageYOffset)
    if(pageYOffset > 99) header.add(active_header)
    else header.remove(active_header)
})

window.addEventListener('scroll', e => {
    let head_log_search = document.getElementById('head_log_search_wrapper').classList
    let active_headerSearch = "head_log_search_wrapper_scrolled"
    
    console.log(pageYOffset)
    if(pageYOffset > 199) head_log_search.add(active_headerSearch)
    else head_log_search.remove(active_headerSearch)
})


window.addEventListener('scroll', e => {
    let subheader = document.getElementById('subheader').classList
    let active_subheader = "subheader_scrolled"
    
    console.log(pageYOffset)
    if(pageYOffset > 199) subheader.add(active_subheader)
    else subheader.remove(active_subheader)
})


let isMobile={
    Android:function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry:function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS:function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera:function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows:function() {return navigator.userAgent.match(/IEMobile/i);},
    any:function() {return(isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())}
}

let body=document.querySelector('body');
if(isMobile.any()) {
    body.classList.add('touch');
}else{
    body.classList.add('mouse');
}


$(document).ready(function(){
    
        $('.head_burger').click(function(event){
            $('.burger_menu_box,.main_container,.menu_flex_wrap,.click_box_menu').toggleClass('active')
        }); 
    
        $('.click_box_menu.active').click(function(){
            $('.burger_menu_box,.main_container,.menu_flex_wrap,.click_box_menu.active').remove('.active');
        }); 
});