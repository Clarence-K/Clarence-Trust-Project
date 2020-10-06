var successFCN = function(Gov)
{
    console.log("Gov",Gov);
    initGraph(Gov);
}

var failFCN = function(error)
{
    console.log("error",error);
}

var TrustPromise = 
    d3.csv("DataFiles/Gov.csv")
    d3.csv("DataFiles/black.csv")
d3.csv("DataFiles/Crime.csv")
TrustPromise.then(successFCN,failFCN);

getTrust=function(Gov){
    return Gov.Trust
}
getDate=function(Gov){
                  return Gov.Date
                  }

var drawLines = function(Gov,target,
                         xScale,yScale)
{
    console.log(Gov[0].Date)
    var lineGenerator = d3.line()
        .x(getDate)
        .y(getTrust)
    
     console.log(lineGenerator)
    var lines = target
        .selectAll("g")
        .data(Gov)
        .enter()
        .append("g")
        .classed("line",true)
        .attr("fill","none")
   
        lines.append("path")
        .datum(function(Gov) 
            { return Gov.Trust  
             ;})
        .attr("d",lineGenerator); 

    
    }
var makeTranslateString = function(x,y)
{
    return "translate("+x+","+y+")";
}
var drawAxes = function(graphDim,margins,
                         xScale,yScale)
{
   var xAxis= d3.axisBottom(xScale);

    var yAxis= d3.axisLeft(yScale);
    
    var axes = d3.select("svg")
        .append("g")
    axes.append("g")
        .attr("transform","translate("+margins.left+","
             +(margins.top+graphDim.height)+")")
        .call(xAxis)
    
    axes.append("g")
        .attr("transform","translate("+margins.left+","
             +(margins.top)+")")
        .call(yAxis)
 
}
var drawLabels = function(graphDim,margins)
{
    
    var labels = d3.select("svg")
        .append("g")
        .classed("labels",true)
    
     labels.append("text")
        .text("Days")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graphDim.width/2))
        .attr("y",(graphDim.height + 35)  + margins.top);

    
    labels.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graphDim.height/2))+")")
        .append("text")
        .text("Quiz Grade")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(90)")
    
}
var initGraph = function(Gov)
{
    //size of screen
    var screen = {width:800,height:600}
    //how much space on each side
    var margins = {left:100,right:20,top:20,bottom:100}
    
    
    
    var graph = 
        {
            width:screen.width-margins.left-margins.right,
            height:screen.height - margins.top-margins.bottom
        }
    console.log(graph);
    
    d3.select("svg")
    .attr("width",screen.width)
    .attr("height",screen.height)
    
    var target = d3.select("svg")
    .append("g")
    .attr("id","#graph")
    .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");
    
    var maxDate = d3.max(function(Date)
                        {return Gove.Date});
    
    var xScale = d3.scaleLinear()
        .domain([1,maxDate])
        .range([0,graph.width])

    var yScale = d3.scaleLinear()
        .domain([0,100])
        .range([graph.height,0])
    
    drawAxes(graph,margins,xScale,yScale);
    drawLines(Gov,target,xScale,yScale);
    drawLabels(graph,margins);
    
    }
    