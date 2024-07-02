
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 1500); // 5000 milliseconds = 5 seconds



let links = document.querySelector('.links');
let menu = document.querySelector('.menu');
let menuX = document.querySelector('.x');
let allA = document.querySelector('.Phone-ul');



links.onclick = function() {
    menu.classList.toggle('active');
}
menuX.onclick = function() {
    menu.classList.toggle('active');
}
allA.onclick = function() {
    menu.classList.toggle('active');
}


let about = document.querySelector('.about');
let aside = document.querySelector('.aside');
about.onclick = function() {
    aside.classList.toggle('open')
}

document.addEventListener('DOMContentLoaded', function () {
    let count = 0; // الرقم الابتدائي
    const counter = document.getElementById('counter');

    function countdown() {
        counter.textContent = count + "+"; // إضافة علامة "+"
        if (count < 300) {
            count++;
            setTimeout(countdown, 1); // زمن التحديث
        }
    }

    countdown();
});

document.addEventListener('DOMContentLoaded', function () {
    let count = 0; // الرقم الابتدائي
    const counter = document.getElementById('counter2');

    function countdown() {
        counter.textContent = count + "+"; // إضافة علامة "+"
        if (count < 100) {
            count++;
            setTimeout(countdown, 2); // زمن التحديث
        }
    }

    countdown();
});


document.addEventListener('DOMContentLoaded', function () {
    let count = 0; // الرقم الابتدائي
    const counter = document.getElementById('counter3');

    function countdown() {
        counter.textContent = count + "+"; // إضافة علامة "+"
        if (count < 50) {
            count++;
            setTimeout(countdown, 8); // زمن التحديث
        }
    }

    countdown();
});



window.addEventListener('scroll', function() {
    let landing = this.document.querySelector('.landing');
    let  header = document.querySelector('.header');
    let button = this.document.querySelector('.button')
    let allA = this.document.querySelectorAll('.ul li a');
    if (window.scrollY > 4) {
        header.classList.add('translate');
        landing.classList.add('translate')
        button.classList.add('translate');
        allA.forEach((e) => {
            e.classList.add('change-color')
        })
    } else {
        header.classList.remove('translate');
        landing.classList.remove('translate')
        button.classList.remove('translate');
        allA.forEach((e) => {
            e.classList.remove('change-color')
        })
    }
});

window.onscroll = function () {
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.scrollY;
    // start aboutus section animation


    let gallery = document.querySelector('.gallery');
    let galleryTop = gallery.offsetTop;
    let galleryHeight = gallery.offsetHeight;
    if (windowScrollTop > (galleryTop + galleryHeight - windowHeight -200)) {
        let galleryBoxes = document.querySelectorAll('.gallery-box');
        galleryBoxes.forEach((e) => {
                e.classList.add('translate')
        })
    }
    let services = document.querySelector('.services');
    let servicesTop = services.offsetTop;
    let servicesHeight = services.offsetHeight;
    if (windowScrollTop > (servicesTop + servicesHeight - windowHeight -250)) {
        let model2 = document.querySelector('.model-container .model2');
        model2.classList.add('translate');

        let allServ = document.querySelectorAll('.serv');
        allServ.forEach((e)=> {
            e.classList.add('translate');
        })

        let servP = document.querySelectorAll('.serv-p');
        servP.forEach((e)=> {
            e.classList.add('translate');
        })
    }

    let features = document.querySelector('.features');
    let featuresTop = features.offsetTop;
    let featuresHeight = features.offsetHeight;
    if (windowScrollTop > (featuresTop + featuresHeight - windowHeight -100)) {
        let allFeat = document.querySelectorAll('.feat');
        allFeat.forEach((e)=> {
            e.classList.add('translate');
        })
    }


    //  gallery section animation translate fom small screen
    let gallery2Top = gallery.offsetTop;
    let gallery2Height = gallery.offsetHeight;
    if (windowScrollTop > (gallery2Top + gallery2Height - windowHeight -600)) {
        let galleryBoxes = document.querySelectorAll('.gallery-box');
        galleryBoxes.forEach((e) => {
                e.classList.add('translate2')
        })
    }
    //  service section animation translate fom small screen
    let servicesTop2 = services.offsetTop;
    let servicesHeight2 = services.offsetHeight;
    if (windowScrollTop > (servicesTop2 + servicesHeight2 - windowHeight -1200)) {
        let allServ = document.querySelectorAll('.serv');
        allServ.forEach((e)=> {
            e.classList.add('translate2');
        })
        let servP = document.querySelectorAll('.serv-p');
        servP.forEach((e)=> {
            e.classList.add('translate2');
        })
    }
    let servicesTop3 = services.offsetTop;
    let servicesHeight3 = services.offsetHeight;
    if (windowScrollTop > (servicesTop3 + servicesHeight3 - windowHeight -700)) {
        let model2 = document.querySelector('.model-container .model2');
        model2.classList.add('translate3');

    //  features section animation translate fom small screen
    let features2Top = features.offsetTop;
    let features2Height = features.offsetHeight;
    if (windowScrollTop > (features2Top + features2Height - windowHeight -800)) {
        let allFeat = document.querySelectorAll('.feat');
        allFeat.forEach((e)=> {
            e.classList.add('translate2');
        })
    }
    }
}




let videoIcon = document.querySelector(".video");
let video = document.querySelector('.video .video-container');
let x = document.querySelector('.x');
videoIcon.onclick = function () {
    video.classList.toggle("block")
    x.classList.toggle("block")
} 



