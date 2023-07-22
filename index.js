class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    // Getter method to count the number of sides
    get countSides() {
      return this.sides.length;
    }
  
    // Getter method to calculate the perimeter
    get perimeter() {
      return this.sides.reduce((acc, side) => acc + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    // Constructor is inherited from Polygon
  
    // Getter method to check if the sides form a valid triangle
    get isValid() {
      const [a, b, c] = this.sides;
      return a + b > c && a + c > b && b + c > a;
    }
  }
  
  class Square extends Polygon {
    // Constructor is inherited from Polygon
  
    // Getter method to check if the sides form a valid square
    get isValid() {
      return this.sides.every((side) => side === this.sides[0]);
    }
  
    // Getter method to calculate the area of the square
    get area() {
      return this.sides[0] ** 2;
    }
  }
  
  // Export the classes so that they can be tested
  module.exports = { Polygon, Triangle, Square };
  