function vari() {
      x1=selector1.value
      y1=adjustBrightness(x1, 30)
      y2=adjustBrightness(x1, -30)
      y3=adjustBrightness(x1, 130)
      y4=adjustBrightness(x1, -130)
      y5=adjustBrightness(x1, -90)
      coliv1.style.background=y1
      coliv2.style.background=y2
      coliv3.style.background=y3
      coliv4.style.background=y4
      coliv5.style.background=y5
      coliv1.innerHTML=y1
      coliv2.innerHTML=y2
      coliv3.innerHTML=y3
      coliv4.innerHTML=y4
      coliv5.innerHTML=y5

    }
	   function adjustBrightness(col, tono) {
    col=col.replace(/^#/, '');
    num =parseInt(col, 16);
    r =(num >> 16) + tono;
    g =((num >> 8) & 0x00FF) + tono;
    b =(num & 0x0000FF) + tono;
    
    r=Math.min(255,Math.max(0, r));
    g=Math.min(255,Math.max(0, g));
    b=Math.min(255,Math.max(0, b));

    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

op=0

function hexAHSL(H) {
    r = parseInt(H.substring(1, 3), 16) / 255,
    g = parseInt(H.substring(3, 5), 16) / 255,
    b = parseInt(H.substring(5, 7), 16) / 255;

    max = Math.max(r, g, b), min = Math.min(r, g, b);
    h= (max + min) / 2, s= (max + min) / 2, l = (max + min) / 2;
    console.log(s)

    if (max === min) {
        h = s = 0; 
    } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r, g, b;
    if (h < 60) { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }
    return `#${((1 << 24) + (Math.round((r + m) * 255) << 16) + (Math.round((g + m) * 255) << 8) + Math.round((b + m) * 255)).toString(16).slice(1).toUpperCase()}`
  }

function paletas() {

 vec1=hexAHSL(x1)
 console.log(vec1)
 hexin=hslToHex(vec1[0],vec1[1],vec1[2])
 console.log(hexin)
 vec2=(obtenerColoresProximidad(vec1[0],vec1[1],vec1[2]))
 vec3=(obtenerColoresTriadicos(vec1[0],vec1[1],vec1[2]))
 vec4=(obtenerColoresCuadrados(vec1[0],vec1[1],vec1[2]))
 paletin()
}



function obtenerColoresProximidad(h, s, l) {
      return [
        hslToHex((h + 60) % 360, s, l),
        hslToHex((h + 120) % 360, s, l)  
         
    ];
}

function obtenerColoresTriadicos(h, s, l) {
    return [
        hslToHex((h + 120) % 360, s, l),
        hslToHex((h + 240) % 360, s, l)
    ];
}

function obtenerColoresCuadrados(h, s, l) {
    return [
        hslToHex((h + 90) % 360, s, l),
        hslToHex((h + 180) % 360, s, l),
        hslToHex((h + 270) % 360, s, l)
    ];
}
function paletin() {
  op=1
  colip1.style.background=x1
  colip2.style.background=vec2[0]
  colip3.style.background=vec2[1]
  colip1.innerHTML=x1
  colip2.innerHTML=vec2[0]
  colip3.innerHTML=vec2[1]
  colit1.style.background=x1
  colit2.style.background=vec3[0]
  colit3.style.background=vec3[1]
  colit1.innerHTML=x1
  colit2.innerHTML=vec3[0]
  colit3.innerHTML=vec3[1]
  colic1.style.background=x1
  colic2.style.background=vec4[0]
  colic3.style.background=vec4[1]
  colic4.style.background=vec4[2]
  colic1.innerHTML=x1
  colic2.innerHTML=vec4[0]
  colic3.innerHTML=vec4[1]
  colic4.innerHTML=vec4[2]
}




document.addEventListener("click", function(event) {
    // Verifica si el elemento clicado tiene la clase "cuadrin"
    if (event.target.classList.contains("cuadrin")) {
        let texto = event.target.textContent.trim(); // Captura el texto dentro del div

        // Crea un textarea temporal para copiar el texto
        let areaTexto = document.createElement("textarea");
        areaTexto.value = texto;
        document.body.appendChild(areaTexto);
        areaTexto.select();
        document.execCommand("copy");
        document.body.removeChild(areaTexto);

        // Opcional: Muestra un mensaje de confirmación
        alert("Texto copiado: " + texto);
    }
});
function proxi() {
    if(op==1){
        forma1.style.fill=x1
        sombra1.style.fill=vec2[0]
        sombra2.style.fill=vec2[1]
        ojo1.style.fill="rgb(58, 36, 36)"
        ojo2.style.fill="rgb(58, 36, 36)"        
    }



}
function tria() {
    if(op==1){
        forma1.style.fill=x1
        sombra1.style.fill=vec3[0]
        sombra2.style.fill=vec3[1]
        ojo1.style.fill="rgb(58, 36, 36)"
        ojo2.style.fill="rgb(58, 36, 36)"
    }



}
function cua() {
    if(op==1){
        forma1.style.fill=x1
        sombra1.style.fill=vec4[0]
        sombra2.style.fill=vec4[1]
        ojo1.style.fill=vec4[2]
        ojo2.style.fill=vec4[2]
    }


}

    $(document).ready(function () {
        $(".libresi").click(function () {
            selector2 = $("#libre").val()
            $(this).css("fill", selector2)
        });
    });


