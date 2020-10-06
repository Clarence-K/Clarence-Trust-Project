var successFCN = function(values)
{
    console.log("values",values);
var Race=values[0]
var Opinion=values[1]
var Interact=values[2]
var Excel=values[3]
        initGraph4(Excel);
  
}

var failFCN = function(error)
{
    console.log("error",error);
}

var RacePromise = d3.csv("DataFiles/Racial.csv")
var PerPromise = d3.csv("DataFiles/Performance.csv")
var INtPromise = d3.csv("DataFiles/interactions.csv")
var ExcelPromise=d3.csv("DataFiles/black.csv")
var promises=[RacePromise,PerPromise,INtPromise,ExcelPromise]
Promise.all(promises).then(successFCN,failFCN);

//Bars
//accountable
var drawExcel = function(Job,target,graphDim,
                         xScale,yScale,colorScale)
{
var bar = target
        .selectAll("g")
        .data(Job)
        .enter()
        .append("g")
        .classed("bar",true)

    console.log(Job)
    target.selectAll("rect")
    .data(Job)
    .enter()
    .append("rect")
    .attr("x",function(Jobs){
        console.log(xScale(Jobs.Task))
    return xScale(Jobs.Task)
})
    .attr("y",function(Job){
        return yScale(Job.Black)
    })

    .attr("width",xScale.bandwidth)
    .attr("height",function(Job){
        console.log(yScale(Job.Black))
        
        return graphDim.height-yScale(Job.Black)
        
    })
    .attr("fill",function(Race){
        return colorScale("Little")
    })
            //    tooltip
     .on("mouseover",function(Job)
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
       .text((Job.Black+"%"))
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
var drawExcel2 = function(Job,target,graphDim,
                         xScale,yScale,colorScale)
{
var bar = target
        .selectAll("g")
        .data(Job)
        .enter()
        .append("g")
        .classed("bar",true)

    console.log(Job)
    target.selectAll("rect")
    .data(Job)
    .enter()
    .append("rect")
    .attr("x",function(Jobs){
        console.log(xScale(Jobs.Task))
    return xScale(Jobs.Task)
})
    .attr("y",function(Job){
        return yScale(Job.White)
    })

    .attr("width",xScale.bandwidth)
    .attr("height",function(Job){
        console.log(yScale(Job.White))
        
        return graphDim.height-yScale(Job.White)
        
    })
    .attr("fill",function(Race){
        return colorScale("Lot")
    })
            //    tooltip
     .on("mouseover",function(Job)
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
       .text((Job.White+"%"))
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
var drawExcel3 = function(Races,target,graphDim,
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
var drawAxes4 = function(graphDim,margins,
                         xScale,yScale)
{
   var xAxis= d3.axisBottom(xScale);

    var yAxis= d3.axisLeft(yScale);
    
    var axes = d3.select("#Ex")
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
var drawLabels4 = function(graphDim,margins)
{
    var labels = d3.select("#Ex")
        .append("g")
        .classed("labels",true)
        
    labels.append("text")
        .text("Black v White Rating Excellent")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graphDim.width/4))
        .attr("y",margins.top)
    
    labels.append("text")
        .text("By Race")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graphDim.width/4))
        .attr("y",(graphDim.height + 35)  + margins.top);

    
    labels.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graphDim.height/2))+")")
        .append("text")
        .text("Percent Answered Excellent")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(270)")
    
}

//Legend setup
var drawLegend4 = function(graphDim,margins)
{
    
 
   var categories = [

       {
           class:"Little",
           name:"Black"
       },
       {
           class:"None",
           name:"White"
       },
       
    ]
var legend = d3.select("#Ex")
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
var initGraph4 = function(Data)
{
    //size of screen
    var screen = {width:1200,height:500}
    //how much space on each side
    var margins = {left:60,right:20,top:30,bottom:50}
    
    
    
    var graph = 
        {
            width:screen.width-margins.left-margins.right,
            height:screen.height - margins.top-margins.bottom
        }
    console.log(graph);
    
    d3.select("#Ex")
    .attr("width",screen.width)
    .attr("height",screen.height)
    
    var target = d3.select("#Ex")
    .append("g")
    .attr("id","#graph")
    .attr("transform",
          "translate("+(margins.left+60)+","+
                        margins.top+")");
    
    
    var xScale = d3.scaleBand()
    .domain(["Holding officers accountable","Protecting from Crime","Treating racial and ethnic groups equally","Using appropriate force"])
        .range([0,(graph.width/2)])
        .paddingInner(.60)
    var yScale = d3.scaleLinear()
        .domain([0,80])
        .range([graph.height,0])

var colorScale=
        d3.scaleOrdinal()
   .range(["black","white"]);

    
    drawAxes4(graph,margins,xScale,yScale);
    var g0=target.append("g")
    
      var g1=target.append("g")
    .attr("transform","translate(-58,0)")
    var g2=target.append("g")
    .attr("transform","translate(8,0)");
    drawExcel(Data,g2,graph,xScale,yScale,colorScale);
    drawExcel2(Data,g1,graph,xScale,yScale,colorScale);
//    drawPlot3(Data,g2,graph,xScale,yScale,colorScale);
    drawLabels4(graph,margins);
    drawLegend4(graph,margins);
    
    
    
    
    
}