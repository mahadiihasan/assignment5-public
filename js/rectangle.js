document.getElementById('btn-rectangle').addEventListener('click', function(){

    //console.log('button clicked');

    const rectanglebaseField = document.getElementById('rectangle-input-1');
    const getRectangleBaseFieldInString = rectanglebaseField.value;
    const rectanglebaseFieldInFlot = parseFloat(getRectangleBaseFieldInString);
    //console.log(rectanglebaseFieldInFlot);

    const rectangleHeightField = document.getElementById('rectangle-input-2');
    const getRectangleHeightFieldInString = rectangleHeightField.value;
    const rectangleHeightFieldInFlot = parseFloat(getRectangleHeightFieldInString);

    //span field
    const rSpan1 = document.getElementById('r-span1');
    const rSpan2 = document.getElementById('r-span2');

    rSpan1.innerText = rectanglebaseFieldInFlot;
    rSpan2.innerText = rectangleHeightFieldInFlot;

    //console.log(rectangleHeightFieldInFlot);

    const rectangleArea = rectangleHeightFieldInFlot * rectanglebaseFieldInFlot;
    //console.log(rectangleArea);

    //set shape name
    const rectangleSpanCreate = document.createElement("span");
    const rectangleSpanCreateNode = document.createTextNode("Rectangle");
    rectangleSpanCreate.appendChild(rectangleSpanCreateNode);
    document.getElementById('display-triangle-result').appendChild(rectangleSpanCreate);

    //appendchild list
    const rectangle = document.createElement("p");
    const rectangleNode = document.createTextNode(rectangleArea);

    

    rectangle.appendChild(rectangleNode);
    document.getElementById('display-triangle-result').appendChild(rectangle);
    //text.innerText = triangleArea;


})