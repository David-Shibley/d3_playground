var newData = [ 800, 200, 400, 500, 100 ];
var svg = d3.select( "body" )
            .append( "svg" )
              .attr( "width", 500 )
              .attr( "height", 150 );

var selection = svg.selectAll( "rect" )
  .data( newData );

selection.enter()
  .append( "rect" )
    .attr( "x", function(d,i){
      return i*25;
    })
    .attr( "width", 15 )
    .attr( "fill", "#d1c9b8" );

selection.attr( "height", function(d){
    return d/10 * 1.5;
  })
  .attr( "y", function(d){
    return 150 - d/10 * 1.5;
  });
