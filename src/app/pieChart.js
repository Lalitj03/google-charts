// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// function drawVisualization() {
//   google.visualization.drawChart({
//     "containerId": "visualization_div",
//     "dataSourceUrl": "//www.google.com/fusiontables/gvizdata?tq=",
//     "query":"SELECT 'Scoring Team', 'Receiving Team', 'Scorer', 'Minute of goal' FROM " +
//             "1VlPiBCkYt_Vio-JT3UwM-U__APurJvPb6ZEJPg",
//     "refreshInterval": 5,
//     "chartType": "Table",
//     "options": {}
//  });
// }
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Mushrooms', 3],
    ['Onions', 1],
    ['Olives', 1],
    ['Zucchini', 1],
    ['Pepperoni', 2]
  ]);

  // Set chart options
  var options = {'title':'How Much Pizza I Ate Last Night',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);

  var barchart_options = {title:'Barchart: How Much Pizza I Ate Last Night',
                 width:400,
                 height:300,
                 legend: 'none'};
  var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
  barchart.draw(data, barchart_options);

}
