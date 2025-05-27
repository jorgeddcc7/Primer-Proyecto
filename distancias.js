const distancias = {
    // España y conexiones
    "España-Estados Unidos": 6000, "Estados Unidos-España": 6000,
    "España-Brasil": 8000, "Brasil-España": 8000,
    "España-China": 11000, "China-España": 11000,
    "España-India": 9000, "India-España": 9000,
    "España-Japón": 11000, "Japón-España": 11000,
    "España-México": 9000, "México-España": 9000,
    "España-Reino Unido": 1300, "Reino Unido-España": 1300,
    "España-Argentina": 11000, "Argentina-España": 11000,
    "España-Sudáfrica": 9500, "Sudáfrica-España": 9500,
    "España-Francia": 1000, "Francia-España": 1000,
    "España-Alemania": 1500, "Alemania-España": 1500,
    "España-Arabia Saudita": 4500, "Arabia Saudita-España": 4500,
    "España-Australia": 17000, "Australia-España": 17000,
    "España-Bélgica": 1400, "Bélgica-España": 1400,
    "España-Canadá": 7500, "Canadá-España": 7500,
    "España-Chile": 11000, "Chile-España": 11000,
    "España-Colombia": 8500, "Colombia-España": 8500,
    "España-Corea del Sur": 11000, "Corea del Sur-España": 11000,
    "España-Dinamarca": 2200, "Dinamarca-España": 2200,
    "España-Egipto": 3400, "Egipto-España": 3400,
    "España-Emiratos Árabes Unidos": 5600, "Emiratos Árabes Unidos-España": 5600,
    "España-Filipinas": 12300, "Filipinas-España": 12300,
    "España-Hong Kong": 11100, "Hong Kong-España": 11100,
    "España-Indonesia": 12400, "Indonesia-España": 12400,
    "España-Irlanda": 1300, "Irlanda-España": 1300,
    "España-Israel": 3500, "Israel-España": 3500,
    "España-Italia": 1500, "Italia-España": 1500,
    "España-Kazajistán": 7100, "Kazajistán-España": 7100,
    "España-Malasia": 12500, "Malasia-España": 12500,
    "España-Noruega": 2500, "Noruega-España": 2500,
    "España-Nueva Zelanda": 19000, "Nueva Zelanda-España": 19000,
    "España-Países Bajos": 1700, "Países Bajos-España": 1700,
    "España-Perú": 9100, "Perú-España": 9100,
    "España-Qatar": 5200, "Qatar-España": 5200,
    "España-Singapur": 12300, "Singapur-España": 12300,
    "España-Suecia": 2400, "Suecia-España": 2400,
    "España-Suiza": 1300, "Suiza-España": 1300,
    "España-Taiwán": 11800, "Taiwán-España": 11800,


    // Francia y conexiones
    "Francia-Estados Unidos": 6500, "Estados Unidos-Francia": 6500,
    "Francia-Brasil": 8500, "Brasil-Francia": 8500,
    "Francia-China": 10500, "China-Francia": 10500,
    "Francia-India": 9200, "India-Francia": 9200,
    "Francia-Japón": 10400, "Japón-Francia": 10400,
    "Francia-México": 9400, "México-Francia": 9400,
    "Francia-Reino Unido": 500, "Reino Unido-Francia": 500,
    "Francia-Argentina": 11500, "Argentina-Francia": 11500,
    "Francia-Sudáfrica": 8800, "Sudáfrica-Francia": 8800,
    "Francia-Alemania": 600, "Alemania-Francia": 600,
    "Francia-Países Bajos": 300, "Singapur-Francia": 300,
    "Francia-Singapur": 10600, "Singapur-Francia": 10600,
    "Francia-Italia": 850, "Italia-Francia": 850,
    "Francia-Arabia Saudita": 4400, "Arabia Saudita-Francia": 4400,
    "Francia-Australia": 16900, "Australia-Francia": 16900,
    "Francia-Bélgica": 300, "Bélgica-Francia": 300,
    "Francia-Cánada": 5500, "Cánada-Francia": 5500,
    "Francia-Emiratos Árabes Unidos": 5300, "Emiratos Árabes Unidos-Francia": 5300,
    "Francia-Hong Kong": 9500, "Hong Kong-Francia": 9500,
    "Francia-Indonesia": 12200, "Indonesia-Francia": 12200,
    "Francia-Israel": 3200, "Israel-Francia": 3200,
    "Francia-Malasia": 10100, "Malasia-Francia": 10100,
    "Francia-Noruega": 1000, "Noruega-Francia": 1000,
    "Francia-Suecia": 1100, "Suecia-Francia": 1100,
    "Francia-Suiza": 400, "Suiza-Francia": 400,
    "Francia-Chile": 11800, "Chile-Francia": 11800,
    "Francia-Colombia": 8100, "Colombia-Francia": 8100,
    "Francia-Dinamarca": 1000, "Dinamarca-Francia": 1000,
    "Francia-Egipto": 2400, "Egipto-Francia": 2400,
    "Francia-Filipinas": 10500, "Filipinas-Francia": 10500,
    "Francia-Kazajistán": 6400, "Kazajistán-Francia": 6400,
    "Francia-Qatar": 5100, "Qatar-Francia": 5100,
    "Francia-Perú": 10000, "Perú-Francia": 10000,
    "Francia-Nueva Zelanda": 18100, "Nueva Zelanda-Francia": 18100,
    "Francia-Taiwán": 9600, "Taiwán-Francia": 9600,

    // Alemania y conexiones
    "Alemania-Estados Unidos": 7000, "Estados Unidos-Alemania": 7000,
    "Alemania-Brasil": 9000, "Brasil-Alemania": 9000,
    "Alemania-China": 10000, "China-Alemania": 10000,
    "Alemania-India": 8800, "India-Alemania": 8800,
    "Alemania-Japón": 10000, "Japón-Alemania": 10000,
    "Alemania-México": 9500, "México-Alemania": 9500,
    "Alemania-Reino Unido": 700, "Reino Unido-Alemania": 700,
    "Alemania-Argentina": 11500, "Argentina-Alemania": 11500,
    "Alemania-Sudáfrica": 8800, "Sudáfrica-Alemania": 8800,
    "Alemania-Países Bajos": 400, "Países Bajos-Alemania": 400,
    "Alemania-Singapur": 10700, "Singapur-Alemania": 10700,
    "Alemania-Corea del Sur": 8900, "Corea del Sur-Alemania": 8900,
    "Alemania-Italia": 850, "Italia-Alemania": 850,
    "Alemania-Arabia Saudita": 4400, "Arabia Saudita-Alemania": 4400,
    "Alemania-Australia": 16500, "Australia-Alemania": 16500,
    "Alemania-Bélgica": 200, "Bélgica-Alemania": 200,
    "Alemania-Canadá": 5500, "Canadá-Alemania": 5500,
    "Alemania-Emiratos Árabes Unidos": 5000, "Emiratos Árabes Unidos-Alemania": 5000,
    "Alemania-Hong Kong": 9600, "Hong Kong-Alemania": 9600,
    "Alemania-Indonesia": 12100, "Indonesia-Alemania": 12100,
    "Alemania-Israel": 3100, "Israel-Alemania": 3100,
    "Alemania-Malasia": 10300, "Malasia-Alemania": 10300,
    "Alemania-Noruega": 800, "Noruega-Alemania": 800,
    "Alemania-Suecia": 1000, "Suecia-Alemania": 1000,
    "Alemania-Suiza": 400, "Suiza-Alemania": 400,
    "Alemania-Chile": 11800, "Chile-Alemania": 11800,
    "Alemania-Colombia": 8000, "Colombia-Alemania": 8000,
    "Alemania-Dinamarca": 600, "Dinamarca-Alemania": 600,
    "Alemania-Egipto": 2500, "Egipto-Alemania": 2500,
    "Alemania-Filipinas": 10500, "Filipinas-Alemania": 10500,
    "Alemania-Kazajistán": 6400, "Kazajistán-Alemania": 6400,
    "Alemania-Qatar": 5000, "Qatar-Alemania": 5000,
    "Alemania-Perú": 10300, "Perú-Alemania": 10300,
    "Alemania-Nueva Zelanda": 17900, "Nueva Zelanda-Alemania": 17900,
    "Alemania-Taiwán": 9500, "Taiwán-Alemania": 9500,

    // Reino Unido y conexiones
    "Reino Unido-Estados Unidos": 5600, "Estados Unidos-Reino Unido": 5600,
    "Reino Unido-Brasil": 8800, "Brasil-Reino Unido": 8800,
    "Reino Unido-China": 9000, "China-Reino Unido": 9000,
    "Reino Unido-India": 7600, "India-Reino Unido": 7600,
    "Reino Unido-Japón": 9700, "Japón-Reino Unido": 9700,
    "Reino Unido-México": 8500, "México-Reino Unido": 8500,
    "Reino Unido-Argentina": 11000, "Argentina-Reino Unido": 11000,
    "Reino Unido-Sudáfrica": 10500, "Sudáfrica-Reino Unido": 10500,
    "Reino Unido-Países Bajos": 350, "Países Bajos-Reino Unido": 350,
    "Reino Unido-Singapur": 10700, "Singapur-Reino Unido": 10700,
    "Reino Unido-Corea del Sur": 9000, "Corea del Sur-Reino Unido": 9000,
    "Reino Unido-Italia": 1300, "Italia-Reino Unido": 1300,
    "Reino Unido-Arabia Saudita": 4300, "Arabia Saudita-Reino Unido": 4300,
    "Reino Unido-Australia": 16500, "Australia-Reino Unido": 16500,
    "Reino Unido-Bélgica": 350, "Bélgica-Reino Unido": 350,
    "Reino Unido-Canadá": 5500, "Canadá-Reino Unido": 5500,
    "Reino Unido-Emiratos Árabes Unidos": 4900, "Emiratos Árabes Unidos-Reino Unido": 4900,
    "Reino Unido-Hong Kong": 9500, "Hong Kong-Reino Unido": 9500,
    "Reino Unido-Indonesia": 12000, "Indonesia-Reino Unido": 12000,
    "Reino Unido-Israel": 3300, "Israel-Reino Unido": 3300,
    "Reino Unido-Malasia": 10400, "Malasia-Reino Unido": 10400,
    "Reino Unido-Noruega": 1300, "Noruega-Reino Unido": 1300,
    "Reino Unido-Suecia": 1400, "Suecia-Reino Unido": 1400,
    "Reino Unido-Suiza": 800, "Suiza-Reino Unido": 800,
    "Reino Unido-Chile": 11800, "Chile-Reino Unido": 11800,
    "Reino Unido-Colombia": 7900, "Colombia-Reino Unido": 7900,
    "Reino Unido-Dinamarca": 1200, "Dinamarca-Reino Unido": 1200,
    "Reino Unido-Egipto": 3000, "Egipto-Reino Unido": 3000,
    "Reino Unido-Filipinas": 10300, "Filipinas-Reino Unido": 10300,
    "Reino Unido-Kazajistán": 6200, "Kazajistán-Reino Unido": 6200,
    "Reino Unido-Qatar": 4800, "Qatar-Reino Unido": 4800,
    "Reino Unido-Perú": 10200, "Perú-Reino Unido": 10200,
    "Reino Unido-Nueva Zelanda": 18100, "Nueva Zelanda-Reino Unido": 18100,
    "Reino Unido-Taiwán": 9500, "Taiwán-Reino Unido": 9500,

    // Estados Unidos y conexiones
    "Estados Unidos-Brasil": 8000, "Brasil-Estados Unidos": 8000,
    "Estados Unidos-China": 12000, "China-Estados Unidos": 12000,
    "Estados Unidos-India": 13000, "India-Estados Unidos": 13000,
    "Estados Unidos-Japón": 11000, "Japón-Estados Unidos": 11000,
    "Estados Unidos-México": 3000, "México-Estados Unidos": 3000,
    "Estados Unidos-Argentina": 11000, "Argentina-Estados Unidos": 11000,
    "Estados Unidos-Sudáfrica": 13000, "Sudáfrica-Estados Unidos": 13000,
    "Estados Unidos-Países Bajos": 6200, "Países Bajos-Estados Unidos": 6200,
    "Estados Unidos-Singapur": 13500, "Singapur-Estados Unidos": 13500,
    "Estados Unidos-Corea del Sur": 11000, "Corea del Sur-Estados Unidos": 11000,
    "Estados Unidos-Italia": 8200, "Italia-Estados Unidos": 8200,
    "Estados Unidos-Arabia Saudita": 12000, "Arabia Saudita-Estados Unidos": 12000,
    "Estados Unidos-Australia": 16000, "Australia-Estados Unidos": 16000,
    "Estados Unidos-Bélgica": 7000, "Bélgica-Estados Unidos": 7000,
    "Estados Unidos-Canadá": 800, "Canadá-Estados Unidos": 800,
    "Estados Unidos-Emiratos Árabes Unidos": 11500, "Emiratos Árabes Unidos-Estados Unidos": 11500,
    "Estados Unidos-Hong Kong": 13000, "Hong Kong-Estados Unidos": 13000,
    "Estados Unidos-Indonesia": 15500, "Indonesia-Estados Unidos": 15500,
    "Estados Unidos-Israel": 10500, "Israel-Estados Unidos": 10500,
    "Estados Unidos-Malasia": 14000, "Malasia-Estados Unidos": 14000,
    "Estados Unidos-Noruega": 7200, "Noruega-Estados Unidos": 7200,
    "Estados Unidos-Suecia": 7500, "Suecia-Estados Unidos": 7500,
    "Estados Unidos-Suiza": 8100, "Suiza-Estados Unidos": 8100,
    "Estados Unidos-Chile": 10200, "Chile-Estados Unidos": 10200,
    "Estados Unidos-Colombia": 3800, "Colombia-Estados Unidos": 3800,
    "Estados Unidos-Dinamarca": 6800, "Dinamarca-Estados Unidos": 6800,
    "Estados Unidos-Egipto": 10500, "Egipto-Estados Unidos": 10500,
    "Estados Unidos-Filipinas": 13700, "Filipinas-Estados Unidos": 13700,
    "Estados Unidos-Kazajistán": 12000, "Kazajistán-Estados Unidos": 12000,
    "Estados Unidos-Qatar": 11900, "Qatar-Estados Unidos": 11900,
    "Estados Unidos-Perú": 8200, "Perú-Estados Unidos": 8200,
    "Estados Unidos-Nueva Zelanda": 13700, "Nueva Zelanda-Estados Unidos": 13700,
    "Estados Unidos-Taiwán": 13000, "Taiwán-Estados Unidos": 13000,

    // Brasil y conexiones
    "Brasil-China": 12000, "China-Brasil": 12000,
    "Brasil-India": 12000, "India-Brasil": 12000,
    "Brasil-Japón": 13000, "Japón-Brasil": 13000,
    "Brasil-México": 7000, "México-Brasil": 7000,
    "Brasil-Argentina": 1500, "Argentina-Brasil": 1500,
    "Brasil-Sudáfrica": 8300, "Sudáfrica-Brasil": 8300,
    "Brasil-Países Bajos": 9400, "Países Bajos-Brasil": 9400,
    "Brasil-Singapur": 17800, "Singapur-Brasil": 17800,
    "Brasil-Corea del Sur": 15500, "Corea del Sur-Brasil": 15500,
    "Brasil-Italia": 9600, "Italia-Brasil": 9600,
    "Brasil-Arabia Saudita": 12100, "Arabia Saudita-Brasil": 12100,
    "Brasil-Australia": 14700, "Australia-Brasil": 14700,
    "Brasil-Bélgica": 9500, "Bélgica-Brasil": 9500,
    "Brasil-Canadá": 8200, "Canadá-Brasil": 8200,
    "Brasil-Emiratos Árabes Unidos": 11900, "Emiratos Árabes Unidos-Brasil": 11900,
    "Brasil-Hong Kong": 16000, "Hong Kong-Brasil": 16000,
    "Brasil-Indonesia": 16800, "Indonesia-Brasil": 16800,
    "Brasil-Israel": 11700, "Israel-Brasil": 11700,
    "Brasil-Malasia": 16200, "Malasia-Brasil": 16200,
    "Brasil-Noruega": 10600, "Noruega-Brasil": 10600,
    "Brasil-Suecia": 10600, "Suecia-Brasil": 10600,
    "Brasil-Suiza": 10200, "Suiza-Brasil": 10200,
    "Brasil-Chile": 3300, "Chile-Brasil": 3300,
    "Brasil-Colombia": 3700, "Colombia-Brasil": 3700,
    "Brasil-Dinamarca": 10200, "Dinamarca-Brasil": 10200,
    "Brasil-Egipto": 11700, "Egipto-Brasil": 11700,
    "Brasil-Filipinas": 17800, "Filipinas-Brasil": 17800,
    "Brasil-Kazajistán": 14400, "Kazajistán-Brasil": 14400,
    "Brasil-Qatar": 11800, "Qatar-Brasil": 11800,
    "Brasil-Perú": 3000, "Perú-Brasil": 3000,
    "Brasil-Nueva Zelanda": 17300, "Nueva Zelanda-Brasil": 17300,
    "Brasil-Taiwán": 16200, "Taiwán-Brasil": 16200,

    // México y conexiones
    "México-China": 12000, "China-México": 12000,
    "México-India": 13000, "India-México": 13000,
    "México-Japón": 13000, "Japón-México": 13000,
    "México-Argentina": 8000, "Argentina-México": 8000,
    "México-Sudáfrica": 12500, "Sudáfrica-México": 12500,
    "México-Países Bajos": 9000, "Países Bajos-México": 9000,
    "México-Singapur": 14100, "Singapur-México": 14100,
    "México-Corea del Sur": 12500, "Corea del Sur-México": 12500,
    "México-Italia": 10600, "Italia-México": 10600,
    "México-Arabia Saudita": 12800, "Arabia Saudita-México": 12800,
    "México-Australia": 14500, "Australia-México": 14500,
    "México-Bélgica": 9500, "Bélgica-México": 9500,
    "México-Canadá": 3000, "Canadá-México": 3000,
    "México-Emiratos Árabes Unidos": 12800, "Emiratos Árabes Unidos-México": 12800,
    "México-Hong Kong": 13000, "Hong Kong-México": 13000,
    "México-Indonesia": 14800, "Indonesia-México": 14800,
    "México-Israel": 13000, "Israel-México": 13000,
    "México-Malasia": 14700, "Malasia-México": 14700,
    "México-Noruega": 11500, "Noruega-México": 11500,
    "México-Suecia": 11500, "Suecia-México": 11500,
    "México-Suiza": 10600, "Suiza-México": 10600,
    "México-Chile": 7600, "Chile-México": 7600,
    "México-Colombia": 3700, "Colombia-México": 3700,
    "México-Dinamarca": 10600, "Dinamarca-México": 10600,
    "México-Egipto": 12500, "Egipto-México": 12500,
    "México-Filipinas": 13800, "Filipinas-México": 13800,
    "México-Kazajistán": 12900, "Kazajistán-México": 12900,
    "México-Qatar": 12500, "Qatar-México": 12500,
    "México-Perú": 3800, "Perú-México": 3800,
    "México-Nueva Zelanda": 13900, "Nueva Zelanda-México": 13900,
    "México-Taiwán": 12600, "Taiwán-México": 12600,

    // China y conexiones
    "China-India": 3000, "India-China": 3000,
    "China-Japón": 2000, "Japón-China": 2000,
    "China-Argentina": 14000, "Argentina-China": 14000,
    "China-Sudáfrica": 13000, "Sudáfrica-China": 13000,
    "China-Países Bajos": 8000, "Países Bajos-China": 8000,
    "China-Singapur": 4300, "Singapur-China": 4300,
    "China-Corea del Sur": 1700, "Corea del Sur-China": 1700,
    "China-Italia": 8300, "Italia-China": 8300,
    "China-Arabia Saudita": 7600, "Arabia Saudita-China": 7600,
    "China-Australia": 7700, "Australia-China": 7700,
    "China-Bélgica": 8500, "Bélgica-China": 8500,
    "China-Canadá": 10000, "Canadá-China": 10000,
    "China-Emiratos Árabes Unidos": 5900, "Emiratos Árabes Unidos-China": 5900,
    "China-Hong Kong": 1200, "Hong Kong-China": 1200,
    "China-Indonesia": 5200, "Indonesia-China": 5200,
    "China-Israel": 7600, "Israel-China": 7600,
    "China-Malasia": 4500, "Malasia-China": 4500,
    "China-Noruega": 7500, "Noruega-China": 7500,
    "China-Suecia": 7400, "Suecia-China": 7400,
    "China-Suiza": 8100, "Suiza-China": 8100,
    "China-Chile": 18500, "Chile-China": 18500,
    "China-Colombia": 14400, "Colombia-China": 14400,
    "China-Dinamarca": 7800, "Dinamarca-China": 7800,
    "China-Egipto": 8000, "Egipto-China": 8000,
    "China-Filipinas": 3000, "Filipinas-China": 3000,
    "China-Kazajistán": 2900, "Kazajistán-China": 2900,
    "China-Qatar": 6200, "Qatar-China": 6200,
    "China-Perú": 17700, "Perú-China": 17700,
    "China-Nueva Zelanda": 11500, "Nueva Zelanda-China": 11500,
    "China-Taiwán": 400, "Taiwán-China": 400,

    // India y conexiones
    "India-Japón": 6000, "Japón-India": 6000,
    "India-Argentina": 15000, "Argentina-India": 15000,
    "India-Sudáfrica": 9000, "Sudáfrica-India": 9000,
    "India-Países Bajos": 6900, "Países Bajos-India": 6900,
    "India-Singapur": 4500, "Singapur-India": 4500,
    "India-Corea del Sur": 5300, "Corea del Sur-India": 5300,
    "India-Italia": 6900, "Italia-India": 6900,
    "India-Arabia Saudita": 3800, "Arabia Saudita-India": 3800,
    "India-Australia": 10600, "Australia-India": 10600,
    "India-Bélgica": 6900, "Bélgica-India": 6900,
    "India-Canadá": 12000, "Canadá-India": 12000,
    "India-Emiratos Árabes Unidos": 3000, "Emiratos Árabes Unidos-India": 3000,
    "India-Hong Kong": 4200, "Hong Kong-India": 4200,
    "India-Indonesia": 4600, "Indonesia-India": 4600,
    "India-Israel": 3800, "Israel-India": 3800,
    "India-Malasia": 4900, "Malasia-India": 4900,
    "India-Noruega": 6800, "Noruega-India": 6800,
    "India-Suecia": 7100, "Suecia-India": 7100,
    "India-Suiza": 6900, "Suiza-India": 6900,
    "India-Chile": 17400, "Chile-India": 17400,
    "India-Colombia": 14100, "Colombia-India": 14100,
    "India-Dinamarca": 6600, "Dinamarca-India": 6600,
    "India-Egipto": 5300, "Egipto-India": 5300,
    "India-Filipinas": 5000, "Filipinas-India": 5000,
    "India-Kazajistán": 3000, "Kazajistán-India": 3000,
    "India-Qatar": 3000, "Qatar-India": 3000,
    "India-Perú": 14700, "Perú-India": 14700,
    "India-Nueva Zelanda": 13500, "Nueva Zelanda-India": 13500,
    "India-Taiwán": 4300, "Taiwán-India": 4300,

    // Japón y conexiones
    "Japón-Argentina": 15000, "Argentina-Japón": 15000,
    "Japón-Sudáfrica": 13000, "Sudáfrica-Japón": 13000,
    "Japón-Países Bajos": 9600, "Países Bajos-Japón": 9600,
    "Japón-Singapur": 5300, "Singapur-Japón": 5300,
    "Japón-Corea del Sur": 1300, "Corea del Sur-Japón": 1300,
    "Japón-Italia": 9600, "Italia-Japón": 9600,
    "Japón-Arabia Saudita": 7700, "Arabia Saudita-Japón": 7700,
    "Japón-Australia": 7000, "Australia-Japón": 7000,
    "Japón-Bélgica": 9800, "Bélgica-Japón": 9800,
    "Japón-Canadá": 9500, "Canadá-Japón": 9500,
    "Japón-Emiratos Árabes Unidos": 7400, "Emiratos Árabes Unidos-Japón": 7400,
    "Japón-Hong Kong": 3000, "Hong Kong-Japón": 3000,
    "Japón-Indonesia": 4800, "Indonesia-Japón": 4800,
    "Japón-Israel": 9100, "Israel-Japón": 9100,
    "Japón-Malasia": 4700, "Malasia-Japón": 4700,
    "Japón-Noruega": 8700, "Noruega-Japón": 8700,
    "Japón-Suecia": 8900, "Suecia-Japón": 8900,
    "Japón-Suiza": 9400, "Suiza-Japón": 9400,
    "Japón-Chile": 17700, "Chile-Japón": 17700,
    "Japón-Colombia": 13600, "Colombia-Japón": 13600,
    "Japón-Dinamarca": 8800, "Dinamarca-Japón": 8800,
    "Japón-Egipto": 10400, "Egipto-Japón": 10400,
    "Japón-Filipinas": 3500, "Filipinas-Japón": 3500,
    "Japón-Kazajistán": 6400, "Kazajistán-Japón": 6400,
    "Japón-Qatar": 8200, "Qatar-Japón": 8200,
    "Japón-Perú": 16000, "Perú-Japón": 16000,
    "Japón-Nueva Zelanda": 8800, "Nueva Zelanda-Japón": 8800,
    "Japón-Taiwán": 200, "Taiwán-Japón": 200,

    // Sudáfrica y conexiones
    "Sudáfrica-Argentina": 11000, "Argentina-Sudáfrica": 11000,
    "Sudáfrica-Países Bajos": 9000, "Países Bajos-Sudáfrica": 9000,
    "Sudáfrica-Singapur": 10500, "Singapur-Sudáfrica": 10500,
    "Sudáfrica-Corea del Sur": 11300, "Corea del Sur-Sudáfrica": 11300,
    "Sudáfrica-Italia": 9000, "Italia-Sudáfrica": 9000,
    "Sudáfrica-Arabia Saudita": 7000, "Arabia Saudita-Sudáfrica": 7000,
    "Sudáfrica-Australia": 10500, "Australia-Sudáfrica": 10500,
    "Sudáfrica-Bélgica": 8700, "Bélgica-Sudáfrica": 8700,
    "Sudáfrica-Canadá": 12800, "Canadá-Sudáfrica": 12800,
    "Sudáfrica-Emiratos Árabes Unidos": 7000, "Emiratos Árabes Unidos-Sudáfrica": 7000,
    "Sudáfrica-Hong Kong": 11700, "Hong Kong-Sudáfrica": 11700,
    "Sudáfrica-Indonesia": 12000, "Indonesia-Sudáfrica": 12000,
    "Sudáfrica-Israel": 7800, "Israel-Sudáfrica": 7800,
    "Sudáfrica-Malasia": 11600, "Malasia-Sudáfrica": 11600,
    "Sudáfrica-Noruega": 8700, "Noruega-Sudáfrica": 8700,
    "Sudáfrica-Suecia": 8800, "Suecia-Sudáfrica": 8800,
    "Sudáfrica-Suiza": 8700, "Suiza-Sudáfrica": 8700,
    "Sudáfrica-Chile": 12600, "Chile-Sudáfrica": 12600,
    "Sudáfrica-Colombia": 11000, "Colombia-Sudáfrica": 11000,
    "Sudáfrica-Dinamarca": 8600, "Dinamarca-Sudáfrica": 8600,
    "Sudáfrica-Egipto": 6900, "Egipto-Sudáfrica": 6900,
    "Sudáfrica-Filipinas": 12300, "Filipinas-Sudáfrica": 12300,
    "Sudáfrica-Kazajistán": 10500, "Kazajistán-Sudáfrica": 10500,
    "Sudáfrica-Qatar": 7400, "Qatar-Sudáfrica": 7400,
    "Sudáfrica-Perú": 11900, "Perú-Sudáfrica": 11900,
    "Sudáfrica-Nueva Zelanda": 12500, "Nueva Zelanda-Sudáfrica": 12500,
    "Sudáfrica-Taiwán": 12200, "Taiwán-Sudáfrica": 12200,

    // Argentina y conexiones
    "Argentina-Países Bajos": 11500, "Países Bajos-Argentina": 11500,
    "Argentina-Singapur": 16900, "Singapur-Argentina": 16900,
    "Argentina-Corea del Sur": 16300, "Corea del Sur-Argentina": 16300,
    "Argentina-Italia": 12100, "Italia-Argentina": 12100,
    "Argentina-Arabia Saudita": 13300, "Arabia Saudita-Argentina": 13300,
    "Argentina-Australia": 13500, "Australia-Argentina": 13500,
    "Argentina-Bélgica": 11600, "Bélgica-Argentina": 11600,
    "Argentina-Canadá": 10500, "Canadá-Argentina": 10500,
    "Argentina-Emiratos Árabes Unidos": 13000, "Emiratos Árabes Unidos-Argentina": 13000,
    "Argentina-Hong Kong": 18400, "Hong Kong-Argentina": 18400,
    "Argentina-Indonesia": 17300, "Indonesia-Argentina": 17300,
    "Argentina-Israel": 13400, "Israel-Argentina": 13400,
    "Argentina-Malasia": 17100, "Malasia-Argentina": 17100,
    "Argentina-Noruega": 12600, "Noruega-Argentina": 12600,
    "Argentina-Suecia": 12600, "Suecia-Argentina": 12600,
    "Argentina-Suiza": 12100, "Suiza-Argentina": 12100,
    "Argentina-Chile": 1300, "Chile-Argentina": 1300,
    "Argentina-Colombia": 4400, "Colombia-Argentina": 4400,
    "Argentina-Dinamarca": 12600, "Dinamarca-Argentina": 12600,
    "Argentina-Egipto": 13100, "Egipto-Argentina": 13100,
    "Argentina-Filipinas": 17800, "Filipinas-Argentina": 17800,
    "Argentina-Kazajistán": 14900, "Kazajistán-Argentina": 14900,
    "Argentina-Qatar": 13000, "Qatar-Argentina": 13000,
    "Argentina-Perú": 2900, "Perú-Argentina": 2900,
    "Argentina-Nueva Zelanda": 11500, "Nueva Zelanda-Argentina": 11500,
    "Argentina-Taiwán": 17300, "Taiwán-Argentina": 17300,

    // Países Bajos y conexiones
    "Países Bajos-Singapur": 11000, "Singapur-Países Bajos": 11000,
    "Países Bajos-Corea del Sur": 10500, "Corea del Sur-Países Bajos": 10500,
    "Países Bajos-Italia": 1200, "Italia-Países Bajos": 1200,
    "Países Bajos-Arabia Saudita": 5500, "Arabia Saudita-Países Bajos": 5500,
    "Países Bajos-Australia": 16400, "Australia-Países Bajos": 16400,
    "Países Bajos-Bélgica": 150, "Bélgica-Países Bajos": 150,
    "Países Bajos-Canadá": 6100, "Canadá-Países Bajos": 6100,
    "Países Bajos-Emiratos Árabes Unidos": 5300, "Emiratos Árabes Unidos-Países Bajos": 5300,
    "Países Bajos-Hong Kong": 10500, "Hong Kong-Países Bajos": 10500,
    "Países Bajos-Indonesia": 11800, "Indonesia-Países Bajos": 11800,
    "Países Bajos-Israel": 3300, "Israel-Países Bajos": 3300,
    "Países Bajos-Malasia": 11500, "Malasia-Países Bajos": 11500,
    "Países Bajos-Noruega": 800, "Noruega-Países Bajos": 800,
    "Países Bajos-Suecia": 750, "Suecia-Países Bajos": 750,
    "Países Bajos-Suiza": 550, "Suiza-Países Bajos": 550,
    "Países Bajos-Chile": 12500, "Chile-Países Bajos": 12500,
    "Países Bajos-Colombia": 9000, "Colombia-Países Bajos": 9000,
    "Países Bajos-Dinamarca": 450, "Dinamarca-Países Bajos": 450,
    "Países Bajos-Egipto": 4000, "Egipto-Países Bajos": 4000,
    "Países Bajos-Filipinas": 11500, "Filipinas-Países Bajos": 11500,
    "Países Bajos-Kazajistán": 6900, "Kazajistán-Países Bajos": 6900,
    "Países Bajos-Qatar": 5000, "Qatar-Países Bajos": 5000,
    "Países Bajos-Perú": 10000, "Perú-Países Bajos": 10000,
    "Países Bajos-Nueva Zelanda": 18300, "Nueva Zelanda-Países Bajos": 18300,
    "Países Bajos-Taiwán": 11000, "Taiwán-Países Bajos": 11000,

    // Singapur y conexiones 
    "Singapur-Corea del Sur": 4300, "Corea del Sur-Singapur": 4300,
    "Singapur-Italia": 10300, "Italia-Singapur": 10300,
    "Singapur-Arabia Saudita": 6400, "Arabia Saudita-Singapur": 6400,
    "Singapur-Australia": 6000, "Australia-Singapur": 6000,
    "Singapur-Bélgica": 10500, "Bélgica-Singapur": 10500,
    "Singapur-Canadá": 13000, "Canadá-Singapur": 13000,
    "Singapur-Emiratos Árabes Unidos": 6200, "Emiratos Árabes Unidos-Singapur": 6200,
    "Singapur-Hong Kong": 4200, "Hong Kong-Singapur": 4200,
    "Singapur-Indonesia": 1300, "Indonesia-Singapur": 1300,
    "Singapur-Israel": 8900, "Israel-Singapur": 8900,
    "Singapur-Malasia": 350, "Malasia-Singapur": 350,
    "Singapur-Noruega": 10200, "Noruega-Singapur": 10200,
    "Singapur-Suecia": 10300, "Suecia-Singapur": 10300,
    "Singapur-Suiza": 10200, "Suiza-Singapur": 10200,
    "Singapur-Chile": 17700, "Chile-Singapur": 17700,
    "Singapur-Colombia": 16200, "Colombia-Singapur": 16200,
    "Singapur-Dinamarca": 10600, "Dinamarca-Singapur": 10600,
    "Singapur-Egipto": 8000, "Egipto-Singapur": 8000,
    "Singapur-Filipinas": 3800, "Filipinas-Singapur": 3800,
    "Singapur-Kazajistán": 6600, "Kazajistán-Singapur": 6600,
    "Singapur-Qatar": 6400, "Qatar-Singapur": 6400,
    "Singapur-Perú": 16900, "Perú-Singapur": 16900,
    "Singapur-Nueva Zelanda": 8500, "Nueva Zelanda-Singapur": 8500,
    "Singapur-Taiwán": 3500, "Taiwán-Singapur": 3500,

    // Corea del Sur y conexiones 
    "Corea del Sur-Italia": 9300, "Italia-Corea del Sur": 9300,
    "Corea del Sur-Arabia Saudita": 7300, "Arabia Saudita-Corea del Sur": 7300,
    "Corea del Sur-Australia": 6700, "Australia-Corea del Sur": 6700,
    "Corea del Sur-Bélgica": 9800, "Bélgica-Corea del Sur": 9800,
    "Corea del Sur-Canadá": 10500, "Canadá-Corea del Sur": 10500,
    "Corea del Sur-Emiratos Árabes Unidos": 7500, "Emiratos Árabes Unidos-Corea del Sur": 7500,
    "Corea del Sur-Hong Kong": 3300, "Hong Kong-Corea del Sur": 3300,
    "Corea del Sur-Indonesia": 5100, "Indonesia-Corea del Sur": 5100,
    "Corea del Sur-Israel": 8900, "Israel-Corea del Sur": 8900,
    "Corea del Sur-Malasia": 4500, "Malasia-Corea del Sur": 4500,
    "Corea del Sur-Noruega": 8700, "Noruega-Corea del Sur": 8700,
    "Corea del Sur-Suecia": 9100, "Suecia-Corea del Sur": 9100,
    "Corea del Sur-Suiza": 9500, "Suiza-Corea del Sur": 9500,
    "Corea del Sur-Chile": 17700, "Chile-Corea del Sur": 17700,
    "Corea del Sur-Colombia": 14500, "Colombia-Corea del Sur": 14500,
    "Corea del Sur-Dinamarca": 8200, "Dinamarca-Corea del Sur": 8200,
    "Corea del Sur-Egipto": 10500, "Egipto-Corea del Sur": 10500,
    "Corea del Sur-Filipinas": 3000, "Filipinas-Corea del Sur": 3000,
    "Corea del Sur-Kazajistán": 5200, "Kazajistán-Corea del Sur": 5200,
    "Corea del Sur-Qatar": 7300, "Qatar-Corea del Sur": 7300,
    "Corea del Sur-Perú": 16200, "Perú-Corea del Sur": 16200,
    "Corea del Sur-Nueva Zelanda": 10200, "Nueva Zelanda-Corea del Sur": 10200,
    "Corea del Sur-Taiwán": 1500, "Taiwán-Corea del Sur": 1500,

    // Italia y conexiones 
    "Italia-Arabia Saudita": 4400, "Arabia Saudita-Italia": 4400,
    "Italia-Australia": 16000, "Australia-Italia": 16000,
    "Italia-Bélgica": 300, "Bélgica-Italia": 300,
    "Italia-Canadá": 7000, "Canadá-Italia": 7000,
    "Italia-Emiratos Árabes Unidos": 5200, "Emiratos Árabes Unidos-Italia": 5200,
    "Italia-Hong Kong": 9500, "Hong Kong-Italia": 9500,
    "Italia-Indonesia": 11500, "Indonesia-Italia": 11500,
    "Italia-Israel": 3000, "Israel-Italia": 3000,
    "Italia-Malasia": 10500, "Malasia-Italia": 10500,
    "Italia-Noruega": 2300, "Noruega-Italia": 2300,
    "Italia-Suecia": 2200, "Suecia-Italia": 2200,
    "Italia-Suiza": 500, "Suiza-Italia": 500,
    "Italia-Chile": 12100, "Chile-Italia": 12100,
    "Italia-Colombia": 9600, "Colombia-Italia": 9600,
    "Italia-Dinamarca": 1000, "Dinamarca-Italia": 1000,
    "Italia-Egipto": 2400, "Egipto-Italia": 2400,
    "Italia-Filipinas": 11900, "Filipinas-Italia": 11900,
    "Italia-Kazajistán": 7000, "Kazajistán-Italia": 7000,
    "Italia-Qatar": 5000, "Qatar-Italia": 5000,
    "Italia-Perú": 11000, "Perú-Italia": 11000,
    "Italia-Nueva Zelanda": 18500, "Nueva Zelanda-Italia": 18500,
    "Italia-Taiwán": 9500, "Taiwán-Italia": 9500,

    // Arabia Saudita y conexiones 
    "Arabia Saudita-Australia": 12000, "Australia-Arabia Saudita": 12000,
    "Arabia Saudita-Bélgica": 4700, "Bélgica-Arabia Saudita": 4700,
    "Arabia Saudita-Canadá": 10700, "Canadá-Arabia Saudita": 10700,
    "Arabia Saudita-Emiratos Árabes Unidos": 300, "Emiratos Árabes Unidos-Arabia Saudita": 300,
    "Arabia Saudita-Hong Kong": 7200, "Hong Kong-Arabia Saudita": 7200,
    "Arabia Saudita-Indonesia": 7000, "Indonesia-Arabia Saudita": 7000,
    "Arabia Saudita-Israel": 2100, "Israel-Arabia Saudita": 2100,
    "Arabia Saudita-Malasia": 7000, "Malasia-Arabia Saudita": 7000,
    "Arabia Saudita-Noruega": 7500, "Noruega-Arabia Saudita": 7500,
    "Arabia Saudita-Suecia": 7600, "Suecia-Arabia Saudita": 7600,
    "Arabia Saudita-Suiza": 5300, "Suiza-Arabia Saudita": 5300,
    "Arabia Saudita-Chile": 15500, "Chile-Arabia Saudita": 15500,
    "Arabia Saudita-Colombia": 13200, "Colombia-Arabia Saudita": 13200,
    "Arabia Saudita-Dinamarca": 4700, "Dinamarca-Arabia Saudita": 4700,
    "Arabia Saudita-Egipto": 1400, "Egipto-Arabia Saudita": 1400,
    "Arabia Saudita-Filipinas": 8100, "Filipinas-Arabia Saudita": 8100,
    "Arabia Saudita-Kazajistán": 3400, "Kazajistán-Arabia Saudita": 3400,
    "Arabia Saudita-Qatar": 150, "Qatar-Arabia Saudita": 150,
    "Arabia Saudita-Perú": 15000, "Perú-Arabia Saudita": 15000,
    "Arabia Saudita-Nueva Zelanda": 15500, "Nueva Zelanda-Arabia Saudita": 15500,
    "Arabia Saudita-Taiwán": 7000, "Taiwán-Arabia Saudita": 7000,

    // Australia y conexiones 
    "Australia-Bélgica": 16300, "Bélgica-Australia": 16300,
    "Australia-Canadá": 14000, "Canadá-Australia": 14000,
    "Australia-Emiratos Árabes Unidos": 11000, "Emiratos Árabes Unidos-Australia": 11000,
    "Australia-Hong Kong": 7800, "Hong Kong-Australia": 7800,
    "Australia-Indonesia": 4600, "Indonesia-Australia": 4600,
    "Australia-Israel": 13200, "Israel-Australia": 13200,
    "Australia-Malasia": 5100, "Malasia-Australia": 5100,
    "Australia-Noruega": 15000, "Noruega-Australia": 15000,
    "Australia-Suecia": 15100, "Suecia-Australia": 15100,
    "Australia-Suiza": 16000, "Suiza-Australia": 16000,
    "Australia-Chile": 11900, "Chile-Australia": 11900,
    "Australia-Colombia": 15700, "Colombia-Australia": 15700,
    "Australia-Dinamarca": 15000, "Dinamarca-Australia": 15000,
    "Australia-Egipto": 12100, "Egipto-Australia": 12100,
    "Australia-Filipinas": 5500, "Filipinas-Australia": 5500,
    "Australia-Kazajistán": 11300, "Kazajistán-Australia": 11300,
    "Australia-Qatar": 11000, "Qatar-Australia": 11000,
    "Australia-Perú": 13600, "Perú-Australia": 13600,
    "Australia-Nueva Zelanda": 2000, "Nueva Zelanda-Australia": 2000,
    "Australia-Taiwán": 7200, "Taiwán-Australia": 7200,

    // Bélgica y conexiones 
    "Bélgica-Canadá": 6300, "Canadá-Bélgica": 6300,
    "Bélgica-Emiratos Árabes Unidos": 5300, "Emiratos Árabes Unidos-Bélgica": 5300,
    "Bélgica-Hong Kong": 9600, "Hong Kong-Bélgica": 9600,
    "Bélgica-Indonesia": 11500, "Indonesia-Bélgica": 11500,
    "Bélgica-Israel": 3300, "Israel-Bélgica": 3300,
    "Bélgica-Malasia": 10500, "Malasia-Bélgica": 10500,
    "Bélgica-Noruega": 700, "Noruega-Bélgica": 700,
    "Bélgica-Suecia": 950, "Suecia-Bélgica": 950,
    "Bélgica-Suiza": 500, "Suiza-Bélgica": 500,
    "Bélgica-Chile": 13000, "Chile-Bélgica": 13000,
    "Bélgica-Colombia": 9000, "Colombia-Bélgica": 9000,
    "Bélgica-Dinamarca": 300, "Dinamarca-Bélgica": 300,
    "Bélgica-Egipto": 3500, "Egipto-Bélgica": 3500,
    "Bélgica-Filipinas": 11500, "Filipinas-Bélgica": 11500,
    "Bélgica-Kazajistán": 6800, "Kazajistán-Bélgica": 6800,
    "Bélgica-Qatar": 4500, "Qatar-Bélgica": 4500,
    "Bélgica-Perú": 10400, "Perú-Bélgica": 10400,
    "Bélgica-Nueva Zelanda": 18500, "Nueva Zelanda-Bélgica": 18500,
    "Bélgica-Taiwán": 10000, "Taiwán-Bélgica": 10000,

    // Canadá y conexiones
    "Canadá-Emiratos Árabes Unidos": 11000, "Emiratos Árabes Unidos-Canadá": 11000,
    "Canadá-Hong Kong": 12000, "Hong Kong-Canadá": 12000,
    "Canadá-Indonesia": 14000, "Indonesia-Canadá": 14000,
    "Canadá-Israel": 10000, "Israel-Canadá": 10000,
    "Canadá-Malasia": 14000, "Malasia-Canadá": 14000,
    "Canadá-Noruega": 6500, "Noruega-Canadá": 6500,
    "Canadá-Suecia": 6400, "Suecia-Canadá": 6400,
    "Canadá-Suiza": 6800, "Suiza-Canadá": 6800,
    "Canadá-Chile": 13000, "Chile-Canadá": 13000,
    "Canadá-Colombia": 4100, "Colombia-Canadá": 4100,
    "Canadá-Dinamarca": 5500, "Dinamarca-Canadá": 5500,
    "Canadá-Egipto": 10600, "Egipto-Canadá": 10600,
    "Canadá-Filipinas": 14000, "Filipinas-Canadá": 14000,
    "Canadá-Kazajistán": 11200, "Kazajistán-Canadá": 11200,
    "Canadá-Qatar": 11300, "Qatar-Canadá": 11300,
    "Canadá-Perú": 6700, "Perú-Canadá": 6700,
    "Canadá-Nueva Zelanda": 17400, "Nueva Zelanda-Canadá": 17400,
    "Canadá-Taiwán": 11100, "Taiwán-Canadá": 11100,

    // Emiratos Árabes Unidos y conexiones
    "Emiratos Árabes Unidos-Hong Kong": 6500, "Hong Kong-Emiratos Árabes Unidos": 6500,
    "Emiratos Árabes Unidos-Indonesia": 6400, "Indonesia-Emiratos Árabes Unidos": 6400,
    "Emiratos Árabes Unidos-Israel": 2400, "Israel-Emiratos Árabes Unidos": 2400,
    "Emiratos Árabes Unidos-Malasia": 6000, "Malasia-Emiratos Árabes Unidos": 6000,
    "Emiratos Árabes Unidos-Noruega": 6600, "Noruega-Emiratos Árabes Unidos": 6600,
    "Emiratos Árabes Unidos-Suecia": 6700, "Suecia-Emiratos Árabes Unidos": 6700,
    "Emiratos Árabes Unidos-Suiza": 5400, "Suiza-Emiratos Árabes Unidos": 5400,
    "Emiratos Árabes Unidos-Chile": 15000, "Chile-Emiratos Árabes Unidos": 15000,
    "Emiratos Árabes Unidos-Colombia": 12200, "Colombia-Emiratos Árabes Unidos": 12200,
    "Emiratos Árabes Unidos-Dinamarca": 5500, "Dinamarca-Emiratos Árabes Unidos": 5500,
    "Emiratos Árabes Unidos-Egipto": 2700, "Egipto-Emiratos Árabes Unidos": 2700,
    "Emiratos Árabes Unidos-Filipinas": 6000, "Filipinas-Emiratos Árabes Unidos": 6000,
    "Emiratos Árabes Unidos-Kazajistán": 3000, "Kazajistán-Emiratos Árabes Unidos": 3000,
    "Emiratos Árabes Unidos-Qatar": 130, "Qatar-Emiratos Árabes Unidos": 130,
    "Emiratos Árabes Unidos-Perú": 15000, "Perú-Emiratos Árabes Unidos": 15000,
    "Emiratos Árabes Unidos-Nueva Zelanda": 14100, "Nueva Zelanda-Emiratos Árabes Unidos": 14100,
    "Emiratos Árabes Unidos-Taiwán": 6200, "Taiwán-Emiratos Árabes Unidos": 6200,

    // Hong Kong y conexiones 
    "Hong Kong-Indonesia": 3500, "Indonesia-Hong Kong": 3500,
    "Hong Kong-Israel": 7700, "Israel-Hong Kong": 7700,
    "Hong Kong-Malasia": 4300, "Malasia-Hong Kong": 4300,
    "Hong Kong-Noruega": 8700, "Noruega-Hong Kong": 8700,
    "Hong Kong-Suecia": 8600, "Suecia-Hong Kong": 8600,
    "Hong Kong-Suiza": 9500, "Suiza-Hong Kong": 9500,
    "Hong Kong-Chile": 18400, "Chile-Hong Kong": 18400,
    "Hong Kong-Colombia": 15000, "Colombia-Hong Kong": 15000,
    "Hong Kong-Dinamarca": 7800, "Dinamarca-Hong Kong": 7800,
    "Hong Kong-Egipto": 6400, "Egipto-Hong Kong": 6400,
    "Hong Kong-Filipinas": 1800, "Filipinas-Hong Kong": 1800,
    "Hong Kong-Kazajistán": 4700, "Kazajistán-Hong Kong": 4700,
    "Hong Kong-Qatar": 6800, "Qatar-Hong Kong": 6800,
    "Hong Kong-Perú": 16000, "Perú-Hong Kong": 16000,
    "Hong Kong-Nueva Zelanda": 11300, "Nueva Zelanda-Hong Kong": 11300,
    "Hong Kong-Taiwán": 800, "Taiwán-Hong Kong": 800,

    // Indonesia y conexiones 
    "Indonesia-Israel": 8500, "Israel-Indonesia": 8500,
    "Indonesia-Malasia": 400, "Malasia-Indonesia": 400,
    "Indonesia-Noruega": 11800, "Noruega-Indonesia": 11800,
    "Indonesia-Suecia": 11800, "Suecia-Indonesia": 11800,
    "Indonesia-Suiza": 11800, "Suiza-Indonesia": 11800,
    "Indonesia-Chile": 16000, "Chile-Indonesia": 16000,
    "Indonesia-Colombia": 15300, "Colombia-Indonesia": 15300,
    "Indonesia-Dinamarca": 11600, "Dinamarca-Indonesia": 11600,
    "Indonesia-Egipto": 8700, "Egipto-Indonesia": 8700,
    "Indonesia-Filipinas": 3000, "Filipinas-Indonesia": 3000,
    "Indonesia-Kazajistán": 6200, "Kazajistán-Indonesia": 6200,
    "Indonesia-Qatar": 6200, "Qatar-Indonesia": 6200,
    "Indonesia-Perú": 15000, "Perú-Indonesia": 15000,
    "Indonesia-Nueva Zelanda": 5300, "Nueva Zelanda-Indonesia": 5300,
    "Indonesia-Taiwán": 3800, "Taiwán-Indonesia": 3800,

    // Israel y conexiones 
    "Israel-Malasia": 7500, "Malasia-Israel": 7500,
    "Israel-Noruega": 4300, "Noruega-Israel": 4300,
    "Israel-Suecia": 3600, "Suecia-Israel": 3600,
    "Israel-Suiza": 2700, "Suiza-Israel": 2700,
    "Israel-Chile": 13100, "Chile-Israel": 13100,
    "Israel-Colombia": 11800, "Colombia-Israel": 11800,
    "Israel-Dinamarca": 3400, "Dinamarca-Israel": 3400,
    "Israel-Egipto": 500, "Egipto-Israel": 500,
    "Israel-Filipinas": 8700, "Filipinas-Israel": 8700,
    "Israel-Kazajistán": 3700, "Kazajistán-Israel": 3700,
    "Israel-Qatar": 2000, "Qatar-Israel": 2000,
    "Israel-Perú": 13000, "Perú-Israel": 13000,
    "Israel-Nueva Zelanda": 16500, "Nueva Zelanda-Israel": 16500,
    "Israel-Taiwán": 7600, "Taiwán-Israel": 7600,

    // Malasia y conexiones 
    "Malasia-Noruega": 10300, "Noruega-Malasia": 10300,
    "Malasia-Suecia": 10200, "Suecia-Malasia": 10200,
    "Malasia-Suiza": 10400, "Suiza-Malasia": 10400,
    "Malasia-Chile": 17500, "Chile-Malasia": 17500,
    "Malasia-Colombia": 16200, "Colombia-Malasia": 16200,
    "Malasia-Dinamarca": 10500, "Dinamarca-Malasia": 10500,
    "Malasia-Egipto": 8200, "Egipto-Malasia": 8200,
    "Malasia-Filipinas": 1400, "Filipinas-Malasia": 1400,
    "Malasia-Kazajistán": 7000, "Kazajistán-Malasia": 7000,
    "Malasia-Qatar": 6300, "Qatar-Malasia": 6300,
    "Malasia-Perú": 16500, "Perú-Malasia": 16500,
    "Malasia-Nueva Zelanda": 7300, "Nueva Zelanda-Malasia": 7300,
    "Malasia-Taiwán": 3300, "Taiwán-Malasia": 3300,

    // Noruega y conexiones 
    "Noruega-Suecia": 400, "Suecia-Noruega": 400,
    "Noruega-Suiza": 1600, "Suiza-Noruega": 1600,
    "Noruega-Chile": 13700, "Chile-Noruega": 13700,
    "Noruega-Colombia": 10600, "Colombia-Noruega": 10600,
    "Noruega-Dinamarca": 500, "Dinamarca-Noruega": 500,
    "Noruega-Egipto": 3700, "Egipto-Noruega": 3700,
    "Noruega-Filipinas": 10500, "Filipinas-Noruega": 10500,
    "Noruega-Kazajistán": 6500, "Kazajistán-Noruega": 6500,
    "Noruega-Qatar": 5300, "Qatar-Noruega": 5300,
    "Noruega-Perú": 11500, "Perú-Noruega": 11500,
    "Noruega-Nueva Zelanda": 17400, "Nueva Zelanda-Noruega": 17400,
    "Noruega-Taiwán": 8600, "Taiwán-Noruega": 8600,

    // Suecia y conexiones 
    "Suecia-Suiza": 1400, "Suiza-Suecia": 1400,
    "Suecia-Chile": 13700, "Chile-Suecia": 13700,
    "Suecia-Colombia": 10600, "Colombia-Suecia": 10600,
    "Suecia-Dinamarca": 600, "Dinamarca-Suecia": 600,
    "Suecia-Egipto": 3200, "Egipto-Suecia": 3200,
    "Suecia-Filipinas": 9800, "Filipinas-Suecia": 9800,
    "Suecia-Kazajistán": 5500, "Kazajistán-Suecia": 5500,
    "Suecia-Qatar": 4600, "Qatar-Suecia": 4600,
    "Suecia-Perú": 11500, "Perú-Suecia": 11500,
    "Suecia-Nueva Zelanda": 17800, "Nueva Zelanda-Suecia": 17800,
    "Suecia-Taiwán": 8500, "Taiwán-Suecia": 8500,

    // Suiza y conexiones
    "Suiza-Chile": 12000, "Chile-Suiza": 12000,
    "Suiza-Colombia": 10200, "Colombia-Suiza": 10200,
    "Suiza-Dinamarca": 800, "Dinamarca-Suiza": 800,
    "Suiza-Egipto": 3000, "Egipto-Suiza": 3000,
    "Suiza-Filipinas": 10500, "Filipinas-Suiza": 10500,
    "Suiza-Kazajistán": 6000, "Kazajistán-Suiza": 6000,
    "Suiza-Qatar": 4700, "Qatar-Suiza": 4700,
    "Suiza-Perú": 11300, "Perú-Suiza": 11300,
    "Suiza-Nueva Zelanda": 18100, "Nueva Zelanda-Suiza": 18100,
    "Suiza-Taiwán": 9500, "Taiwán-Suiza": 9500,

    // Chile y conexiones
    "Chile-Colombia": 3800, "Colombia-Chile": 3800,
    "Chile-Dinamarca": 12000, "Dinamarca-Chile": 12000,
    "Chile-Egipto": 13700, "Egipto-Chile": 13700,
    "Chile-Filipinas": 16100, "Filipinas-Chile": 16100,
    "Chile-Kazajistán": 17500, "Kazajistán-Chile": 17500,
    "Chile-Qatar": 15300, "Qatar-Chile": 15300,
    "Chile-Perú": 2700, "Perú-Chile": 2700,
    "Chile-Nueva Zelanda": 11800, "Nueva Zelanda-Chile": 11800,
    "Chile-Taiwán": 18000, "Taiwán-Chile": 18000,

    // Colombia y conexiones
    "Colombia-Dinamarca": 8800, "Dinamarca-Colombia": 8800,
    "Colombia-Egipto": 10600, "Egipto-Colombia": 10600,
    "Colombia-Filipinas": 14500, "Filipinas-Colombia": 14500,
    "Colombia-Kazajistán": 12400, "Kazajistán-Colombia": 12400,
    "Colombia-Qatar": 11500, "Qatar-Colombia": 11500,
    "Colombia-Perú": 1400, "Perú-Colombia": 1400,
    "Colombia-Nueva Zelanda": 16100, "Nueva Zelanda-Colombia": 16100,
    "Colombia-Taiwán": 14500, "Taiwán-Colombia": 14500,

    // Dinamarca y conexiones
    "Dinamarca-Egipto": 3500, "Egipto-Dinamarca": 3500,
    "Dinamarca-Filipinas": 10400, "Filipinas-Dinamarca": 10400,
    "Dinamarca-Kazajistán": 6400, "Kazajistán-Dinamarca": 6400,
    "Dinamarca-Qatar": 5300, "Qatar-Dinamarca": 5300,
    "Dinamarca-Perú": 11500, "Perú-Dinamarca": 11500,
    "Dinamarca-Nueva Zelanda": 17900, "Nueva Zelanda-Dinamarca": 17900,
    "Dinamarca-Taiwán": 8300, "Taiwán-Dinamarca": 8300,

    // Egipto y conexiones
    "Egipto-Filipinas": 8400, "Filipinas-Egipto": 8400,
    "Egipto-Kazajistán": 4200, "Kazajistán-Egipto": 4200,
    "Egipto-Qatar": 2200, "Qatar-Egipto": 2200,
    "Egipto-Perú": 11500, "Perú-Egipto": 11500,
    "Egipto-Nueva Zelanda": 16300, "Nueva Zelanda-Egipto": 16300,
    "Egipto-Taiwán": 7500, "Taiwán-Egipto": 7500,

    // Filipinas y conexiones
    "Filipinas-Kazajistán": 6200, "Kazajistán-Filipinas": 6200,
    "Filipinas-Qatar": 6800, "Qatar-Filipinas": 6800,
    "Filipinas-Perú": 15300, "Perú-Filipinas": 15300,
    "Filipinas-Nueva Zelanda": 7500, "Nueva Zelanda-Filipinas": 7500,
    "Filipinas-Taiwán": 2500, "Taiwán-Filipinas": 2500,

    // Kazajistán y conexiones
    "Kazajistán-Qatar": 4300, "Qatar-Kazajistán": 4300,
    "Kazajistán-Perú": 14000, "Perú-Kazajistán": 14000,
    "Kazajistán-Nueva Zelanda": 15600, "Nueva Zelanda-Kazajistán": 15600,
    "Kazajistán-Taiwán": 6700, "Taiwán-Kazajistán": 6700,

    // Qatar y conexiones
    "Qatar-Perú": 13000, "Perú-Qatar": 13000,
    "Qatar-Nueva Zelanda": 17100, "Nueva Zelanda-Qatar": 17100,
    "Qatar-Taiwán": 6300, "Taiwán-Qatar": 6300,

    // Perú y conexiones
    "Perú-Nueva Zelanda": 11700, "Nueva Zelanda-Perú": 11700,
    "Perú-Taiwán": 14400, "Taiwán-Perú": 14400,

    // Nueva Zelanda y Taiwán
    "Nueva Zelanda-Taiwán": 9500, "Taiwán-Nueva Zelanda": 9500,

};


// Función para calcular distancia basada en origen y destino
function calcularDistancia(origen, destino, transporte) {
    const clave = `${origen}-${destino}`;


    // Si es terrestre, verificamos si es factible
    if (transporte === "terrestre") {
        // Solo permitimos conexiones entre países cercanos por tierra
        const rutasTerrestres = [
            "España-Francia",
            "España-Alemania",
            "España-Reino Unido",
            "España-Suecia",
            "España-Suiza",
            "España-Dinamarca",
            "España-Bélgica",
        
            // Francia
            "Francia-España",
            "Francia-Alemania",
            "Francia-Reino Unido",
            "Francia-Suiza",
            "Francia-Bélgica",
            "Francia-Dinamarca",
        
            // Alemania
            "Alemania-España",
            "Alemania-Francia",
            "Alemania-Reino Unido",
            "Alemania-Suiza",
            "Alemania-Bélgica",
            "Alemania-Dinamarca",
            "Alemania-Suecia",
        
            // Reino Unido
            "Reino Unido-España",
            "Reino Unido-Francia",
            "Reino Unido-Alemania",
        
            // Suecia
            "Suecia-Dinamarca",
            "Suecia-Alemania",
            "Suecia-Bélgica",
            "Suecia-Suiza",
        
            // Suiza
            "Suiza-Alemania",
            "Suiza-Francia",
            "Suiza-Bélgica",
            "Suiza-Dinamarca",
            "Suiza-España",
        
            // Bélgica
            "Bélgica-Francia",
            "Bélgica-Alemania",
            "Bélgica-Dinamarca",
            "Bélgica-Suiza",
            "Bélgica-España",
        
            // Dinamarca
            "Dinamarca-Alemania",
            "Dinamarca-Francia",
            "Dinamarca-Bélgica",
            "Dinamarca-Suecia",
            "Dinamarca-España",
            "Dinamarca-Suiza",

                // América
            "Chile-Perú",
            "Chile-Brasil",
            "Chile-Colombia",
            "Colombia-Perú",
            "Colombia-Brasil",
            "Colombia-Chile",
            "Brasil-Perú",
            "Brasil-Chile",
            "Brasil-Colombia",
            "Perú-Chile",
            "Perú-Colombia",
            "Perú-Brasil",
            "Argentina-Chile",
            "Argentina-Brasil",
            "Argentina-Paraguay",
            "Argentina-Bolivia",
            "Argentina-Uruguay",
            "Chile-Argentina",
            "Brasil-Argentina",
            "Paraguay-Argentina",
            "Bolivia-Argentina",
            "Uruguay-Argentina"
        ];
        if (!rutasTerrestres.includes(clave)) {
            return -1; // Devuelve -1 si no es posible por tierra
        }
    }


    return distancias[clave] || 0; // Devuelve la distancia o 0 si no hay datos
}


function calcularTiempoEntrega() {
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const transporte = document.getElementById("transporte").value;

    const distancia = calcularDistancia(origen, destino, transporte);

    if (distancia === -1) {
        document.getElementById("resultado-tiempo").textContent =
            "No se puede realizar el transporte terrestre entre estos países.";
        return;
    }

    if (distancia === 0) {
        document.getElementById("resultado-tiempo").textContent =
            "No hay datos disponibles para esta ruta.";
        return;
    }

    let tiempo; // Tiempo en días u horas

    switch (transporte) {
        case "terrestre":
            // Calcular el tiempo en horas para transporte terrestre
            tiempo = distancia / 90; // 90 km/h
            const horasTerrestre = Math.floor(tiempo); // Parte entera (horas)
            const minutosTerrestre = Math.round((tiempo - horasTerrestre) * 60); // Parte decimal convertida a minutos
            document.getElementById("resultado-tiempo").textContent = `
                Distancia: ${distancia} km.
                Tiempo estimado: ${horasTerrestre} hora(s) y ${minutosTerrestre} minuto(s) en transporte terrestre.
            `;
            return;

        case "maritimo":
            // Mantener el cálculo en días para transporte marítimo
            tiempo = distancia / 720; // 720 km por día
            break;

        case "aereo":
            // Siempre mostrar el tiempo en horas para transporte aéreo
            tiempo = distancia / 790;
            const horasAereo = Math.floor(tiempo); // Parte entera (horas)
            const minutosAereo = Math.round((tiempo - horasAereo) * 60); // Parte decimal convertida a minutos
            document.getElementById("resultado-tiempo").textContent = `
                Distancia: ${distancia} km.
                Tiempo estimado: ${horasAereo} hora(s) y ${minutosAereo} minuto(s) en transporte aéreo.
            `;
            return;

        default:
            tiempo = 0;
    }

    // Mostrar el resultado en días (solo para transporte marítimo)
    const tiempoRedondeado = Math.ceil(tiempo);
    document.getElementById("resultado-tiempo").textContent = `
        Distancia: ${distancia} km.
        Tiempo estimado: ${tiempoRedondeado} día(s) en transporte marítimo.
    `;
}



// Añadir evento al botón
document.getElementById("calcular-tiempo").addEventListener("click", calcularTiempoEntrega);


// Animación resultado
document.getElementById('calcular-tiempo').addEventListener('click', function() {
    var resultado = document.getElementById('resultado-tiempo');


    // Aseguramos que el resultado no se ve antes de la animación
    resultado.style.display = 'block';


    // Activamos la animación de caída y escalado
    resultado.style.animation = 'caerYCrecer 0.6s forwards ease-out';
});

function mostrarArticulo(id) {
    var articulo = document.getElementById('articulo-' + id);
    // Alterna entre mostrar y ocultar el artículo completo
    if (articulo.style.display === "none" || articulo.style.display === "") {
        articulo.style.display = "block";
    } else {
        articulo.style.display = "none";
    }
}

function openModal(id, event) {
  event.preventDefault(); // ¡Evita el salto hacia arriba!
    document.getElementById('modal-' + id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById('modal-' + id).style.display = 'none';
}

    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');
    
    const GA_MEASUREMENT_ID = 'G-9G78K6JBFB';
    
    if (!localStorage.getItem('cookies-analytics')) {
        banner.style.display = 'block';
    } else if (localStorage.getItem('cookies-analytics') === 'accepted') {
        banner.style.display = 'none';
        loadAnalytics();
    } else {
        banner.style.display = 'none';
    }
    
      // Función para cargar Google Analytics
    function loadAnalytics() {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);
    
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID);
    }
    
      // Aceptar cookies
    acceptBtn.onclick = () => {
        localStorage.setItem('cookies-analytics', 'accepted');
        loadAnalytics();
        banner.style.display = 'none';
    };
    
      // Rechazar cookies
    rejectBtn.onclick = () => {
        localStorage.setItem('cookies-analytics', 'rejected');
        banner.style.display = 'none';
    };
    
      // Si ya aceptó anteriormente, cargar Analytics automáticamente
    if (localStorage.getItem('cookies-analytics') === 'accepted') {
        loadAnalytics();
    }

    function savePreferences() {
    const analiticas = document.getElementById('cookies-analiticas').checked;
    const marketing = document.getElementById('cookies-marketing').checked;

  // Guarda en localStorage (o cookies)
    localStorage.setItem('cookies_analiticas', analiticas);
    localStorage.setItem('cookies_marketing', marketing);

    alert('Preferencias guardadas.');

    closeModal('preferencias');

    if (!analiticas) {
    // Desactivar Google Analytics (puedes borrar cookies o bloquear scripts)
        console.log('Google Analytics desactivado');
    } else {
        console.log('Google Analytics activado');
    }
}
