const makePizza = function () {
    console.log("Make dough");
    console.log("Shape dough in a flat round");
    console.log("Put ingredients on pizza");
    console.log("Bake pizza in oven");
};
// With only above I've defined the function, but on the console you see nothing. To run the code I've to call the function.
/* makePizza();
makePizza();
makePizza(); */

const makeSushi = function () {
    console.log("Cook rice");
    console.log("Slice ingredients");
    console.log("Put rice and ingredient on nori");
    console.log("Roll it and cut in pieces");
};
// makeSushi();

//Making three meals of sushi and two pizzas
makeSushi();
makeSushi();
makeSushi();
makePizza();
makePizza();