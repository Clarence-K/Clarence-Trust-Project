var successFCN = function(values)
{
    console.log("values",values);
var Race=values[0]
var Opinion=values[1]
        initGraph3(Opinion);
  
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
var drawRating = function(Opinions,target,graphDim,
                         xScale,yScale)
{
       console.log(xScale.bandwidth)
    console.log(Opinions[0])
    target.selectAll("rect")
    .data(Opinions[0])
    .enter()
    .append("rect")
    .attr("x",function(Opinion,index){
            console.log("index:",index)
            console.log("OP:",Opinion)
            console.log("OP[0]:",Opinion)
            console.log("Key: ",(Opinion[0].key))
            //return xScale(index)
            return index * 100
    })
    
    .attr("y",function(Opinion){
        console.log((Opinion))
        return yScale(Opinion[1])
    })

    .attr("width",xScale.bandwidth)
    .attr("height",function(Opinion){
        console.log((Opinion))
        return graphDim.height-(yScale((Opinion[1]) - (Opinion[0]))
        
    )})
  //    tooltip
     .on("mouseover",function(Opinions)
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
       .text((Opinions.Excellent+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(Opinions)
{
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
        .classed("fade",false)
        .classed("coloring",false)
        
    }
})
}

//Good
var drawRating2 = function(Opinions,target,graphDim,
                         xScale,yScale)
{
    console.log(Opinions)
    target.selectAll("rect")
    .data(Opinions[1])
    .enter()
    .append("rect")
    .attr("x",function(Opinion){
    return xScale(Opinion.Rating)
})
    .attr("y",function(Opinion){
        return yScale(Opinion)
    })
    .attr("width",xScale.bandwidth)
    .attr("height",function(Opinion){
        console.log(yScale(Opinion.Good))
        
        return graphDim.height-yScale(Opinion.Good)
        
    })
  //    tooltip
     .on("mouseover",function(Opinions)
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
       .text((Opinions.Good+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(Opinions)
{
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
        .classed("fade",false)
        .classed("coloring",false)
        
    }
})
}
//Fair
var drawRating3 = function(Opinions,target,graphDim,
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
  //    tooltip
     .on("mouseover",function(Opinions)
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
       .text((Opinions.Fair+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(Opinions)
{
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
        .classed("fade",false)
        .classed("coloring",false)
        
    }
})
}
var drawRating4 = function(Opinions,target,graphDim,
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
  //    tooltip
     .on("mouseover",function(Opinions)
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
       .text((Opinions.Poor+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(Opinions)
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
var drawAxes3 = function(graphDim,margins,
                         xScale,yScale)
{
   var xAxis= d3.axisBottom(xScale);

    var yAxis= d3.axisLeft(yScale);
    
    var axes = d3.select("#stacked")
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
var drawLabels3 = function(graphDim,margins)
{
    var labels = d3.select("#stacked")
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
var drawLegend3 = function(graphDim,margins)
{
    
 
   var categories = [
       {
           class:"Lot",
           name:"Excellent"
       },
       {
           class:"Little",
           name:"Good"
       },
       {
           class:"None",
           name:"Fair"
       },
        {
           class:"Lot",
           name:"Poor"
       }
       
    ]
var legend = d3.select("#stacked")
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
var initGraph3 = function(Data)
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
    
    d3.select("#stacked")
    .attr("width",screen.width)
    .attr("height",screen.height)
    
    var target = d3.select("#stacked")
    .append("g")
    .attr("id","#graph")
    .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");
    

   var xScale = d3.scaleBand()
    .domain(["Holding officers accountable","Protecting from Crime","Treating racial and ethnic groups equally","Using appropriate force"])
        .range([0,(graph.width)])
        .paddingInner(.80)
    var yScale = d3.scaleLinear()
        .domain([0,100])
        .range([graph.height,0])

    
var graphset=[
    {Excellent:18, Good:22, Fair:20, Poor:19},
     {Excellent:45, Good:50, Fair:45, Poor:48},
     {Excellent:19, Good:18, Fair:19, Poor:19}, 
    {Excellent:16, Good:9, Fair:14, Poor:12},
]
var stack=d3.stack()
.keys(["Excellent","Good","Fair","Poor"])
gseries=stack(graphset)
     var colorScale=
        d3.scaleOrdinal()
   .range(["blue","black","white","yellow"]);
    
    drawAxes3(graph,margins,xScale,yScale);
    var g0=target.append("g")
    
      var g1=target.append("g")
    .attr("transform","translate(53,0)")
    var g2=target.append("g")
    .attr("transform","translate(106,0)");
        var g3=target.append("g")
    .attr("transform","translate(159,0)");
  drawRating(gseries,target,graph,xScale,yScale,colorScale);
 drawRating2(gseries,g1,graph,xScale,yScale,colorScale);
    drawRating3(gseries,g2,graph,xScale,yScale,colorScale);
    drawRating4(gseries,g3,graph,xScale,yScale,colorScale);
    drawLabels3(graph,margins);
    drawLegend3(graph,margins);
    
    
    
    
    
}