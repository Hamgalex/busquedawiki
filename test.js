

function busqueda()
{
    let accion = document.getElementById("search").value.toLowerCase();
    if(accion.match(/(¿Qué (es|son) (la|el|los|un|unos | )[a-zA-Z0-9]+\?)/g)==null)
    {
        
    }
}



function buscarPalabra(palabra) {
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