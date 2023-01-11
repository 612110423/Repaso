console.log('conectado...')

const productData =[
    {
        index: '01',
        name:'yellow tracksuit',
        Image:'img1.jpg',
        des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aperiam quia esse, quas nemo magni debitis dolores ex rerum repellendus maiores, exercitationem corrupti, impedit eius non dignissimos consectetur eaque? Commodi.'
    }

    {
        index: '02',
        name:'desinger oufit',
        Image:'img2.jpg',
        des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aperiam quia esse, quas nemo magni debitis dolores ex rerum repellendus maiores, exercitationem corrupti, impedit eius non dignissimos consectetur eaque? Commodi.'
    }
    
    {
        index: '03',
        name:'chilling mood',
        Image:'img3.jpg',
        des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aperiam quia esse, quas nemo magni debitis dolores ex rerum repellendus maiores, exercitationem corrupti, impedit eius non dignissimos consectetur eaque? Commodi.'
    }
]

const nextBtn = document.querySelector('.nxt-ntn')
let smIngContainer = document.querySelector('.sm-product-img-container')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')
let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-Img')
let productDetail = document.querySelector('.Product-detail')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')
//console.log('Boton', nextBtn)
let currentProduct = 0

nextBtn.addEventListener('click', () =>{

if(currentProduct >= productData.length){
    currentProduct =0
}else{
    currentProduct++
}
productIndex.innerHTML = productData[currentProduct].index
productIndex.innerHTML = productData[currentProduct].index
})