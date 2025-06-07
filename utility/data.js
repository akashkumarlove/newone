import { ref } from 'vue';
import image1 from '@/assets/shop/image-1.png'
import image2 from '@/assets/shop/image-2.png'
import image3 from '@/assets/shop/image-3.png'
import image4 from '@/assets/shop/image-4.png'
import image5 from '@/assets/shop/image-5.png'
import image6 from '@/assets/shop/image-6.png'
import image7 from '@/assets/shop/image-7.png'
import image8 from '@/assets/shop/image-8.png'
import image9 from '@/assets/shop/image-9.png'


 
export const allProducts = ref( [
  {
    id: 1,
    name: 'Rounded Red Hat',
    price: 8.00,
    image: image1,
    colors: ['#FF6C6C'],
    brand: 'Minimog'
  },
  {
    id: 2,
    name: 'Linen-blend Shirt',
    price: 17.00,
    image: image2,
    colors: ['#FF7629'],
    brand: 'Denim'
  },
  {
    id: 3,
    name: 'Long-sleeve Coat',
    price: 106.00,
    image: image3,
    colors: ['#FFF06C'],
    brand: 'Abby'
  },
  {
    id: 4,
    name: 'Boxy Denim Hat',
    price: 25.00,
    image: image4,
    colors: ['#9BFF6C'],
    brand: 'Hats'
  },
  {
    id: 5,
    name: 'Linen Plain Top',
    price: 25.00,
    image: image5,
    colors: ['#6CFF9E'],
    brand: 'Brook'
  },
  {
    id: 6,
    name: 'Oversized T-shirt',
    price: 11.00,
    image: image6,
    colors: ['#6CFFDC'],
    brand: 'Abby'
  },
  {
    id: 7,
    name: 'Polarised Sunglasses',
    price: 18.00,
    image: image7,
    colors: ['#6CB9FF'],
    brand: 'Minimog'
  },
  {
    id: 8,
    name: 'Rockstar Jacket',
    price: 22.00,
    image: image8,
    colors: ['#B66CFF'],
    brand: 'Brook'
  },
  {
    id: 9,
    name: 'Dotted Black Dress',
    price: 20.00,
    image: image9,
    colors: ['#6C7BFF'],
    brand: 'Abby'
  }
])