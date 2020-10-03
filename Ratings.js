var successFCN = function(values)
{
    console.log("values",values);
var Race=values[0]
var Opinion=values[1]
        initGraph(Opinion);
  
}

var failFCN = function(error)
{
    console.log("error",error);
}

var RacePromise = d3.csv("DataFiles/Racial.csv")
var PerPromise = d3.csv("DataFiles/Performance.csv")
var promises=[RacePromise,PerPromise]
Promise.all(promises)
    .then(successFCN,failFCN);

//Bars
//Excellent
var drawPlot = function(Opinions,target,graphDim,
                         xScale,yScale)
{
       console.log(xScale.bandwidth)
    console.log(Opinions)
    target.selectAll("rect")
    .data(Opinions)
    .enter()
    .append("rect")
    .attr("x",function(Opinion){

    return xScale(Opinion.Rating)
})
    .attr("y",function(Opinion){
        return yScale(Opinion.Excellent)
    })

    .attr("width",xScale.bandwidth)
    .attr("height",function(Opinion){
        console.log((Opinion.Excellent))
        
        return graphDim.height-yScale(Opinion.Excellent)
        
    })
//    .attr("fill",function(Race){
//        console.log(Race.Race)
//        return colorScale(Race.Race)
//    })
}

//Good
var drawPlot2 = function(Opinions,target,graphDim,
                         xScale,yScale)
{
    console.log(Opinions)
    target.selectAll("rect")
    .data(Opinions)
    .enter()
    .append("rect")
    .attr("x",function(Opinion){
    return xScale(Opinion.Rating)
})
    .attr("y",function(Opinion){
        return yScale(Opinion.Good)
    })
    .attr("width",xScale.bandwidth)
    .attr("height",function(Opinion){
        console.log(yScale(Opinion.Good))
        
        return graphDim.height-yScale(Opinion.Good)
        
    })
//       .attr("fill",function(Race){
//        console.log(Race.Race)
//        return colorScale(Race.Race)
//    })
}
//Fair
var drawPlot3 = function(Opinions,target,graphDim,
                         xScale,yScale)
{
    console.log(Opinions)
    target.selectAll("rect")
    .data(Opinions)
    .enter()
    .append("rect")
    .attr("x",function(Opinion){
    return xScale(Opinion.Rating)
})
    .attr("y",function(Opinion){
        return yScale(Opinion.Fair)
    })
    .attr("width",xScale.bandwidth)
    .attr("height",function(Opinion){
        console.log(yScale(Opinion.Fair))
        
        return graphDim.height-yScale(Opinion.Fair)
        
    })
//       .attr("fill",function(Race){
//        console.log(Race.Race)
//        return colorScale(Race.Race)
//    })
}
var drawPlot4 = function(Opinions,target,graphDim,
                         xScale,yScale)
{
    console.log(Opinions)
    target.selectAll("rect")
    .data(Opinions)
    .enter()
    .append("rect")
    .attr("x",function(Opinion){
    return xScale(Opinion.Rating)
})
    .attr("y",function(Opinion){
        return yScale(Opinion.Poor)
    })
    .attr("width",xScale.bandwidth)
    .attr("height",function(Opinion){
        console.log(yScale(Opinion.Poor))
        
        return graphDim.height-yScale(Opinion.Poor)
        
    })
//       .attr("fill",function(Race){
//        console.log(Race.Race)
//        return colorScale(Race.Race)
//    })
}
var makeTranslateString = function(x,y)
{
    return "translate("+x+","+y+")";
}
//Axes
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
//Labels
var drawLabels = function(graphDim,margins)
{
    var labels = d3.select("svg")
        .append("g")
        .classed("labels",true)
        
    labels.append("text")
        .text("Trust Police Black v White")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graphDim.width/2))
        .attr("y",margins.top)
    
    labels.append("text")
        .text("By Race")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graphDim.width/2))
        .attr("y",(graphDim.height + 35)  + margins.top);

    
    labels.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graphDim.height/2))+")")
        .append("text")
        .text("Percent Answered")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(270)")
    
}

//Legend setup
var drawLegend = function(graphDim,margins)
{
    
 
   var categories = [
       {
           class:"Lot",
           name:"A Lot"
       },
       {
           class:"Little",
           name:"A Little"
       },
       {
           class:"None",
           name:"None At All"
       },
       
    ]
var legend = d3.select("svg")
        .append("g")
        .classed("legend",true)
        .attr("transform","translate("+
              (margins.left+ 10) +","+
             (margins.top+10)+")");
var entries = legend.selectAll("g")
            .data(categories)
            .enter()
            .append("g")
            .classed("legendEntry", true)

.attr("transform",function(categories,index)
              {
                return "translate(0,"+index*20+")";
              })
          

entries.append("rect")
        .attr("width", 10)
        .attr("height", 10)
    
entries.append("text")
                .text(function(category){return category.name;})
                .attr("x",15)
                .attr("y",10)
    
    
}
//graph setup
var initGraph = function(Data)
{
    //size of screen
    var screen = {width:400,height:500}
    //how much space on each side
    var margins = {left:60,right:20,top:30,bottom:50}
    
    
    
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
    
    
    var xScale = d3.scaleBand()
        .domain(["Excellent","Good","Fair","Poor"])
        .range([0,(graph.width)])
        .paddingInner(.80)
    var yScale = d3.scaleLinear()
        .domain([0,100])
        .range([graph.height,0])

    
    drawAxes(graph,margins,xScale,yScale);
    var g0=target.append("g")
    
      var g1=target.append("g")
    .attr("transform","translate(53,0)")
    var g2=target.append("g")
    .attr("transform","translate(106,0)");
        var g3=target.append("g")
    .attr("transform","translate(159,0)");
 drawPlot(Data,target,graph,xScale,yScale);
    drawPlot2(Data,g1,graph,xScale,yScale);
    drawPlot3(Data,g2,graph,xScale,yScale);
    drawPlot4(Data,g3,graph,xScale,yScale);
    drawLabels(graph,margins);
    drawLegend(graph,margins);
    
    
    
    
    
}