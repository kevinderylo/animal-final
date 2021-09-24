function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7SRlwHo7v/model.json",modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("result_label").style.color="RGB("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="RGB("+random_r+","+random_g+","+random_b+")";

        img1=document.getElementById("zebra");
        img2=document.getElementById("lion");
        img3=document.getElementById("cat");
        img4=document.getElementById("dog");

        if(results[0].label=="zebra"){
            img1.src="zebra-walk.gif";
            img2.src="lion-sit.jpg";
            img3.src="cat-sit.jpg";
            img4.src="dog-sit.jpg";
        }
        else if(results[0].label=="lion"){
            img1.src="zebra-sit.webp";
            img2.src="lion-yawn.gif";
            img3.src="cat-sit.jpg";
            img4.src="dog-sit.jpg";
        }
        else if(results[0].label=="cat"){
            img1.src="zebra-sit.webp";
            img2.src="lion-sit.jpg";
            img3.src="cat-meow.gif";
            img4.src="dog-sit.jpg";
        }
        else if(results[0].label=="dog"){
            img1.src="zebra-sit.webp";
            img2.src="lion-sit.jpg";
            img3.src="cat-sit.jpg";
            img4.src="barking-dog.gif";
        }
        else if(results[0].label=="Background Noise"){
            img1.src="zebra-sit.webp";
            img2.src="lion-sit.jpg";
            img3.src="cat-sit.jpg";
            img4.src="dog-sit.jpg";
        }
    }
}