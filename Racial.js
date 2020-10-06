var successFCN = function(values)
{
    console.log("values",values);
var Race=values[0]
var Opinion=values[1]
var Interact=values[2]
        initGraph2(Race);
  
}

var failFCN = function(error)
{
    console.log("error",error);
}

var RacePromise = d3.csv("DataFiles/Racial.csv")
var PerPromise = d3.csv("DataFiles/Performance.csv")
var INtPromise = d3.csv("DataFiles/interactions.csv")
var promises=[RacePromise,PerPromise,INtPromise]
Promise.all(promises).then(successFCN,failFCN);

//Bars
//Lot
var drawRacial = function(Races,target,graphDim,
                         xScale,yScale,colorScale)
{

    console.log(Races)
    target.selectAll("rect")
    .data(Races)
    .enter()
    .append("rect")
    .attr("x",function(Race){
        console.log(xScale(Race.Race))
    return xScale(Race.Race)
})
    .attr("y",function(Race){
        return yScale(Race.Little)
    })

    .attr("width",xScale.bandwidth)
    .attr("height",function(Race){
        console.log(yScale(Race.Little))
        
        return graphDim.height-yScale(Race.Little)
        
    })
    .attr("fill",function(Race){
        console.log(Race.Race)
        return colorScale("Little")
    })
            //    tooltip
     .on("mouseover",function(Races)
{   
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
            .classed("fade",true);
            
            
        d3.select(this)
            .classed("fade",false)
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
       .text((Races.Little+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(Races)
{
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
        .classed("fade",false)
        .classed("coloring",false)
        
    }
})
}

//Little
var drawRacial2 = function(Races,target,graphDim,
                         xScale,yScale,colorScale)
{
    console.log(Races)
    target.selectAll("rect")
    .data(Races)
    .enter()
    .append("rect")
    .attr("x",function(Race){
              console.log((Race.Race))
    return xScale(Race.Race)
})
    .attr("y",function(Race){
        return yScale(Race.Lot)
    })
    .attr("width",xScale.bandwidth)
    .attr("height",function(Race){
        console.log(yScale(Race.Lot))
        
        return graphDim.height-yScale(Race.Lot)
        
    })
       .attr("fill",function(Race){
        console.log(Race.Race)
        return colorScale("Lot")
    })
            //    tooltip
     .on("mouseover",function(Races)
{   
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
            .classed("fade",true);
            
            
        d3.select(this)
            .classed("fade",false)
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
       .text((Races.Lot+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(Races)
{
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
        .classed("fade",false)
        .classed("coloring",false)
        
    }
})
}
//None
var drawRacial3 = function(Races,target,graphDim,
                         xScale,yScale,colorScale)
{
    console.log(Races)
    target.selectAll("rect")
    .data(Races)
    .enter()
    .append("rect")
    .attr("x",function(Race){
//        console.log(Degree)
    return xScale(Race.Race)
})
    .attr("y",function(Race){
        return yScale(Race.None)
    })
    .attr("width",xScale.bandwidth)
    .attr("height",function(Race){
        
        
        return graphDim.height-yScale(Race.None)
        
    })
    .attr("fill",function(Race){
        console.log(Race.Race)
        return colorScale("None")
    })
        //    tooltip
     .on("mouseover",function(Races)
{   
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
            .classed("fade",true);
            
            
        d3.select(this)
            .classed("fade",false)
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
       .text((Races.None+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(Races)
{
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
        .classed("fade",false)
        .classed("coloring",false)
        
    }
})
    
}

var makeTranslateString = function(x,y)
{
    return "translate("+x+","+y+")";
}
//Axes
var drawAxes2 = function(graphDim,margins,
                         xScale,yScale)
{
   var xAxis= d3.axisBottom(xScale);

    var yAxis= d3.axisLeft(yScale);
    
    var axes = d3.select("#Racial")
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
var drawLabels2 = function(graphDim,margins)
{
    var labels = d3.select("#Racial")
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
var drawLegend2 = function(graphDim,margins)
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
var legend = d3.select("#Racial")
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
var initGraph2 = function(Data)
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
    
    d3.select("#Racial")
    .attr("width",screen.width)
    .attr("height",screen.height)
    
    var target = d3.select("#Racial")
    .append("g")
    .attr("id","#graph")
    .attr("transform",
          "translate("+(margins.left+60)+","+
                        margins.top+")");
    
    
    var xScale = d3.scaleBand()
        .domain(["Whites","Blacks"])
        .range([0,(graph.width/2)])
        .paddingInner(.80)
    var yScale = d3.scaleLinear()
        .domain([0,50])
        .range([graph.height,0])

var colorScale=
        d3.scaleOrdinal()
   .range(["blue","black","white"]);

    
    drawAxes2(graph,margins,xScale,yScale);
    var g0=target.append("g")
    
      var g1=target.append("g")
    .attr("transform","translate(-32,0)")
    var g2=target.append("g")
    .attr("transform","translate(32,0)");
    drawRacial(Data,target,graph,xScale,yScale,colorScale);
    drawRacial2(Data,g1,graph,xScale,yScale,colorScale);
   drawRacial3(Data,g2,graph,xScale,yScale,colorScale);
    drawLabels2(graph,margins);
    drawLegend2(graph,margins);
    
    
    
    
    
}