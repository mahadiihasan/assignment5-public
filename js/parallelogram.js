document.getElementById('btn-parallelogram').addEventListener('click',function(){

    //console.log('parallelogram clicked');
    const parallelogramArea = 10 * 12;
    //console.log(parallelogramArea + ' cm');

    //set shape name
    const parallelogramSpanCreate = document.createElement("span");
    const parallelogramSpanCreateNode = document.createTextNode("Parallelogram");
    parallelogramSpanCreate.appendChild(parallelogramSpanCreateNode);
    document.getElementById('display-triangle-result').appendChild(parallelogramSpanCreate);

    const parallelogram = document.createElement("p");
    const parallelogramNode = document.createTextNode(parallelogramArea);

    parallelogram.appendChild(parallelogramNode);
    document.getElementById('display-triangle-result').appendChild(parallelogram);
})