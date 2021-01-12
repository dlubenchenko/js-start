let airlines


var app = "https://script.google.com/a/macros/ticketstravelnetwork.com/s/AKfycbxvOnG2MZrW4EcVTgOg9jgxbAETfm_j4HRMEfkEBbAB3XzS2bn8emhl/exec",
    output = '',
    xhr = new XMLHttpRequest();
xhr.open('GET', app);
xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
                result = r["result"];
            // console.log(result)
            airlines = result
            let airline = result
                .map(key => key[0])
                .filter(key => key !== '')
            // console.log(airline)

            for (let i = 0; i < airline.length; i++) {
                let a = document.createElement('option')
                a.text = airline[i];
                select.append(a)
            }

        } catch (e) {}
    }
}
xhr.send()

// setTimeout(function() {
//     console.log(airlines);
//   }, 10000);

function alInfo() {
    let airline = airlines
        .map(key => key[0])
        .filter(key => key !== '')
    // console.log(airline)

    let selected = airlines
        .filter(key => key.includes(document.querySelector('#select').value))
    // console.log('Обрана авіакомпанія', selected[0])

    for (let i = 0; i < 15; i++) {
        document.querySelectorAll('.info')[i].innerHTML = `${airlines[0][i]}`
        document.querySelectorAll('.info1')[i].innerHTML = `${selected[0][i]}`
    }
}