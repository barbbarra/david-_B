// Datos entregados para el ejercicio
var davidBowie = {
  datosPersonales: {
    nombre: 'David',
    apellido:  'Jones',
    nacimiento:  1947,
    pais:  'Reino Unido',
    imagen: 'https://vignette.wikia.nocookie.net/es.gta/images/4/44/David_Bowie.jpg/revision/latest?cb=20160910045306'
  },
  datosArtisticos: {
    nombreArtistico: 'David Bowie',
    otrosNombres: ['Starman', 'Ziggy Stardust', 'The Thin White Duke'],
    informacionArtistica: {
      voz: 'Barítono',
      genero: 'Rock'
    }
  }
}

//poner la imagen
$(document).ready(function(){
  $('.img-circle').attr('src', davidBowie.datosPersonales.imagen)
  $('#artist_name').text(davidBowie.datosArtisticos.nombreArtistico)

  $('.caption li:nth-child(1) .span_artist').text(davidBowie.datosPersonales.nombre)
  $('#artist_lastname').text(davidBowie.datosPersonales.apellido)
  $('#artist_yearBirthday').text(davidBowie.datosPersonales.apellido)


  $('#artist_artistName').text(davidBowie.datosArtisticos.nombreArtistico)


  $('#artist_pseudonym ul').empty()

  davidBowie.datosArtisticos.otrosNombres.forEach(function(pseudonimo) {
    $('#artist_pseudonym ul').append('<li>'+ pseudonimo +'</li>')


  })


})
