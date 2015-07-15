var JsonObj = null;

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    f = files[0];
    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function (theFile) {
        return function (e) { 
            JsonObj = e.target.result
            // console.log(JsonObj);
            var parsedJSON = JSON.parse(JsonObj);
            var x = parsedJSON[0][1]['loci'];
            console.log(x);
            $("#table").html(x);

        };
    })(f);

    // Read in JSON as a data URL.
    reader.readAsText(f, 'UTF-8');
}
