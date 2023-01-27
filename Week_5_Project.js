class Order {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink; // do not know what they are ordering, but they will get two things
  }
}
class Person {
  constructor(name) {
    this.name = name; // we do not know the name of the person ordering (default)
    this.personName = []; ///default value of empty array, is not needed in the constructor/ array will
    //hold all the orders for each person
  }
}

class Menu {
  constructor() {
    this.meal = []; //this array will hold all meals.
    this.selectedMeal = null; //selector for order. Starts at null bc nothing is selected by default.
  }
  // class newDrink {
  //constructor() {
  // this.drinkOrder = []; //this array will hold all drink orders.
  // this.selectedDrink = null; //selector for order. Starts at null bc nothing is selected by default.
  //  }
  // }
  // class newFood {
  //constructor() {
  //  this.foodOrder = []; //this array will hold all food orders.
  //this.selectedFood = null; //selector for order. Starts at null bc nothing is selected by default.

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.enterPersonName(); 
          break;  //ask for name and food and drink
          case "1":
          this.enterMealOptions(); 
          break;
        case "2":
          this.viewOrder(); // show order list of names
          break;
        case "3":
          this.deleteOrder(); //ask for index of order to delete
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert("Drink some water!");
  }

  showMainMenuOptions() {
    return prompt(`
              0) Not hungry
              1) enter your name
              2) view order
              3) delete order
             
              `);
  }

  enterPersonName(nameInfo) {
    return prompt(`
              0) enter name
              
              ------------------
              ${nameInfo}
              `);
  }

  enterMealOptions(mealInfo) {
    return prompt(`
            0) enter drink
            1) enter food

            -----------------
            ${mealInfo}
            
            `);
  }

  //createOrderName(person) {
    //let orderName = prompt("Enter your name: ");
    //this.personName.push(new personName(name));
  //} 

  enterFoodOrder(order) {
    let foodOrder = prompt("Enter your food order: ");
  }

  enterDrinkOrder(drink) {
    let drinkOrder = prompt("Enter your drink: ");
  }

  deleteOrder() {
    let index = prompt("Enter the index of the order you wish to cancel:");
    if (index > -1 && index < this.mealOrder.length) {
      this.mealOrder.splice(index, 1);
    }
  }

  viewOrder() {
    let index = prompt("Enter the index of the order you wish to view");
    if (index > -1 && index < this.personName.length) {
      this.selectedMeal = this.mealOrder[index];
      let description = "Food order" + this.selectedMeal.name + "\n";

      for (let i = 0; i < this.selectedMeal.length; i++) {
        description +=
          i +
          ") " +
          this.selectedMeal[i].name +
          " - " +
          this.selectedMeal[i].position +
          "\n";
      }

      //let selection = this.showTeamMenuOptions(description);
      //switch (selection) {
       // case "1":
       //   this.createPlayer();
        //  break;
        //case "2":
       //   this.deletePlayer();
      //}
   // }
  }
}

let newMeal = new Menu();
newMeal.start();
