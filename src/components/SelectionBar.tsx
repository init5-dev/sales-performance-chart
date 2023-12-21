// Import React and necessary components from React and Material-UI
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
} from '../mocks/mock' // Importing mock data functions
import { Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material'

// Define and export the SelectionBar component
const SelectionBar = ({ updateChart }) => {
  // State hooks for managing categories, products, and brands
  const [categories, setCategories] = useState(getCategoriesNames())
  const [category, setCategory] = useState(categories[0])

  const [products, setProducts] = useState(getProductsNames(category))
  const [product, setProduct] = useState(products[0])

  const [brands, setBrands] = useState(getBrandsNames(product))
  const [brand, setBrand] = useState(brands[0])

  // Effect hook to update the chart when the brand changes
  useEffect(() => {
    const results = formatMonthlySales(brand)
    updateChart(results)
  }, [brand])

  // Effect hook to update products when the category changes
  useEffect(() => {
    setProducts(getProductsNames(category))
    setProduct(products[0])
  }, [category])

  // Effect hook to update the selected product when the products change
  useEffect(() => {
    setProduct(products[0])
  }, [products])

  // Effect hook to update brands when the product changes
  useEffect(() => {
    setBrands(getBrandsNames(product))
    setBrand(brands[0])
  }, [product])

  // Effect hook to update the selected brand when the brands change
  useEffect(() => {
    setBrand(brands[0])
  }, [brands])

  // Event handler for handling category change
  const handleCategoryChange = e => {
    setCategory(e.target.value)
  }

  // Event handler for handling product change
  const handleProductChange = e => {
    setProduct(e.target.value)
  }

  // Event handler for handling brand change
  const handleBrandChange = e => {
    setBrand(e.target.value)
  }

  // Render a stack of form controls for category, product, and brand selection
  return (
    <Stack direction='row' spacing={2} alignContent='center' justifyContent='center'>
      {/* Form control for selecting a category */}
      <FormControl sx={{ width: '250px' }}>
        <InputLabel id={`categories-label`}>Categoría</InputLabel>
        <Select
          labelId={`categories-label`}
          id={'category'}
          value={category}
          label={'Categoría'}
          onChange={handleCategoryChange}
        >
          {/* Render menu items for categories */}
          {categories.length &&
            categories.map((item: string, key: number) => (
              <MenuItem key={key} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {/* Form control for selecting a product */}
      <FormControl sx={{ width: '250px' }}>
        <InputLabel id={`products-label`}>Producto</InputLabel>
        <Select
          labelId={`products-label`}
          id={'product'}
          value={product}
          label={'Categoría'}
          onChange={handleProductChange}
        >
          {/* Render menu items for products */}
          {products.length &&
            products.map((item: string, key: number) => (
              <MenuItem key={key} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {/* Form control for selecting a brand */}
      <FormControl sx={{ width: '250px' }}>
        <InputLabel id={`brands-label`}>Marca</InputLabel>
        <Select
          labelId={`brands-label`}
          id={'brand'}
          value={brand}
          label={'Categoría'}
          onChange={handleBrandChange}
        >
          {/* Render menu items for brands */}
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

export default SelectionBar // Export the SelectionBar component
