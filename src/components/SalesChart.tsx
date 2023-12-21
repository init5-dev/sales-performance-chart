import React, { useContext, useEffect, useState } from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  getCategoriesNames,
  getProductsNames,
  getBrandsNames
} from '../mocks/mock'
import SelectionBar from './SelectionBar'

const SalesChart = () => {
  const [chartValues, setChartValues] = useState()

  return (
    <>
      <SelectionBar updateChart={setChartValues} />
      <BarChart width={600} height={600} data={chartValues}>
        <Bar dataKey='sales' fill='green' />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='month' />
        <YAxis />
      </BarChart>
    </>
  )
}

export default SalesChart
