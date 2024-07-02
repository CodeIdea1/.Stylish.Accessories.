window.onscroll = function () {
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.scrollY;


    let products = document.querySelector('.products')
    let productsTop = products.offsetTop;
    let productsHeight = products.offsetHeight;
    if (windowScrollTop > (productsTop + productsHeight - windowHeight -600)) {
        let allProducts = document.querySelectorAll('.prod');
        allProducts.forEach((e) => {
            e.classList.add('translate')
        })
    }


    let products2Top = products.offsetTop;
    let products2Height = products.offsetHeight;
    if (windowScrollTop > (products2Top + products2Height - windowHeight -2700)) {
        let allProducts2 = document.querySelectorAll('.prod');
        allProducts2.forEach((e) => {
            e.classList.add('translate2')
        })
    }
    
    
    let features = document.querySelector('.features');
    let features2Top = features.offsetTop;
    let features2Height = features.offsetHeight;
    if (windowScrollTop > (features2Top + features2Height - windowHeight -800)) {
        let allFeat = document.querySelectorAll('.feat');
        allFeat.forEach((e)=> {
            e.classList.add('translate2');
        })
    }
}
