let contenedorMio = [
    {
        grandes: {
            ancho: {
                alimentos: {
                    agua: true,
                    leche: true,
                    aceite: true,
                    vinagre: true,
                    alcohol: true,
                },
            },
        },
        medianos: {
            ancho: {
                alimentos: {
                    agua: true,
                    leche: true,
                    aceite: true,
                    vinagre: true,
                    alcohol: true,
                },
            },
            pequeño: {
                sustancias_corrosivas: {
                    jabón: true,
                    lejía: true,
                    amoniaco: true,
                    gasolina: true,
                    aguarrás: true,
                },
            },
        },
        verticales: {
            alto: {
                sustancias_corrosivas: {
                    jabón: true,
                    lejía: true,
                    amoniaco: true,
                    gasolina: true,
                    aguarrás: true,
                },
            },
            grande: {
                alimentos: {
                    agua: true,
                    leche: true,
                    aceite: true,
                    vinagre: true,
                    alcohol: true,
                },
            },
        },
    },
];

[
    {
        "tipo": "grande",
        "envases": [
            {
                "tipo": "grandeAncho",
                líquidos: {
                    tipo: "alimentos",
                    contenido: ["agua", "leche", "aceite", "vinagre"],
                },
            },
            {
                tipo: "grandeAncho",
                líquidos: {
                    tipo: "corrosivo",
                    contenido: ["gasolina"],
                },
            },
        ],
    },
    {
        tipo: "mediano",
        envases: [
            {
                tipo: "medianoAlto",
                líquidos: {
                    tipo: "alimentos",
                    contenido: ["agua", "leche", "aceite", "vinagre"],
                },
            },
            {
                tipo: "medianoAncho",
                líquidos: {
                    tipo: "corrosivo",
                    contenido: ["gasolina"],
                },
            },
            {
                tipo: "pequeño",
                líquidos: {
                    tipo: "alimentos",
                    contenido: ["agua", "leche", "aceite", "vinagre"],
                },
            },
        ],
        "tipo": "vertical",
        "envases": [
            {
                tipo: "anchoVertical",
                líquidos: {
                    tipo: "alimentos",
                    contenido: ["agua", "leche", "aceite", "vinagre"],
                }
            }
        ]
    },
];
