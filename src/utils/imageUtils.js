// Import all product images directly
import yx1EarphonesDesktop from '../assets/product-yx1-earphones/desktop/image-product.jpg'
import yx1EarphonesCategoryDesktop from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
import yx1EarphonesGallery1Desktop from '../assets/product-yx1-earphones/desktop/image-gallery-1.jpg'
import yx1EarphonesGallery2Desktop from '../assets/product-yx1-earphones/desktop/image-gallery-2.jpg'
import yx1EarphonesGallery3Desktop from '../assets/product-yx1-earphones/desktop/image-gallery-3.jpg'
import xx59HeadphonesDesktop from '../assets/product-xx59-headphones/desktop/image-product.jpg'
import xx59HeadphonesCategoryDesktop from '../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import xx59HeadphonesGallery1Desktop from '../assets/product-xx59-headphones/desktop/image-gallery-1.jpg'
import xx59HeadphonesGallery2Desktop from '../assets/product-xx59-headphones/desktop/image-gallery-2.jpg'
import xx59HeadphonesGallery3Desktop from '../assets/product-xx59-headphones/desktop/image-gallery-3.jpg'
import xx99MarkOneHeadphonesDesktop from '../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
import xx99MarkOneHeadphonesCategoryDesktop from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import xx99MarkOneHeadphonesGallery1Desktop from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
import xx99MarkOneHeadphonesGallery2Desktop from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import xx99MarkOneHeadphonesGallery3Desktop from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'
import xx99MarkTwoHeadphonesDesktop from '../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
import xx99MarkTwoHeadphonesCategoryDesktop from '../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import xx99MarkTwoHeadphonesGallery1Desktop from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import xx99MarkTwoHeadphonesGallery2Desktop from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import xx99MarkTwoHeadphonesGallery3Desktop from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
import zx7SpeakerDesktop from '../assets/product-zx7-speaker/desktop/image-product.jpg'
import zx7SpeakerCategoryDesktop from '../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import zx7SpeakerGallery1Desktop from '../assets/product-zx7-speaker/desktop/image-gallery-1.jpg'
import zx7SpeakerGallery2Desktop from '../assets/product-zx7-speaker/desktop/image-gallery-2.jpg'
import zx7SpeakerGallery3Desktop from '../assets/product-zx7-speaker/desktop/image-gallery-3.jpg'
import zx9SpeakerDesktop from '../assets/product-zx9-speaker/desktop/image-product.jpg'
import zx9SpeakerCategoryDesktop from '../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import zx9SpeakerGallery1Desktop from '../assets/product-zx9-speaker/desktop/image-gallery-1.jpg'
import zx9SpeakerGallery2Desktop from '../assets/product-zx9-speaker/desktop/image-gallery-2.jpg'
import zx9SpeakerGallery3Desktop from '../assets/product-zx9-speaker/desktop/image-gallery-3.jpg'

// Import shared images
import xx99MarkOneHeadphonesSharedDesktop from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import xx99MarkTwoHeadphonesSharedDesktop from '../assets/shared/desktop/image-xx99-mark-two-headphones.jpg'
import xx59HeadphonesSharedDesktop from '../assets/shared/desktop/image-xx59-headphones.jpg'
import zx9SpeakerSharedDesktop from '../assets/shared/desktop/image-zx9-speaker.jpg'
import zx7SpeakerSharedDesktop from '../assets/shared/desktop/image-zx7-speaker.jpg'

// Debug: Log all imported images
console.log('Imported images:', {
  yx1EarphonesDesktop,
  yx1EarphonesCategoryDesktop,
  yx1EarphonesGallery1Desktop,
  yx1EarphonesGallery2Desktop,
  yx1EarphonesGallery3Desktop,
  xx59HeadphonesDesktop,
  xx59HeadphonesCategoryDesktop,
  xx59HeadphonesGallery1Desktop,
  xx59HeadphonesGallery2Desktop,
  xx59HeadphonesGallery3Desktop,
  xx99MarkOneHeadphonesDesktop,
  xx99MarkOneHeadphonesCategoryDesktop,
  xx99MarkOneHeadphonesGallery1Desktop,
  xx99MarkOneHeadphonesGallery2Desktop,
  xx99MarkOneHeadphonesGallery3Desktop,
  xx99MarkTwoHeadphonesDesktop,
  xx99MarkTwoHeadphonesCategoryDesktop,
  xx99MarkTwoHeadphonesGallery1Desktop,
  xx99MarkTwoHeadphonesGallery2Desktop,
  xx99MarkTwoHeadphonesGallery3Desktop,
  zx7SpeakerDesktop,
  zx7SpeakerCategoryDesktop,
  zx7SpeakerGallery1Desktop,
  zx7SpeakerGallery2Desktop,
  zx7SpeakerGallery3Desktop,
  zx9SpeakerDesktop,
  zx9SpeakerCategoryDesktop,
  zx9SpeakerGallery1Desktop,
  zx9SpeakerGallery2Desktop,
  zx9SpeakerGallery3Desktop,
  xx99MarkOneHeadphonesSharedDesktop,
  xx99MarkTwoHeadphonesSharedDesktop,
  xx59HeadphonesSharedDesktop,
  zx9SpeakerSharedDesktop,
  zx7SpeakerSharedDesktop
})

// Create a mapping of paths to imported images
const imageMap = {
  // Product images
  '/assets/product-yx1-earphones/desktop/image-product.jpg': yx1EarphonesDesktop,
  '/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg': yx1EarphonesCategoryDesktop,
  '/assets/product-yx1-earphones/desktop/image-gallery-1.jpg': yx1EarphonesGallery1Desktop,
  '/assets/product-yx1-earphones/desktop/image-gallery-2.jpg': yx1EarphonesGallery2Desktop,
  '/assets/product-yx1-earphones/desktop/image-gallery-3.jpg': yx1EarphonesGallery3Desktop,
  
  '/assets/product-xx59-headphones/desktop/image-product.jpg': xx59HeadphonesDesktop,
  '/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg': xx59HeadphonesCategoryDesktop,
  '/assets/product-xx59-headphones/desktop/image-gallery-1.jpg': xx59HeadphonesGallery1Desktop,
  '/assets/product-xx59-headphones/desktop/image-gallery-2.jpg': xx59HeadphonesGallery2Desktop,
  '/assets/product-xx59-headphones/desktop/image-gallery-3.jpg': xx59HeadphonesGallery3Desktop,
  
  '/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg': xx99MarkOneHeadphonesDesktop,
  '/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg': xx99MarkOneHeadphonesCategoryDesktop,
  '/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg': xx99MarkOneHeadphonesGallery1Desktop,
  '/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg': xx99MarkOneHeadphonesGallery2Desktop,
  '/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg': xx99MarkOneHeadphonesGallery3Desktop,
  
  '/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg': xx99MarkTwoHeadphonesDesktop,
  '/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg': xx99MarkTwoHeadphonesCategoryDesktop,
  '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg': xx99MarkTwoHeadphonesGallery1Desktop,
  '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg': xx99MarkTwoHeadphonesGallery2Desktop,
  '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg': xx99MarkTwoHeadphonesGallery3Desktop,
  
  '/assets/product-zx7-speaker/desktop/image-product.jpg': zx7SpeakerDesktop,
  '/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg': zx7SpeakerCategoryDesktop,
  '/assets/product-zx7-speaker/desktop/image-gallery-1.jpg': zx7SpeakerGallery1Desktop,
  '/assets/product-zx7-speaker/desktop/image-gallery-2.jpg': zx7SpeakerGallery2Desktop,
  '/assets/product-zx7-speaker/desktop/image-gallery-3.jpg': zx7SpeakerGallery3Desktop,
  
  '/assets/product-zx9-speaker/desktop/image-product.jpg': zx9SpeakerDesktop,
  '/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg': zx9SpeakerCategoryDesktop,
  '/assets/product-zx9-speaker/desktop/image-gallery-1.jpg': zx9SpeakerGallery1Desktop,
  '/assets/product-zx9-speaker/desktop/image-gallery-2.jpg': zx9SpeakerGallery2Desktop,
  '/assets/product-zx9-speaker/desktop/image-gallery-3.jpg': zx9SpeakerGallery3Desktop,
  
  // Shared images
  '/assets/shared/desktop/image-xx99-mark-one-headphones.jpg': xx99MarkOneHeadphonesSharedDesktop,
  '/assets/shared/desktop/image-xx99-mark-two-headphones.jpg': xx99MarkTwoHeadphonesSharedDesktop,
  '/assets/shared/desktop/image-xx59-headphones.jpg': xx59HeadphonesSharedDesktop,
  '/assets/shared/desktop/image-zx9-speaker.jpg': zx9SpeakerSharedDesktop,
  '/assets/shared/desktop/image-zx7-speaker.jpg': zx7SpeakerSharedDesktop,
}

console.log('Image map created:', imageMap)

export function getImageUrl(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  
  // Check if we have the image in our map
  if (imageMap[cleanPath]) {
    console.log(`Found image for path: ${path} -> ${imageMap[cleanPath]}`)
    return imageMap[cleanPath]
  }
  
  // Fallback: try to construct a path that might work
  console.warn(`Image not found in map: ${path}`)
  
  // Try to create a new URL for the path
  try {
    const url = new URL(cleanPath, import.meta.url).href
    console.log(`Created URL for: ${path} -> ${url}`)
    return url
  } catch (error) {
    console.error(`Failed to create URL for: ${path}`, error)
    // Return a placeholder image or the original path
    return cleanPath
  }
}

// Pre-import all product images for better performance
export const productImages = {
  // YX1 Earphones
  'yx1-earphones': {
    product: yx1EarphonesDesktop,
    category: yx1EarphonesCategoryDesktop,
    gallery: {
      first: yx1EarphonesGallery1Desktop,
      second: yx1EarphonesGallery2Desktop,
      third: yx1EarphonesGallery3Desktop
    }
  },
  // XX59 Headphones
  'xx59-headphones': {
    product: xx59HeadphonesDesktop,
    category: xx59HeadphonesCategoryDesktop,
    gallery: {
      first: xx59HeadphonesGallery1Desktop,
      second: xx59HeadphonesGallery2Desktop,
      third: xx59HeadphonesGallery3Desktop
    }
  },
  // XX99 Mark I Headphones
  'xx99-mark-one-headphones': {
    product: xx99MarkOneHeadphonesDesktop,
    category: xx99MarkOneHeadphonesCategoryDesktop,
    gallery: {
      first: xx99MarkOneHeadphonesGallery1Desktop,
      second: xx99MarkOneHeadphonesGallery2Desktop,
      third: xx99MarkOneHeadphonesGallery3Desktop
    }
  },
  // XX99 Mark II Headphones
  'xx99-mark-two-headphones': {
    product: xx99MarkTwoHeadphonesDesktop,
    category: xx99MarkTwoHeadphonesCategoryDesktop,
    gallery: {
      first: xx99MarkTwoHeadphonesGallery1Desktop,
      second: xx99MarkTwoHeadphonesGallery2Desktop,
      third: xx99MarkTwoHeadphonesGallery3Desktop
    }
  },
  // ZX7 Speaker
  'zx7-speaker': {
    product: zx7SpeakerDesktop,
    category: zx7SpeakerCategoryDesktop,
    gallery: {
      first: zx7SpeakerGallery1Desktop,
      second: zx7SpeakerGallery2Desktop,
      third: zx7SpeakerGallery3Desktop
    }
  },
  // ZX9 Speaker
  'zx9-speaker': {
    product: zx9SpeakerDesktop,
    category: zx9SpeakerCategoryDesktop,
    gallery: {
      first: zx9SpeakerGallery1Desktop,
      second: zx9SpeakerGallery2Desktop,
      third: zx9SpeakerGallery3Desktop
    }
  }
}

console.log('Product images created:', productImages) 