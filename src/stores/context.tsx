import { createContext } from "react";
import { getBrandsNames, getCategoriesNames, getProductsNames } from "../mocks/mock";

interface IChartData {
  name: string,
  value: number
}

export const initialData: IChartData = {
  name: '',
  value: 0
}

const ChartContext = createContext(initialData)
export default ChartContext