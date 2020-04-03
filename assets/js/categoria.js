document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let value2 = document.querySelector(".categprotitle")
  value2.href = 'projeto.html?pi=' + value + '&key={{@key}}'
  let value3 = document.querySelector(".imglink")
  value3.href = 'projeto.html?pi=' + value + '&key={{@key}}'
  let db = coDesConnect('https://thecakeproject-1f05e.firebaseio.com/')

  db.download('/', function(data) {


    context = data["portfolio"][value]
    coDesReplace('title', context)

    context = data["portfolio"][value]
    coDesReplace('.categorias', context)

    context = data["portfolio"][value]
    coDesReplace('.indicecateg', context)

    context = data["portfolio"][value]
    coDesReplace('.linhalista', context)

    context = data
    coDesReplace('.barralateralcateg', context)

  })
})
