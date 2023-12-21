import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import Selector from './Selector'
import {
  getBrandsNames,
  getCategoriesNames,
  getProductByName,
  getProductsNames
} from '../mocks/mock'
import ChartContext from '../stores/context'
import { Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material'

const SelectionBar = () => {
  const state = useContext(ChartContext)

  const [categories, setCategories] = useState(getCategoriesNames())
  const [category, setCategory] = useState(categories[0])

  const [products, setProducts] = useState(getProductsNames(category))
  const [product, setProduct] = useState(products[0])

  const [brands, setBrands] = useState(getBrandsNames(product))
  const [brand, setBrand] = useState(brands[0])

  useEffect(() => {
    setProducts(getProductsNames(category))
    setProduct(products[0])
    console.log('CAT CHANG')
  }, [category])

  useEffect(() => {
    setProduct(products[0])
  }, [products])

  useEffect(() => {
    setBrands(getBrandsNames(product))
    setBrand(brands[0])
  }, [product])

  useEffect(() => {
    setBrand(brands[0])
  }, [brands])

  const handleCategoryChange = e => {
    setCategory(e.target.value)
  }

  const handleProductChange = e => {
    setProduct(e.target.value)
  }

  const handleBrandChange = e => {
    setBrand(e.target.value)
  }

  return (
    <Stack>
      <FormControl fullWidth>
        <InputLabel id={`categories-label`}>Categoría</InputLabel>
        <Select
          labelId={`categories-label`}
          id={'category'}
          value={category}
          label={'Categoría'}
          onChange={handleCategoryChange}
        >
          {categories.length &&
            categories.map((item: string, key: number) => (
              <MenuItem key={key} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id={`products-label`}>Categoría</InputLabel>
        <Select
          labelId={`products-label`}
          id={'product'}
          value={product}
          label={'Categoría'}
          onChange={handleProductChange}
        >
          {products.length &&
            products.map((item: string, key: number) => (
              <MenuItem key={key} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id={`brands-label`}>Categoría</InputLabel>
        <Select
          labelId={`brands-label`}
          id={'brand'}
          value={brand}
          label={'Categoría'}
          onChange={handleBrandChange}
        >
          {brands.length &&
            brands.map((item: string, key: number) => (
              <MenuItem key={key} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Stack>
  )
}

export default SelectionBar
