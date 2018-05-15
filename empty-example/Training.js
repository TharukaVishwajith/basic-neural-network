class Point{

	constructor(){
		this.x = Math.floor(Math.random() * width ) + 1;
		this.y = Math.floor(Math.random() * height) + 1;

		if(this.x > this.y){
			this.lable = 1;
		}else{
			this.lable = -1;
		}
	}

	show(){
		// stroke('rgb(55,200,50)');
		noStroke();
		if(this.lable === 1){
			fill('rgb(55,200,50)');
		}else{
			fill('rgb(55,0,50)');
		}
		ellipse(this.x, this.y, 10, 10);
	}

}