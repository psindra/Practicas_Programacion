// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('BarcodeShoppingList-2_0');

// Create a new document in the collection.
db.getCollection('detalleproductos').insert(

  [
    {
      "_id": new ObjectId("649b764b5488fb284cb7ea92"),
      "barcodeProducto": 10,
      "descripcionProducto": "Crem Dent OB Extr Blanc BT 150gr *3",
      "historicoPrecios": [
        {
          "precio": 465,
          "cantidad": 3
        }
      ]
    },
    {
      "_id": new ObjectId("649b76775488fb284cb7ea95"),
      "barcodeProducto": 7793704000928,
      "descripcionProducto": "Yerba Playadito 1Kg",
      "historicoPrecios": [
        {
          "precio": 899.99,
          "cantidad": 1,
        }
      ]
    },
    {
      "_id": new ObjectId("649b774c5488fb284cb7ea97"),
      "barcodeProducto": 12,
      "descripcionProducto": "Copos Maiz Aro Azucar PQx2.5Kg",
      "historicoPrecios": [
        {
          "precio": 2199.99,
          "cantidad": 2,
        }
      ]
    },
    {
      "_id": new ObjectId("649b78f45488fb284cb7ea9b"),
      "barcodeProducto": 14,
      "descripcionProducto": "Queso Cremoso ARO Trozado ",
      "historicoPrecios": [
        {
          "precio": 2187.88,
          "cantidad": 1
        }
      ]
    },
    {
      "_id": new ObjectId("649b75218c9539570972abcf"),
      "barcodeProducto": 7891024124628,
      "descripcionProducto": "Cr Dent Colgate Pro Aliv 110gr",
      "historicoPrecios": [
        {
          "precio": 537.94,
          "cantidad": 1,
        }
      ]
    }
  ]
);
