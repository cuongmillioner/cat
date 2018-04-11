//**************************************************
//Shopping Cart Function

  var shoppingCart = {};

  shoppingCart.cart = [];

  shoppingCart.Item = function(name, age, price, count)
  {
    this.name = name;
    this.price = price;
    this.count = count;
    this.age = age;
  }

   shoppingCart.addItemToCart = function(name, age, price, count)
  {
    for(var i in this.cart)
    {
      if(this.cart[i].name === name)
      {
        this.cart[i].count = 1;
        shoppingCart.saveCart();
        return;
      }

    }
    var item = new shoppingCart.Item(name, age, price, count);
    this.cart.push(item);
    shoppingCart.saveCart();
  }
//Bỏ phần set count
  shoppingCart.setCountForItem = function(name, count)
  {
    for(var i in this.cart){
      if(this.cart[i].name === name){
        this.cart[i].count = count;
        break;
      }
    }
    this.saveCart();
  }

  shoppingCart.removeItemFromCart = function(name)
  {
    for(var i in this.cart)
    {
      if(this.cart[i].name === name)
      {
        this.cart[i].count--;
        if(this.cart[i].count === 0)
        {
          this.cart.splice(i, 1);
        }
        break;
      }
    }
    this.saveCart();
  };

   shoppingCart.removeItemFromCartAll = function(name)
  {
    for(var i in this.cart)
    {
      if(this.cart[i].name === name)
      {
        this.cart.splice(i, 1);
        break;
      }
    }
    shoppingCart.saveCart();
  }

   shoppingCart.clearCart = function()
  {
    this.cart = [];
    shoppingCart.saveCart();
  }

   shoppingCart.countCart = function()
  {
    var totalCart = 0;
    for(var i in this.cart)
    {
      totalCart += this.cart[i].count;
    }
    return totalCart;
  }

   shoppingCart.totalCart = function()
  {
    totalCost = 0;
    for(var i in this.cart)
    {
      totalCost += this.cart[i].price * this.cart[i].count;
    }
    return totalCost.toFixed(2);
  }

   shoppingCart.listCart = function()
  {
    var cartCopy = [];
    for( var i in this.cart )
    {
      var item = this.cart[i];
      var itemCopy = {};
      for(var p in item)
      {
        itemCopy[p] = item[p];
      }
      itemCopy.total = (item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  }

  shoppingCart.saveCart = function()
  {
    localStorage.setItem("shoppingCart", JSON.stringify(this.cart));
  }

   shoppingCart.loadCart = function()
  {
    this.cart = JSON.parse(localStorage.getItem("shoppingCart"));
  }
