import React, { useContext, useEffect, useState } from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  getCategoriesNames,
  getProductsNames,
  getBrandsNames
} from '../mocks/mock'
import SelectionBar from './SelectionBar'
import { Box, Typography } from '@mui/material'

const SalesChart = () => {
  const [chartValues, setChartValues] = useState()

  return (
    <>
      <SelectionBar updateChart={setChartValues} />
      <br />
      <Typography
        variant='h6'
        component='div'
        sx={{ flexGrow: 1, textAlign: 'center' }}
      >
        Ventas por mes para:
      </Typography>
      <Box sx={{ pl: '7.5%' }}>
        <BarChart
          width={(window.innerWidth * 4) / 5}
          height={400}
          data={chartValues}
        >
          <Bar dataKey='sales' fill='#1976d2' />
          <CartesianGrid stroke='#ccc' />
          <XAxis dataKey='month' />
          <YAxis />
        </BarChart>
      </Box>
    </>
  )
}

export default SalesChart
