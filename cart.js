  var newItems = {
        Data: [
          {
            id: 9090,
            name: "Item1",
            price: 200,
            discount: 10,
            type: "fiction",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9091,
            name: "Item2",
            price: 250,
            discount: 15,
            type: "literature",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9092,
            name: "Item3",
            price: 320,
            discount: 5,
            type: "literature",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9093,
            name: "Item4",
            price: 290,
            discount: 0,
            type: "thriller",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9094,
            name: "Item5",
            price: 500,
            discount: 25,
            type: "thriller",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9095,
            name: "Item6",
            price: 150,
            discount: 5,
            type: "literature",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9096,
            name: "Item7",
            price: 700,
            discount: 22,
            type: "literature",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9097,
            name: "Item8",
            price: 350,
            discount: 18,
            type: "fiction",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          }
        ]
      };
      



      var obj,i,newItems,count = 0,discount = 0,amt = 0,normalDis = 0,typeDiscount = 0,actualAmount = 0,tDis = 0,tot = 0;

      obj = {
        Data: [
          {
            id: 9090,
            name: "Item1",
            price: 200,
            discount: 10,
            type: "fiction",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9091,
            name: "Item2",
            price: 250,
            discount: 15,
            type: "literature",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9092,
            name: "Item3",
            price: 320,
            discount: 5,
            type: "literature",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9093,
            name: "Item4",
            price: 290,
            discount: 0,
            type: "thriller",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9094,
            name: "Item5",
            price: 500,
            discount: 25,
            type: "thriller",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9095,
            name: "Item6",
            price: 150,
            discount: 5,
            type: "literature",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9096,
            name: "Item7",
            price: 700,
            discount: 22,
            type: "literature",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          },
          {
            id: 9097,
            name: "Item8",
            price: 350,
            discount: 18,
            type: "fiction",
            img_url:
              "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg",
            qty: 1
          }
        ]
      };
      
      function setComponents() {
         if(sessionStorage.getItem('key')){
         obj=JSON.parse(sessionStorage.getItem('key'));
        //  console.log(obj.Data);
        } 
          
        load(obj);
        var orders = document.getElementById("orders");
        var cart = document.getElementById("cart");
        var width = screen.width;
        if (width < 768) {
          orders.setAttribute("class", "col-md-8 order-2");
          cart.setAttribute("class", "col-md-4 cart order-1");
        } else if (width > 768) {
          orders.setAttribute("class", "col-md-8 order-1");
          cart.setAttribute("class", "col-md-4 cart order-2");
        }
      }

      function cartPlacing() {
        var orders = document.getElementById("orders");
        var cart = document.getElementById("cart");
        var width = screen.width;

        if (width < 768) {
          orders.setAttribute("class", "col-md-8 order-2");
          cart.setAttribute("class", "col-md-4 cart order-1");
        } else if (width > 768) {
          orders.setAttribute("class", "col-md-8 order-1");
          cart.setAttribute("class", "col-md-4 cart order-2");
        }
      }

      function ItemsListing(i) {
        document.getElementById("box").innerHTML =
          '<tr><td><div class="items">Items (' +
          count +
          ')</div></td><div class="qty">Qty</div></td><div class="price">Price</div></td></tr>';
        document.getElementById("cart-items").innerHTML +=
          "<tr><td><div class='card col-5'><div class='row '><div class='col-auto'><img src=" +
          obj.Data[i].img_url +
          " class='img-fluid' width='40'></div><div class='col'><div class='card-block px-2'><p class='card-title'>" +
          obj.Data[i].name +
          " <span class='close' onclick='removeItem(" +
          i +
          ")'>&times;</span></p></div></div></td>";

        document.getElementById("cart-items").innerHTML +=
          " &nbsp; &nbsp; &nbsp; <td class='margin1'> <span class='qty-btn' onclick='sub(" +
          obj.Data[i].id +
          ")'><i style='font-size:24px' class='fa'>&#xf068;</i></span> <input type='text' id='item-qty' value=" +
          obj.Data[i].qty +
          " disabled> <span class='qty-btn' onclick='add(" +
          obj.Data[i].id +
          ")'><i style='font-size:24px' class='fa fa-plus'></i></span></td>";

        document.getElementById("cart-items").innerHTML +=
          " &nbsp; &nbsp; &nbsp; <td>$" + obj.Data[i].price + "</td></tr>";
      }

      function Cart(amt, tot, normalDis, tDis, count) {
        amt = tot - normalDis - tDis;
        document.getElementById("total-price").innerHTML +=
          "<span class='align1'><b style='font-size:20px;'>Total<br></b></span>" +
          "<span class='align1'>Items (" +
          count +
          ") : </span><span class='align'>$" +
          tot +
          "</span><br><div class='margin'><span class='align1'>Discount :</span><span class='align'>- $" +
          normalDis +
          "</span><br><span class='align1'>Type Discount : </span><span class='align'>- $" +
          tDis +
          "</span><br> <div class='cart-foot'><span class='align1'>Order Total :</span> <span class='align '>$" +
          amt +
          "</span>";
      }

      function load(tmp){
      for (i in tmp.Data) {
        if(tmp.Data[i]!=null){
        tot += tmp.Data[i].price*tmp.Data[i].qty;
        discount = tmp.Data[i].discount;
        normalDis += (tmp.Data[i].price / 100) * discount * tmp.Data[i].qty;
        if (tmp.Data[i].type == "fiction") {
          typeDiscount = (tmp.Data[i].price / 100) *(15)*(tmp.Data[i].qty);
          tDis += typeDiscount;
        }
        count += obj.Data[i].qty;
        ItemsListing(i, count);
      }
      }
            Cart(amt, tot, normalDis, tDis, count);
      }

      function demoVisibility() {
            document.getElementById("myP2").style.visibility = "hidden";
        } 
     

      function removeItem(i) {
    
        delete obj.Data[i];
        console.log(newItems);
        sessionStorage.setItem('key',JSON.stringify(obj));
        document.getElementById("cart-items").innerHTML = "";
        document.getElementById("total-price").innerHTML = "";
        tot = 0;
        count = 0;
        tDis = 0;
        normalDis = 0;

        for (i in obj.Data ) {
          if(obj.Data[i]!=null){
          tot += obj.Data[i].price*obj.Data[i].qty;
          discount = obj.Data[i].discount;
          normalDis += (obj.Data[i].price * obj.Data[i].qty / 100) * discount;
          if ((obj.Data[i].type == "fiction")) {
            typeDiscount = (obj.Data[i].price / 100) *(15)* (obj.Data[i].qty);
            tDis += typeDiscount;
          }
          count += obj.Data[i].qty;
          ItemsListing(i, count);
        }
      }
      
      //demmo
      // onClick="demoVisibility()"
        // document.getElementById("alert-box").innerHTML =
          // '<div id="myP2" class="alert alert-danger  role="alert">Item is removed from the cart.<button  type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
           document.getElementById("alert-box").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Item has been succesfully removed from cart!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
        
        document.getElementById("box").innerHTML =
          '<tr><td><div class="items">Items(' +
          count +
          ')</div></td><div class="qty">Qty</div></td><div class="price">Price</div></td></tr>';
        Cart(amt, tot, normalDis, tDis, count);
        var flag=0;
        for (i in obj.Data )
        {
           if(obj.Data[i]!=null)
           {
             flag=1;
             break;
           }
        }
        if (flag==0)
        {
           sessionStorage.setItem('key',JSON.stringify(newItems));
          document.getElementById("reload").innerHTML =
            "<button onClick='window.location.reload(); items=newItems'>Load the data</button>";
        }
      }

      function sub(id) {
        var ide = id - 9090;
        if (obj.Data[ide].qty != 0) {
          obj.Data[ide].qty -= 1;
          tot -= obj.Data[ide].price;
          count -= 1;
          discount = obj.Data[ide].discount;
          normalDis -= (obj.Data[ide].price / 100) * discount;

          if (obj.Data[ide].type == "fiction") {
            discount = 15;
            typeDiscount = (obj.Data[ide].price / 100) * discount;
            tDis -= typeDiscount;
          }
        }
        document.getElementById("cart-items").innerHTML = "";
        for (i in obj.Data) {
          if(obj.Data[i]!=null)
          ItemsListing(i, count);
        }

        document.getElementById("total-price").innerHTML = "";
        Cart(amt, tot, normalDis, tDis, count);
        sessionStorage.setItem('key',JSON.stringify(obj));
      }

      function add(id) {
        count += 1;
        var ide = id - 9090;

        obj.Data[ide].qty += 1;
        document.getElementById("cart-items").innerHTML = "";
        tot += obj.Data[ide].price;
        discount = obj.Data[ide].discount;
        normalDis += (obj.Data[ide].price / 100) * discount;

        if (obj.Data[ide].type == "fiction") {
          discount = 15;
          typeDiscount = (obj.Data[ide].price / 100) * discount;
          tDis += typeDiscount;
        }
        for (i in obj.Data) {
          if(obj.Data[i]!=null)
          ItemsListing(i, count);
        }
        document.getElementById("total-price").innerHTML = "";
        Cart(amt, tot, normalDis, tDis, count);
        sessionStorage.setItem('key',JSON.stringify(obj));
      }