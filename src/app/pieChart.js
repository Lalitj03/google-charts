google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawpieChart);
google.charts.setOnLoadCallback(drawlineChart);
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var jsonbarData = $.ajax({
      url: "http://localhost:3000/app/jsonbarData.json",
      dataType: "json",
      async: false
      }).responseText;

  var data = new google.visualization.DataTable(jsonbarData);
  var barchart_options = {title:'David Villa Goals Scored Per Season',
                 width:600,
                 height:600,
                 legend: 'none'};
  var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
  barchart.draw(data, barchart_options);
}

function drawpieChart() {
  var jsonpieData = $.ajax({
      url: "http://localhost:3000/app/jsonpieData.json",
      dataType: "json",
      async: false
      }).responseText;

  var data = new google.visualization.DataTable(jsonpieData);

  console.log(data);
  var options = {'title':'David Villa Goals Scored For Clubs',
                 'width':600,
                 'height':400,
                  is3D: true,
                  slices: {  4: {offset: 0.2},
                             6: {offset: 0.3},
                             1: {offset: 0.4},
                             3: {offset: 0.5},
                  },
                };

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function drawlineChart() {
  var jsonlineData = $.ajax({
      url: "http://localhost:3000/app/fdata.json",
      dataType: "json",
      async: false
      }).responseText;
  var data = new google.visualization.DataTable(jsonlineData);

  var options = {
    title: 'Company Performance',
    width: 16000,
    height: 1200,
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
