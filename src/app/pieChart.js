google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawpieChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Season');
  data.addColumn('number', 'Goals');
  data.addRows([
    ['2000-01', 13],
    ['2001-02', 21],
    ['2002-03', 21],
    ['2003-04', 21],
    ['2004-05', 18],
    ['2005-06', 28],
    ['2006-07', 20],
    ['2007-08', 22],
    ['2008-09', 31],
    ['2009-10', 28],
    ['2010-11', 23],
    ['2011-12', 9],
    ['2012-13', 16],
    ['2013-14', 15],
    ['2014-15', 2],
    ['2015-16', 18],
    ['2016-17', 13]
  ]);

  var barchart_options = {title:'Daviv Villa Goals Scored Per Season',
                 width:800,
                 height:600,
                 legend: 'none'};
  var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
  barchart.draw(data, barchart_options);
}

function drawpieChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Clubs');
  data.addColumn('number', 'Goals');
  data.addRows([
    ['Sporting Gijón B', 14],
    ['Sporting Gijón', 41],
    ['Valencia', 129],
    ['Barcelona', 48],
    ['Atlético Madrid', 15],
    ['Melbourne City (loan)', 2],
    ['New York City', 31]
  ]);
  ['Zaragoza', 39],

  var options = {'title':'David Villa Goals Scored For Clubs',
                 'width':800,
                 'height':600};

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
