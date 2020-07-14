import bottle from '../images/product-1/bottle.png'
import bottle2 from '../images/product-1/bottle2.png'
import mobo1 from '../images/product-1/mobo1.png'
import images from '../images/product-1/images.jpg'
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'
import p4 from '../images/p4.jpg'
import p5 from '../images/p5.jpg'
import p6 from '../images/p6.jpg'
import p7 from '../images/p7.jpg'





export default [
    {
            id: 1,
            productName:'Product1',
            productDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam, saepe distinctio blanditiis maiores ducimus suscipit placeat quae magni at modi numquam nulla dolore ad rem, consequuntur officiis. Minus, eveniet?',
            price: '100',
            productImgs: [bottle, bottle2, mobo1, images]
    
    },
    {
            id: 2,
            productName:'Product2',
            productDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam, saepe distinctio blanditiis maiores ducimus suscipit placeat quae magni at modi numquam nulla dolore ad rem, consequuntur officiis. Minus, eveniet?',
            price: '1500',
            productImgs: [p1, p2, p3, p4]
        
    },
    {
        id: 3,
        productName:'Product-3',
        productDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam, saepe distinctio blanditiis maiores ducimus suscipit placeat quae magni at modi numquam nulla dolore ad rem, consequuntur officiis. Minus, eveniet?',
        price: '35001200',
        productImgs: [p5, p6, p7]
    }

]