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
                         xScale,yScale,colorScale)
{
    var bar = target
        .selectAll("g")
        .data(Opinions)
        .enter()
        .append("g")
        .classed("bar",true)
    
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
            return index * 165
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
       .attr("fill",function(Opinion){
        return colorScale("Lot")})
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
       .text(((Opinions[1]-Opinions[0])+"%"))
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
                         xScale,yScale,colorScale)
{
    var bar = target
        .selectAll("g")
        .data(Opinions)
        .enter()
        .append("g")
        .classed("bar",true)
    
       console.log(xScale.bandwidth)
    console.log(Opinions[1])
    target.selectAll("rect")
    .data(Opinions[1])
    .enter()
    .append("rect")
    .attr("x",function(Opinion,index){
    console.log(index)
            //return xScale(index)
            return index * 165
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
       .attr("fill",function(Opinion){
        return colorScale("Little")})
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
       .text(((Opinions[1]-Opinions[0])+"%"))
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
var drawRating3 =function(Opinions,target,graphDim,
                         xScale,yScale,colorScale)
{
    var bar = target
        .selectAll("g")
        .data(Opinions)
        .enter()
        .append("g")
        .classed("bar",true)
    
       console.log(xScale.bandwidth)
    console.log(Opinions[0])
    target.selectAll("rect")
    .data(Opinions[2])
    .enter()
    .append("rect")
    .attr("x",function(Opinion,index){
            console.log("index:",index)
            console.log("OP:",Opinion)
            console.log("OP[0]:",Opinion)
            console.log("Key: ",(Opinion[0].key))
            //return xScale(index)
            return index * 165
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
       .attr("fill",function(Opinion){
        return colorScale("Almost")})
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
       .text(((Opinions[1]-Opinions[0])+"%"))
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
                         xScale,yScale,colorScale)
{
    var bar = target
        .selectAll("g")
        .data(Opinions)
        .enter()
        .append("g")
        .classed("bar",true)

    console.log(xScale.bandwidth)
    console.log(Opinions[0])
    target.selectAll("rect")
    .data(Opinions[3])
    .enter()
    .append("rect")
    .attr("x",function(Opinion,index){
            return index * 165
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
    .attr("fill",function(Opinion){
        return colorScale("Poor")})
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
       .text(((Opinions[1]-Opinions[0])+"%"))
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
        .text("Ratings of Police Performance")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graphDim.width/2))
        .attr("y",margins.top-20)
    
    labels.append("text")
        .text("Opinion on Cops...")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graphDim.width/2))
        .attr("y",(graphDim.height + 45)  + margins.top);

    
    labels.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graphDim.height/2))+")")
        .append("text")
        .text("Answers Given")
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
           class:"Poor",
           name:"Poor"
       }
       
    ]
var legend = d3.select("#stacked")
        .append("g")
        .classed("legend",true)
        .attr("transform","translate("+
              (margins.left+ 580) +","+
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
var initGraph3 = function(Data)
{
    //size of screen
    var screen = {width:690,height:575}
    //how much space on each side
    var margins = {left:60,right:20,top:75,bottom:50}

    
    
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
        .paddingInner(.60)
    var yScale = d3.scaleLinear()
        .domain([0,100])
        .range([graph.height,0])

    
var graphset=[
    {Excellent:18, Good:45, Fair:19, Poor:16},
     {Excellent:22, Good:50, Fair:18, Poor:9},
     {Excellent:20, Good:45, Fair:19, Poor:14}, 
    {Excellent:19, Good:48, Fair:19, Poor:12},
]
var stack=d3.stack()
.keys(["Excellent","Good","Fair","Poor"])
gseries=stack(graphset)
     var colorScale=
        d3.scaleOrdinal()
   .range(["blue","black","white","GoldenRod"]);
    
    drawAxes3(graph,margins,xScale,yScale);
    var g0=target.append("g")
    
      var g1=target.append("g")
    .attr("transform","translate(0,0)")
    var g2=target.append("g")
    .attr("transform","translate(0,0)");
        var g3=target.append("g")
    .attr("transform","translate(0,0)");
  drawRating(gseries,target,graph,xScale,yScale,colorScale);
 drawRating2(gseries,g1,graph,xScale,yScale,colorScale);
    drawRating3(gseries,g2,graph,xScale,yScale,colorScale);
    drawRating4(gseries,g3,graph,xScale,yScale,colorScale);
    drawLabels3(graph,margins);
    drawLegend3(graph,margins);
    
    
    
    
    
}