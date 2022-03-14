
//simply calculates price module return value
//fuelquote.js calls it 


function calculator(){
    class PricingModule{
        //only called after getting gallons factor and curr price
        constructor(gallon, price){
            this.gallon=gallon;
            this.price=price;
        }

        calculate = this.gallon*this.price; //to call class: PricingModule.calculate(gallon, price)


    }
}