let airlines


var app = "https://script.googleusercontent.com/a/macros/ticketstravelnetwork.com/echo?user_content_key=oE9kX62cQ91G0JaHXENzmYEp_Ml_l89_8-aiY1N_M1OVn8rfU5GwX4xpiNwttYZVnLXiqSnG1O-Bq2hJ9SrvHEdm12U2pp-lm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP9imV2sZjih4zgvYAWmpNMZJffnCWaVvz3JzkgaHWr9clxyUjkLCm_QS2p9D3MTOKFYRWV0mfjPLC8UOww90mLwiPgEgjIGycxlVTVci-SEy64AkrBPoXqWQslXG4EG404&lib=MyI6LAjNJ4pddlKKjgwOYgKAZcoUUyC-k",
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