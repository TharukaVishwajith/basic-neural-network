
var p;
var width;
var height;

var pionts = [];
var POINTS_LENGTH = 100;

function setup() {
	width = 500;
	height = 500;
  createCanvas(width, height);
  background(240);

  p = new Perceptron(2);
  let inputes = [-1,0.5];

  for (var i = 0; i < POINTS_LENGTH; i++) {
  	pionts[i] = new Point();
  }

  console.log(p.guess(inputes));


}

function draw() {
	// noStroke();
	// fill('rgb(55,200,50)');
	// ellipse(56, 46, 10, 10);
  //move the camera away from the plane by a sin wave
  // 
  // console.log(p.geess([-1,0.5]));
	stroke(0);
	line(0,0,width,height);
  pionts.forEach((point)=>{
  	point.show();
  })

  //  pionts.forEach((point)=>{
  //  	let inputes = [point.x,point.y];
  // 	p.train(inputes,point.lable);
  // })



 
}