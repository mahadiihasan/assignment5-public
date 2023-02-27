document.getElementById('btn-rhombus').addEventListener('click',function(){

    //console.log('parallelogram clicked');
    const rhombusArea = 0.5 * 16 * 8;
    //console.log(parallelogramArea + ' cm');

    //set shape name
    const rhombusSpanCreate = document.createElement("span");
    const rhombusSpanCreateNode = document.createTextNode("Rhombus");
    rhombusSpanCreate.appendChild(rhombusSpanCreateNode);
    document.getElementById('display-triangle-result').appendChild(rhombusSpanCreate);



    const rhombus = document.createElement("p");
    const rhombusNode = document.createTextNode(rhombusArea);

    rhombus.appendChild(rhombusNode);
    document.getElementById('display-triangle-result').appendChild(rhombus);
})