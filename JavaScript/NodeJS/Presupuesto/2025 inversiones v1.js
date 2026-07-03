/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Presupuesto-PROD-1');

// Create a new document in the collection.
db.getCollection('movimientos').insertMany([{
"mes": "202501",
"nombre": "BYMA:AAPL",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:AAPL",
"cantidadInstrumento": 10,
"montoARS": 132020.1,
"montoUSD": 107.1
},
{
"mes": "202501",
"nombre": "BYMA:AMD",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:AMD",
"cantidadInstrumento": 11,
"montoARS": 139371.30999999997,
"montoUSD": 111.15000000000003
},
{
"mes": "202501",
"nombre": "BYMA:AMZN",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:AMZN",
"cantidadInstrumento": 31,
"montoARS": 53941.03,
"montoUSD": 41.98
},
{
"mes": "202501",
"nombre": "BYMA:GLOB",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:GLOB",
"cantidadInstrumento": 4,
"montoARS": 40018.9,
"montoUSD": 31.74
},
{
"mes": "202501",
"nombre": "BYMA:NVDA",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:NVDA",
"cantidadInstrumento": 25,
"montoARS": 148162.59999999998,
"montoUSD": 116.97500000000002
},
{
"mes": "202501",
"nombre": "BYMA:TSLA",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:TSLA",
"cantidadInstrumento": 3,
"montoARS": 56216.79,
"montoUSD": 45.675000000000004
},
{
"mes": "202502",
"nombre": "BYMA:AMD",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:AMD",
"cantidadInstrumento": 10,
"montoARS": 132876.03999999998,
"montoUSD": 99.78000000000002
},
{
"mes": "202502",
"nombre": "BYMA:AMZN",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:AMZN",
"cantidadInstrumento": 9,
"montoARS": 15155.600000000002,
"montoUSD": 11.475000000000001
},
{
"mes": "202502",
"nombre": "BYMA:NVDA",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:NVDA",
"cantidadInstrumento": 10,
"montoARS": 58084.81,
"montoUSD": 43.55000000000001
},
{
"mes": "202503",
"nombre": "BYMA:AAPL",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:AAPL",
"cantidadInstrumento": 13,
"montoARS": 159939.65,
"montoUSD": 120.99500000000003
},
{
"mes": "202503",
"nombre": "BYMA:AMD",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:AMD",
"cantidadInstrumento": 12,
"montoARS": 135418.78,
"montoUSD": 103.06499999999998
},
{
"mes": "202503",
"nombre": "BYMA:AMZN",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:AMZN",
"cantidadInstrumento": 12,
"montoARS": 19601.62,
"montoUSD": 16.555
},
{
"mes": "202503",
"nombre": "BYMA:GLOB",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:GLOB",
"cantidadInstrumento": 1,
"montoARS": 6747.03,
"montoUSD": 5.57
},
{
"mes": "202503",
"nombre": "BYMA:NVDA",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:NVDA",
"cantidadInstrumento": 12,
"montoARS": 74328.01999999999,
"montoUSD": 63.86750000000002
},
{
"mes": "202505",
"nombre": "BYMA:INTC",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:INTC",
"cantidadInstrumento": 6,
"montoARS": 31868.28,
"montoUSD": 25.244999999999997
},
{
"mes": "202505",
"nombre": "BYMA:S29Y6",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:S29Y6",
"cantidadInstrumento": 70000,
"montoARS": 67235.50000000001,
"montoUSD": 52.651391509962465
},
{
"mes": "202505",
"nombre": "BYMA:T15E7",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:T15E7",
"cantidadInstrumento": 293000,
"montoARS": 303514.64999999997,
"montoUSD": 234.7978536463763
},
{
"mes": "202505",
"nombre": "BYMA:T30J6",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:T30J6",
"cantidadInstrumento": 260000,
"montoARS": 272045.73,
"montoUSD": 211.26231563387475
},
{
"mes": "202505",
"nombre": "BYMA:TTD26",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:TTD26",
"cantidadInstrumento": 42038,
"montoARS": 43977.48000000001,
"montoUSD": 33.77063784404782
},
{
"mes": "202505",
"nombre": "BYMA:TZX26",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:TZX26",
"cantidadInstrumento": 60000,
"montoARS": 155880.97999999998,
"montoUSD": 123.03738472849491
},
{
"mes": "202505",
"nombre": "BYMA:TZXM6",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:TZXM6",
"cantidadInstrumento": 20000,
"montoARS": 32012.440000000002,
"montoUSD": 25.18826087029007
},
{
"mes": "202506",
"nombre": "BYMA:AAPL",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:AAPL",
"cantidadInstrumento": 14,
"montoARS": 192871.18,
"montoUSD": 142.8
},
{
"mes": "202506",
"nombre": "BYMA:S29Y6",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:S29Y6",
"cantidadInstrumento": 160000,
"montoARS": 158498.86,
"montoUSD": 118.80534170331823
},
{
"mes": "202506",
"nombre": "BYMA:T15D5",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:T15D5",
"cantidadInstrumento": 259900,
"montoARS": 391094.18,
"montoUSD": 289.87309992132924
},
{
"mes": "202506",
"nombre": "BYMA:TTD26",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:TTD26",
"cantidadInstrumento": 80000,
"montoARS": 87594.48,
"montoUSD": 64.51235675075556
},
{
"mes": "202507",
"nombre": "BYMA:S29Y6",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:S29Y6",
"cantidadInstrumento": 397000,
"montoARS": 381789.5799999999,
"montoUSD": 284.827484878778
},
{
"mes": "202507",
"nombre": "BYMA:T15D5",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:T15D5",
"cantidadInstrumento": 43100,
"montoARS": 64472.630000000005,
"montoUSD": 47.04571467310544
},
{
"mes": "202507",
"nombre": "BYMA:T15E7",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:T15E7",
"cantidadInstrumento": 280000,
"montoARS": 275674.4600000001,
"montoUSD": 202.2055843732878
},
{
"mes": "202507",
"nombre": "BYMA:T30J6",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:T30J6",
"cantidadInstrumento": 396000,
"montoARS": 403180.36999999994,
"montoUSD": 296.4134290659637
},
{
"mes": "202507",
"nombre": "BYMA:TTD26",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:TTD26",
"cantidadInstrumento": 205200,
"montoARS": 218521.32,
"montoUSD": 156.02003258788122
},
{
"mes": "202507",
"nombre": "BYMA:TZV26",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:TZV26",
"cantidadInstrumento": 23,
"montoARS": 29862.550000000003,
"montoUSD": 20.931414652567977
},
{
"mes": "202507",
"nombre": "BYMA:TZX26",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:TZX26",
"cantidadInstrumento": 30000,
"montoARS": 75111.12,
"montoUSD": 54.70074189249223
},
{
"mes": "202507",
"nombre": "BYMA:TZXM6",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:TZXM6",
"cantidadInstrumento": 120000,
"montoARS": 189074.44,
"montoUSD": 142.34316012199437
},
{
"mes": "202508",
"nombre": "BYMA:T13F6",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:T13F6",
"cantidadInstrumento": 36000,
"montoARS": 44085.2,
"montoUSD": 31.970791201545477
},
{
"mes": "202508",
"nombre": "BYMA:T15E7",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:T15E7",
"cantidadInstrumento": 29000,
"montoARS": 25933.43,
"montoUSD": 17.15898469099265
},
{
"mes": "202508",
"nombre": "BYMA:T30J6",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:T30J6",
"cantidadInstrumento": 148000,
"montoARS": 150734.34000000003,
"montoUSD": 99.29396591976572
},
{
"mes": "202508",
"nombre": "BYMA:TTD26",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:TTD26",
"cantidadInstrumento": 31000,
"montoARS": 33228.61,
"montoUSD": 24.119806010944135
},
{
"mes": "202509",
"nombre": "BYMA:D28N5",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:D28N5",
"cantidadInstrumento": 43,
"montoARS": 63897.729999999996,
"montoUSD": 39.861536612552875
},
{
"mes": "202509",
"nombre": "BYMA:T13F6",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:T13F6",
"cantidadInstrumento": 130000,
"montoARS": 157252.94999999998,
"montoUSD": 103.760010444454
},
{
"mes": "202509",
"nombre": "BYMA:T15E7",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:T15E7",
"cantidadInstrumento": -600000,
"montoARS": 568585.36,
"montoUSD": -385.42303203666665
},
{
"mes": "202509",
"nombre": "BYMA:T30J6",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:T30J6",
"cantidadInstrumento": -800000,
"montoARS": 834992.05,
"montoUSD": -566.0102955122024
},
{
"mes": "202509",
"nombre": "BYMA:TTD26",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:TTD26",
"cantidadInstrumento": 29000,
"montoARS": 28280.969999999998,
"montoUSD": 18.971044129906545
},
{
"mes": "202509",
"nombre": "BYMA:TZV26",
"formaPago": "Contado",
"tipo": "inversion",
"plataforma": "IOL",
"instrumento": "BYMA:TZV26",
"cantidadInstrumento": 9,
"montoARS": 12808.99,
"montoUSD": 8.13759393973656
}
]);
