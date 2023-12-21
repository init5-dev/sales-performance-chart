import React from "react"
import { useState, useEffect } from "react"
import {Box, Select, MenuItem, InputLabel, FormControl} from '@mui/material'

const Selector = ({id, label, list, value, handleChange}) => {
  return (
      <FormControl fullWidth>
        <InputLabel id={`${id}-label`}>Categoría</InputLabel>
        <Select
          labelId={`${id}-label`}
          id={id}
          value={value}
          label={label}
          onChange={handleChange}
        >
          {
            list && list.map((item, key) => <MenuItem key={key} value={item}>{item}</MenuItem>)
          }
        </Select>
      </FormControl>
  )
}

export default Selector