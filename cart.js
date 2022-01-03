let items = JSON.parse(localStorage.getItem("addToCart"));
    display(items);

    function display(item)
    {
        let dish_div = document.querySelector("#dishes");
        let count = document.querySelector("span");
        count.innerHTML = items.length;

        let total = document.querySelector("#bill");

        item.map(function(elem,index){
            let img = document.createElement("img");
            img.src = elem.strCategoryThumb;

            let name = document.createElement("p");
            name.innerHTML = `Name : ${elem.strCategory}`;

            let price = document.createElement("p");
            price.innerHTML = `Price : ${Math.floor(Math.random()*(500-100)+100)}`;

            let btn = document.createElement("button");
            btn.innerHTML = "Delete";

            btn.addEventListener("click",function(){
                deleteItem(index);
            });

            dish_div.append(btn,img,name,price);
        });

        total.innerHTML = 248;
    }

    function deleteItem(index)
    {
        items.splice(index,1)
        dish_div = document.querySelector("#dishes").innerHTML = "";
        localStorage.setItem("addToCart",JSON.stringify(items));
        display(items);
    }