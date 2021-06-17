

function buscar() {
    let palabra = document.getElementById("search").value.toLowerCase();
    apiURL =  "https://api.dictionaryapi.dev/api/v2/entries/es/"+ palabra;
    
    document.getElementById("resultado").innerHTML = apiURL;
    encontrarPalabra();

}

function encontrarPalabra()
        {
            
            var data = undefined;
            var request = new XMLHttpRequest();
            request.open('GET', currentApiURL, true);
            request.send();

            request.onreadystatechange = function ()
            {
               
                if (this.readyState == 4 && this.status == 200)
                {
                    debugger;
            
                    var resultRawData =  this.response;
                    data =  JSON.parse(resultRawData);
                    showApiData(data);

                }

            }

        }