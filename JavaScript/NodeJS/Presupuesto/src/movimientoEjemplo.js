import Gasto from './database_mongoose/models/gasto.js';
import Inversion from './database_mongoose/models/inversion.js';
import Movimiento from './database_mongoose/models/movimiento.js';

Movimiento.deleteMany({}).then(() => console.log("Movimientos eliminados")).catch(err => console.error("Error al eliminar movimientos: ", err));

const movimientoEjemplo = new Movimiento({
    tipo: "ingreso",
    mes: "202401",
    nombre: "Sueldo",
    monto: { total: 765112.52 * 100, extra: 200000 * 100, habitual: 565112.52 * 100 },
    formaPago: "Contado"
});
movimientoEjemplo.save()
    .then(nvoMovimiento => {
        console.log(nvoMovimiento);
        
        nvoMovimiento.nombre = "Sueldo editado";
        new Movimiento(nvoMovimiento).save()
    });

Gasto.create({
    mes: "202401",
    nombre: "Alquiler",
    monto: { total: 39074 * 100 },
    monto: { total: 1111 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Vivienda"
})
.then(nvoGasto => {
    nvoGasto.nombre = "Alquiler editado";
    nvoGasto._id = nvoGasto._id.toString();
    console.log(nvoGasto);
    new Gasto(nvoGasto).save()
})
.catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202401",
    nombre: "Expensas",
    monto: { total: 18775.00 * 100 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Vivienda"
});

Gasto.create({
    mes: "202401",
    nombre: "Cochera",
    monto: { total: 28000.00 * 100 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Vivienda"
});


Gasto.create({
    mes: "202401",
    nombre: "Visa BH",
    monto: { total: 99903.12 * 100 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Tarjetas"
});

Gasto.create({
    mes: "202401",
    nombre: "PowerCard",
    monto: { total: 28211404 * 1 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Tarjetas"
});

Gasto.create({
    mes: "202401",
    nombre: "Mecánico Maxi",
    monto: { total: 40000 * 100 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Auto"
});


const inversionEjemplo = Inversion.create({
    mes: "202401",
    nombre: "** Prest BB ARS",
    formaPago: "Contado",
    plataforma: "BuenBit",
    instrumento: "Prestamo",
    cantidadInstrumento: 1,
    montoARS: 265000.00 * 100,
    montoUSD: 200.45 * 100
});

//////////////////////////////////////////
Movimiento.create({
    tipo: "ingreso",
    mes: "202402",
    nombre: "Sueldo",
    monto: { total: 765112.52 * 100, extra: 200000 * 100 },
    formaPago: "Contado"
});
Gasto.create({
    mes: "202402",
    nombre: "Alquiler",
    monto: { total: 200000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Vivienda"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202402",
    nombre: "Cochera",
    monto: { total: 20000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Auto"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202402",
    nombre: "Expensas",
    monto: { total: 20000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Vivienda"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202402",
    nombre: "Visa BH",
    monto: { total: 200000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Tarjetas"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202402",
    nombre: "PowerCard",
    monto: { total: 200000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Tarjetas"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202402",
    nombre: "Compra en supermercado",
    monto: {
        total: 50000,
        nroCuotas: 3,
    },
    formaPago: "TC Powercard",
    habitual: true,
    categoria: "Alimentación"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Inversion.create({
    mes: "202402",
    nombre: "BCBA:GGAL",
    formaPago: "Contado",
    plataforma: "Rava",
    instrumento: "GGAL",
    cantidadInstrumento: 100,
    montoARS: 150000,
    montoUSD: 500
});

//////////////////////////////////////////
Movimiento.create({
    tipo: "ingreso",
    mes: "202403",
    nombre: "Sueldo",
    monto: { total: 765112.52 * 100, extra: 200000 * 100 },
    formaPago: "Contado"
});
Gasto.create({
    mes: "202403",
    nombre: "Alquiler",
    monto: { total: 200000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Vivienda"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202403",
    nombre: "Cochera",
    monto: { total: 20000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Auto"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202403",
    nombre: "Expensas",
    monto: { total: 20000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Vivienda"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202403",
    nombre: "Visa BH",
    monto: { total: 200000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Tarjetas"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202403",
    nombre: "PowerCard",
    monto: { total: 200000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Tarjetas"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));


Gasto.create({
    mes: "202403",
    nombre: "Compra en supermercado",
    monto: {
        total: 50000,
        nroCuotas: 3,
    },
    formaPago: "TC Powercard",
    habitual: true,
    categoria: "Alimentación"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Inversion.create({
    mes: "202403",
    nombre: "BCBA:GGAL",
    formaPago: "Contado",
    plataforma: "Rava",
    instrumento: "GGAL",
    cantidadInstrumento: 100,
    montoARS: 150000,
    montoUSD: 500
});

//////////////////////////////////////////
Movimiento.create({
    tipo: "ingreso",
    mes: "202501",
    nombre: "Sueldo",
    monto: { total: 500000 },
    formaPago: "Contado"
});
Gasto.create({
    mes: "202501",
    nombre: "Alquiler",
    monto: { total: 200000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Vivienda"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202501",
    nombre: "Cochera",
    monto: { total: 20000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Auto"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202501",
    nombre: "Expensas",
    monto: { total: 20000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Vivienda"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202501",
    nombre: "Visa BH",
    monto: { total: 200000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Tarjetas"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202501",
    nombre: "PowerCard",
    monto: { total: 200000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Tarjetas"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));


Gasto.create({
    mes: "202501",
    nombre: "Compra en supermercado",
    monto: {
        total: 50000,
        nroCuotas: 3,
    },
    formaPago: "TC Powercard",
    habitual: true,
    categoria: "Alimentación"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Inversion.create({
    mes: "202501",
    nombre: "BCBA:GGAL",
    formaPago: "Contado",
    plataforma: "Rava",
    instrumento: "GGAL",
    cantidadInstrumento: 100,
    montoARS: 150000,
    montoUSD: 500
});

//////////////////////////////////////////
Movimiento.create({
    tipo: "ingreso",
    mes: "202502",
    nombre: "Sueldo",
    monto: { total: 500000 },
    formaPago: "Contado"
});
Gasto.create({
    mes: "202502",
    nombre: "Alquiler",
    monto: { total: 200000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Vivienda"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202502",
    nombre: "Cochera",
    monto: { total: 20000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Auto"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202502",
    nombre: "Expensas",
    monto: { total: 20000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Vivienda"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202502",
    nombre: "Visa BH",
    monto: { total: 200000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Tarjetas"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Gasto.create({
    mes: "202502",
    nombre: "PowerCard",
    monto: { total: 200000 },
    formaPago: "Contado",
    habitual: true,
    categoria: "Tarjetas"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));


Gasto.create({
    mes: "202502",
    nombre: "Compra en supermercado",
    monto: {
        total: 50000,
        nroCuotas: 3,
    },
    formaPago: "TC Powercard",
    habitual: true,
    categoria: "Alimentación"
}).catch(err => console.error("Error al guardar el gasto de ejemplo: ", err));

Inversion.create({
    mes: "202502",
    nombre: "BCBA:GGAL",
    formaPago: "Contado",
    plataforma: "Rava",
    instrumento: "GGAL",
    cantidadInstrumento: 100,
    montoARS: 150000,
    montoUSD: 500
});