// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Presupuesto-PROD-1');

db.getCollection('movimientos').insertMany([
    {
    mes: '202501',
    tipo: 'gasto',
    nombre: 'Alquiler',
    monto: { total: 215782 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202502',
    tipo: 'gasto',
    nombre: 'Alquiler',
    monto: { total: 215782 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202503',
    tipo: 'gasto',
    nombre: 'Alquiler',
    monto: { total: 247786 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202504',
    tipo: 'gasto',
    nombre: 'Alquiler',
    monto: { total: 247786 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202505',
    tipo: 'gasto',
    nombre: 'Alquiler',
    monto: { total: 247786 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202506',
    tipo: 'gasto',
    nombre: 'Alquiler',
    monto: { total: 247786 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202507',
    tipo: 'gasto',
    nombre: 'Alquiler',
    monto: { total: 282393 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202508',
    tipo: 'gasto',
    nombre: 'Alquiler',
    monto: { total: 282393 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202509',
    tipo: 'gasto',
    nombre: 'Alquiler',
    monto: { total: 282393 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202510',
    tipo: 'gasto',
    nombre: 'Alquiler',
    monto: { total: 282393 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202511',
    tipo: 'gasto',
    nombre: 'Alquiler',
    monto: { total: 305471 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202512',
    tipo: 'gasto',
    nombre: 'Alquiler',
    monto: { total: 305471 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},
{
    mes: '202501',
    tipo: 'gasto',
    nombre: 'Expensas',
    monto: { total: 45989 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202502',
    tipo: 'gasto',
    nombre: 'Expensas',
    monto: { total: 37643 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202503',
    tipo: 'gasto',
    nombre: 'Expensas',
    monto: { total: 45740 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202504',
    tipo: 'gasto',
    nombre: 'Expensas',
    monto: { total: 55817 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202505',
    tipo: 'gasto',
    nombre: 'Expensas',
    monto: { total: 47359 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202506',
    tipo: 'gasto',
    nombre: 'Expensas',
    monto: { total: 65140 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202507',
    tipo: 'gasto',
    nombre: 'Expensas',
    monto: { total: 57002 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202508',
    tipo: 'gasto',
    nombre: 'Expensas',
    monto: { total: 54072 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202509',
    tipo: 'gasto',
    nombre: 'Expensas',
    monto: { total: 56384 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202510',
    tipo: 'gasto',
    nombre: 'Expensas',
    monto: { total: 69759 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202511',
    tipo: 'gasto',
    nombre: 'Expensas',
    monto: { total: 61124 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},	{
    mes: '202512',
    tipo: 'gasto',
    nombre: 'Expensas',
    monto: { total: 71581 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vivienda'
},
{
    mes: '202501',
    tipo: 'gasto',
    nombre: 'Cochera',
    monto: { total: 58000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Auto'
},	{
    mes: '202502',
    tipo: 'gasto',
    nombre: 'Cochera',
    monto: { total: 61000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Auto'
},	{
    mes: '202503',
    tipo: 'gasto',
    nombre: 'Cochera',
    monto: { total: 26000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Auto'
},	{
    mes: '202504',
    tipo: 'gasto',
    nombre: 'Cochera',
    monto: { total: 78000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Auto'
},	{
    mes: '202505',
    tipo: 'gasto',
    nombre: 'Cochera',
    monto: { total: 78000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Auto'
},	{
    mes: '202506',
    tipo: 'gasto',
    nombre: 'Cochera',
    monto: { total: 78000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Auto'
},	{
    mes: '202507',
    tipo: 'gasto',
    nombre: 'Cochera',
    monto: { total: 79170 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Auto'
},	{
    mes: '202508',
    tipo: 'gasto',
    nombre: 'Cochera',
    monto: { total: 80436 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Auto'
},	{
    mes: '202509',
    tipo: 'gasto',
    nombre: 'Cochera',
    monto: { total: 81964 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Auto'
},	{
    mes: '202510',
    tipo: 'gasto',
    nombre: 'Cochera',
    monto: { total: 83520 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Auto'
},	{
    mes: '202511',
    tipo: 'gasto',
    nombre: 'Cochera',
    monto: { total: 85273 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Auto'
},	{
    mes: '202512',
    tipo: 'gasto',
    nombre: 'Cochera',
    monto: { total: 87234 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Auto'
},
{
    mes: '202501',
    tipo: 'gasto',
    nombre: 'Visa BH',
    monto: { total: 184087.05 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202502',
    tipo: 'gasto',
    nombre: 'Visa BH',
    monto: { total: 226101.96 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202503',
    tipo: 'gasto',
    nombre: 'Visa BH',
    monto: { total: 334697.08 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202504',
    tipo: 'gasto',
    nombre: 'Visa BH',
    monto: { total: 252205.7 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202505',
    tipo: 'gasto',
    nombre: 'Visa BH',
    monto: { total: 208495.58 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202506',
    tipo: 'gasto',
    nombre: 'Visa BH',
    monto: { total: 201908.18 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202507',
    tipo: 'gasto',
    nombre: 'Visa BH',
    monto: { total: 263225.5 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202508',
    tipo: 'gasto',
    nombre: 'Visa BH',
    monto: { total: 303053.81 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202509',
    tipo: 'gasto',
    nombre: 'Visa BH',
    monto: { total: 531424.6 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202510',
    tipo: 'gasto',
    nombre: 'Visa BH',
    monto: { total: 437725.34 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202511',
    tipo: 'gasto',
    nombre: 'Visa BH',
    monto: { total: 212089.89 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202512',
    tipo: 'gasto',
    nombre: 'Visa BH',
    monto: { total: 243829.46 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},
{
    mes: '202501',
    tipo: 'gasto',
    nombre: 'PowerCard',
    monto: { total: 759332.7 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202502',
    tipo: 'gasto',
    nombre: 'PowerCard',
    monto: { total: 913374.37 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202503',
    tipo: 'gasto',
    nombre: 'PowerCard',
    monto: { total: 815102.17 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202504',
    tipo: 'gasto',
    nombre: 'PowerCard',
    monto: { total: 867155.9 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202505',
    tipo: 'gasto',
    nombre: 'PowerCard',
    monto: { total: 724158.36 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202506',
    tipo: 'gasto',
    nombre: 'PowerCard',
    monto: { total: 764866.29 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202507',
    tipo: 'gasto',
    nombre: 'PowerCard',
    monto: { total: 765915.15 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202508',
    tipo: 'gasto',
    nombre: 'PowerCard',
    monto: { total: 734058.22 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202509',
    tipo: 'gasto',
    nombre: 'PowerCard',
    monto: { total: 704420.37 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202510',
    tipo: 'gasto',
    nombre: 'PowerCard',
    monto: { total: 667314.13 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202511',
    tipo: 'gasto',
    nombre: 'PowerCard',
    monto: { total: 711039.19 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},	{
    mes: '202512',
    tipo: 'gasto',
    nombre: 'PowerCard',
    monto: { total: 767231.07 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Tarjetas'
},
										{
    mes: '202511',
    tipo: 'gasto',
    nombre: 'Comidita Mami',
    monto: { total: 25633 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Alimentación'
},	{
    mes: '202512',
    tipo: 'gasto',
    nombre: 'Comidita Mami',
    monto: { total: 26233.67 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Alimentación'
},
								{
    mes: '202509',
    tipo: 'gasto',
    nombre: 'OS Mami',
    monto: { total: 36950.5 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},	{
    mes: '202510',
    tipo: 'gasto',
    nombre: 'OS Mami',
    monto: { total: 37650.5 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},		
											
{
    mes: '202501',
    tipo: 'gasto',
    nombre: 'Limp Gracielita',
    monto: { total: 33000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Limpieza'
},	{
    mes: '202502',
    tipo: 'gasto',
    nombre: 'Limp Gracielita',
    monto: { total: 33000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Limpieza'
},	{
    mes: '202503',
    tipo: 'gasto',
    nombre: 'Limp Gracielita',
    monto: { total: 9000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Limpieza'
},		{
    mes: '202505',
    tipo: 'gasto',
    nombre: 'Limp Gracielita',
    monto: { total: 22400 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Limpieza'
},							
							{
    mes: '202508',
    tipo: 'gasto',
    nombre: 'Mecánico Auto',
    monto: { total: 509000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Auto'
},				
							{
    mes: '202508',
    tipo: 'gasto',
    nombre: 'Ropa',
    monto: { total: 46000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Vestimenta'
},				
								{
    mes: '202509',
    tipo: 'gasto',
    nombre: 'Donaciones',
    monto: { total: 30000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},			
{
    mes: '202501',
    tipo: 'gasto',
    nombre: 'Farmacity',
    monto: { total: 8516.94 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Salud'
},											
								{
    mes: '202509',
    tipo: 'gasto',
    nombre: 'Traumatólogo',
    monto: { total: 30000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Salud'
},		{
    mes: '202511',
    tipo: 'gasto',
    nombre: 'Traumatólogo',
    monto: { total: 35000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Salud'
},	
											
											
	{
    mes: '202502',
    tipo: 'gasto',
    nombre: 'Extracciones Ef',
    monto: { total: 50000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},		{
    mes: '202504',
    tipo: 'gasto',
    nombre: 'Extracciones Ef',
    monto: { total: 10000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},		{
    mes: '202506',
    tipo: 'gasto',
    nombre: 'Extracciones Ef',
    monto: { total: 16001 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},	{
    mes: '202507',
    tipo: 'gasto',
    nombre: 'Extracciones Ef',
    monto: { total: 10000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},		{
    mes: '202509',
    tipo: 'gasto',
    nombre: 'Extracciones Ef',
    monto: { total: 10000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},			
		{
    mes: '202503',
    tipo: 'gasto',
    nombre: 'Compras Cntdo',
    monto: { total: 20332 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},									
{
    mes: '202501',
    tipo: 'gasto',
    nombre: 'Club Parque VS',
    monto: { total: 36175 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},		{
    mes: '202503',
    tipo: 'gasto',
    nombre: 'Club Parque VS',
    monto: { total: 36175 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},								{
    mes: '202511',
    tipo: 'gasto',
    nombre: 'Club Parque VS',
    monto: { total: 56346 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},	{
    mes: '202512',
    tipo: 'gasto',
    nombre: 'Club Parque VS',
    monto: { total: 54346 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},
									{
    mes: '202510',
    tipo: 'gasto',
    nombre: 'Retiro 2025',
    monto: { total: 90000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Otros'
},		
											{
    mes: '202512',
    tipo: 'gasto',
    nombre: 'Comida Rome',
    monto: { total: 7000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Alimentación'
},
		{
    mes: '202503',
    tipo: 'gasto',
    nombre: 'Casamiento Rico',
    monto: { total: 92250 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Ocio'
},									
{
    mes: '202501',
    tipo: 'gasto',
    nombre: 'Gs Varios Salidas',
    monto: { total: 8016 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Ocio'
},	{
    mes: '202502',
    tipo: 'gasto',
    nombre: 'Gs Varios Salidas',
    monto: { total: 36415 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Ocio'
},	{
    mes: '202503',
    tipo: 'gasto',
    nombre: 'Gs Varios Salidas',
    monto: { total: 22740 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Ocio'
},	{
    mes: '202504',
    tipo: 'gasto',
    nombre: 'Gs Varios Salidas',
    monto: { total: 40400 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Ocio'
},	{
    mes: '202505',
    tipo: 'gasto',
    nombre: 'Gs Varios Salidas',
    monto: { total: 27000 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Ocio'
},	{
    mes: '202506',
    tipo: 'gasto',
    nombre: 'Gs Varios Salidas',
    monto: { total: 33840 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Ocio'
},	{
    mes: '202507',
    tipo: 'gasto',
    nombre: 'Gs Varios Salidas',
    monto: { total: 24670 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Ocio'
},	{
    mes: '202508',
    tipo: 'gasto',
    nombre: 'Gs Varios Salidas',
    monto: { total: 29353 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Ocio'
},	{
    mes: '202509',
    tipo: 'gasto',
    nombre: 'Gs Varios Salidas',
    monto: { total: 2200 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Ocio'
},		{
    mes: '202511',
    tipo: 'gasto',
    nombre: 'Gs Varios Salidas',
    monto: { total: 44700 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Ocio'
},	{
    mes: '202512',
    tipo: 'gasto',
    nombre: 'Gs Varios Salidas',
    monto: { total: 20384 },
    formaPago: 'Contado',
    habitual: true,
    categoria: 'Ocio'
}
]);
