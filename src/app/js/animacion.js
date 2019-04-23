// <!-- SCROOLL REVEAL SCRIPT -->
  window.sr = ScrollReveal();

  sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
  });

  sr.reveal('.header-content-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
  });

  sr.reveal('.header-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
  });

  sr.reveal('.header-btn', {
    duration: 2000,
    delay: 1000, 
    origin: 'bottom'
  });

  sr.reveal('#testimonial div', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
  });

  //Hace la Animación cuando tocamos el Menú
  //document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    document.querySelectorAll('#vehiculos').forEach(anchor => {
      anchor.addEventListener('click', function () {
        // e.preventDefault();
        document.querySelector(this.getAttribute ('href')).scrollIntoView({
        behavior: "smooth"
      });
    });

        /**
        $(document).ready(function(){ 
            $('#VerVehiculos').on('click', function(){
                $('#vehiculos').toggle(); // Original
            });
        });
        */

       function mostrarOcultarVehiculos() {
            if (document.getElementById('VerVehiculos').textContent === 'Mostrar Vehículos') {
              console.log(document.getElementById('VerVehiculos').textContent);
              document.getElementById('VerVehiculos').textContent = 'Ocultar Vehículos';
            }else{
              console.log(document.getElementById('VerVehiculos').textContent);
              document.getElementById('VerVehiculos').textContent = 'Mostrar Vehículos';
            }
        }
        
        function animarVehiculos() {
            window.sr = ScrollReveal();
            
            sr.reveal('#vehiculos', {
                duration: 1000,
                origin: 'left',
                distance: '100px',
                viewFactor: 0.2
            });
        }

        // jQuery
        $(document).ready( function() {
            $('#VerVehiculos').on('click', function(e){
                $('#vehiculos').toggle();
                animarVehiculos();
                mostrarOcultarVehiculos();
                e.preventDefault();
            });            
        });

    });