var successFCN = function(values)
{
    console.log("values",values);
var Race=values[0]
var Opinion=values[1]
var Interact=values[2]
        initGraph(Interact);
  
}

var failFCN = function(error)
{
    console.log("error",error);
}

var RacePromise = d3.csv("DataFiles/Racial.csv")
var PerPromise = d3.csv("DataFiles/Performance.csv")
var INtPromise = d3.csv("DataFiles/interactions.csv")
var promises=[RacePromise,PerPromise,INtPromise]
Promise.all(promises)
    .then(successFCN,failFCN);

//Bars
//Lot

var drawPlot = function(Polices,target,graphDim,
                         xScale,yScale,colorScale)
{
     var bar = target
        .selectAll("g")
        .data(Polices)
        .enter()
        .append("g")
        .classed("bar",true)
    
    console.log(Polices)
    bar.selectAll("rect")
    .data(Polices)
    .enter()
    .append("rect")
    .attr("x",function(Police){
//console.log(xScale(Police.Interaction))
    return xScale(Police.Interaction)
})
    .attr("y",function(Police){
        return yScale(Police.Often)
    })

    .attr("width",xScale.bandwidth)
    .attr("height",function(Police){
        console.log(yScale(Police.Often))
        
        return graphDim.height-yScale(Police.Often)
        
    })
    .attr("fill",function(Police){
        console.log(Police.Interaction)
        return colorScale("The police are easy to talk to")
    })
//    tooltip
     .on("mouseover",function(Police)
{   
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
            
    
    }
       
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
       //console.log("It here")
     d3.select("div")
       .text((Police.Often+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(Police)
{
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
        .classed("coloring",false)
        
    }
})
}

//Little
var drawPlot2 = function(Polices,target,graphDim,
                         xScale,yScale,colorScale)
{
         var bar = target
        .selectAll("g")
        .data(Polices)
        .enter()
        .append("g")
        .classed("bar",true)
         
    console.log(Polices)
    target.selectAll("rect")
    .data(Polices)
    .enter()
    .append("rect")
    .attr("x",function(Police){
        console.log((Police.Interaction))
    return xScale(Police.Interaction)
})
    .attr("y",function(Police){
        return yScale(Police.Sometimes)
    })
    .attr("width",xScale.bandwidth)
    .attr("height",function(Police){
        console.log(yScale(Police.Sometimes))
        
        return graphDim.height-yScale(Police.Sometimes)
        
    })
       .attr("fill",function(Police){
        return colorScale("Sometimes")
    })
    //    tooltip
     .on("mouseover",function(Police)
{   
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
    
            
        d3.select(this)
            .classed("coloring",true)
            .raise(); //move to top
    }
       
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
       //console.log("It here")
     d3.select("div")
       .text((Police.Sometimes+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(Police)
{
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")

        .classed("coloring",false)
        
    }
})
}


//None
var drawPlot3 = function(Polices,target,graphDim,
                         xScale,yScale,colorScale)
{
             var bar = target
        .selectAll("g")
        .data(Polices)
        .enter()
        .append("g")
        .classed("bar",true)
    
    console.log(Polices)
    bar.selectAll("rect")
    .data(Polices)
    .enter()
    .append("rect")
    .attr("x",function(Police){
    return xScale(Police.Interaction)
})
    .attr("y",function(Police){
        return yScale(Police.Almost)
    })
    .attr("width",xScale.bandwidth)
    .attr("height",function(Police){
        
        
        return graphDim.height-yScale(Police.Almost)
        
    })
    
    .attr("fill",function(Race){
//        console.log(Race.Race)
        return colorScale("None")
    })
    //    tooltip
     .on("mouseover",function(Police)
{   
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
        
            
        d3.select(this)

            .classed("coloring",true)
            .raise(); //move to top
    }
       
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
       //console.log("It here")
     d3.select("div")
       .text((Police.Almost+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(Police)
{
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
    
        .classed("coloring",false)
        
    }
})
    
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
    
    var axes = d3.select("#Interaction")
        .append("g")
    axes.append("g")
        .attr("transform","translate("+(margins.left+40)+","
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
    var labels = d3.select("#Interaction")
        .append("g")
        .classed("labels",true)
        
    labels.append("text")
        .text("Experience with Police")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graphDim.width/4))
        .attr("y",margins.top-20)
    
    labels.append("text")
        .text("Rating on")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graphDim.width/4))
        .attr("y",(graphDim.height + 45)  + margins.top);

    
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
           name:"Often"
       },
       {
           class:"Little",
           name:"Sometimes"
       },
       {
           class:"None",
           name:"Almost Never"
       },
       
    ]
var legend = d3.select("#Interaction")
        .append("g")
        .classed("legend",true)
        .attr("transform","translate("+
              (margins.left+ 750) +","+
             (margins.top+10)+")");
var entries = legend.selectAll("g")
            .data(categories)
            .enter()
            .append("g")
            .classed("legendEntry", true)
.attr("class",function(categories)
             {
                return (categories.class);
             })

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
    var screen = {width:1500,height:500}
    //how much space on each side
    var margins = {left:60,right:40,top:75,bottom:50}
    
    
    
    var graph = 
        {
            width:screen.width-margins.left-margins.right,
            height:screen.height - margins.top-margins.bottom
        }
    console.log(graph);
    
    d3.select("Interaction")
    .attr("width",screen.width)
    .attr("height",screen.height) 

    
    var target = d3.select("#Interaction")
    .append("g")
    .attr("id","#graph")
    .attr("transform",
          "translate("+(margins.left+60)+","+
                        margins.top+")");
    
    var xScale = d3.scaleBand()
        .domain(["Easy to Talk to","Polite to Kids","Polite to People","Harass or Mistreat People"])
        .range([0,(graph.width/2)])
        .paddingInner(.8)
    var yScale = d3.scaleLinear()
        .domain([0,50])
        .range([graph.height,0])

var colorScale=
        d3.scaleOrdinal()
          .range(["blue","black","white"]);
    console.log(xScale)
    
    drawAxes(graph,margins,xScale,yScale);
    var g0=target.append("g")
    .attr("transform","translate(-13.5,0)")
      var g1=target.append("g")
    .attr("transform","translate(-58.5,0)")
    var g2=target.append("g")
    .attr("transform","translate(32.5,0)");
    var g3=target.append("g")
    .attr("transform","translate(159,0)");
    drawPlot(Data,g1,graph,xScale,yScale,colorScale);
    drawPlot2(Data,g0,graph,xScale,yScale,colorScale);
    drawPlot3(Data,g2,graph,xScale,yScale,colorScale);
//        drawPlot4(Data,g3,graph,xScale,yScale);
    drawLabels(graph,margins);
    drawLegend(graph,margins);
    
    
    
    
    
}