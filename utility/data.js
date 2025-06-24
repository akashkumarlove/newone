
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
    tags: 'Minimog',
    brand: 'Minimog',
    collection: 'Best sellers',
    size: 'S'
  },
  {
    id: 2,
    name: 'Linen-blend Shirt',
    price: 17.00,
    image: image2,
    colors: ['#FF7629'],
    tags: 'Denim',
    brand: 'Minimog',
    collection: 'Best sellers',
    size: 'S'
  },
  {
    id: 3,
    name: 'Long-sleeve Coat',
    price: 106.00,
    image: image3,
    colors: ['#FFF06C'],
    tags: 'Abby',
    brand: 'Retroli',
    collection: 'Best sellers',
    size: 'S'
  },
  {
    id: 4,
    name: 'Boxy Denim Hat',
    price: 60.00,
    image: image4,
    colors: ['#9BFF6C'],
    tags: 'Hats',
    brand: 'Retroli',
    collection: 'New arrivals',
    size: 'M'

  },
  {
    id: 5,
    name: 'Linen Plain Top',
    price: 80.00,
    image: image5,
    colors: ['#6CFF9E'],
    tags: 'Vagabond',
    brand: 'Brook',
    collection: 'New arrivals',
    size: 'M'
  },
  {
    id: 6,
    name: 'Oversized T-shirt',
    price: 120.00,
    image: image6,
    colors: ['#6CFFDC'],
    tags: 'Sunglasses',
    brand: 'Brook',
    collection: 'New arrivals',
    size: 'M'
  },
  {
    id: 7,
    name: 'Polarised Sunglasses',
    price: 160.00,
    image: image7,
    colors: ['#6CB9FF'],
    tags: 'Bechwear',
    brand: 'Learts',
    collection: 'Accessories',
    size: 'L'
  },
  {
    id: 8,
    name: 'Rockstar Jacket',
    price: 190.00,
    image: image8,
    colors: ['#B66CFF'],
    tags: 'Brook',
    brand: 'Vagabond',
    collection: 'Accessories',
    size: 'L'
  },
  {
    id: 9,
    name: 'Dotted Black Dress',
    price: 3500.00,
    image: image9,
    colors: ['#6C7BFF'],
    tags: 'Bels',
    brand: 'Abby',
    collection: 'Accessories',
    size: 'XL'
  }
])

export const priceRanges = ref(
  [
  { label: "$0-$50", min: 0, max: 50 },
  { label: "$50-$100", min: 50, max: 100 },
  { label: "$100-$150", min: 100, max: 150 },
  { label: "$150-$200", min: 150, max: 200 },
  { label: "$300-$400", min: 300, max: Infinity }
])

// Nuxt 3 API route: server/api/colors.ts

export const colors = ref(
    [
      { name: 'Sky Blue', value: '#3498db' },
      { name: 'Green', value: '#2ecc71' },
      { name: 'Red', value: '#e74c3c' },
      { name: 'Dark', value: '#2c3e50' },
      { name: 'Light Gray', value: '#ecf0f1' }
    ]
)



