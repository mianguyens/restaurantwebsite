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
    cloneDish.querySelector("#price").textContent = dish.price + "kr";

    //discount
    if (dish.discount) {
        cloneDish.querySelector("#price").style.textDecoration="line-through";
        cloneDish.querySelector("#price").style.color="rgba(0,0,0,0.5)"
        cloneDish.querySelector("#discount").textContent = dish.price - (dish.price * dish.discount / 100) + "kr";
    }

    else {
        cloneDish.querySelector("#discount").style.display = "none";
    }

    cloneDish.querySelector("#des1").textContent = dish.shortdescription;

    //sold out
    if (dish.soldout) {
        cloneDish.querySelector("#soldout").style.display = "block";
        cloneDish.querySelector("#pic").style.filter = "grayscale(100%)";
    }

    //vegetarian
    if (dish.vegetarian) {
        cloneDish.querySelector("#vegetarian").style.display = "block";
    }


    //append
    const ParentDishStarter = document.querySelector("section.startermenu");
    const ParentDishMain = document.querySelector("section.mainmenu");
    const ParentDishSideDish = document.querySelector("section.sidedishmenu");
    const ParentDishDessert = document.querySelector("section.dessertmenu");
    const ParentDishDrink = document.querySelector("section.drinkmenu");


    // categories
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

