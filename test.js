

function buscar() {

    let palabra = document.getElementById("search").value.toLowerCase();
    apiURL =  "https://api.dictionaryapi.dev/api/v2/entries/es/"+ palabra;

    encontrarPalabra();
}

function encontrarPalabra(){
            
    var data = undefined;
    var request = new XMLHttpRequest();

    request.open('GET', apiURL, true);
    request.send();

    request.onreadystatechange = function ()
    {      
        if (this.readyState == 4 && this.status == 200)
        {
            var resultRawData =  this.response;
            data =  JSON.parse(resultRawData);
            console.log(data);
            mostrarDatos(data);
        }
        else{
            document.getElementById("resultado").innerHTML ="No se encontró la palabra";
        }
    }
}

function mostrarDatos(data)
{
    
    document.getElementById("resultado").innerHTML = "<strong>Definición</strong>: "+data[0].meanings[0].definitions[0].definition;
}