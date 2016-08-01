google.charts.load('current', {'packages':['corechart','line']});
google.charts.setOnLoadCallback(drawpieChart);
google.charts.setOnLoadCallback(drawhistogramChart);
google.charts.setOnLoadCallback(drawlineChart);
google.charts.setOnLoadCallback(drawbarChart);
google.charts.setOnLoadCallback(drawhistogram2Chart);

function drawbarChart() {
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

function drawhistogramChart() {
  var jsonhistogramData = $.ajax({
      url: "http://localhost:3000/app/Histogram_data.json",
      dataType: "json",
      async: false
      }).responseText;
  var data = new google.visualization.DataTable(jsonhistogramData);

  var options = {
    title: 'Sales by the Year',
    width: 600,
    height:400,
    legend: { position: 'none' },
  };

  var chart = new google.visualization.Histogram(document.getElementById('histogram'));
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
    width: 600,
    height: 400,
    curveType: 'function',
    legend: { position: 'bottom' },
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

function drawhistogram2Chart() {
  var jsonhistogram2Data = $.ajax({
      url: "http://localhost:3000/app/Histogram_data2.json",
      dataType: "json",
      async: false
      }).responseText;
  var data = new google.visualization.DataTable(jsonhistogram2Data);

var options = {
  title: 'Company Sales',
  legend: { position: 'none' },
  colors: ['#e7711c'],
  //  histogram: { lastBucketPercentile: 5 },
  vAxis: { scaleType: 'mirrorLog' },
  histogram: { bucketSize: 100000 }
};

var chart = new google.visualization.Histogram(document.getElementById('histogram2'));

chart.draw(data, options);
}
