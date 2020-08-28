const dishes = [{
        "name": "Burger",
        "price": 100,
},
    {
        "name": "Burger",
        "price": 100,
},
    {
        "name": "Burger",
        "price": 100,
},
    {
        "name": "Burger",
        "price": 100,
},
    {
        "name": "Burger",
        "price": 100,
}
]

dishes.forEach(displayDishes);

function displayDishes(dish) {
    {
        // CHOOSE THE TEMPLATE
        //Step 1: Choose the <template> content
        const templateElement = document.querySelector("#dish").content;

        //Step 2: Make a clone
        const myClone = templateElement.cloneNode(true);

        //Step 3: Change the content
        myClone.querySelector("#name").textContent += dish.name;

        //Step 4: Choose the new "parent" element
        const parentElement = document.querySelector(".startermenu");

        //Step 5: Add (Append) the clone to the DOM
        parentElement.appendChild(myClone);
    }

}


// fetch data
fetch("https://kea-alt-del.dk/t5/api/productlist")
    .then(function (response) {
        console.log(response)
        return response.json();
    })

    .then(function (data) {
    console.log(data)
})

//loop through products

//finding the template

//clone the template

//fill out the template

//append
