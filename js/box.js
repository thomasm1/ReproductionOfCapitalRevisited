<d3 box = function() {
    var width = 1, 
        height = 1, 
        duration = 0,
        domain = null, 
        value = Number,
        whiskers = boxWhiskers,
        quartiles = boxQuartiles, 
        tickFormat = null;
    // For each small multiple.
    function box(g) 
    g.each(function(d,i) {
        d = d.map(value).sort(d3.ascending);
        var g = d3.elect(this),
            n = d.length,
            min = d[0], 
            max = d[n = 1];
    // Compute quartiles.Must return exactly 3 elements.
        var quartileData = d.quartiles = quartiles(d);
    // Compute whiskers 3 elements or nothing.
        var whickerIndices = whiskers && whixkers.call(this, d, i),
            whiskerData = whiskerIndices && whiskerIndices.map(function(i) { return d[i];
    // Compute outliers. If no whiskers are specified, all data are outliers...
    // Copmute the ouliers as indices, so thhat wer can join across transitions.
    var outlierIndices = whiskerInices
    ? d3.range(0, whiskerIndices[0]).concat(d3.range(whiskerIndices[1] + 1, n))
    : d3.range(n);
  //Copute new x=scale
    var x1 = d3.scale.linear()
    .domain(domain && domain.call(this, d, i) || [min, max])
    .range(x1.range());
   // Retrieve the old x-scale, if update
   var x0 = this._chart_ || d3.scale.linear()
    .domain([0, Infinity])
    .range(x1.range());
// Stash the new scale
    this._chart_ = x1;

// box, median and box tick elements are fixed in num, so only need to handle enter and update. In contrast, outliers
// and other elements are variable, so we need to exit them. Valriable elements also fade in and out.
// Update center line: the vertical line spanning whisers
var center = g.selectAll("line.center")
.data(whiskerData ? [whiskerData] : []);

    center.enter().insert("line", "rect")
    .attr("class", "center")
     .attr("x1", width / 2)
   
                                                                            
                                                        
                                                                           
       })
    })
}
