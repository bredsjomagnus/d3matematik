/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

var klass = {
  "year": "18/19",
  "klass": "7A",
  "termin": "HT"
};
var klass9a = {
  "year": "18/19",
  "klass": "9A",
  "termin": "HT"
};

var diagnoser = [
  {
    "inriktning": "Taluppfattning",
    "område": "Rationella tal",
    "diagnos": "RD1",
    "test": "test 1",
    "uppgifter": 21,
    "behandlar": "Relation bråk- och decimaltal"
  },
  {
    "inriktning": "Textuppgifter",
    "område": "Aritmetik",
    "diagnos": "AS3",
    "test": "test 2",
    "uppgifter": 7,
    "behandlar": "Addition och subtraktion"
  },
  {
    "inriktning": "Huvudräkning addition och subtraktion",
    "område": "Rationella tal",
    "diagnos": "RD4",
    "test": "test 3",
    "uppgifter": 12,
    "behandlar": "Addition och subtraktion med tal i decimalform"
  }
];

var diagnoser9a = [
  {
    "inriktning": "Taluppfattning",
    "område": "Rationella tal",
    "diagnos": "rd1",
    "test": "test 1",
    "uppgifter": 21,
    "behandlar": "Relation bråk- och decimaltal"
  },
  {
    "inriktning": "Problemlösning, textuppgifter",
    "område": "Rationella tal",
    "diagnos": "rp5",
    "test": "test 2",
    "uppgifter": 5,
    "behandlar": "Procenträkning"
  }
];

var data = [
  {
    "kön": "Pojke",
    "test 3": 9,
    "test 2": 1,
    "test 1": 3,
    "radie": 4,
    "cx_2": 1,
    "elevnr": 1,
    "cx_3": 9,
    "cx_1": 3,
    "sva": "ja"
  },
  {
    "kön": "Flicka",
    "test 3": 10,
    "test 2": 4,
    "test 1": "",
    "radie": 5,
    "cx_2": 4,
    "elevnr": 2,
    "cx_3": 10,
    "cx_1": "",
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 3": 6,
    "test 2": 6,
    "test 1": 7,
    "radie": 5,
    "cx_2": 6,
    "elevnr": 3,
    "cx_3": 6,
    "cx_1": 7,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 3": 9,
    "test 2": 1,
    "test 1": 19,
    "radie": 4,
    "cx_2": 1,
    "elevnr": 4,
    "cx_3": 9,
    "cx_1": 19,
    "sva": "ja"
  },
  {
    "kön": "Pojke",
    "test 3": 11,
    "test 2": 2,
    "test 1": 13,
    "radie": 5,
    "cx_2": 2,
    "elevnr": 5,
    "cx_3": 11,
    "cx_1": 13,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 3": "",
    "test 2": "",
    "test 1": 10,
    "radie": 5,
    "cx_2": "",
    "elevnr": 6,
    "cx_3": "",
    "cx_1": 10,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 3": 6,
    "test 2": 5,
    "test 1": 13,
    "radie": 5,
    "cx_2": 5,
    "elevnr": 7,
    "cx_3": 6,
    "cx_1": 13,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 3": 7,
    "test 2": 2,
    "test 1": 12,
    "radie": 5,
    "cx_2": 2,
    "elevnr": 8,
    "cx_3": 7,
    "cx_1": 12,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 3": 11,
    "test 2": 6,
    "test 1": 8,
    "radie": 4,
    "cx_2": 6,
    "elevnr": 9,
    "cx_3": 11,
    "cx_1": 8,
    "sva": "ja"
  },
  {
    "kön": "Pojke",
    "test 3": 4,
    "test 2": "",
    "test 1": "",
    "radie": 5,
    "cx_2": "",
    "elevnr": 10,
    "cx_3": "",
    "cx_1": "",
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 3": 4,
    "test 2": 7,
    "test 1": 4,
    "radie": 5,
    "cx_2": 7,
    "elevnr": 11,
    "cx_3": 4,
    "cx_1": 4,
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 3": 2,
    "test 2": 5,
    "test 1": 20,
    "radie": 5,
    "cx_2": 5,
    "elevnr": 12,
    "cx_3": 2,
    "cx_1": 20,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 3": 2,
    "test 2": 4,
    "test 1": 6,
    "radie": 5,
    "cx_2": 4,
    "elevnr": 13,
    "cx_3": 2,
    "cx_1": 6,
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 3": 11,
    "test 2": 5,
    "test 1": 18,
    "radie": 5,
    "cx_2": 5,
    "elevnr": 14,
    "cx_3": 11,
    "cx_1": 18,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 3": 9,
    "test 2": 7,
    "test 1": 9,
    "radie": 4,
    "cx_2": 7,
    "elevnr": 15,
    "cx_3": 9,
    "cx_1": 9,
    "sva": "ja"
  },
  {
    "kön": "Pojke",
    "test 3": 4,
    "test 2": 3,
    "test 1": 11,
    "radie": 4,
    "cx_2": 3,
    "elevnr": 16,
    "cx_3": 4,
    "cx_1": 11,
    "sva": "ja"
  },
  {
    "kön": "Pojke",
    "test 3": 7,
    "test 2": 6,
    "test 1": 15,
    "radie": 5,
    "cx_2": 6,
    "elevnr": 17,
    "cx_3": 7,
    "cx_1": 15,
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 3": 10,
    "test 2": 4,
    "test 1": 17,
    "radie": 5,
    "cx_2": 4,
    "elevnr": 18,
    "cx_3": 10,
    "cx_1": 17,
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 3": "",
    "test 2": "",
    "test 1": "",
    "radie": 5,
    "cx_2": "",
    "elevnr": 19,
    "cx_3": "",
    "cx_1": "",
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 3": "",
    "test 2": "",
    "test 1": "",
    "radie": 5,
    "cx_2": "",
    "elevnr": 20,
    "cx_3": "",
    "cx_1": "",
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 3": 6,
    "test 2": 3,
    "test 1": 6,
    "radie": 5,
    "cx_2": 3,
    "elevnr": 21,
    "cx_3": 6,
    "cx_1": 6,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 3": 1,
    "test 2": 5,
    "test 1": 8,
    "radie": 4,
    "cx_2": 5,
    "elevnr": 22,
    "cx_3": 1,
    "cx_1": 8,
    "sva": "ja"
  },
  {
    "kön": "Pojke",
    "test 3": 8,
    "test 2": 3,
    "test 1": 10,
    "radie": 5,
    "cx_2": 3,
    "elevnr": 23,
    "cx_3": 8,
    "cx_1": 10,
    "sva": "nej"
  }
];

var data9a = [
  {
    "kön": "Pojke",
    "test 2": 2,
    "test 1": 12,
    "radie": 4,
    "cx_2": 2,
    "elevnr": 1,
    "cx_1": 12,
    "sva": "ja"
  },
  {
    "kön": "Flicka",
    "test 2": 4,
    "test 1": "",
    "radie": 5,
    "cx_2": 4,
    "elevnr": 2,
    "cx_1": "",
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 2": 2,
    "test 1": 18,
    "radie": 5,
    "cx_2": 2,
    "elevnr": 3,
    "cx_1": 18,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 2": 5,
    "test 1": 11,
    "radie": 4,
    "cx_2": 5,
    "elevnr": 4,
    "cx_1": 11,
    "sva": "ja"
  },
  {
    "kön": "Pojke",
    "test 2": 2,
    "test 1": 7,
    "radie": 5,
    "cx_2": 2,
    "elevnr": 5,
    "cx_1": 7,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 2": 3,
    "test 1": 1,
    "radie": 5,
    "cx_2": 3,
    "elevnr": 6,
    "cx_1": 1,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 2": 3,
    "test 1": 18,
    "radie": 5,
    "cx_2": 3,
    "elevnr": 7,
    "cx_1": 18,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 2": 5,
    "test 1": 18,
    "radie": 5,
    "cx_2": 5,
    "elevnr": 8,
    "cx_1": 18,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 2": 2,
    "test 1": 20,
    "radie": 4,
    "cx_2": 2,
    "elevnr": 9,
    "cx_1": 20,
    "sva": "ja"
  },
  {
    "kön": "Pojke",
    "test 2": 4,
    "test 1": "",
    "radie": 5,
    "cx_2": 4,
    "elevnr": 10,
    "cx_1": "",
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 2": 2,
    "test 1": 17,
    "radie": 5,
    "cx_2": 2,
    "elevnr": 11,
    "cx_1": 17,
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 2": 3,
    "test 1": 15,
    "radie": 5,
    "cx_2": 3,
    "elevnr": 12,
    "cx_1": 15,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 2": 2,
    "test 1": 9,
    "radie": 5,
    "cx_2": 2,
    "elevnr": 13,
    "cx_1": 9,
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 2": 2,
    "test 1": 9,
    "radie": 5,
    "cx_2": 2,
    "elevnr": 14,
    "cx_1": 9,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 2": 1,
    "test 1": 2,
    "radie": 4,
    "cx_2": 1,
    "elevnr": 15,
    "cx_1": 2,
    "sva": "ja"
  },
  {
    "kön": "Pojke",
    "test 2": 1,
    "test 1": 3,
    "radie": 4,
    "cx_2": 1,
    "elevnr": 16,
    "cx_1": 3,
    "sva": "ja"
  },
  {
    "kön": "Pojke",
    "test 2": 3,
    "test 1": 18,
    "radie": 5,
    "cx_2": 3,
    "elevnr": 17,
    "cx_1": 18,
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 2": 5,
    "test 1": 9,
    "radie": 5,
    "cx_2": 5,
    "elevnr": 18,
    "cx_1": 9,
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 2": 1,
    "test 1": "",
    "radie": 5,
    "cx_2": 1,
    "elevnr": 19,
    "cx_1": "",
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 2": 4,
    "test 1": "",
    "radie": 5,
    "cx_2": 4,
    "elevnr": 20,
    "cx_1": "",
    "sva": "nej"
  },
  {
    "kön": "Flicka",
    "test 2": 5,
    "test 1": 3,
    "radie": 5,
    "cx_2": 5,
    "elevnr": 21,
    "cx_1": 3,
    "sva": "nej"
  },
  {
    "kön": "Pojke",
    "test 2": 2,
    "test 1": 16,
    "radie": 4,
    "cx_2": 2,
    "elevnr": 22,
    "cx_1": 16,
    "sva": "ja"
  },
  {
    "kön": "Pojke",
    "test 2": 1,
    "test 1": 9,
    "radie": 5,
    "cx_2": 1,
    "elevnr": 23,
    "cx_1": 9,
    "sva": "nej"
  }
];

/***********************
*	HEAD TITLE TEXT    *
***********************/
var headtitle = document.getElementById('headtitle');
var headtitletext = "";
if(data.length < 1) {
   headtitletext = "Det finns ingen information inlagd i tabellen för klass " + klass.klass;
} else {
   headtitletext = "Kvalitétsäkring [matematik]; resultat för klass " + klass.klass +", " + klass.year +", " + klass.termin;
}
headtitle.innerHTML = headtitletext;

/***********************
*	CHART INFO TEXT    *
***********************/
var chart1 = document.getElementById("chart-info-test1");
chart1.innerHTML = "<p><strong>"+diagnoser[0]["område"]+"</strong></p><p>"+ diagnoser[0]["behandlar"] +"</p>";
var chart2 = document.getElementById("chart-info-test2");
chart2.innerHTML = "<p><strong>"+diagnoser[1]["område"]+"</strong></p><p>"+ diagnoser[1]["behandlar"] +"</p>";
if(diagnoser.length > 2) {
	var chart3 = document.getElementById("chart-info-test3");
	chart3.innerHTML = "<p><strong>"+diagnoser[2]["område"]+"</strong></p><p>"+ diagnoser[2]["behandlar"] +"</p>";
}



if(diagnoser.length > 2) {
	data = data.filter((a) => {

		return (('test 1' in a && a["test 1"] !== "") ||
				('test 2' in a && a["test 2"] !== "") ||
				('test 3' in a && a["test 3"] !== ""))
	});
} else {
	data = data.filter((a) => {

		return (('test 1' in a && a["test 1"] !== "") ||
				('test 2' in a && a["test 2"] !== ""))
	});
}




/******************************
*	DIMENSIONS AND MARGINS	  *
******************************/
const widthinput = 450;
const heightinput = 400;

// var simulation;
var margin = {
		top: 10,
		right: 75,
		bottom: 150,
		left: 50
	};
var width = widthinput - margin.left - margin.right,
	height = heightinput - margin.top - margin.bottom;

// TEST 1
var gtest1 = d3.select("#chart-area-test1")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// TEST 2
var gtest2 = d3.select("#chart-area-test2")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

if(diagnoser.length > 2) {
	// TEST 3
	var gtest3 = d3.select("#chart-area-test3")
			.append("svg")
				.attr("width", width + margin.left +  margin.right)
				.attr("height", height + margin.top + margin.bottom)
			.append("g")
				.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
}

// MEDELVÄRDE GENDER TEST 1
var gavggendertest1 = d3.select("#chart-area-avggendertest1")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// MEDELVÄRDE GENDER TEST 2
var gavggendertest2 = d3.select("#chart-area-avggendertest2")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

if(diagnoser.length > 2) {
	// MEDELVÄRDE GENDER TEST 3
	var gavggendertest3 = d3.select("#chart-area-avggendertest3")
			.append("svg")
				.attr("width", width + margin.left +  margin.right)
				.attr("height", height + margin.top + margin.bottom)
			.append("g")
				.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
}

// MEDELVÄRDE ARRIVAL TEST 1
var gavgarrivaltest1 = d3.select("#chart-area-avgarrivaltest1")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// MEDELVÄRDE ARRIVAL TEST 2
var gavgarrivaltest2 = d3.select("#chart-area-avgarrivaltest2")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

if(diagnoser.length > 2) {
	// MEDELVÄRDE ARRIVAL TEST 3
	var gavgarrivaltest3 = d3.select("#chart-area-avgarrivaltest3")
			.append("svg")
				.attr("width", width + margin.left +  margin.right)
				.attr("height", height + margin.top + margin.bottom)
			.append("g")
				.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
}

// var flag = true;
var t = d3.transition().duration(750);


// add the tooltip area to the webpage
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);


/******************************
*			X-AXIS			  *
******************************/
// x-scale
var x = d3.scaleLinear()
			.range([0, width]);
var xtest1 = d3.scaleLinear()
			.range([0, width]);

var xScaleAvgGender = d3.scaleBand()
							.padding(0.4)
    						.range([0, width]);

var xScaleAvgArrival = d3.scaleBand()
							.padding(0.4)
    						.range([0, width]);

// x-axis test 1
var xAxisGroupTest1 = gtest1.append("g")
		.attr("transform", "translate(0, " + height + ")");

// x-axis test 2
var xAxisGroupTest2 = gtest2.append("g")
		.attr("transform", "translate(0, " + height + ")");

if(diagnoser.length > 2) {
	// x-axis test 3
	var xAxisGroupTest3 = gtest3.append("g")
			.attr("transform", "translate(0, " + height + ")");
}

// x-axis average gender test 1
var xAxisGroupAvgGenderTest1 = gavggendertest1.append("g")
		.attr("transform", "translate(0, " + height + ")");

// x-axis average gender test 2
var xAxisGroupAvgGenderTest2 = gavggendertest2.append("g")
		.attr("transform", "translate(0, " + height + ")");

if(diagnoser.length > 2) {
	// x-axis average gender test 3
	var xAxisGroupAvgGenderTest3 = gavggendertest3.append("g")
			.attr("transform", "translate(0, " + height + ")");
}


// x-axis average arrival test 1
var xAxisGroupAvgArrivalTest1 = gavgarrivaltest1.append("g")
		.attr("transform", "translate(0, " + height + ")");

// x-axis average arrival test 2
var xAxisGroupAvgArrivalTest2 = gavgarrivaltest2.append("g")
		.attr("transform", "translate(0, " + height + ")");

if(diagnoser.length > 2) {
	// x-axis average arrival test 3
	var xAxisGroupAvgArrivalTest3 = gavgarrivaltest3.append("g")
			.attr("transform", "translate(0, " + height + ")");
}


// x-label test 1
gtest1.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Diagnoser - " + diagnoser[0].diagnos);

// x-label test 2
gtest2.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Diagnoser - " + diagnoser[1].diagnos);

if(diagnoser.length > 2) {
	// x-label test 3
	gtest3.append("text")
		.attr("x", width/2)
		.attr("y", height + 50)
		.attr("text-anchor", "middle")
		.text("Diagnoser - " + diagnoser[2].diagnos);
}


// x-label average gender test 1
gavggendertest1.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Medelvärde för diagnos " + diagnoser[0].diagnos);

// x-label average gender test 2
gavggendertest2.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Medelvärde för diagnos " + diagnoser[1].diagnos);

if(diagnoser.length > 2) {
	// x-label average gender test 3
	gavggendertest3.append("text")
		.attr("x", width/2)
		.attr("y", height + 50)
		.attr("text-anchor", "middle")
		.text("Medelvärde för diagnos " + diagnoser[2].diagnos);
}

// x-label average arrival test 1
gavgarrivaltest1.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Medelvärde för diagnos " + diagnoser[0].diagnos);

// x-label average arrival test 2
gavgarrivaltest2.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Medelvärde för diagnos " + diagnoser[1].diagnos);

if(diagnoser.length > 2) {
	// x-label average arrival test 3
	gavgarrivaltest3.append("text")
		.attr("x", width/2)
		.attr("y", height + 50)
		.attr("text-anchor", "middle")
		.text("Medelvärde för diagnos " + diagnoser[2].diagnos);
}


/******************************
*			Y-AXIS			  *
******************************/
// y-scale
var y = d3.scaleLinear()
			.range([height, 0]);
// y-scale
var ytest1 = d3.scaleLinear()
			.range([height, 0]);
// y-scale
var ytest2 = d3.scaleLinear()
			.range([height, 0]);

if(diagnoser.length > 2) {
	// y-scale
	var ytest3 = d3.scaleLinear()
				.range([height, 0]);
}


// y-axis test 1
var yAxisGroupTest1 = gtest1.append("g");

// y-axis test 2
var yAxisGroupTest2 = gtest2.append("g");

if(diagnoser.length > 2) {
	// y-axis test 3
	var yAxisGroupTest3 = gtest3.append("g");
}

// y-axis average gender test 1
var yAxisGroupAvgGenderTest1 = gavggendertest1.append("g");

// y-axis average gender test 2
var yAxisGroupAvgGenderTest2 = gavggendertest2.append("g");

if(diagnoser.length > 2) {
	// y-axis average gender test 3
	var yAxisGroupAvgGenderTest3 = gavggendertest3.append("g");
}

// y-axis SUMMA ARRIVAL STAVNING
var yAxisGroupSumArrivalTest1 = gavgarrivaltest1.append("g");

// y-axis SUMMA ARRIVAL LÄSFÖRSTÅELSE
var yAxisGroupSumArrivalTest2 = gavgarrivaltest2.append("g");

if(diagnoser.length > 2) {
	// y-axis SUMMA ARRIVAL LÄSHASTIGHET
	var yAxisGroupSumArrivalTest3 = gavgarrivaltest3.append("g");
}

// y-label test 1
var yLabel = gtest1.append("text")
	.attr("x", - height/2)
	.attr("y", - 30)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Resultat");

// y-label test 2
var yLabel = gtest2.append("text")
	.attr("x", - height/2)
	.attr("y", - 30)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Resultat");

if(diagnoser.length > 2) {
	// y-label test 3
	var yLabel = gtest3.append("text")
		.attr("x", - height/2)
		.attr("y", - 30)
		.attr("text-anchor", "middle")
		.attr("transform", "rotate(-90)")
		.text("Resultat");
}

// y-label AVERAGE GENDER TEST 1
var yLabel = gavggendertest1.append("text")
	.attr("x", - height/2)
	.attr("y", - 30)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Resultat");

// y-label AVERAGE GENDER TEST 2
var yLabel = gavggendertest2.append("text")
	.attr("x", - height/2)
	.attr("y", - 30)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Resultat");

if(diagnoser.length > 2) {
	// y-label AVERAGE GENDER TEST 3
	var yLabel = gavggendertest3.append("text")
		.attr("x", - height/2)
		.attr("y", - 30)
		.attr("text-anchor", "middle")
		.attr("transform", "rotate(-90)")
		.text("Resultat");
}


// y-label AVERAGE ARRIVAL TEST 1
var yLabel = gavgarrivaltest1.append("text")
	.attr("x", - height/2)
	.attr("y", - 30)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Resultat");

// y-label AVERAGE ARRIVAL TEST 2
var yLabel = gavgarrivaltest2.append("text")
	.attr("x", - height/2)
	.attr("y", - 30)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Resultat");

if(diagnoser.length > 2) {
	// y-label AVERAGE ARRIVAL TEST 3
	var yLabel = gavgarrivaltest3.append("text")
		.attr("x", - height/2)
		.attr("y", - 30)
		.attr("text-anchor", "middle")
		.attr("transform", "rotate(-90)")
		.text("Resultat");
}


/******************************
*			Z-AXIS			  *
******************************/
// var color = d3.scaleOrdinal(d3.schemeSet2);
// var color = d3.scaleOrdinal(d3.schemeAccent);
var color = d3.scaleOrdinal(["#83b179","#b58650","#5d849d","#876851"]);
/******************************
*			JSON			  *
******************************/

update(data, diagnoser);

function update(data, diagnoser) {

	var avgGenderTest1 = [
		{
			"kön": "Flicka",
			"value": average("kön", "Flicka", "test 1", data)
		},
		{
			"kön": "Pojke",
			"value": average("kön", "Pojke", "test 1", data)
		}
	];
	var avgGenderTest2 = [
		{
			"kön": "Flicka",
			"value": average("kön", "Flicka", "test 2", data)
		},
		{
			"kön": "Pojke",
			"value": average("kön", "Pojke", "test 2", data)
		}
	];


	var avgArrivalTest1 = [
		{
			arrival: "ja",
			value: average("sva", "ja", "test 1", data)
		},
		{
			arrival: "nej",
			value: average("sva", "nej", "test 1", data)
		}
	];
	var avgArrivalTest2 = [
		{
			arrival: "ja",
			value: average("sva", "ja", "test 2", data)
		},
		{
			arrival: "nej",
			value: average("sva", "nej", "test 2", data)
		}
	];
	if(diagnoser.length > 2) {
		var avgGenderTest3 = [
			{
				"kön": "Flicka",
				"value": average("kön", "Flicka", "test 3", data)
			},
			{
				"kön": "Pojke",
				"value": average("kön", "Pojke", "test 3", data)
			}
		];
		var avgArrivalTest3 = [
			{
				arrival: "ja",
				value: average("sva", "ja", "test 3", data)
			},
			{
				arrival: "nej",
				value: average("sva", "nej", "test 3", data)
			}
		];
	}

	x.domain([0, data.length + 1]);
	ytest1.domain([0, diagnoser[0].uppgifter]);
	ytest2.domain([0, diagnoser[1].uppgifter]);
	if(diagnoser.length > 2) {
		ytest3.domain([0, diagnoser[2].uppgifter]);
	}


	xScaleAvgGender.domain(["Pojke", "Flicka"]);
	xScaleAvgArrival.domain(["SVA", "Övriga"]);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(x);
	xAxisGroupTest1.transition(t).call(xAxisCall);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(x);
	xAxisGroupTest2.transition(t).call(xAxisCall);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(xScaleAvgGender);
	xAxisGroupAvgGenderTest1.transition(t).call(xAxisCall);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(xScaleAvgGender);
	xAxisGroupAvgGenderTest2.transition(t).call(xAxisCall);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(xScaleAvgArrival);
	xAxisGroupAvgArrivalTest1.transition(t).call(xAxisCall);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(xScaleAvgArrival);
	xAxisGroupAvgArrivalTest2.transition(t).call(xAxisCall);


	if(diagnoser.length > 2) {
		// Uppdatera x-axis beroende på nya skalan
		var xAxisCall = d3.axisBottom(x);
		xAxisGroupTest3.transition(t).call(xAxisCall);

		// Uppdatera x-axis beroende på nya skalan
		var xAxisCall = d3.axisBottom(xScaleAvgGender);
		xAxisGroupAvgGenderTest3.transition(t).call(xAxisCall);

		// Uppdatera x-axis beroende på nya skalan
		var xAxisCall = d3.axisBottom(xScaleAvgArrival);
		xAxisGroupAvgArrivalTest3.transition(t).call(xAxisCall);
	}

	/*********************************************************/

	// Uppdatera y-axis beroende på nya skalan
	var yAxisCall = d3.axisLeft(ytest1);
	yAxisGroupTest1.transition(t).call(yAxisCall);

	// Uppdatera y-axis beroende på nya skalan
	var yAxisCall = d3.axisLeft(ytest2);
	yAxisGroupTest2.transition(t).call(yAxisCall);



	var yAxisCall = d3.axisLeft(ytest1);
	yAxisGroupAvgGenderTest1.transition(t).call(yAxisCall);

	var yAxisCall = d3.axisLeft(ytest2);
	yAxisGroupAvgGenderTest2.transition(t).call(yAxisCall);



	var yAxisCall = d3.axisLeft(ytest1);
	yAxisGroupSumArrivalTest1.transition(t).call(yAxisCall);

	var yAxisCall = d3.axisLeft(ytest2);
	yAxisGroupSumArrivalTest2.transition(t).call(yAxisCall);

	if(diagnoser.length > 2) {
		var yAxisCall = d3.axisLeft(ytest3);
		yAxisGroupTest3.transition(t).call(yAxisCall);

		var yAxisCall = d3.axisLeft(ytest3);
		yAxisGroupAvgGenderTest3.transition(t).call(yAxisCall);

		var yAxisCall = d3.axisLeft(ytest3);
		yAxisGroupSumArrivalTest3.transition(t).call(yAxisCall);
	}

	data = data.sort((a, b) => { return a["test 1"] - b["test 1"]; });
	// TEST 1
	var nodetest1 = gtest1.selectAll("circle").data(data).enter()
				   .append('circle')
				   		.attr("class", (d) => {
							var cl = "node";
							if(d['sva'] == "ja") {
								cl = "newanlandnode";
							}
							return cl;
						})
						.attr("cx", (d, i) => { return x(i+1); })
						.attr("r", (d) => { return d.radie - 2.5; })
						.attr("fill", (d) => { return color(d["kön"]); })
						.attr("cy", (d) => { return ytest1(d["test 1"]); })
						.style("display", (d) => { return d["test 1"] === "" ? "none" : ""})
						.on("mouseover", function(d) {
							tooltip.transition()
								.duration(100)
								.style("opacity", 0.9)
								.style("display", "block");
							tooltip.html(d["kön"] + " <br/> Nyanländ: " +d["sva"] + "<br/> (" + d["test 1"] + ")")
								.style("left", (d3.event.pageX + 10) + "px")
								.style("top", (d3.event.pageY - 28) + "px");
							})
						.on("mouseout", function(d) {
							tooltip.transition()
								.duration(500)
								.style("opacity", 0)
								.style("display", "none");
						});


	data = data.sort((a, b) => { return a["test 2"] - b["test 2"]; });

 	// TEST 2
	var nodetest2 = gtest2.selectAll("circle").data(data).enter()
				   .append('circle')
				   .attr("class", (d) => {
						   var cl = "node";
						   if(d['sva'] == "ja") {
							   cl = "newanlandnode";
						   }
						   return cl;
					   	})
						.attr("cx", (d, i) => { return x(i+1); })
						.attr("r", (d) => { return d.radie - 2.5; })
						.attr("fill", (d) => { return color(d["kön"]); })
						.attr("cy", (d) => { return ytest2(d["test 2"]); })
						.style("display", (d) => { return d["test 2"] === "" ? "none" : ""})
						.on("mouseover", function(d) {
							tooltip.transition()
								.duration(200)
								.style("opacity", .9)
								.style("display", "block");
							tooltip.html(d["kön"] + " <br/> Nyanländ: " +d["sva"] + "<br/> (" + d["test 2"] + ")")
								.style("left", (d3.event.pageX + 10) + "px")
								.style("top", (d3.event.pageY - 28) + "px");
							})
						.on("mouseout", function(d) {
							tooltip.transition()
								.duration(500)
								.style("opacity", 0)
								.style("display", "none");
						});

	if(diagnoser.length > 2) {
		data = data.sort((a, b) => { return a["test 3"] - b["test 3"]; });
		// TEST 3
		var nodetest3 = gtest3.selectAll("circle").data(data).enter()
					   .append('circle')
					   .attr("class", (d) => {
							  var cl = "node";
							  if(d['sva'] == "ja") {
								  cl = "newanlandnode";
							  }
							  return cl;
						  	})
							.attr("cx", (d, i) => { return x(i+1); })
							.attr("r", (d) => { return d.radie - 2.5; })
							.attr("fill", (d) => { return color(d["kön"]); })
							.attr("cy", (d) => { return ytest3(d["test 3"]); })
							.style("display", (d) => { return d["test 3"] === "" ? "none" : ""})
							.on("mouseover", function(d) {
								tooltip.transition()
									.duration(200)
									.style("opacity", .9)
									.style("display", "block");
								tooltip.html(d["kön"] + " <br/> Nyanländ: " +d["sva"] + "<br/> (" + d["test 3"] + ")")
									.style("left", (d3.event.pageX + 10) + "px")
									.style("top", (d3.event.pageY - 28) + "px");
								})
							.on("mouseout", function(d) {
								tooltip.transition()
									.duration(500)
									.style("opacity", 0)
									.style("display", "none");
							});
	}

	// average gender test 1
	gavggendertest1.selectAll("rect").data(avgGenderTest1).enter()
					.append("rect")
					.attr('x', (d) => xScaleAvgGender(d["kön"]))
				    .attr('y', (d) => ytest1(d.value))
				    .attr('height', (d) => height - ytest1(d.value))
				    .attr('width', xScaleAvgGender.bandwidth())
					.attr('fill', (d) => { return color(d["kön"])})
					.text(function(d) { return d.value; });

	// text average gender test 1
	gavggendertest1.selectAll(".text")
	  .data(avgGenderTest1)
	  .enter()
	  .append("text")
	  .attr("class","text")
	  .attr("x", (function(d) { return xScaleAvgGender(d["kön"]) + (xScaleAvgGender.bandwidth() / 2)}  ))
	  .attr("y", function(d) { return ytest1(d.value) - 5; })
	  .attr("text-anchor", "middle")
	  .text(function(d) { return d.value; });


	// average gender test 2
	gavggendertest2.selectAll("rect").data(avgGenderTest2).enter()
					.append("rect")
					.attr('x', (d) => xScaleAvgGender(d["kön"]))
				    .attr('y', (d) => ytest2(d.value))
				    .attr('height', (d) => height - ytest2(d.value))
				    .attr('width', xScaleAvgGender.bandwidth())
					.attr('fill', (d) => { return color(d["kön"])})
					.text(function(d) { return d.value; });

	// text average gender test 2
	gavggendertest2.selectAll(".text")
	  .data(avgGenderTest2)
	  .enter()
	  .append("text")
	  .attr("class","text")
	  .attr("x", (function(d) { return xScaleAvgGender(d["kön"]) + (xScaleAvgGender.bandwidth() / 2)}  ))
	  .attr("y", function(d) { return ytest2(d.value) - 5; })
	  .attr("text-anchor", "middle")
	  .text(function(d) { return d.value; });

	if(diagnoser.length > 2) {
		// average gender test 3
	  gavggendertest3.selectAll("rect").data(avgGenderTest3).enter()
					  .append("rect")
					  .attr('x', (d) => xScaleAvgGender(d["kön"]))
					  .attr('y', (d) => ytest3(d.value))
					  .attr('height', (d) => height - ytest3(d.value))
					  .attr('width', xScaleAvgGender.bandwidth())
					  .attr('fill', (d) => { return color(d["kön"])})
					  .text(function(d) { return d.value; });

	  // text average gender test 3
	  gavggendertest3.selectAll(".text")
		.data(avgGenderTest3)
		.enter()
		.append("text")
		.attr("class","text")
		.attr("x", (function(d) { return xScaleAvgGender(d["kön"]) + (xScaleAvgGender.bandwidth() / 2)}  ))
		.attr("y", function(d) { return ytest3(d.value) - 5; })
		.attr("text-anchor", "middle")
		.text(function(d) { return d.value; });
	}


	gavgarrivaltest1.selectAll("rect").data(avgArrivalTest1).enter()
		.append("rect")
		.attr('x', (d) => {
			 if(d.arrival == "ja") {
				  return xScaleAvgArrival("SVA");
			 } else {
				 return xScaleAvgArrival("Övriga");
			 }
		 })
		.attr('y', (d) => ytest1(d.value))
		.attr('height', (d) => height - ytest1(d.value))
		.attr('width', xScaleAvgArrival.bandwidth())
		.attr('fill', (d) => { return color(d.arrival)})
		.text(function(d) { return d.value; });

	  // text gender sum stavning
  	gavgarrivaltest1.selectAll(".text")
  	  .data(avgArrivalTest1)
  	  .enter()
  	  .append("text")
  	  .attr("class","text")
	  .attr('x', (d) => {
		   if(d.arrival == "ja") {
				return xScaleAvgArrival("SVA") + (xScaleAvgArrival.bandwidth() / 2);
		   } else {
			   return xScaleAvgArrival("Övriga") + (xScaleAvgArrival.bandwidth() / 2);
		   }
	   })
  	  .attr("y", function(d) { return ytest1(d.value) - 5; })
  	  .attr("text-anchor", "middle")
  	  .text(function(d) { return d.value; });

	gavgarrivaltest2.selectAll("rect").data(avgArrivalTest2).enter()
		.append("rect")
		.attr('x', (d) => {
			 if(d.arrival == "ja") {
				  return xScaleAvgArrival("SVA");
			 } else {
				 return xScaleAvgArrival("Övriga");
			 }
		 })
		.attr('y', (d) => ytest2(d.value))
		.attr('height', (d) => height - ytest2(d.value))
		.attr('width', xScaleAvgArrival.bandwidth())
		.attr('fill', (d) => { return color(d.arrival)})
		.text(function(d) { return d.value; });

	  // text gender sum stavning
  	gavgarrivaltest2.selectAll(".text")
  	  .data(avgArrivalTest2)
  	  .enter()
  	  .append("text")
  	  .attr("class","text")
	  .attr('x', (d) => {
		   if(d.arrival == "ja") {
				return xScaleAvgArrival("SVA") + (xScaleAvgArrival.bandwidth() / 2);
		   } else {
			   return xScaleAvgArrival("Övriga") + (xScaleAvgArrival.bandwidth() / 2);
		   }
	   })
  	  .attr("y", function(d) { return ytest2(d.value) - 5; })
  	  .attr("text-anchor", "middle")
  	  .text(function(d) { return d.value; });

	if(diagnoser.length > 2) {
		gavgarrivaltest3.selectAll("rect").data(avgArrivalTest3).enter()
			.append("rect")
			.attr('x', (d) => {
				 if(d.arrival == "ja") {
					  return xScaleAvgArrival("SVA");
				 } else {
					 return xScaleAvgArrival("Övriga");
				 }
			 })
			.attr('y', (d) => ytest3(d.value))
			.attr('height', (d) => height - ytest3(d.value))
			.attr('width', xScaleAvgArrival.bandwidth())
			.attr('fill', (d) => { return color(d.arrival)})
			.text(function(d) { return d.value; });

		  // text gender sum stavning
	  	gavgarrivaltest3.selectAll(".text")
	  	  .data(avgArrivalTest3)
	  	  .enter()
	  	  .append("text")
	  	  .attr("class","text")
		  .attr('x', (d) => {
			   if(d.arrival == "ja") {
					return xScaleAvgArrival("SVA") + (xScaleAvgArrival.bandwidth() / 2);
			   } else {
				   return xScaleAvgArrival("Övriga") + (xScaleAvgArrival.bandwidth() / 2);
			   }
		   })
	  	  .attr("y", function(d) { return ytest3(d.value) - 5; })
	  	  .attr("text-anchor", "middle")
	  	  .text(function(d) { return d.value; });
	}



	// UPDATE TEST 1
	nodetest1.transition(t)
		.attr("cy", (d) => { return ytest1(d["test 1"]); })
		.attr("cx", (d, i) => { return x(i+1); })
		.attr("r", (d) => { return d.radie; })

	// UPDATE TEST 2
	nodetest2.transition(t)
		.attr("cy", (d) => { return ytest2(d["test 2"]); })
		.attr("cx", (d, i) => { return x(i+1); })
		.attr("r", (d) => { return d.radie; })

	if(diagnoser.length > 2) {
		// UPDATE TEST 3
		nodetest3.transition(t)
			.attr("cy", (d) => { return ytest3(d["test 3"]); })
			.attr("cx", (d, i) => { return x(i+1); })
			.attr("r", (d) => { return d.radie; })
	}


	// ENTER TEST 1
	nodetest1.enter()
		.append('circle')
			.attr("class", "node")
			.attr("stroke", "#474747")
			.attr("cx", (d, i) => { return x(i+1); })
			.attr("r", (d) => { return d.radie - 1; })
			.attr("fill", (d) => { return color(d["kön"]); })
			.attr("cy", y(0))
			.transition(t)
				.attr("cy", (d) => { return ytest1(d["test 1"]); })

	// ENTER TEST 2
	nodetest2.enter()
		.append('circle')
			.attr("class", "node")
			.attr("stroke", "#474747")
			.attr("cx", (d, i) => { return x(i+1); })
			.attr("r", (d) => { return d.radie - 1; })
			.attr("fill", (d) => { return color(d["kön"]); })
			.attr("cy", y(0))
			.transition(t)
				.attr("cy", (d) => { return ytest2(d["test 2"]); })

	if(diagnoser.length > 2) {
		// ENTER TEST 3
		nodetest3.enter()
			.append('circle')
				.attr("class", "node")
				.attr("stroke", "#474747")
				.attr("cx", (d, i) => { return x(i+1); })
				.attr("r", (d) => { return d.radie - 1; })
				.attr("fill", (d) => { return color(d["kön"]); })
				.attr("cy", y(0))
				.transition(t)
					.attr("cy", (d) => { return ytest3(d["test 3"]); })
	}

//
// 	console.log("color.domain: ", color.domain());
// 	console.log("color: ", color);
	var legendcolor = color.domain();

	// Lägger först till Nyanlända.
	// Tar därefter bort "ja", "nej" som tillhör stapeldiagrammen för nyanlända
	legendcolor.push("SVA");
	legendcolor.splice(2,1);
	legendcolor.splice(2,1);
	console.log("legendcolor > ", legendcolor);

	console.log("legendcolor: ", legendcolor);
	// draw legend
	if(diagnoser.length > 2) {
		var legend = gtest3.selectAll(".legend")
		  .data(legendcolor)
		.enter().append("g")
		  .attr("class", "legend")
		  .attr("transform", function(d, i) { return "translate(0," + i * 30 + ")"; });

		// draw legend colored rectangles
		legend.append("circle")
		  .attr("cx", width + 25)
		  .attr("cy", 10)
		  .attr("r", 10)
		  .style("fill", (d) => {
			  var fillcolor = color(d);
			  if(d == "SVA") {
				  fillcolor = color("Pojke");
			  }
			  return fillcolor;
		   })
		  .style("stroke", (d) => {
			  var strokecolor = "#2b2b2b";
			  if(d == "SVA") {
				  strokecolor = "#692424";
			  }
			  return strokecolor;
		  })
		  .style("stroke-width", (d) => {
			  		var width = "1px";
					console.log("d ", d)
					if(d == "SVA") {
						width ="3px";
					}
					return width;
			    }
		    )

		// draw legend text
		legend.append("text")
		  .attr("x", width + 10)
		  .attr("y", 9)
		  .attr("dy", ".35em")
		  .style("text-anchor", "end")
		  .text(function(d) { return d;})
	} else {
		var legend = gtest2.selectAll(".legend")
		  .data(legendcolor)
		.enter().append("g")
		  .attr("class", "legend")
		  .attr("transform", function(d, i) { return "translate(0," + i * 30 + ")"; });

		// draw legend colored rectangles
		legend.append("circle")
		  .attr("cx", width + 25)
		  .attr("cy", 10)
		  .attr("r", 10)
		  .style("fill", (d) => {
			  var fillcolor = color(d);
			  if(d == "SVA") {
				  fillcolor = color("Pojke");
			  }
			  return fillcolor;
		   })
		  .style("stroke", (d) => {
			  var strokecolor = "#2b2b2b";
			  if(d == "SVA") {
				  strokecolor = "#692424";
			  }
			  return strokecolor;
		  })
		  .style("stroke-width", (d) => {
			  		var width = "1px";
					console.log("d ", d)
					if(d == "SVA") {
						width ="3px";
					}
					return width;
			    }
		    )

		// draw legend text
		legend.append("text")
		  .attr("x", width + 10)
		  .attr("y", 9)
		  .attr("dy", ".35em")
		  .style("text-anchor", "end")
		  .text(function(d) { return d;})
	}

}

function average(filter, value, field, data) {
	var sum = 0;
	var average = 0.0;
	var filteredData;
	var counter = 0;

	filteredData = data.filter((obj) => {
		return obj[filter] === value;
	});

	filteredData.forEach((obj) => {
		if(obj[field] !== "") {
			sum = sum + obj[field];
			counter++;
		}
	});

	average = round(sum/counter, 1);
	return average;
}

// Hjälpfunktion för att avrunda ett tal
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
