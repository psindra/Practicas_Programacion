// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Presupuesto-PROD-1');

// Create a new document in the collection.
db.getCollection('movimientos').insertMany([
    {
    mes: '202501',
    nombre: 'Sueldo',
    monto: { total: 1908703.54, habitual: 1608703.54 },
    formaPago: 'Contado',
    tipo: 'ingreso', habitual: true,
    categoria: 'Vivienda'
},
	{
    mes: '202502',
    nombre: 'Sueldo',
    monto: { total: 1645939.75, habitual: 1664304.83 },
    formaPago: 'Contado',
    tipo: 'ingreso', habitual: true,
    categoria: 'Vivienda'
},
	{
    mes: '202503',
    nombre: 'Sueldo',
    monto: { total: 1923034.26, habitual: 1664304.83 },
    formaPago: 'Contado',
    tipo: 'ingreso', habitual: true,
    categoria: 'Vivienda'
},
	{
    mes: '202504',
    nombre: 'Sueldo',
    monto: { total: 1814304.83, habitual: 1664304.83 },
    formaPago: 'Contado',
    tipo: 'ingreso', habitual: true,
    categoria: 'Vivienda'
},
	{
    mes: '202505',
    nombre: 'Sueldo',
    monto: { total: 2645396, habitual: 2087944 },
    formaPago: 'Contado',
    tipo: 'ingreso', habitual: true,
    categoria: 'Vivienda'
},
	{
    mes: '202506',
    nombre: 'Sueldo',
    monto: { total: 2077090.96, habitual: 2077090.96 },
    formaPago: 'Contado',
    tipo: 'ingreso', habitual: true,
    categoria: 'Vivienda'
},
	{
    mes: '202507',
    nombre: 'Sueldo',
    monto: { total: 3061412.68, habitual: 2065609.11 },
    formaPago: 'Contado',
    tipo: 'ingreso', habitual: true,
    categoria: 'Vivienda'
},
	{
    mes: '202508',
    nombre: 'Sueldo',
    monto: { total: 2212131.8, habitual: 2212131.8 },
    formaPago: 'Contado',
    tipo: 'ingreso', habitual: true,
    categoria: 'Vivienda'
},
	{
    mes: '202509',
    nombre: 'Sueldo',
    monto: { total: 2229867.77, habitual: 2229867.77 },
    formaPago: 'Contado',
    tipo: 'ingreso', habitual: true,
    categoria: 'Vivienda'
},
	{
    mes: '202510',
    nombre: 'Sueldo',
    monto: { total: 2297555.57, habitual: 2297555.57 },
    formaPago: 'Contado',
    tipo: 'ingreso', habitual: true,
    categoria: 'Vivienda'
},
	{
    mes: '202511',
    nombre: 'Sueldo',
    monto: { total: 3029102.45, habitual: 2379900.64 },
    formaPago: 'Contado',
    tipo: 'ingreso', habitual: true,
    categoria: 'Vivienda'
},
	{
    mes: '202512',
    nombre: 'Sueldo',
    monto: { total: 3459997.01, habitual: 2394703.92 },
    formaPago: 'Contado',
    tipo: 'ingreso', habitual: true,
    categoria: 'Vivienda'
},


]);
