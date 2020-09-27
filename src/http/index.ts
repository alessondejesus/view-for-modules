import axios from 'axios'

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        console.log('sempre executada kkk')
    });

// export { alguma coisa }