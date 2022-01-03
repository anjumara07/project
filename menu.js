async function menu(){
    try{
        let responce = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        let data = await responce.json();
        let category = data.categories;
        showDishes(category);
        // console.log("data: ",category);
    }
    catch(err){
        console.log("err :",err)
    }
}
menu();

function showDishes(dish)
{
    let dish_div = document.querySelector("#dishes");
    dish.map(function(elem){
        let img = document.createElement("img");
        img.src = elem.strCategoryThumb;

        let name = document.createElement("p");
        name.innerHTML = `Name : ${elem.strCategory}`;

        let price = document.createElement("p");
        price.innerHTML = `Price : ${Math.floor(Math.random()*(500-100)+100)}`;

        let btn = document.createElement("button");
        btn.innerHTML = "Add To Cart";
        btn.addEventListener("click",function(){
            addCart(elem);
        });

        dish_div.append(btn,img,name,price);
    });
}
let item_arr = JSON.parse(localStorage.getItem("addToCart")) || [];

function addCart(item)
{
    item_arr.push(item);
    let count = document.querySelector("span");
    count.innerHTML = item_arr.length;
    localStorage.setItem("addToCart",JSON.stringify(item_arr));
}