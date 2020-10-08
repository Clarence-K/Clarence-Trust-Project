var SetBanner=function(){
    
}

d3.select("#right")
.on("click",function()
{
   
    console.log("click")
    d3.select("#left")
    .classed("hidden",true);    
})

d3.select("#left")
.on("mouseover",function()
{
    console.log("left")
    d3.select("#left")
})

d3.select("#right")
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
//.on("mouseout",function()
//{
//  
//})



 
  
