// fetch data
fetch("https://kea-alt-del.dk/t5/api/productlist")
    .then(function (response) {
        console.log(response)
        return response.json();
    })

    .then(function (data) {
        console.log(data)
        getData(data);
    })

//loop through products
function getData(dishes) {
    dishes.forEach(addDish);
}

//images
const base = "https://kea-alt-del.dk/t5/site/imgs/";

//finding the template
function addDish(dish) {
    const myTemplate = document.querySelector("#dish").content;

    //clone the template
    const cloneDish = myTemplate.cloneNode(true);


    //fill out the template
    cloneDish.querySelector("#name").textContent = dish.name;
    cloneDish.querySelector("#pic").src = base + "small/" + dish.image + "-sm.jpg";
    cloneDish.querySelector("#price").textContent = dish.price;
    cloneDish.querySelector("#des1").textContent = dish.shortdescription;


    //append
    const ParentDishStarter = document.querySelector("section.startermenu");
    const ParentDishMain = document.querySelector("section.mainmenu");
    const ParentDishSideDish = document.querySelector("section.sidedishmenu");
    const ParentDishDessert = document.querySelector("section.dessertmenu");
    const ParentDishDrink = document.querySelector("section.drinkmenu");

    if(dish.category == "starter")
        ParentDishStarter.appendChild(cloneDish);
    else if(dish.category == "main")
        ParentDishMain.appendChild(cloneDish);
    else if(dish.category =="sideorders")
        ParentDishSideDish.appendChild(cloneDish);
    else if(dish.category == "dessert")
        ParentDishDessert.appendChild(cloneDish);
    else
        ParentDishDrink.appendChild(cloneDish);

}
