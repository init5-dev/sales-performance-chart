import data from './data.json'

export const getCategoriesNames = () => {
  return data.map(category => category.name)
}

export const getCategoryByName = (name) => {
  return data.find(category => category.name === name)
}

export const getProductsNames = (categoryName) => {

  const category = getCategoryByName(categoryName)
  const products = []

  for (const item of category.products) {
    products.push(item.name)
  }

  return products
}

export const getProductByName = (name) => {
  for (const category of data) {
    const products = category.products
    const product = products.find(product => product.name === name)

    if (product) {
      return product
    }
  }

  return undefined
}

export const getBrandsNames = (productName) => {

  const product = getProductByName(productName)

  const products = []

  for (const item of product.brands) {
    products.push(item.name)
  }

  return products
}

export const getBrandByName = (name) => {
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