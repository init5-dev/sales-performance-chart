import db from "./connection.mjs"

const data = [
  {
    "name": "Alimentos",
    "products": [
      {
        "name": "Cereales",
        "brands": [
          {
            "name": "Topi",
            "monthly_sales": [12, 45, 23, 47, 93, 123, 142, 203, 80, 98, 340, 212]
          },
          {
            "name": "Crispy Bites",
            "monthly_sales": [30, 50, 60, 40, 80, 90, 100, 120, 150, 110, 80, 70]
          },
          {
            "name": "Golden Flakes",
            "monthly_sales": [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125]
          }
        ]
      },
      {
        "name": "Bebidas",
        "brands": [
          {
            "name": "Quencher",
            "monthly_sales": [80, 120, 90, 110, 130, 100, 70, 60, 50, 40, 30, 20]
          },
          {
            "name": "FruitFizz",
            "monthly_sales": [40, 60, 80, 100, 120, 140, 160, 180, 200, 180, 160, 140]
          },
          {
            "name": "EnergizeX",
            "monthly_sales": [25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135]
          }
        ]
      }
    ]
  },
  {
    "name": "Electrónicos",
    "products": [
      {
        "name": "Teléfonos",
        "brands": [
          {
            "name": "TechCo",
            "monthly_sales": [30, 50, 70, 120, 90, 110, 80, 100, 130, 95, 75, 60]
          },
          {
            "name": "GadgetPro",
            "monthly_sales": [40, 60, 80, 100, 120, 140, 160, 180, 200, 180, 160, 140]
          },
          {
            "name": "SmartX",
            "monthly_sales": [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]
          }
        ]
      },
      {
        "name": "Computadoras",
        "brands": [
          {
            "name": "TechMinds",
            "monthly_sales": [50, 70, 90, 110, 130, 150, 170, 190, 210, 190, 170, 150]
          },
          {
            "name": "InnoTech",
            "monthly_sales": [60, 80, 100, 120, 140, 160, 180, 200, 220, 200, 180, 160]
          },
          {
            "name": "QuantumBytes",
            "monthly_sales": [45, 65, 85, 105, 125, 145, 165, 185, 205, 185, 165, 145]
          }
        ]
      }
    ]
  }
]

const seed = async () => {
  const collection = db.collection('products')
  await collection.insertMany(data)
  console.log('Seed complete!')
}

seed()

export default data