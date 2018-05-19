class Point{

	constructor(_x,_y){
		// this.x = Math.floor(Math.random() * width ) + 1;
		// this.y = Math.floor(Math.random() * height) + 1;
		if(_x && _y){
			this.x = _x;
			this.y = _y;
		}else{
			this.x = random(-1,1);
			this.y = random(-1,1);
			this.bias = 1;

			let lineY = f(this.x);
			if(lineY < this.y){
				this.lable = 1;
			}else{
				this.lable = -1;
			}
		}
		

	}

	pixelX(){
		return map(this.x, -1, 1, 0, width);
	}

	 pixelY(){
		return map(this.y, -1, 1, height, 0);
	}


	show(){
		// stroke('rgb(55,200,50)');
		noStroke();
		if(this.lable === 1){
			fill('rgb(55,200,50)');
		}else{
			fill('rgb(55,0,255)');
		}
		ellipse(this.pixelX(), this.pixelY(), 20, 20);
	}

}