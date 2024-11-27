let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
        
        if (top => offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 130,
    centeredSlides: true,
    autoplay: {
        delay:6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay:6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

function sendMail() {
    let form = {
        name: document.getElementsByName("name").value,
        number: document.getElementsByName("number").value,
        order: document.getElementsByName("order").value,
        additional_info: document.getElementsByName("email").value,
        how_many: document.getElementsByName("how_many").value,
        date: document.getElementsByName("date").value,
        address: document.getElementsByName("address").value,
        message: document.getElementsByName("message").value,
        
    };
    
    const serviceID = "service_1w0766s";
    const templateID = "template_ym20io1";

emailjs.send(serviceID, templateID, form)
.then(
    res => {
        document.getElementsByName("name").value ="";
        document.getElementsByName("number").value ="";
        document.getElementsByName("order").value ="";
         document.getElementsByName("email").value ="";
        document.getElementsByName("how_many").value ="";
        document.getElementsByName("date").value ="";
        document.getElementsByName("address").value ="";
        document.getElementsByName("message").value ="";
        console.log(res);
        alert("your message sent successfully");
    })
.catch((err) => console.log(err));
}

