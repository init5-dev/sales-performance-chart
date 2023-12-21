import React from "react"
import { useState } from 'react'
import './App.css'
import SalesChart from "./components/SalesChart"
import SelectionBar from "./components/SelectionBar"

function App() {

  return (
    <>
      <SelectionBar />
      <SalesChart />
    </>
  )
}

export default App
