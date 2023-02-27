document.getElementById('btn-triangle').addEventListener('click', function(){

    //console.log('button clicked');    

    const trianglebaseField = document.getElementById('triangle-input-1');
    const getTriangleBaseFieldInString = trianglebaseField.value;
    const trianglebaseFieldInFlot = parseFloat(getTriangleBaseFieldInString);
    //console.log(trianglebaseFieldInFlot);

    const triangleHeightField = document.getElementById('triangle-input-2');
    const getTriangleHeightFieldInString = triangleHeightField.value;
    const triangleHeightFieldInFlot = parseFloat(getTriangleHeightFieldInString);
    //console.log(triangleHeightFieldInFlot);

    const tSpan1 = document.getElementById('t-span1');
    const tSpan2 = document.getElementById('t-span2');

    tSpan1.innerText = trianglebaseFieldInFlot;
    tSpan2.innerText = triangleHeightFieldInFlot;

    const triangleArea = 0.5 * triangleHeightFieldInFlot * trianglebaseFieldInFlot;
    //console.log(triangleArea);

    //set shape name
    const triangleSpanCreate = document.createElement("span");
    const triangleSpanCreateNode = document.createTextNode("Triangle");
    triangleSpanCreate.appendChild(triangleSpanCreateNode);
    document.getElementById('display-triangle-result').appendChild(triangleSpanCreate);

    //appendchlid lsit           

    const triangle = document.createElement("p");  

    const triangleNode = document.createTextNode(triangleArea);
    triangle.appendChild(triangleNode);    
    document.getElementById('display-triangle-result').appendChild(triangle);



})