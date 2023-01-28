class Order {
  constructor(owner, name) {
    this.owner = owner;
    this.name = name; // do not know what they are ordering, but they will get two things
  }
}

class Menu {
  constructor() {
    this.orders = []; //this array will hold all meals.
    //this.selectedMeal = null; //selector for order. Starts at null bc nothing is selected by default.
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
          break; //ask for name and food and drink
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
              1) create order
              2) view order
              3) delete order
             
              `);
  }

  enterPersonName() {
    let name = prompt(` What is your name?`);

    let selection = this.showMealOptions(name);
    switch (selection) {
      case "1":
        this.enterFood(name);
        break;
      case "0":
        this.enterDrink(name);
    }
  }
  showMealOptions(mealInfo) {
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

  enterFood(name) {
    let food = prompt("Enter your food order: ");
    this.orders.push(new Order(name, food));
    alert("Food order has been created successfully");
  }

  enterDrink(name) {
    let drink = prompt("Enter your drink: ");
    //this.orders.push(name + " " + drink);
    this.orders.push(new Order(name, drink));
    alert("Drink order has been created successfully");
  }

  deleteOrder() {
    let index = prompt("Enter the index of the order you wish to cancel:");
    if (index > -1 && index < this.orders.length) {
      this.orders.splice(index, 1);
      alert("Order" + index + " has been deleted");
    } else {
      alert("order does  not exist");
    }
  }

  viewOrder() {
    let index = prompt("Enter the index of the order you wish to view");
    if (index > -1 && index < this.orders.length) {
      // this.selectedMeal = this.mealOrder[index];
      // let description = "Food order" + this.selectedMeal.name + "\n";

      //for (let i = 0; i < this.selectedMeal.length; i++) {
      //  description +=
      //   i +
      //   ") " +
      //   this.selectedMeal[i].name +
      //   " - " +
      //   this.selectedMeal[i].position +
      //   "\n";
      alert(this.orders[index].name + " " + this.orders[index].owner);
    } else {
      alert("Order does not exist.");
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
