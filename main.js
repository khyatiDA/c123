earX=0;
earY=0;
img=""

function preload() {
  img=loadImage("dog_ear-removebg-preview");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    earX = results[0].pose.ear.x - 25;
    earY = results[0].pose.ear.y - 25;
    console.log("ear x = " + earX);
    console.log("ear y = " + earY);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);

  image(img,earX,earY,50,50)
 
}

function take_snapshot(){    
  save('my image.png');
}