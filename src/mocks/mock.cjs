//import data from './data.json'
const data = require('./data.json')

const getCategoriesNames = () => {
  return data.map(category => category.name)
}

const getCategoryByName = (name) => {
  return data.find(category => category.name === name)
}

const getProductsNames = (categoryName) => {

  const category = getCategoryByName(categoryName)
  const products = []
  console.log('Cat by name', category)
  console.log('Cat products', category.products)

  for (const item of category.products) {
    products.push(item.name)
  }

  return products
}

const getProductByName = (name) => {
  console.log('Prod name', name)
  for (const category of data) {
    const products = category.products
    const product = products.find(product => product.name === name)

    if (product) {
      return product
    }
  }

  return undefined
}

const getBrandsNames = (productName) => {

  const product = getProductByName(productName)

  const products = []

  for (const item of product.brands) {
    products.push(item.name)
  }

  return products
}

const getBrandByName = (name) => {
  console.log('Brand name', name)
  for (const category of data) {
    const products = category.products
    for (const product of products) {
      const brands = product.brands
      const brand = brands.find(brand => brand.name === name)

      if (brand) {
        return brand
      }
    }
  }

  return undefined
}

const categories = getCategoriesNames()
console.log(categories)
const productsCat1 = getProductsNames(categories[0])
console.log(productsCat1)
const product1 = getProductByName(productsCat1[0])
console.log(product1)
const brandsProd1 = getBrandsNames(product1.name)
console.log(brandsProd1)
const brandx = getBrandByName('Topi')
console.log(brandx)