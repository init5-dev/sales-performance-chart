import React, { useContext, useEffect, useState } from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts'
//import SelectionBar from './SelectionBar'
import {
  getCategoriesNames,
  getProductsNames,
  getBrandsNames
} from '../mocks/mock'
import ChartContext, { initialData } from '../stores/context'
import SelectionBar from "./SelectionBar"

const SalesChart = () => {


  const datac = [
    { name: 'Geeksforgeeks', students: 400 },
    { name: 'Technical scripter', students: 700 },
    { name: 'Geek-i-knack', students: 200 },
    { name: 'Geek-o-mania', students: 1000 }
  ]

  return (
    <ChartContext.Provider value={initialData}>
      <SelectionBar />
      <BarChart width={600} height={600} data={datac}>
        <Bar dataKey='students' fill='green' />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='name' />
        <YAxis />
      </BarChart>
    </ChartContext.Provider>
    
  )
}

export default SalesChart
