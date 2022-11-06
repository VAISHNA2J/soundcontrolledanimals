function startClassification()
{
    navigator.mediaDevices.getUserMedia({audi: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/dNJ91mCKu/model.json", modelReady);
}

function modelReady()
{
    classifier.classify(gotResult);
}

function gotResult(error, results)
{
    console.log(gotResult);
}