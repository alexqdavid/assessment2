// initialising an array of objets having 6 properites named as
// 'name', 'category', 'popularity', 'rating', 'price', 'tags'
let foodArr = [
    {
        name: "Margherita",
        category: "Veg",
        popularity: "85%",
        rating: "4.2",
        price: "205",
        tags: ["cheesy", "classic"]
    },
    {
        name: "Farmhouse",
        category: "Veg Treat",
        popularity: "95%",
        rating: "4.4",
        price: "195",
        tags: ["veg", "classic"]
    },
    {
        name: "Pepper Barbecue & Onion",
        category: "Non Veg Treat",
        popularity: "85%",
        rating: "4.6",
        price: "365",
        tags: ["non-veg", "classic"]
    },
    {
        name: "Chicken Fiesta",
        category: "Non Veg Special",
        popularity: "92%",
        rating: "4.8",
        price: "425",
        tags: ["non-veg", "Grilled"]
    },
    {
        name: "Cheese n Corn",
        category: "Veg Delight",
        popularity: "88%",
        rating: "4.5",
        price: "295",
        tags: ["veg", "grilled"]
    },
]


filterFood = (array, requiredTag) => {
    let result = [] 
    array.forEach(element => {
        element.tags.forEach(tag => {
            if (tag == requiredTag)
                result.push(element)
        }); 
    }); 
    return result
}

let result = []
result = filterFood(foodArr, 'veg');
if (result.length > 0)
    console.log(result);
else  
    console.log("No item found for the given tag");
    function filterByProperty(property, number, type) {

        let filteredArray = [];
        
        for (let i = 0; i < food.length; i++) {
        
        let food = food[i];
        
        if (type === 'above') {
        
        if (food[property] > number) {
        
        filteredArray.push(food);
        
        }
        
        } else if (type === 'below') {
        
        if (food[property] < number) {
        
        filteredArray.push(food);
        
        }
        
        }
        
        }
        
        return filteredArray;
        
        }
        
        let ratings = filterByProperty('rating', 4, 'above');
        
        console.log(ratings); // should print an array of objects that have a rating property above 4
        
        let popular = filterByProperty('popularity', 70, 'below');
        
        console.log(popular); // should print an array of objects that have a popularity property below 70
        
        let prices = filterByProperty('price', 4, 'below');
        
        console.log(prices); // should print an array of objects that have a price property below 4
