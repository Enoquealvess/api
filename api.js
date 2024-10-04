window.onload = function () {

    const campoCEP = document.getElementById('txtCEP');

    campoCEP.addEventListener('blur', function () {

        const caixaCEP = campoCEP.value;

        if (campoCEP.value.length == 8) {
            const urlCEP = `https://viacep.com.br/ws/${caixaCEP}/json`;

            fetch(urlCEP)
                .then(function (response) {

                    return response.json();
                })
                .then(function (data) {
                    document.getElementById('txtRua').value = data.logradouro;

                })

            fetch(urlCEP)
                .then(function (response) {

                    return response.json();
                })
                .then(function (data) {
                    document.getElementById('textBairro').value = data.bairro;

                });

        };
    })
}
