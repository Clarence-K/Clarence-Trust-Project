var dataset=[
    {apples:5, oranges:10, grapes:22},
    {apples:4, oranges:12, grapes:28},
    {apples:2, oranges:19, grapes:32},
    {apples:7, oranges:23, grapes:35},
    {apples:23, oranges:17, grapes:43},
]

var stack=d3.stack()
.keys(["Excellent","Good","Fair","Poor"])


var graphset=[
    {Excellent:18, Good:22, Fair:20, Poor:19},
     {Excellent:45, Good:50, Fair:45, Poor:48},
     {Excellent:19, Good:18, Fair:19, Poor:19}, 
    {Excellent:16, Good:9, Fair:14, Poor:12},
]
gseries=stack(graphset)


