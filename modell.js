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
            decore: ["Wedding", "Birthday", "Welcome", "Valentine"],
            fill: ["Chocolate Cream", "Strawberry Kiwi", "Brunsaus"]
        },
        orders: [{
            id: 0,
            orderNr: "", 
            date: "12:00",
            time: "08/12",
            completed: false
        }],
        products: [{
            pris: 20,
            id: 1,
            title: "bolle", 
            allergiesId: [2, 3],
            availability: 10,
            picture: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.ctOcDD6EJEnLoOdLJv0NOAHaE6%3Fpid%3DApi&sp=1773839254T6bf5ab0563659579f2b58fcb16ba7417f0aa74bd6009986c8c487846a4468a09'
           
        }]

    }
}

console.log(modell.data.products[0].picture)