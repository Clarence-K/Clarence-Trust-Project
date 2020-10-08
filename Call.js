
d3.select("#left")
.on("mouseover",function()
{
    console.log("left")
    d3.select("#left")
})

d3.select("#trust")
.on("mouseover",function()
{
    console.log("right")
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
        .classed("hidden",false)    
        .select("img")
       .attr("src","Trust.png")
       
    
})
d3.select("#equal")
.on("mouseover",function()
{
    console.log("right")
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
    .style("opacity", 100)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
        .classed("hidden",false)    
        .select("img")
       .attr("src","Trust.png")
       
    
})
d3.select("#equal")
.on("mouseout", function(){
    d3.select("#tooltip") 
.style("opacity", 0)
}
)
d3.select("#account")
.on("mouseover",function()
{
    console.log("right") 
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
    .style("opacity", 100)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
        .classed("hidden",false)    
        .select("img")
       .attr("src","Excellent.png")
       
    
})
d3.select("#account")
.on("mouseout", function(){
    d3.select("#tooltip") 
.style("opacity", 0)
}
)
d3.select("#trust")
.on("mouseover",function()
{
    console.log("right")
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
    .style("opacity", 100)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
        .classed("hidden",false)    
        .select("img")
       .attr("src","Race.png")
       
    
})
d3.select("#trust")
.on("mouseout", function(){
    d3.select("#tooltip") 
.style("opacity", 0)
}
)

d3.select("#untrust")
.on("mouseover",function()
{
    console.log("right")
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
    .style("opacity", 100)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
        .classed("hidden",false)    
        .select("img")
       .attr("src","Race.png")
       
    
})
d3.select("#untrust")
.on("mouseout", function(){
    d3.select("#tooltip") 
.style("opacity", 0)
}
)
d3.select("#unequal")
.on("mouseover",function()
{
    console.log("right")
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
    .style("opacity", 100)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
        .classed("hidden",false)    
        .select("img")
       .attr("src","Trust.png")
       
    
})
d3.select("#unequal")
.on("mouseout", function(){
    d3.select("#tooltip") 
.style("opacity", 0)
}
)
    d3.select("#unaccount")
.on("mouseover",function()
{
    console.log("right")
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
    .style("opacity", 100)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
        .classed("hidden",false)    
        .select("img")
       .attr("src","Poor.png")
       
    
})
d3.select("#unaccount")
.on("mouseout", function(){
    d3.select("#tooltip") 
.style("opacity", 0)
}
)
 
  
