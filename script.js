var svg = document.getElementById("svg");
var NS = "http://www.w3.org/2000/svg";
var e_X = -1;
var e_Y = -1;

var blop = function(e) {
    var c = document.createElementNS(NS, "circle");
    
    var line = document.createElementNS(NS, "line");
    //if first click
    if (e_X == -1) {
	e_X = e.offsetX;
	e_Y = e.offsetY;
	c.setAttribute("fill","pink");
    } else {
	c.setAttribute("fill","white");
    }
    line.setAttribute("x1", e_X);
    line.setAttribute("y1", e_Y);
    //modify e coor to current click
    e_X = e.offsetX;
    e_Y = e.offsetY;
    line.setAttribute("x2", e_X);
    line.setAttribute("y2", e_Y);
    line.setAttribute("style", "stroke:grey;stroke-width:1");
    svg.appendChild(line);
    console.log(line);
    
    //circle att
    c.setAttribute("cx", e_X);
    c.setAttribute("cy", e_Y);
    c.setAttribute("r", 20);
    c.setAttribute("stroke","grey");
    c.setAttribute("stroke-width",1);


    svg.appendChild(c);
    console.log(c);
};

svg.addEventListener("click", blop);

var clearbtn = document.getElementById("clear");
clearbtn.addEventListener("click", function(e){
    while (svg.lastChild) {
	svg.removeChild(svg.lastChild);
    }
    e_X = -1;
    e_Y = -1;
    console.log("clear");
});
