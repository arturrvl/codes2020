document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://thecakeproject-1f05e.firebaseio.com/')

  db.download('/', function(data) {

    let context = data
    coDesReplace('.listaindex', context)
    
  })
})
