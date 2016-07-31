google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawpieChart);
google.charts.setOnLoadCallback(drawhistogramChart);
google.charts.setOnLoadCallback(drawlineChart);
google.charts.setOnLoadCallback(drawbarChart);
google.charts.setOnLoadCallback(drawChart);

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
  var data = google.visualization.arrayToDataTable([
    ['Dinosaur', 'Length'],
    ['Acrocanthosaurus (top-spined lizard)', 12.2],
    ['Albertosaurus (Alberta lizard)', 9.1],
    ['Allosaurus (other lizard)', 12.2],
    ['Apatosaurus (deceptive lizard)', 22.9],
    ['Archaeopteryx (ancient wing)', 0.9],
    ['Argentinosaurus (Argentina lizard)', 36.6],
    ['Baryonyx (heavy claws)', 9.1],
    ['Brachiosaurus (arm lizard)', 30.5],
    ['Ceratosaurus (horned lizard)', 6.1],
    ['Coelophysis (hollow form)', 2.7],
    ['Compsognathus (elegant jaw)', 0.9],
    ['Deinonychus (terrible claw)', 2.7],
    ['Diplodocus (double beam)', 27.1],
    ['Dromicelomimus (emu mimic)', 3.4],
    ['Gallimimus (fowl mimic)', 5.5],
    ['Mamenchisaurus (Mamenchi lizard)', 21.0],
    ['Megalosaurus (big lizard)', 7.9],
    ['Microvenator (small hunter)', 1.2],
    ['Ornithomimus (bird mimic)', 4.6],
    ['Oviraptor (egg robber)', 1.5],
    ['Plateosaurus (flat lizard)', 7.9],
    ['Sauronithoides (narrow-clawed lizard)', 2.0],
    ['Seismosaurus (tremor lizard)', 45.7],
    ['Spinosaurus (spiny lizard)', 12.2],
    ['Supersaurus (super lizard)', 30.5],
    ['Tyrannosaurus (tyrant lizard)', 15.2],
    ['Ultrasaurus (ultra lizard)', 30.5],
    ['Velociraptor (swift robber)', 1.8]]);

  var options = {
    title: 'Lengths of dinosaurs, in meters',
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
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Country', 'Population'], ['China', 1360370000], ['India', 1234860000],
  ['United States', 316816000], ['Indonesia', 237641326],
  ['Brazil', 201032714], ['Pakistan', 184452000],
  ['Nigeria', 173615000], ['Bangladesh', 152518015],
  ['Russia', 143500000], ['Japan', 127270000],
  ['Mexico', 118395054], ['Philippines', 98468000],
  ['Vietnam', 88780000], ['Ethiopia', 86613986],
  ['Egypt', 83661000], ['Germany', 80523700],
  ['Iran', 76959000], ['Turkey', 75627384],
  ['Democratic Republic of the Congo', 67514000], ['Thailand', 65926261],
  ['France', 65776000], ['United Kingdom', 63705000],
  ['Italy', 59743676], ['Burma', 53259000],
  ['South Africa', 52981991], ['South Korea', 50219669],
  ['Colombia', 47267000], ['Spain', 46704314],
  ['Ukraine', 45469812], ['Tanzania', 44928923],
  ['Kenya', 44354000], ['Argentina', 40117096],
  ['Poland', 38533299], ['Sudan', 37964000],
  ['Algeria', 37900000], ['Iraq', 35404000],
  ['Canada', 35158304], ['Uganda', 34131400],
  ['Morocco', 33046000], ['Peru', 30475144],
  ['Uzbekistan', 30183400], ['Malaysia', 29789900],
  ['Saudi Arabia', 29195895], ['Venezuela', 28946101],
  ['Nepal', 26494504], ['Afghanistan', 25500100],
  ['North Korea', 24895000], ['Ghana', 24658823],
  ['Yemen', 24527000], ['Mozambique', 23700715],
  ['Taiwan', 23354061], ['Australia', 23207702],
  ['Ivory Coast', 23202000], ['Syria', 21898000],
  ['Madagascar', 20696070], ['Angola', 20609294],
  ['Cameroon', 20386799], ['Sri Lanka', 20277597],
  ['Romania', 20121641], ['Burkina Faso', 17322796],
  ['Niger', 17129076], ['Kazakhstan', 17076000],
  ['Netherlands', 16802200], ['Chile', 16634603],
  ['Malawi', 16363000], ['Ecuador', 15588000],
  ['Guatemala', 15438384], ['Mali', 15302000],
  ['Cambodia', 15135000], ['Senegal', 13567338],
  ['Zambia', 13092666], ['Zimbabwe', 12973808],
  ['Chad', 12825000], ['South Sudan', 11296000],
  ['Cuba', 11163934], ['Belgium', 11162121],
  ['Guinea', 10824200], ['Greece', 10815197],
  ['Tunisia', 10777500], ['Portugal', 10562178],
  ['Rwanda', 10537222], ['Czech Republic', 10512900],
  ['Somalia', 10496000], ['Haiti', 10413211],
  ['Benin', 10323000], ['Burundi', 10163000],
  ['Bolivia', 10027254], ['Hungary', 9906000],
  ['Sweden', 9606522], ['Belarus', 9459800],
  ['Dominican Republic', 9445281], ['Azerbaijan', 9235100],
  ['Austria', 8464554], ['Honduras', 8385072],
  ['United Arab Emirates', 8264070], ['Switzerland', 8085300],
  ['Israel', 8081000], ['Tajikistan', 8000000],
  ['Bulgaria', 7282041], ['Serbia', 7181505],
  ['Hong Kong (China)', 7173900], ['Papua New Guinea', 7059653],
  ['Paraguay', 6600284], ['Laos', 6580800],
  ['Jordan', 6496200], ['El Salvador', 6340000],
  ['Eritrea', 6333000], ['Libya', 6202000],
  ['Togo', 6191155], ['Sierra Leone', 6190280],
  ['Nicaragua', 6071045], ['Denmark', 5608784],
  ['Kyrgyzstan', 5551900], ['Finland', 5442322],
  ['Slovakia', 5410728], ['Singapore', 5399200],
  ['Turkmenistan', 5240000], ['Norway', 5077798],
  ['Lebanon', 4822000], ['Costa Rica', 4667096],
  ['Central African Republic', 4616000], ['Ireland', 4585400],
  ['Georgia', 4483800], ['New Zealand', 4476100],
  ['Republic of the Congo', 4448000], ['Palestine Authority', 4420549],
  ['Liberia', 4294000], ['Croatia', 4290612],
  ['Bosnia and Herzegovina', 3839737], ['Oman', 3831553],
  ['Puerto Rico (USA)', 3667084], ['Kuwait', 3582054],
  ['Moldova', 3559500], ['Mauritania', 3461041],
  ['Panama', 3405813], ['Uruguay', 3286314],
  ['Armenia', 3024100], ['Lithuania', 2955288],
  ['Albania', 2821977], ['Mongolia', 2754685],
  ['Jamaica', 2711476], ['Namibia', 2113077],
  ['Lesotho', 2074000], ['Slovenia', 2061061],
  ['Macedonia', 2062294], ['Botswana', 2024904],
  ['Latvia', 2014000], ['Qatar', 1864817],
  ['Gambia', 1849000], ['Guinea-Bissau', 1704000],
  ['Gabon', 1672000], ['Equatorial Guinea', 1622000],
  ['Trinidad and Tobago', 1328019], ['Estonia', 1286540],
  ['Mauritius', 1257900], ['Swaziland', 1250000],
  ['Bahrain', 1234571], ['Timor-Leste', 1066409],
  ['Djibouti', 864618], ['Cyprus', 862000],
  ['Fiji', 858038], ['Réunion (France)', 821136],
  ['Guyana', 784894], ['Bhutan', 739440],
  ['Comoros', 724300], ['Montenegro', 620029],
  ['Macau (China)', 582000], ['Western Sahara', 567000],
  ['Solomon Islands', 561000], ['Luxembourg', 537000],
  ['Suriname', 534189], ['Cape Verde', 491875],
  ['Malta', 416055], ['Guadeloupe (France)', 403355],
  ['Martinique (France)', 394173], ['Brunei', 393162],
  ['Bahamas', 351461], ['Iceland', 323810],
  ['Maldives', 317280], ['Belize', 312971],
  ['Barbados', 274200], ['French Polynesia (France)', 268270],
  ['Vanuatu', 264652], ['New Caledonia (France)', 258958],
  ['French Guiana (France)', 229040], ['Mayotte (France)', 212600],
  ['Samoa', 187820], ['São Tomé and Príncipe', 187356],
  ['Saint Lucia', 166526], ['Guam (USA)', 159358],
  ['Curaçao (Netherlands)', 150563],
  ['Saint Vincent and the Grenadines', 109000],
  ['Kiribati', 106461],
  ['United States Virgin Islands (USA)', 106405], ['Grenada', 103328],
  ['Tonga', 103036], ['Aruba (Netherlands)', 101484],
  ['Federated States of Micronesia', 101351], ['Jersey (UK)', 97857],
  ['Seychelles', 90945], ['Antigua and Barbuda', 86295],
  ['Isle of Man (UK)', 84497], ['Andorra', 76246],
  ['Dominica', 71293], ['Bermuda (UK)', 64237],
  ['Guernsey (UK)', 62431], ['Greenland (Denmark)', 56370],
  ['Marshall Islands', 56086], ['American Samoa (USA)', 55519],
  ['Cayman Islands (UK)', 55456], ['Saint Kitts and Nevis', 54000],
  ['Northern Mariana Islands (USA)', 53883],
  ['Faroe Islands (Denmark)', 48346],
  ['Sint Maarten (Netherlands)', 37429], ['Saint Martin (France)', 36979],
  ['Liechtenstein', 36842], ['Monaco', 36136],
  ['San Marino', 32438], ['Turks and Caicos Islands (UK)', 31458],
  ['Gibraltar (UK)', 29752], ['British Virgin Islands (UK)', 29537],
  ['Åland Islands (Finland)', 28502],
  ['Caribbean Netherlands (Netherlands)', 21133], ['Palau', 20901],
  ['Cook Islands (NZ)', 14974], ['Anguilla (UK)', 13452],
  ['Wallis and Futuna (France)', 13135], ['Tuvalu', 11323],
  ['Nauru', 9945], ['Saint Barthélemy (France)', 8938],
  ['Saint Pierre and Miquelon (France)', 6081], ['Montserrat (UK)', 4922],
  ['Saint Helena Ascension and Tristan da Cunha (UK)', 4000],
  ['Svalbard and Jan Mayen (Norway)', 2655], ['Falkland Islands (UK)', 2563],
  ['Norfolk Island (Australia)', 2302], ['Christmas Island (Australia)', 2072],
  ['Niue (NZ)', 1613], ['Tokelau (NZ)', 1411],
  ['Vatican City', 800], ['Cocos (Keeling) Islands (Australia)', 550],
  ['Pitcairn Islands (UK)', 66]]);

var options = {
  title: 'Country Populations',
  legend: { position: 'none' },
  colors: ['#e7711c'],
  // histogram: { lastBucketPercentile: 5 },
  vAxis: { scaleType: 'mirrorLog' },
  histogram: { bucketSize: 10000000 }
};

var chart = new google.visualization.Histogram(document.getElementById('histogram2'));

chart.draw(data, options);
}
