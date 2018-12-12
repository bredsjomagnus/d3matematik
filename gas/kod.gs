function doGet(e) {
    //var params = JSON.stringify(e);
    //Logger.log(e.parameters.klass);
    var scriptProp = PropertiesService.getScriptProperties();
    scriptProp.setProperties(e.parameter, true);
    var t = HtmlService.createTemplateFromFile("index.html");
    //Logger.log("data ", t.data);
    return t.evaluate()
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setTitle('Klockarhagsskolan - Kvalitétsäkring');
}

function getParams() {
    Logger.log("Kommer hit");
    var scriptProperties = PropertiesService.getScriptProperties();
    var scriptProp = scriptProperties.getProperties();

    Logger.log(scriptProp);
    return scriptProp;
}

function getPageParam(e) {
    Logger.log("Kommer hit");
    Logger.log(e);
    if ('klass' in e.parameters) {
        var klass = parseInt(e.parameters['page'][0]);
        if (!isNaN(page) && page > 0) {
            Logger.log(klass);
            return klass;
        }
    }

    return 1
}
// get the chart data to pass through to front-end
function getChartData() {

    var ss = SpreadsheetApp.openById("1UlwQY3Sf5E0n_n3cr52s_cKZgt_9QOy2XWjFmvpmJds");
    var sheet = ss.getActiveSheet();

    // getRange(row, column, numRows, numColumns).getValues...
    // sheet.getLastColumn() returns last column with content
    var headings = sheet.getRange(3, 1, 1, sheet.getLastColumn()).getValues()[0].map(function(heading) {
        return heading.toLowerCase();
    });

    Logger.log(headings);
    Logger.log(sheet.getLastRow() - 3);

    var values = sheet.getRange(4, 1, sheet.getLastRow() - 3, sheet.getLastColumn()).getValues();

    var data = [];
    for (var i = 0; i < values.length; i++) {
        var obj = {};
        for (var j = 0; j < values[i].length; j++) {
            obj[headings[j]] = values[i][j];
        }
        data.push(obj);
    }

    Logger.log(data);

    return data;
}

// get the chart data to pass through to front-end
function getBladData(blad) {

    var ss = SpreadsheetApp.openById("1GM5r-kUvhLAarCvtXjUDhmEYBt0lb2PwxP_5bZyGy5A");
    var sheet = ss.getSheetByName(blad);

    // getRange(row, column, numRows, numColumns).getValues...
    var klassheadings = sheet.getRange(1, 2, 1, 3).getValues()[0].map(function(heading) {
        return heading.toLowerCase();
    });

	var klass = {
		"klass": klassheadings[0],
		"year": klassheadings[1],
		"termin": klassheadings[2]
	};

    headings = fixHeadings(headings);
    var values = sheet.getRange(3, 2, sheet.getLastRow() - 2, 8).getValues();

    var data = [];

    for (var i = 0; i < values.length; i++) {
        var obj = {};
        obj['klass'] = sheet.getRange(1, 2).getValues();
        obj['year'] = sheet.getRange(1, 4).getValues();
        obj['termin'] = sheet.getRange(1, 6).getValues();
        obj["radie"] = 5;
        for (var j = 0; j < values[i].length; j++) {
            obj[headings[j]] = values[i][j];
            if (headings[j] == "stavning") {
                obj["cx_s"] = values[i][j];
            } else if (headings[j] == "läsf") {
                obj["cx_f"] = values[i][j];
            } else if (headings[j] == "läsh") {
                obj["cx_h"] = values[i][j];
            }
            if (headings[j] == "nyanländ" && values[i][j] == "ja") {
                obj["radie"] = 4;
            }
        }
        data.push(obj);
    }


    Logger.log(data);

    return data;
}

function fixHeadings(headings) {
    var index = headings.indexOf("ordf");
    if (index !== -1) {
        headings[index] = "läsh";
    }

    var index = headings.indexOf("kön");
    if (index !== -1) {
        headings[index] = "gender";
    }

    var index = headings.indexOf("sva");
    if (index !== -1) {
        headings[index] = "nyanländ";
    }

    return headings;
}

function gender(indata) {
    var data = String(indata);
    Logger.log("Indata: ", data);
    var gender = "Könlös",
        gendernumber = null;
    gendernumber = data.substring(data.length - 2, data.length - 1);
    if ((gendernumber % 2) == 0) {
        gender = "Flicka";
    } else if ((gendernumber % 2) == 1) {
        gender = "Pojke";
    }
    return gender;
}
