/*

# Mohamed Elshorbagy
# 06/01/2018
# SpiroGraph 
# Inspiration Idea : https://en.wikipedia.org/wiki/Spirograph
# Language : JavaScript
# Library Used : P5.js

*/


/* Global variables */
let graphs = [];
let speedForce = 8;
let resetBtn;

function setup() {
createCanvas(600,600);
background(255);



resetBtn = createButton('reset');


graphs.push(new Graph(300, 100));
graphs.push(new Graph(300, 300));
graphs.push(new Graph(300, 500));



resetBtn.mouseClicked(reset);


}

function draw() {

graphs.forEach(single => {
  single.display();
})

}



/* 
  [ Function Name ] : reset()
  [ Functionality ] : Resets the Background to White and Empty the Array From any Elements then add element to it to begin again
 */

function reset() {
  background(255);
  graphs = [];
  graphs.push(new Graph(300, 100));
  graphs.push(new Graph(300, 300));
  graphs.push(new Graph(300, 500));
  // graphs.push(new Graph(width / 2, height / 2));



}


/* Graph Class */

/*
  [ Functions ] : {
                    dispaly(): Have the Algorithm & Equations for the Spirograph,
                  }
  [ Constructor ] : - Two Arguments ==> translationX , translationY , To Set the Space to be the Center of the Spiral
                    - Sets the Main variables of the Spirograph Equations ( R , r , p ) ==> See a Good Explaniation at Wiki Page
                    

 */



class Graph {
  constructor(translationX, translationY) {
      this.translationX = translationX;
      this.translationY = translationY;
      this.R = Math.floor(random(90,120)); // Main Radius => From 90 to 120 Degrees 
      this.r = Math.floor(random(20,this.R - 20)); 
      this.p = Math.floor(random(10,this.r - 10));
      this.step = 0;

  }




  display() {
    if(this.step < 50000) {
      push();
      translate(this.translationX,this.translationY);
      // Core Algorithm 
      let t = radians(this.step);
      let l = this.p / this.r;
      let k = this.r / this.R;
      let ang = ((1 - k) / k) * t;
      // Points Positions ==> Equations From Wiki Page
      this.x = this.R  * (((1 - k) * Math.cos(t)) + ((l * k) * Math.cos(ang)));
      this.y = this.R  * (((1 - k) * Math.sin(t)) + ((l * k) * Math.sin(ang)));
      stroke((this.translationX + this.translationY) % 360,180,150);
      line(this.prevX,this.prevY,this.x,this.y);
      pop();
      this.step += speedForce;
      this.prevX = this.x;
      this.prevY = this.y;


    }




  }


}

