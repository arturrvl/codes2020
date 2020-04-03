document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let valuepi = params['pi']
  console.log(valuepi)
  let value2 = document.querySelector(".imgproj")
  value2.src = 'assets/img/' + value + '.jpg'
  let value3 = document.querySelector(".linkinicio2")
  value3.href = 'categoria.html?key=' + valuepi 
  let db = coDesConnect('https://thecakeproject-1f05e.firebaseio.com/')

  db.download('/', function(data) {

    context = data["portfolio"][valuepi]["projetos"][value]
    console.log(context)
    coDesReplace('title', context)

    context = data["portfolio"][valuepi]["projetos"][value]
    coDesReplace('.listacateg', context)

    context = data["portfolio"][valuepi]["projetos"][value]
    coDesReplace('.proultitle', context)

    context = data["portfolio"][valuepi]
    coDesReplace('.linkinicio2', context)

    context = data
    coDesReplace('.barralateralcateg', context)

  })
})