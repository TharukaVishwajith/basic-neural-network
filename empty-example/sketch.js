
var p;
var width;
var height;

var pionts = [];
var POINTS_LENGTH = 100;

function f(x){
	return -0.5*x + 0.2;
}

function setup() {
	width = 500;
	height = 500;
  createCanvas(width, height);
  background(240);

  p = new Perceptron(3);
  // let inputes = [-1,0.5];

  for (var i = 0; i < POINTS_LENGTH; i++) {
  	pionts[i] = new Point();
  }

  // console.log(p.guess(inputes));
   

}


function draw() {
background(240);

	// redraw(); 
	// noStroke();
	// fill('rgb(55,200,50)');
	// ellipse(56, 46, 10, 10);
  //move the camera away from the plane by a sin wave
  // 
  // console.log(p.geess([-1,0.5]));
  pionts.forEach((point)=>{
  	point.show();

  	let lable = point.lable;
   	let inputes = [point.x,point.y,point.bias];
   	let guess = p.guess(inputes);
	noStroke();
   	if(guess == lable){
   		fill('rgb(0,0,0)');
   	}else{
   		fill('rgb(255,0,0)');
   	}
   	ellipse(point.pixelX(), point.pixelY(), 10, 10);
  })


   	p1 = new Point(-1,f(-1));
  	p2 = new Point(1,f(1));
	stroke(0);
	line(p1.pixelX(),p1.pixelY(),p2.pixelX(),p2.pixelY());

  mouseClicked();




  guessLine();
  
}

function mouseClicked() {

 pionts.forEach((point)=>{
   	let lable = point.lable;
   	let inputes = [point.x,point.y,point.bias];
   	let guess = p.guess(inputes);
	noStroke();
   	if(guess == lable){
   		fill('rgb(100,20,0)');
   	}else{
   		fill('rgb(255,0,0)');
   	}
   	ellipse(point.pixelX(), point.pixelY(), 10, 10);

   	p.train(inputes,lable);
  	
  })
}

function guessLine(){
	p3 = new Point(-1,p.guessY(-1));
  	p4 = new Point(1,p.guessY(1));
	stroke(0);
	line(p3.pixelX(),p3.pixelY(),p4.pixelX(),p4.pixelY());

}