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
      



      var items,
        i,
        newItems,
        total = 0,
        count = 0,
        discount = 0,
        amount = 0,
        baseDiscount = 0,
        typeDiscount = 0,
        actualAmount = 0,
        tDiscount = 0;
      items = {
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
         items=JSON.parse(sessionStorage.getItem('key'));
        //  console.log(items.Data);
        } 
          
        load(items);
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

      function resize() {
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

      function Items(i) {
        document.getElementById("box").innerHTML =
          '<tr><td><div class="items">Items (' +
          count +
          ')</div></td><div class="qty">Qty</div></td><div class="price">Price</div></td></tr>';
        document.getElementById("cart-items").innerHTML +=
          "<tr><td><div class='card col-5'><div class='row '><div class='col-auto'><img src=" +
          items.Data[i].img_url +
          " class='img-fluid' width='40'></div><div class='col'><div class='card-block px-2'><p class='card-title'>" +
          items.Data[i].name +
          " <span class='close' onclick='deleteItem(" +
          i +
          ")'>&times;</span></p></div></div></td>";

        document.getElementById("cart-items").innerHTML +=
          " &nbsp; &nbsp; &nbsp; <td class='margin1'> <span class='qty-btn' onclick='decrease(" +
          items.Data[i].id +
          ")'><i style='font-size:24px' class='fa'>&#xf068;</i></span> <input type='text' id='item-qty' value=" +
          items.Data[i].qty +
          " disabled> <span class='qty-btn' onclick='increase(" +
          items.Data[i].id +
          ")'><i style='font-size:24px' class='fa fa-plus'></i></span></td>";

        document.getElementById("cart-items").innerHTML +=
          " &nbsp; &nbsp; &nbsp; <td>$" + items.Data[i].price + "</td></tr>";
      }

      function Cart(amount, total, baseDiscount, tDiscount, count) {
        amount = total - baseDiscount - tDiscount;
        document.getElementById("total-price").innerHTML +=
          "<span class='align1'><b style='font-size:20px;'>Total<br></b></span>" +
          "<span class='align1'>Items (" +
          count +
          ") : </span><span class='align'>$" +
          total +
          "</span><br><div class='margin'><span class='align1'>Discount :</span><span class='align'>- $" +
          baseDiscount +
          "</span><br><span class='align1'>Type Discount : </span><span class='align'>- $" +
          tDiscount +
          "</span><br> <div class='cart-foot'><span class='align1'>Order Total :</span> <span class='align '>$" +
          amount +
          "</span>";
      }

      function load(tmp){
      for (i in tmp.Data) {
        if(tmp.Data[i]!=null){
        total += tmp.Data[i].price*items.Data[i].qty;
        discount = tmp.Data[i].discount;
        baseDiscount += (tmp.Data[i].price / 100) * discount * items.Data[i].qty;
        if (tmp.Data[i].type == "fiction") {
          discount = 15;
          typeDiscount = (tmp.Data[i].price / 100) * discount * items.Data[i].qty;
          tDiscount += typeDiscount;
        }
        count += items.Data[i].qty;
        Items(i, count);
      }
      }
            Cart(amount, total, baseDiscount, tDiscount, count);
      }

      function demoVisibility() {
            document.getElementById("myP2").style.visibility = "hidden";
        } 
     

      function deleteItem(i) {
    
        delete items.Data[i];
        console.log(newItems);
        sessionStorage.setItem('key',JSON.stringify(items));
          // console.log(items);
        document.getElementById("cart-items").innerHTML = "";
        document.getElementById("total-price").innerHTML = "";
        total = 0;
        count = 0;
        tDiscount = 0;
        baseDiscount = 0;

        for (i in items.Data ) {
          if(items.Data[i]!=null){
          total += items.Data[i].price*items.Data[i].qty;
          discount = items.Data[i].discount;
          baseDiscount += (items.Data[i].price * items.Data[i].qty / 100) * discount;
          if ((items.Data[i].type == "fiction")) {
            discount = 15;
            typeDiscount = (items.Data[i].price / 100) * discount * items.Data[i].qty;
            tDiscount += typeDiscount;
          }
          count += items.Data[i].qty;
          Items(i, count);
        }
      }
      // onClick="demoVisibility()"
        // document.getElementById("alert-box").innerHTML =
          // '<div id="myP2" class="alert alert-info  role="alert">Item is removed from the cart.<button  type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
           document.getElementById("alert-box").innerHTML = '<div class="alert alert-info alert-dismissible fade show" role="alert">Item removed from cart!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
        
        document.getElementById("box").innerHTML =
          '<tr><td><div class="items">Items(' +
          count +
          ')</div></td><div class="qty">Qty</div></td><div class="price">Price</div></td></tr>';
        Cart(amount, total, baseDiscount, tDiscount, count);
        var flag=0;
        for (i in items.Data )
        {
           if(items.Data[i]!=null)
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

      function decrease(id) {
        var ide = id - 9090;
        if (items.Data[ide].qty != 0) {
          items.Data[ide].qty -= 1;
          total -= items.Data[ide].price;
          count -= 1;
          discount = items.Data[ide].discount;
          baseDiscount -= (items.Data[ide].price / 100) * discount;

          if (items.Data[ide].type == "fiction") {
            discount = 15;
            typeDiscount = (items.Data[ide].price / 100) * discount;
            tDiscount -= typeDiscount;
          }
        }
        document.getElementById("cart-items").innerHTML = "";
        for (i in items.Data) {
          if(items.Data[i]!=null)
          Items(i, count);
        }

        document.getElementById("total-price").innerHTML = "";
        Cart(amount, total, baseDiscount, tDiscount, count);
        sessionStorage.setItem('key',JSON.stringify(items));
      }

      function increase(id) {
        count += 1;
        var ide = id - 9090;

        items.Data[ide].qty += 1;
        document.getElementById("cart-items").innerHTML = "";
        total += items.Data[ide].price;
        discount = items.Data[ide].discount;
        baseDiscount += (items.Data[ide].price / 100) * discount;

        if (items.Data[ide].type == "fiction") {
          discount = 15;
          typeDiscount = (items.Data[ide].price / 100) * discount;
          tDiscount += typeDiscount;
        }
        for (i in items.Data) {
          if(items.Data[i]!=null)
          Items(i, count);
        }
        document.getElementById("total-price").innerHTML = "";
        Cart(amount, total, baseDiscount, tDiscount, count);
        sessionStorage.setItem('key',JSON.stringify(items));
      }