

canvas = new fabric.Canvas('myCanvas')
//Set initial positions for ball and hole images.
// when I was coding this part then I realized with double equal signs then only it works.
hole_image_x = 800;
hole_image_y = 400;

ball_image_x = 0;
ball_image_y = 0;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
hole_obj = Img;
hole_obj.scaleToWidth(50);
hole_obj.scaleToHeight(50);
hole_obj.set({
	top : hole_image_y,
	left:hole_image_x,
})
canvas.add(hole_obj)
	});
	new_image();
}

function new_image(){
	fabric.Image.fromURL("ball.png", function(Img){
ball_obj = Img;
ball_obj.scaleToWidth(50);
ball_obj.scaleToHeight(50);
ball_obj.set({
	top : ball_image_y,
	left:ball_image_x,
})
canvas.add(ball_obj)
	});
	;
	block_image_width = 5;
block_image_height = 5;
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
if((ball_image_x==hole_image_x)&&(ball_image_y==hole_image_y)){
	canvas.remove(ball_obj)
	document.getElementById("hd3").innerHTML = "You Have Hit the Goal!"
	document.getElementById("myCanvas").style.borderColor="red";
}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_image_y>=0)
		{
			ball_image_y = ball_y - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up arrow key is pressed, X = " + ball_x +" , Y= "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}	
	}

	function down()
	{
		if(ball_image_y<=450)
		{
			ball_image_y = ball_image_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X = " + ball_image_x +" , Y= "+ball_image_y);
			canvas.remove(ball_obj);
			new_image();
		}	
	}



	function right()
	{
		if(ball_image_x<=950)
		{
			ball_image_x = ball_image_x + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Right arrow key is pressed, X = " + ball_image_x +" , Y= "+ball_image_y);
			canvas.remove(ball_obj);
			new_image();
		}	
	}
}

function left()
	{
		if(ball_image_x>=0)
		{
			ball_image_x = ball_image_x - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Left arrow key is pressed, X = " + ball_image_x +" , Y= "+ball_image_y);
			canvas.remove(ball_obj);
			new_image();
		}	
	}