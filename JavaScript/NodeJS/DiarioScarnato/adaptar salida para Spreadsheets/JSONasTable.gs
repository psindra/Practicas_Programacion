function JSONasTable() {
  const datos = [
    {
        "date": "2022-06-01T03:00:00.000Z",
        "fechaString": "1/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-02T03:00:00.000Z",
        "fechaString": "2/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-03T03:00:00.000Z",
        "fechaString": "3/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-04T03:00:00.000Z",
        "fechaString": "4/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-05T03:00:00.000Z",
        "fechaString": "5/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64120e6bc4e703738d46ae79",
        "date": "2022-06-06T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "sensibilidadL": "true+",
        "sensibilidadO": false,
        "afecto": "+-",
        "medicina": "Diclo100mg",
        "__v": 0,
        "fechaString": "6/6/22",
        "LOR": "L^+",
        "dolor": "S",
        "mareos": "",
        "afectó": "±",
        "medicamento": "1"
    },
    {
        "date": "2022-06-07T03:00:00.000Z",
        "fechaString": "7/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-08T03:00:00.000Z",
        "fechaString": "8/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-09T03:00:00.000Z",
        "fechaString": "9/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64120e7ec4e703738d46ae7c",
        "date": "2022-06-10T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "sensibilidadL": "true+",
        "sensibilidadO": false,
        "afecto": "+-",
        "medicina": "Diclo100mg",
        "__v": 0,
        "fechaString": "10/6/22",
        "LOR": "L^+",
        "dolor": "S",
        "mareos": "",
        "afectó": "±",
        "medicamento": "1"
    },
    {
        "date": "2022-06-11T03:00:00.000Z",
        "fechaString": "11/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-12T03:00:00.000Z",
        "fechaString": "12/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-13T03:00:00.000Z",
        "fechaString": "13/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-14T03:00:00.000Z",
        "fechaString": "14/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-15T03:00:00.000Z",
        "fechaString": "15/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-16T03:00:00.000Z",
        "fechaString": "16/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-17T03:00:00.000Z",
        "fechaString": "17/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-18T03:00:00.000Z",
        "fechaString": "18/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-19T03:00:00.000Z",
        "fechaString": "19/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-20T03:00:00.000Z",
        "fechaString": "20/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-21T03:00:00.000Z",
        "fechaString": "21/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-22T03:00:00.000Z",
        "fechaString": "22/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-23T03:00:00.000Z",
        "fechaString": "23/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-24T03:00:00.000Z",
        "fechaString": "24/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-25T03:00:00.000Z",
        "fechaString": "25/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-26T03:00:00.000Z",
        "fechaString": "26/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-27T03:00:00.000Z",
        "fechaString": "27/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-06-28T03:00:00.000Z",
        "fechaString": "28/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64120ebac4e703738d46ae7f",
        "date": "2022-06-29T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "sensibilidadL": "true+",
        "sensibilidadO": true,
        "afecto": "true",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "29/6/22",
        "LOR": "L^+O",
        "dolor": "M",
        "mareos": "",
        "afectó": "Si",
        "medicamento": "3"
    },
    {
        "date": "2022-06-30T03:00:00.000Z",
        "fechaString": "30/6/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-01T03:00:00.000Z",
        "fechaString": "1/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-02T03:00:00.000Z",
        "fechaString": "2/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-03T03:00:00.000Z",
        "fechaString": "3/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-04T03:00:00.000Z",
        "fechaString": "4/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-05T03:00:00.000Z",
        "fechaString": "5/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-06T03:00:00.000Z",
        "fechaString": "6/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-07T03:00:00.000Z",
        "fechaString": "7/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-08T03:00:00.000Z",
        "fechaString": "8/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-09T03:00:00.000Z",
        "fechaString": "9/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-10T03:00:00.000Z",
        "fechaString": "10/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-11T03:00:00.000Z",
        "fechaString": "11/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-12T03:00:00.000Z",
        "fechaString": "12/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-13T03:00:00.000Z",
        "fechaString": "13/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-14T03:00:00.000Z",
        "fechaString": "14/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-15T03:00:00.000Z",
        "fechaString": "15/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-16T03:00:00.000Z",
        "fechaString": "16/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-17T03:00:00.000Z",
        "fechaString": "17/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-18T03:00:00.000Z",
        "fechaString": "18/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-19T03:00:00.000Z",
        "fechaString": "19/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-20T03:00:00.000Z",
        "fechaString": "20/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-21T03:00:00.000Z",
        "fechaString": "21/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-22T03:00:00.000Z",
        "fechaString": "22/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64120edec4e703738d46ae82",
        "date": "2022-07-23T03:00:00.000Z",
        "intensidadDolor": "Leve",
        "sensibilidadL": "true+",
        "sensibilidadO": false,
        "afecto": "??",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "23/7/22",
        "LOR": "L^+",
        "dolor": "L",
        "mareos": "",
        "afectó": "",
        "medicamento": "3"
    },
    {
        "date": "2022-07-24T03:00:00.000Z",
        "fechaString": "24/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-25T03:00:00.000Z",
        "fechaString": "25/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-26T03:00:00.000Z",
        "fechaString": "26/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-27T03:00:00.000Z",
        "fechaString": "27/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-07-28T03:00:00.000Z",
        "fechaString": "28/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64120ef4c4e703738d46ae85",
        "date": "2022-07-29T03:00:00.000Z",
        "intensidadDolor": "Leve",
        "sensibilidadL": "true",
        "sensibilidadO": false,
        "afecto": "??",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "29/7/22",
        "LOR": "L",
        "dolor": "L",
        "mareos": "",
        "afectó": "",
        "medicamento": "3"
    },
    {
        "_id": "64120f5f945926d406a84341",
        "date": "2022-07-30T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "sensibilidadL": "false",
        "sensibilidadO": false,
        "afecto": "??",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "30/7/22",
        "LOR": "",
        "dolor": "L^-",
        "mareos": "",
        "afectó": "",
        "medicamento": "3"
    },
    {
        "date": "2022-07-31T03:00:00.000Z",
        "fechaString": "31/7/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-01T03:00:00.000Z",
        "fechaString": "1/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-02T03:00:00.000Z",
        "fechaString": "2/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-03T03:00:00.000Z",
        "fechaString": "3/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-04T03:00:00.000Z",
        "fechaString": "4/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-05T03:00:00.000Z",
        "fechaString": "5/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64120f76945926d406a84344",
        "date": "2022-08-06T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "sensibilidadL": "true",
        "sensibilidadO": false,
        "afecto": "+-",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "6/8/22",
        "LOR": "L",
        "dolor": "M",
        "mareos": "",
        "afectó": "±",
        "medicamento": "3"
    },
    {
        "date": "2022-08-07T03:00:00.000Z",
        "fechaString": "7/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64120fa4945926d406a84347",
        "date": "2022-08-08T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "sensibilidadL": "true+",
        "sensibilidadO": false,
        "afecto": "+-",
        "medicina": "-",
        "__v": 0,
        "fechaString": "8/8/22",
        "LOR": "L^+",
        "dolor": "L^-",
        "mareos": "",
        "afectó": "±",
        "medicamento": ""
    },
    {
        "_id": "64120fab945926d406a8434a",
        "date": "2022-08-09T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "sensibilidadL": "true+",
        "sensibilidadO": false,
        "afecto": "+-",
        "medicina": "-",
        "__v": 0,
        "fechaString": "9/8/22",
        "LOR": "L^+",
        "dolor": "L^-",
        "mareos": "",
        "afectó": "±",
        "medicamento": ""
    },
    {
        "_id": "64120fb7945926d406a8434d",
        "date": "2022-08-10T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "sensibilidadL": "true+",
        "sensibilidadO": false,
        "afecto": "+-",
        "medicina": "-",
        "__v": 0,
        "fechaString": "10/8/22",
        "LOR": "L^+",
        "dolor": "L^-",
        "mareos": "",
        "afectó": "±",
        "medicamento": ""
    },
    {
        "_id": "64120fbd945926d406a84350",
        "date": "2022-08-11T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "sensibilidadL": "true+",
        "sensibilidadO": false,
        "afecto": "+-",
        "medicina": "-",
        "__v": 0,
        "fechaString": "11/8/22",
        "LOR": "L^+",
        "dolor": "L^-",
        "mareos": "",
        "afectó": "±",
        "medicamento": ""
    },
    {
        "_id": "64120fca945926d406a84353",
        "date": "2022-08-12T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "sensibilidadL": "true+",
        "sensibilidadO": false,
        "afecto": "+-",
        "medicina": "-",
        "__v": 0,
        "fechaString": "12/8/22",
        "LOR": "L^+",
        "dolor": "L^-",
        "mareos": "",
        "afectó": "±",
        "medicamento": ""
    },
    {
        "_id": "641220110471f49577ab7b80",
        "date": "2022-08-13T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "sensibilidadL": "true+",
        "afecto": "true",
        "medicina": "Diclo50mg",
        "__v": 0,
        "mareos": "",
        "sensibilidadO": true,
        "fechaString": "13/8/22",
        "LOR": "L^+O",
        "dolor": "S",
        "afectó": "Si",
        "medicamento": "3"
    },
    {
        "date": "2022-08-14T03:00:00.000Z",
        "fechaString": "14/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-15T03:00:00.000Z",
        "fechaString": "15/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64120ff3945926d406a84359",
        "date": "2022-08-16T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "sensibilidadL": "true+",
        "sensibilidadO": false,
        "afecto": "true",
        "medicina": "-",
        "__v": 0,
        "mareos": "",
        "fechaString": "16/8/22",
        "LOR": "L^+",
        "dolor": "M",
        "afectó": "Si",
        "medicamento": ""
    },
    {
        "date": "2022-08-17T03:00:00.000Z",
        "fechaString": "17/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "641240f52e3afe874057344a",
        "date": "2022-08-18T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "+-",
        "medicina": "??",
        "__v": 0,
        "fechaString": "18/8/22",
        "LOR": "L^+",
        "dolor": "M",
        "afectó": "±",
        "medicamento": ""
    },
    {
        "date": "2022-08-19T03:00:00.000Z",
        "fechaString": "19/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "641241082e3afe874057344d",
        "date": "2022-08-20T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "mareos": "",
        "sensibilidadL": "true",
        "afecto": "true",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "20/8/22",
        "LOR": "L",
        "dolor": "S",
        "afectó": "Si",
        "medicamento": "3"
    },
    {
        "date": "2022-08-21T03:00:00.000Z",
        "fechaString": "21/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-22T03:00:00.000Z",
        "fechaString": "22/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-23T03:00:00.000Z",
        "fechaString": "23/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-24T03:00:00.000Z",
        "fechaString": "24/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "6412411f2e3afe8740573450",
        "date": "2022-08-25T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "+-",
        "medicina": "-",
        "__v": 0,
        "fechaString": "25/8/22",
        "LOR": "L^+",
        "dolor": "M",
        "afectó": "±",
        "medicamento": ""
    },
    {
        "date": "2022-08-26T03:00:00.000Z",
        "fechaString": "26/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-27T03:00:00.000Z",
        "fechaString": "27/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-28T03:00:00.000Z",
        "fechaString": "28/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-29T03:00:00.000Z",
        "fechaString": "29/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-30T03:00:00.000Z",
        "fechaString": "30/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-08-31T03:00:00.000Z",
        "fechaString": "31/8/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "641241402e3afe8740573453",
        "date": "2022-09-01T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "+-",
        "medicina": "-",
        "__v": 0,
        "fechaString": "1/9/22",
        "LOR": "L^+",
        "dolor": "S",
        "afectó": "±",
        "medicamento": ""
    },
    {
        "date": "2022-09-02T03:00:00.000Z",
        "fechaString": "2/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "641241502e3afe8740573456",
        "date": "2022-09-03T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "false",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "3/9/22",
        "LOR": "L^+",
        "dolor": "S",
        "afectó": "",
        "medicamento": "3"
    },
    {
        "_id": "6412415c2e3afe8740573459",
        "date": "2022-09-04T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "false",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "4/9/22",
        "LOR": "L^+",
        "dolor": "M",
        "afectó": "",
        "medicamento": "3"
    },
    {
        "_id": "6412417c2e3afe874057345c",
        "date": "2022-09-05T03:00:00.000Z",
        "intensidadDolor": "Leve+",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "false",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "5/9/22",
        "LOR": "L^+",
        "dolor": "L^+",
        "afectó": "",
        "medicamento": "3"
    },
    {
        "date": "2022-09-06T03:00:00.000Z",
        "fechaString": "6/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-07T03:00:00.000Z",
        "fechaString": "7/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-08T03:00:00.000Z",
        "fechaString": "8/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-09T03:00:00.000Z",
        "fechaString": "9/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-10T03:00:00.000Z",
        "fechaString": "10/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-11T03:00:00.000Z",
        "fechaString": "11/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-12T03:00:00.000Z",
        "fechaString": "12/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-13T03:00:00.000Z",
        "fechaString": "13/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-14T03:00:00.000Z",
        "fechaString": "14/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-15T03:00:00.000Z",
        "fechaString": "15/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-16T03:00:00.000Z",
        "fechaString": "16/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-17T03:00:00.000Z",
        "fechaString": "17/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "641241892e3afe874057345f",
        "date": "2022-09-18T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "false",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "18/9/22",
        "LOR": "L^+",
        "dolor": "M",
        "afectó": "",
        "medicamento": "3"
    },
    {
        "date": "2022-09-19T03:00:00.000Z",
        "fechaString": "19/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-20T03:00:00.000Z",
        "fechaString": "20/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "6412419c2e3afe8740573462",
        "date": "2022-09-21T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "false",
        "medicina": "-",
        "__v": 0,
        "fechaString": "21/9/22",
        "LOR": "L^+",
        "dolor": "L^-",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "641241ad2e3afe8740573465",
        "date": "2022-09-22T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "sensibilidadR": true,
        "afecto": "+-",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "22/9/22",
        "LOR": "L^+R",
        "dolor": "M",
        "afectó": "±",
        "medicamento": "3"
    },
    {
        "_id": "641241ec2e3afe874057346b",
        "date": "2022-09-23T03:00:00.000Z",
        "intensidadDolor": "Leve+",
        "mareos": "",
        "sensibilidadL": "true+",
        "sensibilidadR": true,
        "afecto": "false",
        "medicina": "-",
        "__v": 0,
        "fechaString": "23/9/22",
        "LOR": "L^+R",
        "dolor": "L^+",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-24T03:00:00.000Z",
        "fechaString": "24/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-25T03:00:00.000Z",
        "fechaString": "25/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-26T03:00:00.000Z",
        "fechaString": "26/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "641242982e3afe8740573472",
        "date": "2022-09-27T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "false",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "27/9/22",
        "LOR": "L^+",
        "dolor": "M",
        "afectó": "",
        "medicamento": "3"
    },
    {
        "date": "2022-09-28T03:00:00.000Z",
        "fechaString": "28/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-29T03:00:00.000Z",
        "fechaString": "29/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-09-30T03:00:00.000Z",
        "fechaString": "30/9/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-01T03:00:00.000Z",
        "fechaString": "1/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-02T03:00:00.000Z",
        "fechaString": "2/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-03T03:00:00.000Z",
        "fechaString": "3/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-04T03:00:00.000Z",
        "fechaString": "4/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-05T03:00:00.000Z",
        "fechaString": "5/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-06T03:00:00.000Z",
        "fechaString": "6/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-07T03:00:00.000Z",
        "fechaString": "7/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "641242b62e3afe8740573475",
        "date": "2022-10-08T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "mareos": "",
        "sensibilidadL": "true",
        "afecto": "+-",
        "medicina": "Diclo50mg*2",
        "__v": 0,
        "fechaString": "8/10/22",
        "LOR": "L",
        "dolor": "S",
        "afectó": "±",
        "medicamento": "4"
    },
    {
        "_id": "641244c4d682d7a144867d8f",
        "date": "2022-10-09T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "mareos": "",
        "sensibilidadL": "false",
        "afecto": "+-",
        "medicina": "Diclo100mg",
        "__v": 0,
        "fechaString": "9/10/22",
        "LOR": "",
        "dolor": "S",
        "afectó": "±",
        "medicamento": "1"
    },
    {
        "date": "2022-10-10T03:00:00.000Z",
        "fechaString": "10/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-11T03:00:00.000Z",
        "fechaString": "11/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-12T03:00:00.000Z",
        "fechaString": "12/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-13T03:00:00.000Z",
        "fechaString": "13/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "6412431fd682d7a144867d63",
        "date": "2022-10-14T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "sensibilidadR": true,
        "afecto": "+-",
        "medicina": "-",
        "__v": 0,
        "fechaString": "14/10/22",
        "LOR": "L^+R",
        "dolor": "M",
        "afectó": "±",
        "medicamento": ""
    },
    {
        "_id": "64124338d682d7a144867d66",
        "date": "2022-10-15T03:00:00.000Z",
        "intensidadDolor": "Leve",
        "mareos": "Si",
        "sensibilidadL": "true",
        "sensibilidadR": true,
        "afecto": "false",
        "medicina": "-",
        "__v": 0,
        "fechaString": "15/10/22",
        "LOR": "LR",
        "dolor": "L",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-16T03:00:00.000Z",
        "fechaString": "16/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-17T03:00:00.000Z",
        "fechaString": "17/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-18T03:00:00.000Z",
        "fechaString": "18/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-19T03:00:00.000Z",
        "fechaString": "19/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-20T03:00:00.000Z",
        "fechaString": "20/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-21T03:00:00.000Z",
        "fechaString": "21/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-22T03:00:00.000Z",
        "fechaString": "22/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "6412436fd682d7a144867d69",
        "date": "2022-10-23T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "mareos": "",
        "sensibilidadL": "false",
        "afecto": "true",
        "medicina": "Diclo100mg",
        "__v": 0,
        "fechaString": "23/10/22",
        "LOR": "",
        "dolor": "S",
        "afectó": "Si",
        "medicamento": "1"
    },
    {
        "date": "2022-10-24T03:00:00.000Z",
        "fechaString": "24/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-25T03:00:00.000Z",
        "fechaString": "25/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-26T03:00:00.000Z",
        "fechaString": "26/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-27T03:00:00.000Z",
        "fechaString": "27/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-28T03:00:00.000Z",
        "fechaString": "28/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-10-29T03:00:00.000Z",
        "fechaString": "29/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "6412437bd682d7a144867d6c",
        "date": "2022-10-30T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "mareos": "",
        "sensibilidadL": "false",
        "afecto": "+-",
        "medicina": "Diclo100mg",
        "__v": 0,
        "fechaString": "30/10/22",
        "LOR": "",
        "dolor": "S",
        "afectó": "±",
        "medicamento": "1"
    },
    {
        "date": "2022-10-31T03:00:00.000Z",
        "fechaString": "31/10/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-01T03:00:00.000Z",
        "fechaString": "1/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-02T03:00:00.000Z",
        "fechaString": "2/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-03T03:00:00.000Z",
        "fechaString": "3/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-04T03:00:00.000Z",
        "fechaString": "4/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-05T03:00:00.000Z",
        "fechaString": "5/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64124389d682d7a144867d6f",
        "date": "2022-11-06T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "mareos": "",
        "sensibilidadL": "false",
        "afecto": "+-",
        "medicina": "Diclo100mg",
        "__v": 0,
        "fechaString": "6/11/22",
        "LOR": "",
        "dolor": "S",
        "afectó": "±",
        "medicamento": "1"
    },
    {
        "date": "2022-11-07T03:00:00.000Z",
        "fechaString": "7/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-08T03:00:00.000Z",
        "fechaString": "8/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-09T03:00:00.000Z",
        "fechaString": "9/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-10T03:00:00.000Z",
        "fechaString": "10/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-11T03:00:00.000Z",
        "fechaString": "11/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-12T03:00:00.000Z",
        "fechaString": "12/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-13T03:00:00.000Z",
        "fechaString": "13/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-14T03:00:00.000Z",
        "fechaString": "14/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-15T03:00:00.000Z",
        "fechaString": "15/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-16T03:00:00.000Z",
        "fechaString": "16/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-17T03:00:00.000Z",
        "fechaString": "17/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-18T03:00:00.000Z",
        "fechaString": "18/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-19T03:00:00.000Z",
        "fechaString": "19/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "641243a1d682d7a144867d72",
        "date": "2022-11-20T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "false",
        "afecto": "+-",
        "medicina": "Diclo100mg",
        "__v": 0,
        "fechaString": "20/11/22",
        "LOR": "",
        "dolor": "M",
        "afectó": "±",
        "medicamento": "1"
    },
    {
        "date": "2022-11-21T03:00:00.000Z",
        "fechaString": "21/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-22T03:00:00.000Z",
        "fechaString": "22/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-23T03:00:00.000Z",
        "fechaString": "23/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-24T03:00:00.000Z",
        "fechaString": "24/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-25T03:00:00.000Z",
        "fechaString": "25/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-26T03:00:00.000Z",
        "fechaString": "26/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "641243b4d682d7a144867d75",
        "date": "2022-11-27T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "mareos": "",
        "sensibilidadL": "false",
        "afecto": "true",
        "medicina": "Diclo50mg+Relax",
        "__v": 0,
        "fechaString": "27/11/22",
        "LOR": "",
        "dolor": "S",
        "afectó": "Si",
        "medicamento": "2"
    },
    {
        "date": "2022-11-28T03:00:00.000Z",
        "fechaString": "28/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-29T03:00:00.000Z",
        "fechaString": "29/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-11-30T03:00:00.000Z",
        "fechaString": "30/11/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-01T03:00:00.000Z",
        "fechaString": "1/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-02T03:00:00.000Z",
        "fechaString": "2/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-03T03:00:00.000Z",
        "fechaString": "3/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-04T03:00:00.000Z",
        "fechaString": "4/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-05T03:00:00.000Z",
        "fechaString": "5/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-06T03:00:00.000Z",
        "fechaString": "6/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-07T03:00:00.000Z",
        "fechaString": "7/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-08T03:00:00.000Z",
        "fechaString": "8/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-09T03:00:00.000Z",
        "fechaString": "9/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-10T03:00:00.000Z",
        "fechaString": "10/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64124459d682d7a144867d80",
        "date": "2022-12-11T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "false",
        "afecto": "false",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "11/12/22",
        "LOR": "",
        "dolor": "M",
        "afectó": "",
        "medicamento": "3"
    },
    {
        "date": "2022-12-12T03:00:00.000Z",
        "fechaString": "12/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-13T03:00:00.000Z",
        "fechaString": "13/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-14T03:00:00.000Z",
        "fechaString": "14/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-15T03:00:00.000Z",
        "fechaString": "15/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-16T03:00:00.000Z",
        "fechaString": "16/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-17T03:00:00.000Z",
        "fechaString": "17/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64124467d682d7a144867d83",
        "date": "2022-12-18T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "false",
        "afecto": "false",
        "medicina": "Diclo50mg+Relax",
        "__v": 0,
        "fechaString": "18/12/22",
        "LOR": "",
        "dolor": "M",
        "afectó": "",
        "medicamento": "2"
    },
    {
        "date": "2022-12-19T03:00:00.000Z",
        "fechaString": "19/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-20T03:00:00.000Z",
        "fechaString": "20/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-21T03:00:00.000Z",
        "fechaString": "21/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-22T03:00:00.000Z",
        "fechaString": "22/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-23T03:00:00.000Z",
        "fechaString": "23/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-24T03:00:00.000Z",
        "fechaString": "24/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-25T03:00:00.000Z",
        "fechaString": "25/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-26T03:00:00.000Z",
        "fechaString": "26/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-27T03:00:00.000Z",
        "fechaString": "27/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-28T03:00:00.000Z",
        "fechaString": "28/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-29T03:00:00.000Z",
        "fechaString": "29/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-30T03:00:00.000Z",
        "fechaString": "30/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2022-12-31T03:00:00.000Z",
        "fechaString": "31/12/22",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-01T03:00:00.000Z",
        "fechaString": "1/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-02T03:00:00.000Z",
        "fechaString": "2/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-03T03:00:00.000Z",
        "fechaString": "3/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-04T03:00:00.000Z",
        "fechaString": "4/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-05T03:00:00.000Z",
        "fechaString": "5/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-06T03:00:00.000Z",
        "fechaString": "6/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-07T03:00:00.000Z",
        "fechaString": "7/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "6412447cd682d7a144867d86",
        "date": "2023-01-08T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "false",
        "afecto": "+-",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "8/1/23",
        "LOR": "",
        "dolor": "M",
        "afectó": "±",
        "medicamento": "3"
    },
    {
        "date": "2023-01-09T03:00:00.000Z",
        "fechaString": "9/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-10T03:00:00.000Z",
        "fechaString": "10/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-11T03:00:00.000Z",
        "fechaString": "11/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-12T03:00:00.000Z",
        "fechaString": "12/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-13T03:00:00.000Z",
        "fechaString": "13/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-14T03:00:00.000Z",
        "fechaString": "14/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-15T03:00:00.000Z",
        "fechaString": "15/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-16T03:00:00.000Z",
        "fechaString": "16/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-17T03:00:00.000Z",
        "fechaString": "17/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-18T03:00:00.000Z",
        "fechaString": "18/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-19T03:00:00.000Z",
        "fechaString": "19/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-20T03:00:00.000Z",
        "fechaString": "20/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-21T03:00:00.000Z",
        "fechaString": "21/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "6412448cd682d7a144867d89",
        "date": "2023-01-22T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "mareos": "",
        "sensibilidadL": "false",
        "afecto": "true",
        "medicina": "Diclo100mg",
        "__v": 0,
        "fechaString": "22/1/23",
        "LOR": "",
        "dolor": "S",
        "afectó": "Si",
        "medicamento": "1"
    },
    {
        "date": "2023-01-23T03:00:00.000Z",
        "fechaString": "23/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-24T03:00:00.000Z",
        "fechaString": "24/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-25T03:00:00.000Z",
        "fechaString": "25/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-26T03:00:00.000Z",
        "fechaString": "26/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-27T03:00:00.000Z",
        "fechaString": "27/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-28T03:00:00.000Z",
        "fechaString": "28/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-29T03:00:00.000Z",
        "fechaString": "29/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-30T03:00:00.000Z",
        "fechaString": "30/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-01-31T03:00:00.000Z",
        "fechaString": "31/1/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-01T03:00:00.000Z",
        "fechaString": "1/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-02T03:00:00.000Z",
        "fechaString": "2/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-03T03:00:00.000Z",
        "fechaString": "3/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-04T03:00:00.000Z",
        "fechaString": "4/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-05T03:00:00.000Z",
        "fechaString": "5/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-06T03:00:00.000Z",
        "fechaString": "6/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-07T03:00:00.000Z",
        "fechaString": "7/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-08T03:00:00.000Z",
        "fechaString": "8/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-09T03:00:00.000Z",
        "fechaString": "9/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-10T03:00:00.000Z",
        "fechaString": "10/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-11T03:00:00.000Z",
        "fechaString": "11/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "6412449ed682d7a144867d8c",
        "date": "2023-02-12T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "mareos": "",
        "sensibilidadL": "false",
        "afecto": "true",
        "medicina": "Diclo50mg*2",
        "__v": 0,
        "fechaString": "12/2/23",
        "LOR": "",
        "dolor": "S",
        "afectó": "Si",
        "medicamento": "4"
    },
    {
        "date": "2023-02-13T03:00:00.000Z",
        "fechaString": "13/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-14T03:00:00.000Z",
        "fechaString": "14/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-15T03:00:00.000Z",
        "fechaString": "15/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-16T03:00:00.000Z",
        "fechaString": "16/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-17T03:00:00.000Z",
        "fechaString": "17/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-18T03:00:00.000Z",
        "fechaString": "18/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-19T03:00:00.000Z",
        "fechaString": "19/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-20T03:00:00.000Z",
        "fechaString": "20/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-21T03:00:00.000Z",
        "fechaString": "21/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-22T03:00:00.000Z",
        "fechaString": "22/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-23T03:00:00.000Z",
        "fechaString": "23/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-24T03:00:00.000Z",
        "fechaString": "24/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-25T03:00:00.000Z",
        "fechaString": "25/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-26T03:00:00.000Z",
        "fechaString": "26/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-27T03:00:00.000Z",
        "fechaString": "27/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-02-28T03:00:00.000Z",
        "fechaString": "28/2/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-01T03:00:00.000Z",
        "fechaString": "1/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-02T03:00:00.000Z",
        "fechaString": "2/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "641245c8d682d7a144867daa",
        "date": "2023-03-03T03:00:00.000Z",
        "intensidadDolor": "Leve+",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "false",
        "medicina": "Diclo50mg+Relax",
        "__v": 0,
        "fechaString": "3/3/23",
        "LOR": "L^+",
        "dolor": "L^+",
        "afectó": "",
        "medicamento": "2"
    },
    {
        "date": "2023-03-04T03:00:00.000Z",
        "fechaString": "4/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-05T03:00:00.000Z",
        "fechaString": "5/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-06T03:00:00.000Z",
        "fechaString": "6/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64124599d682d7a144867da6",
        "date": "2023-03-07T03:00:00.000Z",
        "intensidadDolor": "Leve+",
        "mareos": "",
        "sensibilidadL": "true",
        "afecto": "false",
        "medicina": "Diclo50mg+Relax",
        "__v": 0,
        "fechaString": "7/3/23",
        "LOR": "L",
        "dolor": "L^+",
        "afectó": "",
        "medicamento": "2"
    },
    {
        "date": "2023-03-08T03:00:00.000Z",
        "fechaString": "8/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-09T03:00:00.000Z",
        "fechaString": "9/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-10T03:00:00.000Z",
        "fechaString": "10/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-11T03:00:00.000Z",
        "fechaString": "11/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-12T03:00:00.000Z",
        "fechaString": "12/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-13T03:00:00.000Z",
        "fechaString": "13/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-14T03:00:00.000Z",
        "fechaString": "14/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-15T03:00:00.000Z",
        "fechaString": "15/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-16T03:00:00.000Z",
        "fechaString": "16/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "6418d511211eb39253585695",
        "date": "2023-03-17T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "sensibilidadR": true,
        "sensibilidadO": true,
        "afecto": "true",
        "medicina": "Otro",
        "__v": 0,
        "fechaString": "17/3/23",
        "LOR": "L^+OR",
        "dolor": "M",
        "afectó": "Si",
        "medicamento": "5"
    },
    {
        "_id": "6418d551211eb39253585698",
        "date": "2023-03-18T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "false",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "18/3/23",
        "LOR": "L^+",
        "dolor": "L^-",
        "afectó": "",
        "medicamento": "3"
    },
    {
        "date": "2023-03-19T03:00:00.000Z",
        "fechaString": "19/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "6418d577211eb3925358569b",
        "date": "2023-03-20T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "+-",
        "medicina": "-",
        "__v": 0,
        "fechaString": "20/3/23",
        "LOR": "L^+",
        "dolor": "L^-",
        "afectó": "±",
        "medicamento": ""
    },
    {
        "_id": "641b224f480245f6a4004c5f",
        "date": "2023-03-21T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "+-",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "21/3/23",
        "LOR": "L^+",
        "dolor": "M",
        "afectó": "±",
        "medicamento": "3"
    },
    {
        "date": "2023-03-22T03:00:00.000Z",
        "fechaString": "22/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-23T03:00:00.000Z",
        "fechaString": "23/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-24T03:00:00.000Z",
        "fechaString": "24/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64239a1008c8d5dc9593e6b5",
        "date": "2023-03-25T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "+-",
        "medicina": "Otro",
        "__v": 0,
        "fechaString": "25/3/23",
        "LOR": "L^+",
        "dolor": "M",
        "afectó": "±",
        "medicamento": "5"
    },
    {
        "date": "2023-03-26T03:00:00.000Z",
        "fechaString": "26/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-27T03:00:00.000Z",
        "fechaString": "27/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "642399d708c8d5dc9593e6b2",
        "date": "2023-03-28T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "mareos": "Si",
        "sensibilidadL": "true+",
        "sensibilidadR": true,
        "afecto": "false",
        "medicina": "Diclo50mg+Relax",
        "__v": 0,
        "fechaString": "28/3/23",
        "LOR": "L^+R",
        "dolor": "L^-",
        "afectó": "",
        "medicamento": "2"
    },
    {
        "_id": "64258fad75120a1f629ffe2c",
        "date": "2023-03-29T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "false",
        "medicina": "Diclo50mg+Relax",
        "__v": 0,
        "fechaString": "29/3/23",
        "LOR": "L^+",
        "dolor": "L^-",
        "afectó": "",
        "medicamento": "2"
    },
    {
        "date": "2023-03-30T03:00:00.000Z",
        "fechaString": "30/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-03-31T03:00:00.000Z",
        "fechaString": "31/3/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-01T03:00:00.000Z",
        "fechaString": "1/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-02T03:00:00.000Z",
        "fechaString": "2/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-03T03:00:00.000Z",
        "fechaString": "3/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-04T03:00:00.000Z",
        "fechaString": "4/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-05T03:00:00.000Z",
        "fechaString": "5/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-06T03:00:00.000Z",
        "fechaString": "6/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-07T03:00:00.000Z",
        "fechaString": "7/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-08T03:00:00.000Z",
        "fechaString": "8/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-09T03:00:00.000Z",
        "fechaString": "9/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-10T03:00:00.000Z",
        "fechaString": "10/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64414bef0ff5995146454c88",
        "date": "2023-04-11T03:00:00.000Z",
        "intensidadDolor": "??",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "??",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "11/4/23",
        "LOR": "L^+",
        "dolor": "",
        "afectó": "",
        "medicamento": "3"
    },
    {
        "date": "2023-04-12T03:00:00.000Z",
        "fechaString": "12/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-13T03:00:00.000Z",
        "fechaString": "13/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-14T03:00:00.000Z",
        "fechaString": "14/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-15T03:00:00.000Z",
        "fechaString": "15/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-16T03:00:00.000Z",
        "fechaString": "16/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-17T03:00:00.000Z",
        "fechaString": "17/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-18T03:00:00.000Z",
        "fechaString": "18/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64414bbf0ff5995146454c85",
        "date": "2023-04-19T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "sensibilidadR": true,
        "afecto": "true",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "19/4/23",
        "LOR": "L^+R",
        "dolor": "M",
        "afectó": "Si",
        "medicamento": "3"
    },
    {
        "date": "2023-04-20T03:00:00.000Z",
        "fechaString": "20/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-21T03:00:00.000Z",
        "fechaString": "21/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-22T03:00:00.000Z",
        "fechaString": "22/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-23T03:00:00.000Z",
        "fechaString": "23/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-24T03:00:00.000Z",
        "fechaString": "24/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-25T03:00:00.000Z",
        "fechaString": "25/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-26T03:00:00.000Z",
        "fechaString": "26/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "645421e93803593f69f9fc8b",
        "date": "2023-04-27T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "true",
        "medicina": "Diclo50mg*2",
        "__v": 0,
        "fechaString": "27/4/23",
        "LOR": "L^+",
        "dolor": "S",
        "afectó": "Si",
        "medicamento": "4"
    },
    {
        "date": "2023-04-28T03:00:00.000Z",
        "fechaString": "28/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-29T03:00:00.000Z",
        "fechaString": "29/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-04-30T03:00:00.000Z",
        "fechaString": "30/4/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "645421823803593f69f9fc83",
        "date": "2023-05-01T03:00:00.000Z",
        "intensidadDolor": "Leve",
        "mareos": "Si",
        "sensibilidadL": "true",
        "afecto": "false",
        "medicina": "Diclo50mg+Relax",
        "__v": 0,
        "fechaString": "1/5/23",
        "LOR": "L",
        "dolor": "L",
        "afectó": "",
        "medicamento": "2"
    },
    {
        "_id": "645421c93803593f69f9fc87",
        "date": "2023-05-02T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "sensibilidadR": true,
        "afecto": "true",
        "medicina": "Diclo50mg",
        "__v": 0,
        "fechaString": "2/5/23",
        "LOR": "L^+R",
        "dolor": "M",
        "afectó": "Si",
        "medicamento": "3"
    },
    {
        "_id": "645422073803593f69f9fc8f",
        "date": "2023-05-03T03:00:00.000Z",
        "intensidadDolor": "Leve",
        "mareos": "",
        "sensibilidadL": "true+",
        "afecto": "false",
        "medicina": "-",
        "__v": 0,
        "fechaString": "3/5/23",
        "LOR": "L^+",
        "dolor": "L",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "6454221d3803593f69f9fc93",
        "date": "2023-05-04T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "mareos": "",
        "sensibilidadL": "true",
        "afecto": "false",
        "medicina": "-",
        "__v": 0,
        "fechaString": "4/5/23",
        "LOR": "L",
        "dolor": "L^-",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-05T03:00:00.000Z",
        "fechaString": "5/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-06T03:00:00.000Z",
        "fechaString": "6/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-07T03:00:00.000Z",
        "fechaString": "7/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "646457be5157c8f1bbbc35ed",
        "date": "2023-05-08T03:00:00.000Z",
        "intensidadDolor": "Leve+",
        "mareos": "",
        "sensibilidadL": "true",
        "afecto": "+-",
        "medicina": "-",
        "__v": 0,
        "fechaString": "8/5/23",
        "LOR": "L",
        "dolor": "L^+",
        "afectó": "±",
        "medicamento": ""
    },
    {
        "date": "2023-05-09T03:00:00.000Z",
        "fechaString": "9/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-10T03:00:00.000Z",
        "fechaString": "10/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "6464573f5157c8f1bbbc35e1",
        "date": "2023-05-11T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "sensibilidadR": true,
        "afecto": "false",
        "medicina": "-",
        "__v": 0,
        "fechaString": "11/5/23",
        "LOR": "L^+R",
        "dolor": "M",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "646457615157c8f1bbbc35e4",
        "date": "2023-05-12T03:00:00.000Z",
        "intensidadDolor": "Severo",
        "mareos": "Si",
        "sensibilidadL": "true+",
        "sensibilidadR": true,
        "sensibilidadO": true,
        "afecto": "true",
        "medicina": "Diclo100mg",
        "__v": 0,
        "fechaString": "12/5/23",
        "LOR": "L^+OR",
        "dolor": "S",
        "afectó": "Si",
        "medicamento": "1"
    },
    {
        "_id": "646457865157c8f1bbbc35e7",
        "date": "2023-05-13T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "sensibilidadR": true,
        "afecto": "+-",
        "medicina": "Diclo50mg+Relax",
        "__v": 0,
        "fechaString": "13/5/23",
        "LOR": "L^+R",
        "dolor": "M",
        "afectó": "±",
        "medicamento": "2"
    },
    {
        "_id": "646457a45157c8f1bbbc35ea",
        "date": "2023-05-14T03:00:00.000Z",
        "intensidadDolor": "Medio",
        "mareos": "",
        "sensibilidadL": "true+",
        "sensibilidadR": true,
        "afecto": "+-",
        "medicina": "-",
        "__v": 0,
        "fechaString": "14/5/23",
        "LOR": "L^+R",
        "dolor": "M",
        "afectó": "±",
        "medicamento": ""
    },
    {
        "date": "2023-05-15T03:00:00.000Z",
        "fechaString": "15/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "646457dd5157c8f1bbbc35f0",
        "date": "2023-05-16T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "mareos": "",
        "sensibilidadL": "true",
        "afecto": "false",
        "medicina": "-",
        "__v": 0,
        "fechaString": "16/5/23",
        "LOR": "L",
        "dolor": "L^-",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-17T03:00:00.000Z",
        "fechaString": "17/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-18T03:00:00.000Z",
        "fechaString": "18/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-19T03:00:00.000Z",
        "fechaString": "19/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-20T03:00:00.000Z",
        "fechaString": "20/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-21T03:00:00.000Z",
        "fechaString": "21/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-22T03:00:00.000Z",
        "fechaString": "22/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-23T03:00:00.000Z",
        "fechaString": "23/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-24T03:00:00.000Z",
        "fechaString": "24/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-25T03:00:00.000Z",
        "fechaString": "25/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-26T03:00:00.000Z",
        "fechaString": "26/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-27T03:00:00.000Z",
        "fechaString": "27/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-28T03:00:00.000Z",
        "fechaString": "28/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-29T03:00:00.000Z",
        "fechaString": "29/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-30T03:00:00.000Z",
        "fechaString": "30/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-05-31T03:00:00.000Z",
        "fechaString": "31/5/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-01T03:00:00.000Z",
        "fechaString": "1/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-02T03:00:00.000Z",
        "fechaString": "2/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-03T03:00:00.000Z",
        "fechaString": "3/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-04T03:00:00.000Z",
        "fechaString": "4/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-05T03:00:00.000Z",
        "fechaString": "5/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-06T03:00:00.000Z",
        "fechaString": "6/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-07T03:00:00.000Z",
        "fechaString": "7/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-08T03:00:00.000Z",
        "fechaString": "8/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-09T03:00:00.000Z",
        "fechaString": "9/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64868d87ad0a921a43722df8",
        "date": "2023-06-10T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "mareos": "",
        "sensibilidadL": "true",
        "afecto": "false",
        "medicina": "-",
        "__v": 0,
        "fechaString": "10/6/23",
        "LOR": "L",
        "dolor": "L^-",
        "afectó": "",
        "medicamento": ""
    },
    {
        "_id": "64868da5ad0a921a43722dfc",
        "date": "2023-06-11T03:00:00.000Z",
        "intensidadDolor": "Leve-",
        "mareos": "",
        "sensibilidadL": "true",
        "sensibilidadR": true,
        "sensibilidadO": true,
        "afecto": "false",
        "medicina": "-",
        "__v": 0,
        "fechaString": "11/6/23",
        "LOR": "LOR",
        "dolor": "L^-",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-12T03:00:00.000Z",
        "fechaString": "12/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-13T03:00:00.000Z",
        "fechaString": "13/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-14T03:00:00.000Z",
        "fechaString": "14/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-15T03:00:00.000Z",
        "fechaString": "15/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-16T03:00:00.000Z",
        "fechaString": "16/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-17T03:00:00.000Z",
        "fechaString": "17/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-18T03:00:00.000Z",
        "fechaString": "18/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-19T03:00:00.000Z",
        "fechaString": "19/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-20T03:00:00.000Z",
        "fechaString": "20/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-21T03:00:00.000Z",
        "fechaString": "21/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-22T03:00:00.000Z",
        "fechaString": "22/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-23T03:00:00.000Z",
        "fechaString": "23/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-24T03:00:00.000Z",
        "fechaString": "24/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-25T03:00:00.000Z",
        "fechaString": "25/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-26T03:00:00.000Z",
        "fechaString": "26/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-27T03:00:00.000Z",
        "fechaString": "27/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-28T03:00:00.000Z",
        "fechaString": "28/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-29T03:00:00.000Z",
        "fechaString": "29/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    },
    {
        "date": "2023-06-30T03:00:00.000Z",
        "fechaString": "30/6/23",
        "LOR": "",
        "dolor": "",
        "mareos": "",
        "afectó": "",
        "medicamento": ""
    }
]
  

  const resultado = datos.map(elem=>{
    return [elem.fechaString, elem.dolor, elem.mareos, elem.LOR, elem. afectó, elem.medicamento]
  })

  const transposedResult = transpose(resultado);

  console.log(transposedResult);
  


  return transposedResult;

}


// Utility function to transpose a 2D array
function transpose(array) {
  return array[0].map((_, columnIndex) => array.map(row => row[columnIndex]));
}