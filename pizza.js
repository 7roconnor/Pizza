class pizza{
    //type constructor below
    constructor(size, meat_toppings, veg_toppings)
    {
        this.size = size;
        this.meat_toppings = meat_toppings;
        this.veg_toppings = veg_toppings;
    }

  //type instance functions below
    size_cost()
    {
        if(this.size == 'S' || this.size == 's')
        {
            return 7.99;
        }
        if(this.size == 'M' || this.size == 'm')
        {
            return 9.99;
        }
        if(this.size == 'L' || this.size == "l")
        {
            return 12.99;
        }
        if(this.size == 'XL' || this.size == 'xl')
        {
            return 15.99;
        }
    }

    topping_cost()
    {
        if(top == this.meat_toppings)
        {
            return 0.99*top;
        }
        if(top == this.veg_toppings)
        {
            return 0.50*top;
        }
    }

    price()
    {
        return (topping_cost() + size_cost())
    }

  //type class functions below


}
