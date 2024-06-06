(function(){
    var index = {
        init: function(){
            window.addEventListener('load', function(event){    
                element = document.createElement('form');
                label = document.createElement('label');
                label.innerHTML = "Note de musique ";
                select = document.createElement('select');
                element.appendChild(label);
                element.appendChild(select);
                document.body.appendChild(element);
                para = document.createElement('p');
                document.body.appendChild(para);
            
                var notAmeMus = {
                    "" : "",
                    "C" : "Do",
                    "D" : "Re",
                    "E" : "Mi",
                    "F" : "Fa",
                    "G" : "Sol",
                    "A" : "La",
                    "B" : "Si",
                };

                for (var key in notAmeMus) {  
                    var opt = document.createElement('option');        
                    opt.value = key;
                    opt.textContent = notAmeMus[key]
                    select.appendChild(opt);
                }

                select.addEventListener('change', function() {
                    para.textContent = 'La notation pour la note '+ select.options[this.selectedIndex].textContent + ' est ' + this.value;
                });
            });
        }    
    }
    index.init();    
})();
