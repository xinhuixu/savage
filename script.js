var svg = document.getElementById("svg");
var NS = "http://www.w3.org/2000/svg";

svg.addEventListener("click", function(e){
    var c = document.createElementNS(NS, "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", 20);
    c.setAttribute("stroke","grey");
    c.setAttribute("stroke-width",1);
    c.setAttribute("fill","white");
    svg.appendChild(c);
    console.log(c);

});

var clearbtn = document.getElementById("clear");
clearbtn.addEventListener("click", function(e){
    console.log("clear");
});
