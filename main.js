noseX = 0;
noseY = 0;
difference = 0;
RW = 0;
LW = 0;
function setup()
{
  video = createCapture(video);
  video.size(550,550);

  canvas = createCanvas(550,550);
  canvas.position (550,510);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotposes()
{
    if (result.length > 0)
    {
      
        RW = results[0].pose.rightWrist.x;
        LW = results[0].pose.leftWrist.x;
        difference = floor(RW - LW);
        
    }
    
}

function draw()
{
    background ('#969A97');
    textSize(difference)
    fill('#ffe787')
    text('BTS x Army', 40, 300)
}
