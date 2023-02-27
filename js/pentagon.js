document.getElementById('btn-pentagon').addEventListener('click',function(){

    //console.log('parallelogram clicked');

    pentagonArea(0.5, 6, 10);  


})

function pentagonArea(a, p, b){

    const pentagonArea = a * p * b;
    //console.log(parallelogramArea + ' cm');


    //set shape name
    const pentagonSpanCreate = document.createElement("span");
    const pentagonSpanCreateNode = document.createTextNode("Pentagon");
    pentagonSpanCreate.appendChild(pentagonSpanCreateNode);
    document.getElementById('display-triangle-result').appendChild(pentagonSpanCreate);

    //set area value
    const pentagon = document.createElement("p");
    const pentagonNode = document.createTextNode(pentagonArea);

    pentagon.appendChild(pentagonNode);
    document.getElementById('display-triangle-result').appendChild(pentagon);
}