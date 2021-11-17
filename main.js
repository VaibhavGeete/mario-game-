function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_coins=loadSound("coin.wav");
	mario_jump=loadSound("jump.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	mario_game_end=loadSound("gameover.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("webcam_view");

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
	console.log("modelLoaded!");
}

function gotPoses(results)
{
	if(results.length>0)
	{
		console.log(results);

		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		
	}



}

function draw() {
	game()
}






