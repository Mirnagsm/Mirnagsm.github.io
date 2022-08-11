//Arreglo para mostrar los diferentes números, preguntas, respuetas y opciones.

let questions = [
{
    numb: 1,
    question: "1) ¿Cuál de los siguientes autores es venezolano?",
    answer: "d)	Rómulo Gallegos.",
    options: [
        "a)	Isabel Allende.",
        "b)	Jorge Luis Borges.",
        "c)	Arturo Uslar Prieto.",
        "d)	Rómulo Gallegos."
    ]
},

{
    numb: 2,
    question: "2) ¿Cuáles de los siguientes países poseen la estación de invierno en junio y el verano en diciembre?",
    answer: "c)	Argentina y Chile.",
    options: [
        "a)	Estados Unidos y Alemania.",
        "b)	Rusia y México.",
        "c)	Argentina y Chile.",
        "d)	Brasil y Colombia."
    ]
},

{
    numb: 3,
    question: "3) ¿Cómo comenzó la Primera Guerra Mundial?",
    answer: "b) Con el asesinato del archiduque Francisco Fernando.",
    options: [
        "a) Con el intento de asesinato del príncipe belga Leopold.",
        "b) Con el asesinato del archiduque Francisco Fernando.", 
        "c) Con la batalla de Gallipoli.",
        "d) Invasión Nazi a Polonia."
    ]
},

{
    numb: 4,
    question: "4) ¿En qué año descubrió Cristóbal Colón la tierra de América?",
    answer: "c) 1492",
    options: [
        "a) 1592",
        "b) 1632", 
        "c) 1492" ,
        "d) 1498"
    ]
},

{
    numb: 5,
    question: "5) ¿Quién escribió “La Divina Comedia”?",
    answer: "d) Dante Alighieri",
    options: [
        "a) Tolstoi",
        "b) Víctor Hugo", 
        "c) Jean Jacques-Rousseau",
        "d) Dante Alighieri"
    ]
},

{
    numb: 6,
    question: "6) ¿Qué famosa batalla perdió y dejó humillado a Napoleón Bonaparte?",
    answer: "d) Batalla de Waterloo",
    options: [
        "a) La batalla del Solsticio",
        "b) Batalla de Austerlitz", 
        "c) La campaña del Aerlinness.",
        "d) Batalla de Waterloo"
    ]
},

{
    numb: 7,
    question: "7) ¿Quién fue el primer presidente de los Estados Unidos?",
    answer: "c) George Wasghington",
    options: [
        "a) Thomas Jefferson",
        "b) John Andrew", 
        "c) George Wasghington",
        "d) Alexander Hamilton"
    ]
},

{
    numb: 8,
    question: "8) ¿Cuánto estados tiene Venezuela?",
    answer: "c) 23 y un estado en reclamación",
    options: [
        "a) 24 y un estado en reclamación",
        "b) 25 y un estado en reclamación", 
        "c) 23 y un estado en reclamación",
        "d) 24"
    ]
},

{
    numb: 9,
    question: "9) ¿Cuántos continentes existen actualmente?",
    answer: "b) 5",
    options: [
        "a) 4",
        "b) 5", 
        "c) 3",
        "d) 6"
    ]
},

{
    numb: 10,
    question: "10) ¿Qué es una palabra esdrújula?",
    answer: "d) Palabra que lleva el acento en la antepenúltima sílaba.",
    options: [
        "a) Palabra que lleva acento en la última sílaba",
        "b) Palabra que lleva acento en la penúltima sílaba.", 
        "c) Palabra que se acentúa cuándo acaba en -cion.",
        "d) Palabra que lleva el acento en la antepenúltima sílaba."
    ]
},

{
    numb: 11,
    question: "11) ¿Qué imperio conquistó el antiguo Egipto?",
    answer: "c) El imperio romano",
    options: [
        "a) El imperio griego",
        "b) El imperio bizantino", 
        "c) El imperio romano",
        "d) El imperio otomano"
    ]
},
{
    numb: 12,
    question: "12) ¿En qué consiste el recurso literario denominado “Anáfora”?",
    answer: "b) Repetición de una palabra o de un grupo de ellas al inicio de una frase o verso.",
    options: [
        "a) La imitación escrita de un sonido o un fenómeno",
        "b) Repetición de una palabra o de un grupo de ellas al inicio de una frase o verso.", 
        "c)  Repetición de una o varias palabras al final de un verso.",
        "d) Contraposición de dos frases opuestas para enfatizar una idea"
    ]
},

{
    numb: 13,
    question: "13) ¿Cuáles son los países que conforman al reino unido?",
    answer: "c) Escocia, Irlanda del norte, Gales e Inglaterra.",
    options: [
        "a) Inglaterra",
        "b) Gales, Irlanda del norte, Holanda e Inglaterra.", 
        "c) Escocia, Irlanda del norte, Gales e Inglaterra.",
        "d) Escocia, Holanda, Suiza e Inglaterra."
    ]
},

{
    numb: 14,
    question: "14) ¿Qué función tenían las pirámides en el antiguo Egipto?",
    answer: "c) Eran monumentos funerarios.",
    options: [
        "a) Eran monumentos para resguardar las riquezas de Egipto.",
        "b) Eran monumentos construidos en honor a los dioses.", 
        "c) Eran monumentos funerarios.",
        "d) Eran monumentos para honrar en vida a sus faraones."
    ]
},

{
    numb: 15,
    question: "15) ¿Cuál es el río más grande del mundo?",
    answer: "d) Río Amazonas",
    options: [
        "a) Río Nilo",
        "b) Río Congo", 
        "c) Río Misisipi",
        "d) Río Amazonas"
    ]
},

{
    numb: 16,
    question: "16) ¿Cuál es el idioma más hablado del mundo (Sin incluir a las personas bilingües)?",
    answer: "c) Chino",
    options: [
        "a) Español",
        "b) Inglés", 
        "c) Chino",
        "d) Japonés"
    ]
},

{
    numb: 17,
    question: "17) ¿Qué es la narración?",
    answer: "b) Es el relato de unos hechos reales o imaginarios que les suceden a unos personajes en un lugar.",
    options: [
        "a) Es explicar, de forma detallada y ordenada, cómo son las personas, los lugares o los objetos.",
        "b) Es el relato de unos hechos reales o imaginarios que les suceden a unos personajes en un lugar.", 
        "c) Es el orden cronológico de un conjunto de hechos.",
        "d) Reproduce de forma directa las palabras que se cruzan entre dos o más personas."
    ]
},

{
    numb: 18,
    question: "18) Reproduce de forma directa las palabras que se cruzan entre dos o más personas.",
    answer: "d) 1994-1999",
    options: [
        "a) 1993-1999",
        "b) 1993-1998", 
        "c) 1994-1998",
        "d) 1994-1999"
    ]
},

{
    numb: 19,
    question: "19) ¿Cuáles países libertó Simón Bolívar?",
    answer: "b) Ecuador, Colombia, Chile, Bolivia y Venezuela.",
    options: [
        "a)  Bolivia, Colombia y Venezuela.",
        "b) Ecuador, Colombia, Chile, Bolivia y Venezuela.", 
        "c) Bolivia, Colombia, Ecuador, Perú y Venezuela.",
        "d) Colombia, Venezuela y Ecuador."
    ]
},

{
    numb: 20,
    question: "20) ¿Cuáles son las capas principales de la estructura interna de la Tierra?",
    answer: "b) Manto, corteza y núcleo.",
    options: [
        "a) Manto, tierra y núcleo.",
        "b) Manto, corteza y núcleo.", 
        "c) Corteza, magma y tierra.",
        "d) Atmósfera, hidrósfera y litósfera"
    ]
},

];