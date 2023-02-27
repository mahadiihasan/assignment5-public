document.getElementById('btn-ellipse').addEventListener('click',function(){

    //console.log('parallelogram clicked');

    ellipseArea(3.14, 10, 4);
    
})

function ellipseArea(pi, a, b){

    const ellipseArea = pi * a * b;
    const fixedArea = ellipseArea.toFixed(2)


    //set shape name
    const ellipseSpanCreate = document.createElement("span");
    const ellipseSpanCreateNode = document.createTextNode("Ellipse");
    ellipseSpanCreate.appendChild(ellipseSpanCreateNode);
    document.getElementById('display-triangle-result').appendChild(ellipseSpanCreate);

    

    //console.log(parallelogramArea + ' cm');
    const ellipse = document.createElement("p");
    const ellipseNode = document.createTextNode(fixedArea);

    ellipse.appendChild(ellipseNode);
    document.getElementById('display-triangle-result').appendChild(ellipse);
}