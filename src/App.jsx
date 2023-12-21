
import { Box } from "@mui/material"
import NavBar from "./components/NavBar"
import SalesChart from "./components/SalesChart"

function App() {

  return (
    <>
      <Box sx={{ m: 0, p: 0 }}>
        <NavBar />
        <SalesChart />
      </Box>
    </>
  )
}

export default App
