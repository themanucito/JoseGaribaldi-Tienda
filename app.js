// Quitar Pantalla de carga (Preloader) con estilo
window.addEventListener("load", function() {
    setTimeout(function() {
        let loader = document.getElementById("preloader-vip");
        if(loader){
            loader.classList.add("preloader-oculto");
        }
    }, 1200); // 1.2 Segundos de fama dorada para tu nombre al abrir la web
});

// --- COMIENZA app.js (VERSIÓN DEFINITIVA DE STOCK REAL) ---

const productosDB = [
    // 🖼️ ARTE Y CUADROS (5 ítems)
    { 
        id: 1, 
        nombre: "Cuadro 'Noche en el Puerto'", categoria: "Arte y Cuadros", 
        precioOriginal: 890, precioOferta: 750, stock: 4, 
        descripcion: "Arte marino abstracto azul profundo al óleo. Técnica de grueso empaste con sutiles acentos oscuros para ambientar galerías y grandes espacios VIP.", 
        dimensiones: { alto: 140, ancho: 100, profundidad: 4, unidad: "cm" }, 
        materiales: { tipo: "Lienzo premium importado, Marco flotante pino horneado negro mate", peso: "4.5 kg" }, 
        cuidados: "Limpiar solo con paño seco y suave. No aplicar ningún líquido.", costoEnvio: "Envío Nacional Gratuito Exclusivo", esFragil: false, cuotas: { meses: 6, pagoMensual: 125.00 },
        fotos: ["https://i.postimg.cc/VkMDRx9k/1-Noche-en-el-Puerto-Frente.jpg",
        "https://i.postimg.cc/fRXBKG7k/1-Noche-en-el-Puerto-Detalle.jpg",
        "https://i.postimg.cc/W1rXnBmp/1-Noche-en-el-Puerto-Angulo.jpg",
        "https://i.postimg.cc/Sx8DrBLN/1-Noche-en-el-Puerto-Contexto.jpg"]   },    

        {         id: 2, 
        nombre: "Cuadro 'Oro y Bronce'", categoria: "Arte y Cuadros", 
        precioOriginal: 1200, precioOferta: 990, stock: 2, 
        descripcion: "Pintura abstracta en lienzo mate contrastada fuertemente por gruesos fragmentos de pan de oro real que proyectan lujo a cualquier rayo de luz.", 
        dimensiones: { alto: 150, ancho: 120, profundidad: 5, unidad: "cm" }, 
        materiales: { tipo: "Acrílico grueso, Incrustación hoja Pan de Oro, Bastidor Cedro", peso: "6 kg" }, 
        cuidados: "El dorado es delicado, sacudir el polvo usando exclusivamente plumero de cerdas ultra suaves anti-estática.", costoEnvio: "Envío Gratuito Inluido", esFragil: false, cuotas: { meses: 9, pagoMensual: 110.00 },
        fotos: ["https://i.postimg.cc/fyTmmBXJ/2-cuadro-Oro-y-Bronce-Frente.jpg", 
        "https://i.postimg.cc/KjvBBJLK/2-cuadro-Oro-y-Bronce-Detalle.jpg",
         "https://i.postimg.cc/kGXKKf82/2-cuadro-Oro-y-Bronce-Angulo.jpg", 
         "https://i.postimg.cc/J04ZZPJD/2-cuadro-Oro-y-Bronce-Contexto.jpg"]
    },
    { 
        id: 3, 
        nombre: "Cuadro 'Naturaleza Orgánica'", categoria: "Arte y Cuadros", 
        precioOriginal: 750, precioOferta: 650, stock: 6, 
        descripcion: "Sutil composición en relieve tipo stucco. Lujo nórdico minimalista de perfectas líneas relajantes.", 
        dimensiones: { alto: 110, ancho: 90, profundidad: 3, unidad: "cm" }, 
        materiales: { tipo: "Stucco, Yeso moldeado y Lienzo mixto sobre marco madera blanca de haya", peso: "8 kg" }, 
        cuidados: "Debido a la naturaleza de los materiales porosos blancos, manipular siempre con manos impecablemente limpias.", costoEnvio: "Envío Fijo $25, gratis en Capital.", esFragil: false, cuotas: { meses: 3, pagoMensual: 216.66 },
        fotos: ["https://i.postimg.cc/X79BqRtR/3-cuadro-Naturaleza-Organica-Frente.jpg", 
        "https://i.postimg.cc/fTYSyG64/3-cuadro-Naturaleza-Organica-Detalle.jpg", 
        "https://i.postimg.cc/m271kvKJ/3-cuadro-Naturaleza-Organica-Angulo.jpg", 
        "https://i.postimg.cc/GhvTtW66/3-cuadro-Naturaleza-Organica-Contexto.jpg"]
    },
    { 
        id: 4, 
        nombre: "Pintura Abstracta Neo-Moderna", categoria: "Arte y Cuadros", 
        precioOriginal: 520, precioOferta: 430, stock: 5, 
        descripcion: "El contaste neo-moderno por excelencia para lofts contemporáneos. Bloques acrílicos con gran protagonismo decorativo y equilibrio visual de diseño.", 
        dimensiones: { alto: 100, ancho: 80, profundidad: 4, unidad: "cm" }, 
        materiales: { tipo: "Oleo, tela importada, fino bastidor acero 0.5 cm borde frontal", peso: "4 kg" }, 
        cuidados: "Limpieza simple, se mantiene en condiciones ideales hasta en interiores muy iluminados (filtros UV).", costoEnvio: "Calculado a Checkout por lejanía", esFragil: false, cuotas: { meses: 6, pagoMensual: 71.66 },
        fotos: ["https://i.postimg.cc/k5L7x4b6/4-Pintura-Abstracta-Neo-Moderna-Frente.jpg",
         "https://i.postimg.cc/d0gJ81yT/4-Pintura-Abstracta-Neo-Moderna-Detalle.jpg",
          "https://i.postimg.cc/fb1MxL9V/4-Pintura-Abstracta-Neo-Moderna-Angulo.jpg", 
          "https://i.postimg.cc/HLFTQxyJ/4-Pintura-Abstracta-Neo-Moderna-Contexto.jpg"]
    },
    { 
        id: 5, 
        nombre: "Mural Imponente 'Sol Vintage'", categoria: "Arte y Cuadros", 
        precioOriginal: 1800, precioOferta: 1550, stock: 1, 
        descripcion: "Más que un cuadro es una gran pared vestida. Antigua energía para espacios dominantes; perfecto lobby corporativo o sala abovedada. Acabado cuarteado intencional muy antiguo.", 
        dimensiones: { alto: 220, ancho: 160, profundidad: 6, unidad: "cm" }, 
        materiales: { tipo: "Doble lino belga tensor, Acabados oro rústico y grueso marco de nogal viejo 150 años de rescate", peso: "25 kg (Necesitará taladros)" }, 
        cuidados: "Llamar especialistas de mudanzas para traslados.", costoEnvio: "$200 de Cargo Especial Flete XL Asegurado", esFragil: true, cuotas: { meses: 12, pagoMensual: 129.16 },
        fotos: ["https://i.postimg.cc/RCRjmhZg/5-Mural-Cuadro-El-Sol-Vintage-Frente.jpg", 
        "https://i.postimg.cc/xjRWQ81x/5-Mural-Cuadro-El-Sol-Vintage-Detalle.jpg", 
        "https://i.postimg.cc/660DKqpY/5-Mural-Cuadro-El-Sol-Vintage-Angulo.jpg",
         "https://i.postimg.cc/zDj9NvGd/5-Mural-Cuadro-El-Sol-Vintage-Contexto.jpg"]
    },
    
    // 🗿 ESCULTURAS (5 ítems)
    { 
        id: 6, 
        nombre: "Escultura Clásica 'Busto Garibaldi'", categoria: "Esculturas", 
        precioOriginal: 950, precioOferta: 850, stock: 3, 
        descripcion: "Ícono insignia. Estatua maciza esculpida y pesada, perfecta declaración de éxito clásico para una impecable estantería presidencial ejecutiva.", 
        dimensiones: { alto: 60, ancho: 45, profundidad: 32, unidad: "cm" }, 
        materiales: { tipo: "Piedra molida compacta, resinas alta duración y Polvo de Mármol 90%", peso: "20 kg" }, 
        cuidados: "Al usar paño seco hágalo delicadamente cerca a tallas finas para que pelusas no queden en texturas del mármol mate.", costoEnvio: "Transporte Cuidados Especiales Gratis", esFragil: true, cuotas: { meses: 12, pagoMensual: 70.83 },
        fotos: ["https://i.postimg.cc/cCF12NH3/6-Escultura-Busto-Garibaldi-Frente.jpg", 
        "https://i.postimg.cc/6qM6gN3C/6-Escultura-Busto-Garibaldi-Detalle.jpg", 
        "https://i.postimg.cc/zvxD61BL/6-Escultura-Busto-Garibaldi-Angulo.jpg", 
        "https://i.postimg.cc/FzTF8QRg/6-Escultura-Busto-Garibaldi-Contexto.jpg"]
    },
    { 
        id: 7, 
        nombre: "Fragmento 'Torso Griego Mármol'", categoria: "Esculturas", 
        precioOriginal: 1200, precioOferta: 1100, stock: 2, 
        descripcion: "Immaculada reconstrucción del físico romano montado en peana invisible.", 
        dimensiones: { alto: 85, ancho: 38, profundidad: 25, unidad: "cm" }, 
        materiales: { tipo: "Fundición en cuarzo y mármol pulido manual, base de bloque acerado oscuro", peso: "22 kg" }, 
        cuidados: "Limpieza ocasional. El material en la exposición solar a través de ventanas lucirá fascinante por su opacidad real.", costoEnvio: "Servicio Premium Gratuito Casa", esFragil: true, cuotas: { meses: 12, pagoMensual: 91.66 },
        fotos: ["https://i.postimg.cc/VvvPS0f5/7-Escultura-Torso-Dios-Griego-Frente.jpg", 
        "https://i.postimg.cc/D003W4v8/7-Escultura-Torso-Dios-Griego-Detalle.jpg", 
        "https://i.postimg.cc/rss2dRVm/7-Escultura-Torso-Dios-Griego-Angulo.jpg", 
        "https://i.postimg.cc/cCCGKtxv/7-Escultura-Torso-Dios-Griego-Contexto.jpg"]
    },
    { 
        id: 8, 
        nombre: "Perro Globo Pop Art (Mármol Negro)", categoria: "Esculturas", 
        precioOriginal: 590, precioOferta: 480, stock: 8, 
        descripcion: "Irreverencia carísima; la resina lacada oscura simula acero brillante en negro para despachos artísticos, lofts chic y recepciones modernas.", 
        dimensiones: { alto: 45, ancho: 45, profundidad: 15, unidad: "cm" }, 
        materiales: { tipo: "Fina aleación metal negro piano reflectante pulido láser espejo", peso: "5.5 kg" }, 
        cuidados: "El acabado espejo puede delatar polvo velozmente; manténgalo lustroso aplicando rociado simple limpiador en trapo micro-fibras exclusivo para pantallas finas o carros oscuros y retire con seco", costoEnvio: "Tarifa Regional Promedio $18 USD", esFragil: true, cuotas: { meses: 3, pagoMensual: 160.00 },
        fotos: ["https://i.postimg.cc/DznDJ45Q/8-Escultura-Perro-Globo-Frente.jpg", 
        "https://i.postimg.cc/wBgPyRFQ/8-Escultura-Perro-Globo-Detalle.jpg", 
        "https://i.postimg.cc/Zq4gBvjF/8-Escultura-Perro-Globo-Angulo.jpg", 
        "https://i.postimg.cc/W48yMpfZ/8-Escultura-Perro-Globo-Contexto.jpg"]
    },
    { 
        id: 9, 
        nombre: "Corazón Anatómico en Baño de Oro", categoria: "Esculturas", 
        precioOriginal: 630, precioOferta: 550, stock: 5, 
        descripcion: "Exclusivo de Jose Garibaldi, realismo anatómico crudo de diseñadores y medicina unificados y recubiertos lujosamente por brillo espectacular dorado fundido.", 
        dimensiones: { alto: 35, ancho: 18, profundidad: 15, unidad: "cm" }, 
        materiales: { tipo: "Bronce de altísima pesadez forjado cubierto galvanizado en finísimo recubrimiento chapa símil oro amarillo 22k base fina pulcra resina sólida.", peso: "7 kg" }, 
        cuidados: "NO usar solventes. No colocarlo en ambientes exteriores con la luz diurna húmeda exterior, bronce oscurecerá si su oro recibe cloro/productos amoniacos u oxidativos potentes domésticos por su fundición.", costoEnvio: "$20 Cargo Envase blindado interior espuma para este objeto.", esFragil: true, cuotas: { meses: 6, pagoMensual: 91.66 },
        fotos: ["https://i.postimg.cc/RVCLHQzC/9-Escultura-Corazon-Anatomico-Frente.jpg",
         "https://i.postimg.cc/vH8tVLdc/9-Escultura-Corazon-Anatomico-Detalle.jpg", 
         "https://i.postimg.cc/m2ZyHNGD/9-Escultura-Corazon-Anatomico-Angulo.jpg",
          "https://i.postimg.cc/bNY9tHjr/9-Escultura-Corazon-Anatomico-Contexto.jpg"]
    },
    { 
        id: 10, 
        nombre: "Pensador Silueta 'Plata Líquida'", categoria: "Esculturas", 
        precioOriginal: 480, precioOferta: 390, stock: 12, 
        descripcion: "Metal plateado deslumbrante como si recién bajara la curva abstracta en fusión para repisar mesas bajas VIP y zonas conversacionales de sofás en U, atrapará cada punto de color cercano a esta silueta metálica.", 
        dimensiones: { alto: 22, ancho: 45, profundidad: 20, unidad: "cm (Estatura chata longitudinal)" }, 
        materiales: { tipo: "Acero Cromo quirúrgico pulitura altísima re-brillo ultra liso. Solida por toda forma curva. Aislantes gomosos silicon debajo previenen sus consolas madereras se tazen rasguñen u marquen debajo por deslizarlas, detalle élite. ", peso: "2.5 Kg livianos visual pesado." }, 
        cuidados: "Limpiador normal Cristales o gafas. Simplemente lustrar con material de cero pelos abrasivos tipo franela y listos", costoEnvio: "GRATUITO En Compras Múltiples de $350 (Se califica hoy para ti gratuito).", esFragil: false, cuotas: { meses: 6, pagoMensual: 65.00 },
        fotos: ["https://i.postimg.cc/fRmyWpg4/10-Escultura-Pensador-Plateada-Frente.jpg",
         "https://i.postimg.cc/Cxk5MX6p/10-Escultura-Pensador-Plateada-Detalle.jpg", 
         "https://i.postimg.cc/0yDj5FXL/10-Escultura-Pensador-Plateada-Angulo.jpg", 
         "https://i.postimg.cc/L8L54w0K/10-Escultura-Pensador-Plateada-Contexto.jpg"]
    },

    // 🪞 ESPEJOS (3 ítems)
    { 
        id: 11, 
        nombre: "Majestuoso Espejo 'Sol Real' en Cobre", categoria: "Espejos y Relieves", 
        precioOriginal: 780, precioOferta: 675, stock: 7, 
        descripcion: "Más corona clásica majestuosa estallante irradiada brillante que decorado convencional y pasillos del recibimiento principal clásico. Diseño 'Sunburst' de alta moda contemporáneo con esencia de época. Exquisitos radios simétricos largos dorados en desgaste elegante al vivo cepillado color metal oxidativo viejo sofisticado real sin piedad de atención acaparadora inmediata sobre de cada cuarto en un solo suspiro interiorista estelarísimo impactador instantáneo, de lujo infinito . ", 
        dimensiones: { alto: 100, ancho: 100, profundidad: 8, unidad: "cm Diámetro Corona Exterior Gigante", Diametro_cristal: 35 }, 
        materiales: { tipo: "Hierros macizos fundidos torneado Cobre. Latones, Centro Puro Cúspides 5 MM, Espaldar maderas soporte de carga triple pesaje cruz 2 armellas blindado pared para soporte 2 tornillos anclaje 1.3 plomo, ultra seguros en caídas sísmicas ,", peso: "13 kg Pura Presencia Magnética" }, 
        cuidados: "Centro rociar alcohol y papel absorbente, rayos metálicos pasar plumerito delicadamente ocasionalmente. Mantención simple durabilidad vitalicia herencia. , ", costoEnvio: "Cotizado Por Dimensionador $29 fijo por caja especial 3D Cartón Extra . ", esFragil: true, cuotas: { meses: 9, pagoMensual: 75.00 },
        fotos: ["https://i.postimg.cc/vm50zY2Z/11-Espejo-Sol-Real-Cobre-Frente.jpg", 
        "https://i.postimg.cc/Tw7gjBx6/11-Espejo-Sol-Real-Cobre-Detalle.jpg",
         "https://i.postimg.cc/15Y7RYNS/11-Espejo-Sol-Real-Cobre-Angulo.jpg", 
         "https://i.postimg.cc/630zkHNm/11-Espejo-Sol-Real-Cobre-Contexto.jpg"]
    },
    { 
        id: 12, 
        nombre: "Espejo Rectángulo XL 'Industria Grafito'", categoria: "Espejos y Relieves", 
        precioOriginal: 1000, precioOferta: 915, stock: 4, 
        descripcion: "Ese look neoyorquino rústico costoso masivo pero perfectamente acicalado para estar acostado contra las murallas gruesas llanas puras lisísimas elevadas en grandes casas imponentísimamente altas apoyándolo de piso por la grandilocuente extensión dimensional completa a ti alto que genera una espacial sensación engañando agrandamientos interiores hermosísimas profundizaciones ilusorias del cuarto perfecto súper New-York Soho", 
        dimensiones: { alto: 220, ancho: 115, profundidad: 5.5, unidad: "cm", Tamaño : "2.2 Metros Gigantismo verticalidad real, FloorMirror Style de gran pasarela personal "}, 
        materiales: { tipo: "Hierros Pinturas Al Hornear Industriales Negras Profundas mates sedosos textura gruesa , Espejados Biseles HD Saint Gobain importador Francia . , No distorsiona largo real corporales ,  15 puntos cuña antiexplosión de vidrio (Security films invisibles interior evitará desplomes masivos filosos peligros en tragedias). Alta calidad Garibaldi Invaluable de ingeniería constructora doméstica y hotel", peso: " 42 KILOS , Exquisitamente Sólidos" }, 
        cuidados: "Uso doméstico y habitual cristal sin problemas abrasivos al frotamiento duro de limpia ventanas general doméstico regular simple con líquidos cristalerías y maderas por detrás no aplicar nada aguado ", costoEnvio: " REQUIERE Coordinaciones Especializaciones Múltiples de cargador Garibaldi VIP + USD40 Extras seguros fletes camión cerrado mudanzos especiales no motos express", esFragil: true, cuotas: { meses: 12, pagoMensual: 76.25 },
        fotos: ["https://i.postimg.cc/3JgjVSCR/12-Espejo-Industrial-Negro-Frente.jpg", 
        "https://i.postimg.cc/Nf18SJ7s/12-Espejo-Industrial-Negro-Detalle.jpg", 
        "https://i.postimg.cc/zXmSdZWf/12-Espejo-Industrial-Negro-Angulo.jpg", 
        "https://i.postimg.cc/SNWL3T72/12-Espejo-Industrial-Negro-Contexto.jpg"]
    },
    { 
        id: 13, 
        nombre: "Cristal 'Circular In-Finito' Halo Dorado", categoria: "Espejos y Relieves", 
        precioOriginal: 520, precioOferta: 430, stock: 9, 
        descripcion: "Sienta los minimalismos extremos escandinavos, japandi finísimamente sutil casi místico anillo flotaciones oro de muy de diseñadores suizos refinadísimas visuales zen limpiezas superiores calmando los ambientes modernos por delicado corte biseles nano precisos de orfebrería milimétricas orfebreriles casi perlas cristalinas", 
        dimensiones: { alto: 85, ancho: 85, profundidad: 1.5, unidad: "Centímetros diámetro exacto plano flotantes invisibilidad y sutiles engrosas marcos perimétricos laterales 0,33 mm sutiles destellantes", Tamaño_M: " Mediano / Grand",Diam: "85 Circular perfecto"}, 
        materiales: { tipo: "Perímetro Acero Oro Dorado Lámina Nano curvada fría calor sellado por presión robótica cristalería 4 Mm pesaditos alemanas platinado HD, maderaje aglomerado resistente soporte , chazas ancladas  ", peso: " 9 KG Ligeros montaje fácil usuario único mano 1 clavija.  " }, 
        cuidados: "Sin humedad trasera directa muros mal construidos que filtre sales de lluvia para preservar por cientos años de sus espejados químicos. ", costoEnvio: "Fijos Promocional Exclusiva apertura 18 $.    ", esFragil: true, cuotas: { meses: 6, pagoMensual: 71.66 },
        fotos: ["https://i.postimg.cc/3JB42PFf/13-Espejo-Circular-Minimalista-Frente.jpg", 
        "https://i.postimg.cc/02fM7L04/13-Espejo-Circular-Minimalista-Detalle.jpg", 
        "https://i.postimg.cc/8PHJLqmn/13-Espejo-Circular-Minimalista-Angulo.jpg", 
        "https://i.postimg.cc/fRR3CB8q/13-Espejo-Circular-Minimalista-Contexto.jpg"]
    },

    // 🏺 ACCESORIOS (NUEVA CATEGORÍA - 2 ítems)
    { 
        id: 14, 
        nombre: "Jarrón Negro Tallado 'Hojas Cobre-Oro'", categoria: "Decoración y Accesorios", 
        precioOriginal: 400, precioOferta: 340, stock: 15, 
        descripcion: "Para rematar tus bufetes bajos laterales, o consola estelares que demandaba llenar acentos que gritaban de faltantes artísticas únicas lujuriosamente hechas mano artesanía en altas tallajes bajorrelieve oro incrustación florecen las botánicas de noche profunda contrastadamente para centros mesa costoso de cenas con candiles importantes espectáculos de noche decoradoras exigidas.  ", 
        dimensiones: { alto: 48, ancho: 22, profundidad: 22, unidad: "Centímetros Redondez, Jarrón alto jarras cuellos cerrados largos ." }, 
        materiales: { tipo: "Cerámica horno volcánicas alto quemas cocción resistente golpes torpes , esmalto ébano noche  pintados manos finos fileteadores italianos pan ocre cobre pálidas reales de la flora  .", peso: "6 kg gruesísimo contundencias no tumba fácil vientos fuertes de puerta de verano s" }, 
        cuidados: "NO LAVAR al grifos sumersiones sumergirlo en agua o detergentes; Solo uso Seco interior y falso botánicos sin de las plantas hidro. Cuidado oro con toallas rudas secantes solo sedas", costoEnvio: " Nacional Courier Rápidos (Exonerados Free-Shopping Bonos Aplicado).   ", esFragil: true, cuotas: { meses: 3, pagoMensual: 113.33 },
        fotos: ["https://i.postimg.cc/9QsW9pKp/14-jarron-tallado-con-hojas-doradas-Frente.jpg",
         "https://i.postimg.cc/Cx9F8NXc/14-jarron-tallado-con-hojas-doradas-Detalle.jpg", 
         "https://i.postimg.cc/MpgWBDN5/14-jarron-tallado-con-hojas-doradas-Angulo.jpg",
          "https://i.postimg.cc/Cx9F8NXJ/14-jarron-tallado-con-hojas-doradas-Contexto.jpg"]
    },
    { 
        id: 15, 
        nombre: "Sujetalibros Despachos Ejecutivo (Piedras & Latón)", categoria: "Decoración y Accesorios", 
        precioOriginal: 280, precioOferta: 235, stock: 12, 
        descripcion: "Es obsequios o gustitos de alto poder; Las piezas aguantan y ordenadores macizos presencias imponentísimamente formales ejecutivos escritorios directores oficinas o hermosuras abovedados, bibliotecas caseras sutiles en los libros pesados editoriales lujo llanos brillos orgánico simétricamente angulares, lujo extremo y pesado", 
        dimensiones: { alto: 22, ancho: 12, profundidad: 8, unidad: "Centímetros en 2 Set PIEZAS dobles par conjunto." }, 
        materiales: { tipo: "Piedra ágata pura cristales negros, blanco s translúcidos mineralógico, perfiles cortadores Latones  soportadas metales dorados acero chapas muy puro liso  peso sostén anti volcamiento libres de patines gomas , 1 bloque.", peso: " Par Conjuntado : 4 Kilogramos, Ligeros pero  gravita." }, 
        cuidados: "Material Noble durísimo inrayables, brillar el cristalito latón como plata doméstica.", costoEnvio: " 9 dólares express envíos", esFragil: false, cuotas: { meses: 3, pagoMensual: 78.33 },
        fotos: ["https://i.postimg.cc/pTCbsYcv/15-Set-Sujetalibros-Frente.jpg",
         "https://i.postimg.cc/4dPkWb2s/15-Set-Sujetalibros-Detalle.jpg", 
         "https://i.postimg.cc/nz2b3YSZ/15-Set-Sujetalibros-Angulo.jpg", 
         "https://i.postimg.cc/rmjXfCZq/15-Set-Sujetalibros-Contexto.jpg"]
    }
];

const galleryGrid = document.getElementById("gallery");

// La antigua no podía buscar, esta recibe datos filtrados
function renderProductos(listado = productosDB) {
    let html = "";

    // Mensaje si no encuentran nada
    if(listado.length === 0) {
        galleryGrid.innerHTML = "<h3 style='text-align:center; grid-column:1/-1; margin:40px; color:#777;'>🔍 No se encontraron obras con ese término.</h3>";
        return;
    }

    listado.forEach(prod => {
        let tachado = prod.precioOriginal !== prod.precioOferta ? `<del>$${prod.precioOriginal}</del>` : "";
        let frágilHTML = prod.esFragil ? `<span class="badge badge-fragil">FRÁGIL - VIP</span>` : "";
        
        html += `
        <div class="product-card">
            ${frágilHTML}
            <div class="foto-carrusel">
                <img id="img-${prod.id}" src="${prod.fotos[0] || 'https://via.placeholder.com/300'}" alt="${prod.nombre}" loading="lazy">
            </div>

            <div class="carrousel-brief-buttons">
               <button onclick="cambiarF(${prod.id}, '${prod.fotos[0]}')" title="1. Frente">Frente</button>
               <button onclick="cambiarF(${prod.id}, '${prod.fotos[1]}')" title="2. Macro">Textura</button>
               <button onclick="cambiarF(${prod.id}, '${prod.fotos[2]}')" title="3. Borde">Volumen</button>
               <button onclick="cambiarF(${prod.id}, '${prod.fotos[3]}')" title="4. VIP">Estudio VIP</button>
            </div>
            
            <p class="category">${prod.categoria}</p>
            <h3>${prod.nombre}</h3>
            <p class="price">${tachado} <strong>$${prod.precioOferta} USD</strong></p>
            <p class="installments">💳 Opción ${prod.cuotas.meses} Pagos mensuales de <strong>$${prod.cuotas.pagoMensual.toFixed(2)}</strong></p>
            
             <div class="info-highticket">
                <p class="product-descripcion">${prod.descripcion}</p>
                <ul class="specs-lista">
                    <li>📐 <strong>Dimensión Físicas:</strong> ${prod.dimensiones.alto} Al x ${prod.dimensiones.ancho} An x ${prod.dimensiones.profundidad} Prof (${prod.dimensiones.unidad}).</li>
                    <li>🧱 <strong>Calidad Material y Armado:</strong> ${prod.materiales.tipo}. <br>⚖️ Peso: ${prod.materiales.peso} aprx</li>
                    <li>💎 <strong>Conservación:</strong> ${prod.cuidados}</li>
                    <li>🚚 <strong>Flete:</strong> <span style="color:#d49b51;font-weight:600;"> ${prod.costoEnvio} </span></li>
                    <li>🔢 <strong>Stock:</strong> Únicamente [ ${prod.stock} Restantes ].</li>
                </ul>
            </div>
            <button class="btn-buy" onclick="comprarPorWhatsApp(${prod.id})">📲 CONSULTAR CON ASESOR EN CHAT.</button>
        </div>`;
    });
    galleryGrid.innerHTML = html;
}

// ==== LA MAGIA DEL BUSCADOR EN VIVO ==== //
const barraBuscador = document.getElementById("buscadorProductos");
if(barraBuscador){
    barraBuscador.addEventListener("keyup", (evento) => {
        let textoEscrito = evento.target.value.toLowerCase();
        
        // Filtra comparando lo que escriben con nombres, categoría o la palabra de material de obra
        let resultadosFiltrados = productosDB.filter(producto => {
            return producto.nombre.toLowerCase().includes(textoEscrito) ||
                   producto.categoria.toLowerCase().includes(textoEscrito) ||
                   producto.descripcion.toLowerCase().includes(textoEscrito);
        });

        // Imprime el nuevo catálogo solo con lo encontrado
        renderProductos(resultadosFiltrados);
    });
}
// ==== Funcion Para el Efecto MAGICA del foto Botones  ======// 
function cambiarF(idItem, nuevaURL) {
    if(nuevaURL && nuevaURL !== "undefined") {
      document.getElementById(`img-${idItem}`).src = nuevaURL;
    }
}


// ============== VENTANAS EMERGENTES APERTURA INICIAMIENTOS J- GARIBALDIs ==============
window.onload = () => {
    renderProductos();
    // Muestra ventanaje pidiendo el correo suscribe popup despues de cargar a 3 seconds , esta config base no es necesario variaciones, quedara perfecto asi.
    setTimeout(() => { document.getElementById('popupApertura').style.display = 'flex'; }, 3000); 
}

function cerrarPopup() { 
  document.getElementById('popupApertura').style.display = 'none'; 
}


// ============== WHATSAPPS FUNCIONES DE NEGOCIO   VIP CLOSE - SALES  ==============
function comprarPorWhatsApp(productoId) {
    
    // CAMBIA AQUÍ TU WHATSAPPS !! No uses Signos MAS. ni Guion!
    // Ej: De mex o per 51952xxx / España es el:  346513XXX etc . Reemplace esto :
    const miNumeroWhatsApp = "51943971911"; 
    
    const obra = productosDB.find(prod => prod.id === productoId);
    // Texto VIP (Saltos logran lineas %0A ) :
    let texto = `*GALERIA JOSÉ GARIBALDI INTERIORES VIP* %0A%0AHola ejecutivo de ventas de diseño arte, excelente dia le escribo a la oficina,%0AHe apreciado vuestra galería alta e estoy seguro de mi adquisición virtual, interesado firme y decidido seriamente de adquirir o saber más envíos respecto vuestro catalogado para interiorismos de hogar: %0A%0A 💎 *CÓDIGO DE PRODUCTOS INTERÉSADOS : * *${obra.nombre}* de categoría [ ${obra.categoria} ]. %0A%0A 🏷️ PRECIO INFORMO:  * Ofertas y Negociaciones $${obra.precioOferta}*. %0A💳 *PAGOS Cuotas Informadas Opciones *: Yo estaría eligiendo realizar la transaccional bajo sus (${obra.cuotas.meses} Letras Cuotas Acordadas) o Traspasos interbancarios/Pasarela directo.  %0A %0AAguardando a usted amablemente las ultimas respuestas o detalles a cuenta o seguros transportadora si se va del estado de envio local , ¡ un afectuoso saludo !`;
    
    const enlaceWpp = `https://wa.me/${miNumeroWhatsApp}?text=${texto}`;
    
    // Abre celular Whatassap app sin salirse local tienda , no cierra pestaña y vuelve con gozo en tab  ;
    window.open(enlaceWpp, '_blank');
}