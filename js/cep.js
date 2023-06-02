// https://brasilapi.com.br/api/cep/v1/%7Bcep%7D

function buscaCep(){
    let cep = document.getElementById('cep').value;
    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v2/" + cep;

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function(){
            if(req.status === 200){
                let endereco = JSON.parse(req.response);
                document.getElementById("estado").value = endereco.state;
                document.getElementById("cidade").value = endereco.city;
                document.getElementById("rua").value = endereco.street;
            }
            else if(req.status === 404){
                alert("CEP invalido")
            }
            else{
                alert("Erro ao fazer a requisição")
            }
        }
    }
}

window.onload = function(){
    let campoCep = document.getElementById('cep');
    campoCep.addEventListener("blur", buscaCep);
}