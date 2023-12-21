// Import React and necessary components from React and Material-UI
import React, { useContext, useEffect, useState } from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  getCategoriesNames,
  getProductsNames,
  getBrandsNames
} from '../mocks/mock' // Importing mock data functions
import SelectionBar from './SelectionBar' // Importing the SelectionBar component
import { Box, Typography } from '@mui/material'

// Define and export the SalesChart component
const SalesChart = () => {
  // State hook for managing the chart values
  const [chartValues, setChartValues] = useState()

  return (
    <>
      {/* Render the SelectionBar component and pass a function to update the chart values */}
      <SelectionBar updateChart={setChartValues} />
      <br />
      {/* Typography component for displaying text with variant, component, and styling */}
      <Typography
        variant='h6'
        component='div'
        sx={{ flexGrow: 1, textAlign: 'center' }}
      >
        Ventas por mes para:
      </Typography>
      {/* Box component with styling for layout control */}
      <Box sx={{ pl: '7.5%' }}>
        {/* BarChart component from Recharts library */}
        <BarChart
          width={(window.innerWidth * 4) / 5} // Set the width of the chart dynamically based on window width
          height={400}
          data={chartValues} // Pass chart data to the BarChart
        >
          {/* Bar component inside the BarChart for representing sales data */}
          <Bar dataKey='sales' fill='#1976d2' />
          {/* CartesianGrid component for displaying a grid in the chart */}
          <CartesianGrid stroke='#ccc' />
          {/* XAxis component for displaying the X-axis with month data */}
          <XAxis dataKey='month' />
          {/* YAxis component for displaying the Y-axis */}
          <YAxis />
        </BarChart>
      </Box>
    </>
  )
}

export default SalesChart // Export the SalesChart component
