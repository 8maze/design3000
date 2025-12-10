// form-validation.js

(function () {
  'use strict';

  // Wählt alle Formulare aus, die die Klasse 'needs-validation' haben
  var forms = document.querySelectorAll('.needs-validation');
  
  // Iteriert über alle Formulare mithilfe einer traditionellen Schleife
  for (var i = 0; i < forms.length; i++) {
    var form = forms[i];
    
    // Fügt den Event-Listener für das Absenden hinzu
    form.addEventListener('submit', function (event) {
      
      // 1. VERHINDERT das tatsächliche Absenden des Formulars
      event.preventDefault(); 
      event.stopPropagation(); 

      // 2. Fügt die Klasse hinzu, welche die visuellen Validierungs-Hinweise anzeigt
      this.classList.add('was-validated');
      
    }, false);
  }
})();