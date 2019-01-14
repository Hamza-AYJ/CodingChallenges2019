function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 60);
  
  this.maxIter = 80;
  this.magnification =0.5;
  this.x = 0;
  this.y = 0.75;
	this.reStart = this.x-this.magnification;
  this.reEnd = this.x+this.magnification;
  this.imStart = this.y - this.magnification;
  this.imEnd = this.y+this.magnification;
}

function draw() {
	for (var x = 0; x< width; x++){
  for (var y = 0; y< height; y++){
    var m = mandlebrot(x, y);
    
    var hue = 125* m/this.maxIter;
    var saturation = 255;
    var bright = 255;
    
    if (m==this.maxIter){
     bright = 0; 
    }
    
    noStroke();
    stroke (hue, saturation, bright)
    point(x,y);
  }
}
}

function mandlebrot(x, y){
  
  var a = map (x,0,width,this.reStart, this.reEnd);
  var b = map (y,0,height,this.imStart, this.imEnd);
  
  var ca = a;
  var cb = b;
  
  for (var n =0; n < this.maxIter; n++){
    
  var aa = a*a - b*b;
  var bb = 2 * a * b;
    
   a = aa+ca;
   b = bb+cb;
   
  if(abs(a+b) > 2) {
  	break;
  	}  
  }
  if (n== this.maxIter){
  return n;
  }
  return n+1- log(log(2)+abs(a+b));
}
