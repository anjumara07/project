function order()
    {
        setTimeout(function(){
            alert("Your Order is Accepted");
        },000);

        setTimeout(function(){
            alert("Your order is being cooked")
        },3000);

        setTimeout(function(){
            alert("Your Order is Ready")
        },8000);

        setTimeout(function(){
            alert("Order out of delivery")
        },10000)

        setTimeout(function(){
            alert("Order delivered");
        },12000);
    }