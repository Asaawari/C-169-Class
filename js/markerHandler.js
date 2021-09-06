AFRAME.registerComponent("markerhandler",{
    init:async function(){
        
        this.el.addEventListener("markerFound",()=>{
            //console.log("marker is found")
            this.handleMarkerFound();
        })

        this.el.addEventListener("markerLost",()=>{
            //console.log("marker is lost")
            this.handleMarkerLost();
        })
    },

    handleMarkerFound :function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var ratingButton = document.getElementById("rating-button");
        var orderButton = document.getElementById("order-button");

        ratingButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Rate Dish",
                text:"Work in Progress"
            });
        });

        orderButton.addEventListener("click",()=>{
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for the order",
                text:"Your order will be served soon at your table !!"
            });
        });
    },

    handleMarkerLost :function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})