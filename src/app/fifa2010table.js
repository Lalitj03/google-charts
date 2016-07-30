google.charts.load("current", {packages:['table']});
 google.charts.setOnLoadCallback(drawVisualization);
 function drawVisualization() {
   google.visualization.drawChart({
     "containerId": "visualization_div",
     "dataSourceUrl": "//www.google.com/fusiontables/gvizdata?tq=",
     "query":"SELECT 'Scoring Team', 'Receiving Team', 'Scorer', 'Minute of goal' FROM " +
             "1VlPiBCkYt_Vio-JT3UwM-U__APurJvPb6ZEJPg",
     "refreshInterval": 5,
     "chartType": "Table",
     "options": {}
  });
 }
