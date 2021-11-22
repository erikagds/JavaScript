 var pais = document.querySelector('input#country');
    var re = document.querySelector('div#res');

    function verificar() {

        if (pais.value == 'brasil' || pais.value == 'BRASIL' || pais.value == 'Brasil') {
            res.innerText = 'Você é brasileiro';
        } else {
            res.innerText = 'Você é estrangeiro';
        }
    }
    
