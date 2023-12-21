import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import {
  formatMonthlySales,
  getBrandsNames,
  getCategoriesNames,
  getMonthlySales,
  getProductByName,
  getProductsNames
} from '../mocks/mock'
import { Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material'

const SelectionBar = ({ updateChart }) => {
  const [categories, setCategories] = useState(getCategoriesNames())
  const [category, setCategory] = useState(categories[0])

  const [products, setProducts] = useState(getProductsNames(category))
  const [product, setProduct] = useState(products[0])

  const [brands, setBrands] = useState(getBrandsNames(product))
  const [brand, setBrand] = useState(brands[0])

  useEffect(() => {
    const results = formatMonthlySales(brand)
    updateChart(results)
  }, [brand])

  useEffect(() => {
    setProducts(getProductsNames(category))
    setProduct(products[0])
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
    <Stack direction='row' spacing={2} alignContent='center' justifyContent='center'>
      <FormControl sx={{ width: '250px' }}>
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
      <FormControl sx={{ width: '250px' }}>
        <InputLabel id={`products-label`}>Producto</InputLabel>
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
      <FormControl sx={{ width: '250px' }}>
        <InputLabel id={`brands-label`}>Marca</InputLabel>
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
