import React from 'react'
import { useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import Selector from './Selector'
import { getBrandsNames, getCategoriesNames, getProductsNames } from "../mocks/mock"

const SelectionBar = () => {
  const [categories, setCategories] = useState(getCategoriesNames())
  const [category, setCategory] = useState(categories[0])

  const [products, setProducts] = useState(getProductsNames(category))
  const [product, setProduct] = useState(products[0])

  const [brands, setBrands] = useState(getBrandsNames(product))
  const [brand, setBrand] = useState(brands[0])

  useEffect(() => {
    setProducts(getProductsNames(category))
  }, [category])

  useEffect(() => {
    setProduct(products[0])
  }, [products])

  useEffect(() => {
    setBrands(getBrandsNames(product))
  }, [product])

  useEffect(() => {
    setBrand(brands[0])
  }, [brands])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleProductChange = (e) => {
    setProduct(e.target.value)
  }

  const handleBrandChange = (e) => {
    setBrand(e.target.value)
  }

  return (
    <Stack>
      <Selector id='category' label='Categorías' list={categories} value={category} handleChange={handleCategoryChange}/>
      <Selector id='product' label='Productos' list={products} value={product} handleChange={handleProductChange} />
      <Selector id='brand' label='Marcas' list={brands} value={brand} handleChange={handleProductChange} />
    </Stack>
  )
}

export default SelectionBar
