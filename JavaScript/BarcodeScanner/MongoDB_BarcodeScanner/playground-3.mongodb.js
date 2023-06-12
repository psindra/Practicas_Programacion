// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('BarcodeShoppingList');

// Create a new document in the collection.
db.getCollection('listacompras').insertMany(
    [
        {
          "date": "2023-06-08T03:12:11.060Z",
          "supermercado": "super1",
          "listaProductos": [
            {
              "producto": "producto1",
              "cantidad": 1,
              "checked": true,
            },
            {
              "producto": "producto2",
              "cantidad": 2,
              "checked": false,
            },
            {
              "producto": "producto3",
              "cantidad": 3,
              "checked": true,
            }
          ],
          "precioTotal": 1234.56,
        },
        {
          "date": "2023-06-08T03:16:14.963Z",
          "supermercado": "super1",
          "listaProductos": [
            {
              "producto": "producto1",
              "cantidad": 1,
              "checked": true,
            },
            {
              "producto": "producto2",
              "cantidad": 2,
              "checked": false,
            },
            {
              "producto": "producto3",
              "cantidad": 3,
              "checked": true,
            }
          ],
          "precioTotal": 1234.56,
        },
        {
          "date": "2023-06-08T03:20:31.814Z",
          "supermercado": "super1",
          "listaProductos": [
            {
              "producto": "producto1",
              "cantidad": 1,
              "checked": true,
            },
            {
              "producto": "producto2",
              "cantidad": 2,
              "checked": false,
            },
            {
              "producto": "producto3",
              "cantidad": 3,
              "checked": true,
            }
          ],
          "precioTotal": 1234.56,
        },
        {
          "date": {
            "$date": "2023-06-08T03:12:11.060Z"
          },
          "supermercado": "M1",
          "listaProductos": [
            {
              "producto": "producto1",
              "cantidad": 1,
              "checked": true
            },
            {
              "producto": "producto2",
              "cantidad": 2,
              "checked": false
            },
            {
              "producto": "producto3",
              "cantidad": 3,
              "checked": true
            }
          ],
          "precioTotal": 1234.56
        }
      ]
)
