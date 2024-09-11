document.getElementById('guardar').addEventListener('click', function() {
    // Ocultar el modal
    document.getElementById('taskModal').style.display = 'none';
    
    // Mostrar la segunda pantalla
    document.getElementById('secondScreen').style.display = 'block';
  });
  
  document.getElementById('volver').addEventListener('click', function() {
    // Ocultar la segunda pantalla
    document.getElementById('secondScreen').style.display = 'none';
    
    // Mostrar el modal nuevamente
    document.getElementById('taskModal').style.display = 'flex';
  });
  