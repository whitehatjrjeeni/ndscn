status="";
img="";
object=[];

function preload()
{
img=loadImage("jeep b.jpeg");
}

function setup()
{
canvas=createCanvas(340,320);
canvas.center();
video=createCapture(VIDEO);
video.size(340,320);
video.hide();
object_detector=ml5.objectDetector('cocossd',modalloaded);
document.getElementById("status").innerHTML = "status : detecting objects";
}

function modalloaded()
{
console.log("ml"); 
status=true;
object_detector.detect(video,gotresult);
}

function gotresult(error,results)
{
  if(error){console.log(error);
}  
object=results;
console.log(results);
}

function draw()
{
image(video,0,0,340,320);
if(status!=""){
  objectDetector.detect(video,gotresult);
  for (i=0;i<object.length;i++){
document.getElementById("number of objects")
  

fill("black");
percent=floor(object[i].confidence*100);
text(object[i].label+" "+ percent+"%",object[i].x,object[i].y);
noFill();
stroke("blue");
rect(object[i].x,object[i].y,object[i].width,object[i].height);}
}}

function start(){
  objectDetector=ml5.objectDetector("cocossd",modalloaded);
  document.getElementById("status").innerHTML="status:detecting object";

}
