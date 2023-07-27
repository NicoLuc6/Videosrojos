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
        "Libertadores": ["Boca jr", "Peñarol (URU)"],
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