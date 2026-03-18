const modell = {
    app: {

    }, 
    viewstate: {
        cake: {
            taste: null,
            decore: null,
            fill: null,
            message: ""
        },
        cart: [],
        order: {
            time: null,
            date: null
        },

    },
    data: {
        category: ["kaffe", "baguett", "iskaffe"],
        allergies: [{
            id: 1,
            name: "nøtter"

        },
        {
            id: 2,
            name: "glucose"

        },
        {
            id: 3,
            name: "lactose"

        }],
        cake: {
            taste: ["Sjokolade", "Ostekake", "Bløtkake"],
            decore: [],
            fill: []
        },
        orders: [{
            id: null,
            orderNr: null, 
            pickup: null,
            completed: false
        }],
        products: [{
            pris: 20,
            id: 1,
            title: "bolle", 
            allergiesId: [2, 3],
            availability: ["grønn", "gul", "rød"],
            picture: [{
                baguette: {
                    document.getElementbyId
                }
            }]
           
        }]

    }
}
    


console.log(modell.data.products.picture[0].baguette)