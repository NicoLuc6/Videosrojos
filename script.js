// JavaScript para el dropdown combinado
document.addEventListener("DOMContentLoaded", function () {
  const yearSelect = document.getElementById("year");
  const tournamentSelect = document.getElementById("tournament");
  const opponentSelect = document.getElementById("opponent");

  // Objeto de datos con las opciones para cada año, torneo y rival
  const data = {
    "1964": {
      tournaments: ["Libertadores", "Intercontinental"],
      opponents: {
        Libertadores: ["Nacional (Uru)", "Santos (Bra)"],
        Intercontinental: ["Inter (ITA)"],
      },
    },
    // Agrega las opciones para los otros años, torneos y rivales
    "1965": {
      tournaments: ["Libertadores"],
      opponents: {
        Libertadores:["Boca jr", "Peñarol (URU)"],
      },
    },
       "1966": {
      tournaments: ["Amistosos"],
      opponents: {
        Amistosos: ["Racing Club"],
      },
    },
      
      "1967": {
      tournaments: ["Metropolitano", "Nacional"],
      opponents: {
        Metropolitano: ["Platense", "Union","Chacarita jr","Racing Club","Dep.Español"],
        Nacional: ["Lanus","Quilmes","Chaco For Ever","Rosario Central","Velez Sarfield"],
      },
    },
   
    "1968": {
      tournaments: ["Metropolitano"],
      opponents: {
        Metropolitano: ["GELP","Racing Club"],
      },
    },
    "1969": {
      tournaments: ["Metropolitano", "Nacional"],
      opponents: {
        Metropolitano: ["Racing Club"],
        Nacional: ["San Lorenzo"],
      },
    },
    "1970": {
      tournaments: ["Metropolitano", "Nacional"],
      opponents: {
        Metropolitano: ["Racing Club"],
        Nacional: ["Kimberley MDP "],
      },
    },
    "1971": {
      tournaments: ["Metropolitano"],
      opponents: {
        Metropolitano: ["Atlanta","Ferro Carril Oeste"],
      },
    },
    "1972": {
      tournaments: ["Libertadores", "Intercontinental"],
      opponents: {
        Libertadores: ["Universitario (Peru)"],
        Intercontinental: ["Ajax (HOL)"],
      },
    },
    "1973": {
      tournaments: ["Libertadores", "Intercontinental"],
      opponents: {
        Libertadores: ["Colo Colo (CHI)", "Colo Colo (CHI)"],
        Intercontinental: ["Juventus (ITA)"],
      },
    },
    "1974": {
      tournaments: ["Libertadores"],
      opponents: {
        Libertadores: ["Sao Paulo (BRA)"],
      },
    },
    "1975": {
       tournaments: ["Libertadores", "Intercontinental"],
      opponents: {
        Libertadores: ["Union Española (CHI)", "Union Española (CHI)"],
        Intercontinental: ["Athletico de Madrid (ESP)"],
      },
    },
    "1976": {
      tournaments: ["Interamericana"],
      opponents: {
        Interamericana: ["Atletico Español (MEX)"],
      },
    },
    "1977": {
      tournaments: ["Nacional"],
      opponents: {
        Nacional: ["Talleres"],
      },
    },
    "1978": {
      tournaments: ["Nacional"],
      opponents: {
        Nacional: ["River Plate"],
      },
    },
    "1979": {
      tournaments: ["Nacional"],
      opponents: {
        Nacional: ["Racing Club", "Racing Club"],
      },
    },
    "1980": {
      tournaments: ["Metropolitano", "Nacional"],
      opponents: {
        Metropolitano: ["Huracan","River Plate"],
        Nacional: ["Racing Cordoba","Instituto"],
      },
    },
  "1981": {
      tournaments: ["Amistosos","Metropolitano","Nacional"],
      opponents: {
        Amistosos: ["U Catolica (CHI)"],
        Metropolitano: ["Argentinos Jr","Boca Jr","Velez Sarfiled"],
        Nacional: ["River Plate"],
      },
    },
    "1982": {
      tournaments: ["Metropolitano", "Nacional"],
      opponents: {
        Metropolitano: ["Ferro Carril Oeste","Racing Club"],
        Nacional: ["Ferro Carril Oeste"],
      },
    },
    "1983": {
      tournaments: ["Metropolitano", "Nacional"],
      opponents: {
        Metropolitano: ["San Lorenzo", "Boca Jr","Racing Club","Velez Sarfield","Racing Club"],
        Nacional: ["Estudiantes","Racing Cordoba","Racing Cordoba"],
      },
    },
    "1984": {
      tournaments: ["Intercontinental", "Libertadores", "Metropoiltano","Nacional"],
      opponents: {
        Intercontinental: ["Liverpool (ING)"],
        Libertadores: ["U Catolica (CHI)", "Estudiantes","Nacional (URU)","Nacional (URU)","Olimpia (PAR)","Sportivo Luqueño (PER)","Gremio (BRA)"],
        Metropolitano: ["Ferro Carril Oeste", "Boca Jr"],
        Nacional: ["Rosario Central"],
      },
    },
    "1985": {
       tournaments: ["Libertadores", "Torneo_Argentino"],
      opponents: {
        Libertadores: ["Argentinos Jr"],
        Torneo_Argentino: ["River Plate"],
      },
    },
    "1986": {
      tournaments: ["Torneo_Argentino","Liguilla"],
      opponents: {
        Torneo_Argentino: ["River Plate","Estudiantes","Boca Jr","Velez Sarfield","Racing Club","River Plate","Boca Jr","Velez Sarfield"],
        Liguilla: ["Boca Jr"],
      },
    },
    "1987": {
      tournaments: ["Torneo_Argentino","Libertadores"],
      opponents: {
        Nacional: ["Racing Cordoba","River Plate","Union","Racing Club","San Lorenzo","Racing Club","Newells Old Boys"],
        Libertadores: ["Rosario Central","River Plate","Peñarol (URU)","Union Tachira (VEN)"],
      },
    },
    "1988": {
      tournaments: ["Supercopa","Torneo_Argentino","Verano"],
      opponents: {
        Supercopa: ["Cruzeiro (BRA)"],
        Torneo_Argentino: ["Boca Jr","River Plate","Talleres","Boca Jr","Gelp","Racing Club","Deportivo Armenio","River Plate"],
        Verano: ["Boca Jr"],
      },
    },
    "1989": {
      tournaments: ["Supercopa","Torneo_Argentino","Amistosos"],
      opponents: {
        Supercopa: ["Argentinos Jr", "Atletico Nacional (COL)","Argentinos Jr","Santos (BRA)","Boca Jr"],
        Torneo_Argentino: ["San Lorenzo","Racing Club", "Chaco For Ever","Instituto","Newells Old Boys","Boca Jr","Argentinos jr","San Lorenzo","Talleres","River Plate"],
        Amistosos: ["Arsenal (ING)"],
      },
    },
    "1990": {
      tournaments: ["Apertura", "Libertadores","Liguilla"],
      opponents: {
        Apertura: ["Racing Club","Boca jr","San Lorenzo","Platense","Huracan","Union","Estudiantes","River Plate"],
        Libertadores: ["River Plate","Pepeganga (VEN)"],
        Liguilla: ["Rosario Central","SAn Lorenzo"],
      },
    },
  "1991": {
      tournaments: ["Amistosos","Apertura","Clausura","Supercopa","Verano"],
      opponents: {
        Amistosos: ["U Catolica (CHI)", "Tigres (MEX)"],
        Apertura: ["Argentinos Jr","Boca Jr","Velez Sarfiled","Quilmes","GELP","Belgrano","Ferro Carril Oeste","Huracan","Talleres","San Lorenzo"],
        Clausura: ["River Plate","Talleres","Dep.Mandiyu","Newells Old Boys","Platence","Argentinos Jr","Huaracan","Estudiantes","Chaco For Ever","Rosario Central","Ferro Carril Oeste","Velez Sarfiels","Dep.Español","Lanus"],
        Supercopa: ["Olimpia (PAR)"],
        Verano: ["River Plate", "Racing Club"],
      },
    },
    "1992": {
      tournaments: ["Apertura","Clausura","Supercopa","Verano"],
      opponents: {
        Apertura: ["Huracan","Ferro Carril Oeste","Newells Old Boys","Dep.Mandiyu","San Lorenzo","Argentinos Jr","San Martin (TUC)","Velez Sarfiled","Boca Jr","Racing Club"],
        Clausura: ["Belgrano","Boca Jr","Ferro Carril Oeste","Huaracan","Platense","River Plate"],
        Supercopa: ["Racing Club","Racing Club"],
        Verano: ["River Plate", "San Lorenzo"],
      },
    },
    "1993": {
      tournaments: ["Amistosos","Apertura","Clausura","Supercopa","Centenario","Verano"],
      opponents: {
        Amistosos: ["Tenerife (ESP)"],
        Apertura: ["River Plate","Gimnasia y Tiro","Belgrano","Newells Old Boys","Ferro Carril Oeste","Lanus","Estudiantes","San Lorenzo","Platense","Dep.Mandiyu","Rosario Central","Argentinos Jr","Boca Jr","GELP"],
        Clausura: ["Huracan","Ferro Carril Oeste","River Plate","GELP","Racing Club","Talleres","San Lorenzo","Argentinos Jr","Estudiantes","Boca Jr","Dep.Español","San Martin (TUC)"],
        Supercopa: ["SAo Paulo (BRA)"],
        Centenario: ["Ferro Carril Oeste","Platense","Racing Club"],  
        Verano: ["Boca Jr", "Racing Club"],
      },
    },
    "1994": {
      tournaments: ["Apertura","Clausura","Supercopa","Copa_Menem"],
      opponents: {
        Apertura: ["Argentinos Jr","Ferro Carril Oeste","Racing Club","San Lorenzo","Belgrano","River Plate","GELP","Newells Old Boys","Platense","Huracan","Talleres","Boca Jr","Lanus","Rosario Central","Gimnasia y Esgrima Jujuy"],
        Clausura: ["River Plate","Gimnasia y Tiro","Ferro Carril Oeste","Lanus","Racing Club","Estudiantes","San Lorenzo","Dep.Español","Platense","Dep.Mandiyu","Rosario Central","Banfiled","Boca Jr","GELP","Huracan"],
        Supercopa: ["Santos (BRA)","Boca jr","Boca Jr","Cruzeiro (Bra)","Gremio (BRA)","Gremio (BRA)"],
        Copa_Menem: ["Napoli (ITA)", "Roma (ITA)"],
      },
    },
    "1995": {
       tournaments: ["Apertura","Clausura","Supercopa","Recopa","Libertadores","Verano"],
      opponents: {
        Apertura: ["Ferro Carril Oeste","Banfield","Lanus","Rosario Central","Racing Club","Estudiantes","Dep.Español","Argentinos Jr","Belgrano"],
        Clausura: ["Argentinos Jr","Ferro Carril Oeste","Belgrano","River Plate","Dep.Mandiyu","Platense","Huracan","Talleres","Velez Sarfield","Lanus","Rosario Central","GELP"],
        Supercopa: ["Flamengo (BRA)","River Plate","River Plate","Flamengo (Bra)","Santos (BRA)","Santos (BRA)","Atletico Nacional (COL)"],
        Recopa: ["Velez Sarfield"],
        Libertadores: ["Cerro Porrteño (PAR)", "River Plate","Peñarol (URU)"],
        Verano:["River Plate"],
      },
    },
    "1996": {
      tournaments: ["Apertura","Clausura","Recopa","Verano"],
      opponents: {
        Torneo_Argentino: ["River Plate","Estudiantes","Boca Jr","Velez Sarfield","Racing Club","River Plate","Boca Jr","Velez Sarfield"],
        Liguilla: ["Boca Jr"],
      },
    },
    "1997": {
      tournaments: ["Amistosos","Apertura","Clausura","Supercopa","Verano"],
      opponents: {
        Nacional: ["Racing Cordoba","River Plate","Union","Racing Club","San Lorenzo","Racing Club","Newells Old Boys"],
        Libertadores: ["Rosario Central","River Plate","Peñarol (URU)","Union Tachira (VEN)"],
      },
    },
    "1998": {
      tournaments: ["Apertura","Clausura","Mercosur","Invierno"],
      opponents: {
        Supercopa: ["Cruzeiro (BRA)"],
        Torneo_Argentino: ["Boca Jr","River Plate","Talleres","Boca Jr","Gelp","Racing Club","Deportivo Armenio","River Plate"],
        Verano: ["Boca Jr"],
      },
    },
    "1999": {
      tournaments: ["Apertura","Clausura","Mercosur","Invierno","Verano"],
      opponents: {
        Apertura: ["Argentinos Jr", "Atletico Nacional (COL)","Argentinos Jr","Santos (BRA)","Boca Jr"],
        Torneo_Argentino: ["San Lorenzo","Racing Club", "Chaco For Ever","Instituto","Newells Old Boys","Boca Jr","Argentinos jr","San Lorenzo","Talleres","River Plate"],
        Amistosos: ["Arsenal (ING)"],
      },
    },
    "2000": {
      tournaments: ["Apertura", "Clausura","Mercosur","Invierno"],
      opponents: {
        Apertura: ["Almagro","Lanus","Colon","Talleres","Los Andes","San Lorenzo","Chacarita Jr","Boca jr","Argentinos Jr","Union","GELP","Newells Old Boys","Racing Club"],
        Clausura: ["Boca Jr","Argentinos Jr","Newells old Boys","Union","GELP","Talleres","Racing Club","Chacarita Jr","Ferro Carril Oeste","San Lorenzo","Instituto","Rosario Central","Colon","Estudiantes","Belgrano"],
        Mercosur: ["Palmeiras (BRA)","U Catolica (CHI)","U Catolica (CHI)"],
        Invierno: ["Boca Jr","San Lorenzo"],
      },
    },
  "2001": {
      tournaments: ["Apertura","Clausura","Mercosur"],
      opponents: {
        Apertura: ["Velez Sarfield","Racing Club","Belgrano","GELP","Chacarita Jr","Lanus","Argentinos Jr","Rosario Central","Talleres","Union","Nueva Chicago","Boca Jr"],
        Clausura: ["Almagro","huracan","Lanus","River Plate","Estudiantes","Los Andes","San Lorenzo","Platence","Boca Jr"],
        Mercosur: ["Colo Colo (CHI)","Corinthians (Bra)","Cruzeiro"],
      },
    },
    "2002": {
      tournaments: ["Apertura","Clausura","Verano"],
      opponents: {
        Apertura: ["Lanus","GELP","Olimpo","Racing Club","Newells Old Boys","Velez Sarfield","Colon","Chacarita Jr","River Plate","Huracan","Arsenal","Talleres","Estudiantes","Rosario Central","Nueva Chicago","Union","Banfield","Boca Jr","San Lorenzo"],
        Clausura: ["Racing Club","Newells Old Boys","Belgrano","San Lorenzo","GELP","Lanus","Rosario Central","Nueva Chicago","Boca Jr","Banfield"],
        Verano: ["Racing Club"],
      },
    },
    "2003": {
      tournaments: ["Apertura","Clausura","Sudamericana"],
      opponents: {
        Apertura: ["Estudiantes","Banfield","River Plate","Quilmes","Olimpo","Colon","San Lorenzo","Racing Club","Atletico Rafaela","Nueva Chicago"],
        Clausura: ["Racing Club","Newells Old Boys","Velez Sarfield","Colon","Chacarita Jr","River Plate","Huracan","Talleres","Union","Boca Jr"],
        Sudamericana: ["Rosario Central","Rosario Central","River Plate"],
      },
    },
    "2004": {
      tournaments: ["Apertura","Clausura","Libertadores"],
      opponents: {
        Apertura: ["Almagro","Lanus","San Lorenzo","Olimpo","Boca Jr","GELP","Racing Club","Huracan 3 Arroyos","Banfield","Instituto","Estudiantes","Arsenal","Newells Old Boys"],
        Clausura: ["Estudiantes","Newells Old Boys","River Plate","Quilmes","Olimpo","San Lorenzo","GELP","Rosario Central","Boca Jr","Racing Club","Lanus","Atletico Rafaela","Nueva Chicago"],
        Libertadores: ["Cienciano (PER)","Cienciano (PER)","El Nacional (ECU)","Nacional (URU)","Sao Caetano (BRA)"],
      },
    },
    "2005": {
       tournaments: ["Apertura","Clausura"],
      opponents: {
        Apertura: ["Lanus","intituto","San Lorenzo","Argentinos Jr","Racing Club","Quilmes","Tiro Federal","River Plate","Newells Old Boys","Banfield","Colon","Arsenal","Velez Sarfield","Estudiantes","Gimnasia y Esgrima Jujuy","Olimpo","Rosario Central"],
        Clausura: ["Almagro","San Lorenzo","Olimpo","Boca Jr","GELP","Racing Club","Velez Sarfield","Rosario Central","Huracan 3 Arroyos","Colon","Banfield","Argentinos Jr","River Plate","Estudiantes","Arsenal","Newells Old Boys"],
      },
    },
    "2006": {
      tournaments: ["Apertura","Clausura","Amistoso","Verano"],
      opponents: {
        Apertura: ["Colon","Belgrano","Banfield","Rosario Central","Lanus","Etudiantes","GElP","Godoy Cruz","Nueva Chicago","Velez Sarfield","Newells Old Boys","Racing Club","Arsenal","Quilems","Gimnasia y Esgrima Jujuy"],
        Clausura: ["Instituto","San Lorenzo","Argentinos Jr","Racing Club","Tiro Federal","River Plate","Banfield","Colon","Velez Sarfield","Olimpo"],
        Amistoso: ["Talleres R.E."],
        Verano: ["Racing Club","River Plate"],
      },
    },
    "2007": {
      tournaments: ["Apertura","Clausura","Verano"],
      opponents: {
        Apertura: ["Lanus","Tigre","Rosario Central","Argentinos Jr","Boca jr","San Martin SJ","Huracan","Colon","Olimpo","Gimnasia y Esgrima jujuy","Newells Old Boys","San Lorenzo","River Plate","Estudiantes","Velez Sarfield","Arsenal"],
        Clausura: ["Colon","Boca","Banfield","Rosario Central","Lanus","San Lorenzo","GELP","Velez Sarfield","River Plate","Newells Old Boys","Racing Club","Argentinos Jr","Arsenal","Quilmes","Gimnasia y Esgrima Jujuy"],
        Verano: ["Boca jr","San Lorenzo"]
      },
    },
    "2008": {
      tournaments: ["Apertura","Clausura","Sudamericana","Verano"],
      opponents: {
        Apertura: ["San Martin Tuc","Racing Club","GELP","Boca Jr","Gimnasia y Esgrima Jujuy","Colon","Argentinos Jr","Godoy Cruz","Rosario Central","San Lorenzo","Arsenal"],
        Clausura: ["Tigre","Argentinos Jr","Boca Jr","GELP","Colon","Olimpo","Banfield","Gimnasia y Esgrima jujuy","Newells Old Boys","San Lorenzo","Estudiantes","Arsenal"],
        Sudamericana:["Estudiantes","Estudiantes"],
        Verano: ["Boca Jr","River Plate","San Lorenzo"],
      },
    },
    "2009": {
      tournaments: ["Apertura","Clausura","Amistosos","Verano"],
      opponents: {
        Apertura: ["Atletico Tucuman","Godoy Cruz","Estudiantes","Velez Sarfield","Racing Club","Tigre","River Plate","Chacarita Jr","Colon","GELP","San Lorenzo","Banfield","Huracan","Boca Jr","Argentinos Jr"],
        Clausura: ["Racing Club","Boca Jr","Gimnasia y Esgrima Jujuy","Newells Old Boys","Lanus","Huracan","Argentinos Jr","Tigre","Estudiantes","Rosario Central","Arsenal"],
        Amistosos: ["River Plate"],
        Verano: ["Racing Club","River Plate","San Lorenzo"],
      },
    },
    "2010": {
      tournaments: ["Apertura", "Clausura","Amistosos","Sudamericana","Verano"],
      opponents: {
        Apertura: ["Argentinos Jr","River Plate","Arsenal","Newells Old Boys","GELP","Godoy Cruz","All Boys","Racing Club","Colon","San Lorenzo","Olimpo","Estudiantes"],
        Clausura: ["Atletico Tucuman","Estudiantes","Racing Club","Tigre","River Plate","Chacarita Jr","Rosario Central","Colon","Arsenal","Gelp","Banfield","Boca Jr","Argentinos Jr","Lanus"],
        Amistosos: ["Independiente Rivadabia"],
        Sudamericana: ["Deportes Tolima (COL)","Argentinos Jr","Argentinos jr","Deportes Tolima (COL)","Defensor Sporting (URU)","Defensor Sporting (URU)","Goias (BRA)","Liga Universitaria de Quito (ECU)","Liga Universitaria de Quito (ECU)"],
        Verano:["Racing Club","River Plate"]
      },
    },
  "2011": {
      tournaments: ["Amistosos","Apertura","Clausura","Copa_Argentina","Libertadores","Recopa","Sudamericana","SurugaBankCup","Verano"],
      opponents: {
        Amistosos:["Ventura Fusion (USA)"],
        Apertura: ["San Martin SJ","Estudiantes","Atletico Rafaela","Racing Club","Godoy Cruz","All Boys","Olimpo","Newells Old Boys","San Lorenzo","Tigre"],
        Clausura: ["Velez Sarfield","Newells Old Boys","Quilmes","Banfield","GELP","Godoy Cruz","All Boys","Boca Jr","San Lorenzo","Olimpo","Colon","Estudiantes","Lanus","Huracan"],
        Copa_Argentina: ["Colegiales"],
        Libertadores:["Deportivo Quito (ECU)","Godoy Cruz","Godoy Cruz","Liga Deportiva Universitaria Quito (ECU)","Peñarol (URU)","Peñarol (URU)"],
        Recopa:["Internacional (BRA)","Internacional (BRA)"],
        Sudamericana:["Liga Deportica Universitaria Quito (ECU)"],
        SurugaBankCup:["Jubilo Iwata (JPN"],
        Verano:["San Lorenzo"],

      },
    },
    "2012": {
      tournaments: ["Amistosos","Clausura","Inicial","Sudamericana","Verano"],
      opponents: {
        Amistosos: ["Ajax (HOL)","Aldosivi","Belgrano","Grupo Universitario Tandil"],
        Clausura: ["Argentinos Jr","Boca Jr","Belgrano","Atletico Rafaela","Velez Sarfield","Racing Club","Banfield","Arsenal","Olimpo","Newells Old Boys","Tigre"],
        Inicial:["Godoy Cruz","Quilmes","Boca Jr","All Boys","Union","Atletico Rafaela","Argentinos Jr","Tigre","Belgrano","River Plate","San Lorenzo","Colon"],
        Sudamericana:["U Catolica (CHI)","Boca Jr","Boca Jr","Liverpool (URU)","Liverpool (URU)","U Catolica (CHI)"],
        Verano: ["Boca Jr"],
      },
    },
    "2013": {
      tournaments: ["Amistosos","B_Nacional","C_Argentina","Final"],
      opponents: {
        Amistosos: ["Dock Sud",],
        B_Nacional: ["Brown Adrogue","Aldosivi","Atletico Tucuman","Huracan","Banfield","Villa San Carlos","Sarmiento","Talleres","Union","Crucero del Norte","Sportivo Belgrano","Gimnasia y Esgrima Jujuy","Ferro Carril Oeste","Douglas Haig","Instituto","Patronato"],
        C_Argentina: ["Boca Unidos"],
        Final:["Newells Old Boys","Velez Sarfield","Racing Club","Boca Jr","Union","Argentinos Jr","Tigre","San Martin SJ","River Plate","San Lorenzo","Colon"]
      },
    },
    "2014": {
      tournaments: ["C_Argentina","B_Nacional","Transicion"],
      opponents: {
        C_Argentina: ["Belgrano","Santamarina"],
        B_Nacional: ["Huracan","Brown Adrogue","Boca Unidos","Atletico Tucuman","Banfield","Talleres","Almirante Brown","Crucero del Norte","Sportivo Belgrano","San Martin SJ","Ferro Carril Oeste","Douglas Haig","Independiente Rivadabia","Defensa y Justicia","Instituto"],
        Transicion: ["Atletico Rafaela","Olimpo","Racing Club","Banfield","Quilmes","River Plate","Rosario Central","Godoy Cruz","Defensa y Justicia","San Lorenzo","Tigre","Arsenal","Lanus","Boca Jr","Newells Old Boys"],
      },
    },
    "2015": {
       tournaments: ["C_Argentino","Copa_Argentina","Sudamericana","Liguilla","Verano"],
      opponents: {
        C_Argentino: ["Newells Old Boys","Sarmiento","Quilmes","Belgrano","Union","Arsenal","Godoy Cruz","GELP","Banfield","Boca Jr","Tigre","Rosario Central","Olimpo","Temperley","Atletico Rafaela","Colon","Defensa y justicia","San Martin SJ","Estudiantes","Huracan","Racing Club","Nueva Chicago","Lanus","River PLate","Crucero del Norte","Velez Sarfield"],
        Copa_Argentina: ["Alianza Coronel Moldes","Deportivo Español"],
        Sudamericana:["Arsenal","Arsenal","Olimpia (PAR)","Independiente Santa Fe (COL)"],
        Liguilla:["Belgrano","Racing Club"],
        Verano:["Estudiantes"],
      },
    },
    "2016": {
      tournaments: ["Amistosos","Copa_Argentina","Sudamericana","T_1_Division","Transicion","Verano"],
      opponents: {
        Amistosos: ["Camioneros","Flandria","GELP"],
        Copa_Argentina: ["San Telmo"],
        Sudamericana: ["Lanus","Lanus","Chapecoense (BRA)"],
        T_1_Division:["Belgrano","Godoy Cruz","Quilmes","Tigre","Sarmiento","Temperley","San Lorenzo","River Plate","Colon"],
        Transicion:["Belgrano","Godoy Cruz","Racing Club","Colon","Banfield","Patronato","Velez Sarfield","GELP","Arsenal","Quilmes"],
        Verano: ["Racing Club","River Plate","San Lorenzo"],
      },
    },
    "2017": {
      tournaments: ["Copa_Argentina","Sudamericana","Superliga_17","Torneo_Argentino","Verano"],
      opponents: {
        Copa_Argentina: ["Atletico Tucuman","Camioneros"],
        Sudamericana: ["Nacional (PAR)","Nacional (PAR)","Atletico Tucuman","Flamengo (BRA)","Flamengo (BRA)","Libertad (PAR)","Alianza Lima (PER)","Deportes Iquique (CHI)","Deportes Iquique (CHI)"],
        Superliga_17:["Huracan","Olimpo","Velez Sarfield","Chacarita Jr","Patronato","River Plate","Racing Club","Arsenal"],
        Torneo_Argentino:["Talleres","Defensa y Justicia","Velez Sarfield","Patronato","Atletico Rafaela","Arsenal","Estudiantes","Newells Old Boys","Racing Club","Huracan","Olimpo","Union","Lanus"],
        Verano: ["Racing Club"]
      },
    },
    "2018": {
      tournaments: ["Recopa","Copa_Argentina","Libertadores","Superliga_17","Superliga_18","Suruga","Verano"],
      opponents: {
        Recopa: ["Gremio (BRA)","Gremio (BRA)"],
        Copa_Argentina: ["Central Ballester","Brown Adrogue"],
        Libertadores:["Millanarios (COL)","Millanarios (COL)","Corinthians (BRA)","Deportivo Lara (VEN)","River Plate"],
        Superliga_17: ["Boca Jr","Rosario Central","Estudiantes","Colon","Banfield","San Martin SJ","Argentinos Jr","Tigre","Talleres","Newells Old Boys","GELP"],
        Superliga_18:["San Martin TUC","Newells Old Boys","Estudiantes","Colon","Banfield","Patronato","Huracan","Atletico Tucuman","Argentinos Jr","Belgrano","Godoy Cruz"],
        Suruga:["Cerezo Ozaca (JPN)"],
        Verano:["GELP","Racing Club"],
      },
    },
    "2019": {
      tournaments: ["Amistosos","Copa_Argentina","Copa_Superliga","Sudamericana","Superliga18","Superliga19","Verano"],
      opponents: {
        Amistosos: ["Tristan Suarez"],
        Copa_Argentina: ["Patronato","Defensa y Justicia","Atlas"],
        Copa_Superliga: ["Argentinos Jr","Argentinos Jr"],
        Sudamericana:["Binacional (PER)","Binacional (PER)","U Catolica (ECU)","U CAtolica (ECU)","Independiente del Valle (ECU)","Rionegro Aguilas Doradas (COL)","Rionegro Aguilas Doradas (COL)"],
        Superliga_18: ["San Martin SJ","Racing Club","Talleres","Union","Aldosivi","Velez Sarfield","Rosario Central"],
        Superliga_19:["Defensa y Justicia","Newells Old Boys","Colon","Lanus","Atletico Tucuman","Talleres","Union","San Lorenzo","Godoy Cruz"],
        Verano:["GELP"],
      },
    },
    "2020": {
      tournaments: ["Amistosos","Copa_Superliga","Sudamericana","Superliga19","CDAMLPFA"],
      opponents: {
        Amistosos: ["Banfield","Banfield","Deportivo Moron","GELP"],
        Copa_Superliga: ["Velez Sarfield"],
        Sudamericana:["Fortaleza (Bra)","Fortaleza (BRA)","Lanus","Atletico Tucuman","Atletico Tucuman","Fenix (URU)","Fenix (URU)"],
        Superliga_19:["River Plate","Rosario Central","Arsenal","Central Cordoba"],
        CDAMLPFA:["Colon","Central Cordoba","Boca Jr","Argentinos Jr","Colon","Defensa y Justicia","Huracan"],
      },
    },
    "2021": {
      tournaments: ["CopaSocios","Copa_Argentina","Sudamericana","CopaLPFA","CDAMLPFA"],
      opponents: {
        CopaSocios: ["Estudiantes","Patronato","Platense","Racing Club","Rosario Central","Colon","River Plate","Huracan","Godoy Cruz","Velez Sarfield","GELP","Union","Arsenal","Boca Jr","Sarmiento","Banfield","San Lorenzo","Talleres"],
        Copa_Argentina: ["Villa Mitre","Tigre"],
        Sudamericana:["Santos (Bra)","Bahia (BRA)","Bahia (BRA)","Guabira (BOL)","Guabira (BOL)","Montevideo City Torque (URU)","Montevideo City Torque (URU)"],
        CopaLPFA:["Estudiantes","Patronato","GELP","Newells Old Boys","Sarmiento","Boca Jr","Talleres","Defensa y justicia","Huracan"],
        CDAMLPFA:["Arsenal","River Plate"],
      },
    },
    "2022": {
      tournaments: ["Copa_Argentina","CopaLPFA","Sudamericana","TorneoBinance","InternacionalVerano"],
      opponents: {
        Copa_Argentina: ["Atletico Tucuman","Central Norte","Talleres","Velez Sarfield"],
        CopaLPFA: ["Estudiantes","Arsenal","Boca Jr","Godoy Cruz","Central Cordoba","Racing Club","Barracas Central","Tigre","Colon","Aldosivi","Huracan"],
        Sudamericana:["Ceara (BRA)","Gral.Caballero (PAR)","La Guaira (VEN)","Gral.Caballero (PAR)","La Guaria (VEN)"],
        TorneoBinance: ["San Lorenzo","Talleres","Argentinos Jr","Estudiantes","Patronato","Platense","Defensa y justicia","Colon","Lanus","Huracan","Godoy Cruz","Velez Sarfield","GELP","Aldosivi","Sarmiento","Union","Newells Old Boys","Arsenal","Central Cordoba","Tigre","Huracan","Banfield","Boca Jr"],
        InternacionalVerano:["Talleres"],
      },
    },
    "2023": {
      tournaments: ["Amistosos","Copa_Argentina","TorneoBinance"],
      opponents: {
        Amistosos: ["Everton (CHI)"],
        Copa_Argentina: ["Ciudad de Bolivar"],
        TorneoBinance: ["Talleres","Platense","Instituto","Barracas Central","Colon","Estudiantes","Racing Club","Belgrano","Argentinos Jr","Tigre","Arsenal","Lanus","Godoy Cruz","Sarmiento","Huracan","GELP","Central Cordoba"],
      },
    },
  };
  yearSelect.addEventListener("change", function () {
    const selectedYear = yearSelect.value;

    // Limpiamos las opciones actuales del menú desplegable de torneos
    while (tournamentSelect.options.length > 1) {
      tournamentSelect.remove(1);
    }

    // Limpiamos las opciones actuales del menú desplegable de rivales
    while (opponentSelect.options.length > 1) {
      opponentSelect.remove(1);
    }

    // Agregamos las nuevas opciones de torneos según el año seleccionado
    data[selectedYear].tournaments.forEach((tournament) => {
      const option = document.createElement("option");
      option.text = tournament;
      option.value = tournament;
      tournamentSelect.add(option);
    });
  });

  tournamentSelect.addEventListener("change", function () {
    const selectedYear = yearSelect.value;
    const selectedTournament = tournamentSelect.value;

    // Limpiamos las opciones actuales del menú desplegable de rivales
    while (opponentSelect.options.length > 1) {
      opponentSelect.remove(1);
    }

    // Agregamos las nuevas opciones de rivales según el torneo seleccionado
    data[selectedYear].opponents[selectedTournament].forEach((opponent) => {
      const option = document.createElement("option");
      option.text = opponent;
      option.value = opponent;
      opponentSelect.add(option);
    });
  });

  opponentSelect.addEventListener("change", function () {
    const selectedOpponent = opponentSelect.value;
    if (selectedOpponent !== "") {
      // Redirigimos al usuario a la página específica según el rival seleccionado y el año
      const selectedYear = yearSelect.value;
      const selectedTournament = tournamentSelect.value;
      const url = `${selectedOpponent.replace(/\s+/g, "").toLowerCase()}${selectedTournament.replace(/\s+/g, "").toLowerCase().slice(0, 3)}${selectedYear.slice(-2)}.html`;
      window.location.href = url;
    }
  });
});
