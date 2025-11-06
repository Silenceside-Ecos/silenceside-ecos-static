import { Eco } from "../models/eco";
import { Espacio } from "../models/espacio";
import { Nivel } from "../models/nivel";
import { Objetivo } from "../models/objetivo";
import { Serie } from "../models/serie";
import { Taller } from "../models/taller";

export const getStaticEspaciosE = (): Espacio[] => {
    const serie1 = new Serie(
        1,
        'Serie I. El ser y el silencio (la denuncia o la revelación)',
        'Enfocada en el conocimiento, el aprendizaje y la transformación personal con la creación de un protocolo propio.',
        [
            new Objetivo('Conocer los aspectos relacionados con lo que el cuerpo calla.'),
            new Objetivo('Aprender diferentes habilidades para develar y cambiar lo que el cuerpo calla.'),
        ],
        [
            new Taller(1, 'Taller 1. La estructura básica del ser. El asiento de lo que el cuerpo calla.', ''),
            new Taller(2, 'Taller 2. Expresión de la estructura básica. La identidad y los espejos.', ''),
            new Taller(3, 'Taller 3. Mecanismo de expresión de la estructura básica. Parte 1: Las emociones, sentimientos, sensaciones. Las VAC.', ''),
            new Taller(4, 'Taller 4. Mecanismo de expresión de la estructura básica. Parte 2: Los pensamientos, las creencias y los valores.', ''),
            new Taller(5, 'Taller 5. Mecanismo de expresión de la estructura básica. Parte 3: El lenguaje comunicacional del cuerpo.', ''),
            new Taller(6, 'Taller 6. La expresión de la denuncia.', ''),
            new Taller(7, 'Taller 7. La autogestión de las memorias silenciadas.', ''),
        ]
    );

    const serie2 = new Serie(
        2,
        'Serie II. Los bucles y la dinámica perpetua',
        'Enfocada en los ciclos que el ser vivencia y en aprender a desprogramar los patrones vivenciales ancestrales.',
        [
            new Objetivo('Conocer los ciclos del tiempo y su dinámica.'),
            new Objetivo('Adquirir habilidades para desprogramar los bucles residuales ancestrales y remodelar su propia vida.'),
        ],
        [
            new Taller(8, 'Taller 8. El tiempo y los ciclos.', ''),
            new Taller(9, 'Taller 9. Las memorias del ser.', ''),
        ]
    );

    const nivel1EcoSer = new Nivel(
        1,
        'Nivel 1 Inicial. Lo que el cuerpo calla',
        'Este nivel inicial permite encontrar su huella ancestral causante de lo que el cuerpo calla y cómo se expresa en su cuerpo (físico-mental-emocional-espiritual). Consta de dos series.',
        [serie1, serie2]
    );

    const nivel2EcoSer = new Nivel(
        2,
        'Nivel 2 Medio. La realidad y la ilusión',
        'Este nivel está enfocado en el entendimiento de la realidad como imaginario, ilusión o entorno evidente, así como el logro de la transformación interna y externa del ser para su crecimiento y desarrollo como Humano.',
        []
    );
    
    nivel2EcoSer.series.push(new Serie(
        1,
        'Serie I. La realidad y la ilusión',
        'Enfocada en el crecimiento y desarrollo del ser como humano.',
        [
            new Objetivo('Conocer los aspectos de las diferentes realidades.'),
            new Objetivo('Crear habilidades para develar la ilusión y cambiar la realidad.'),
        ],
        [
            new Taller(1, 'Taller I. La realidad y la ilusión parte 1.', ''),
            new Taller(2, 'Taller II. La realidad y la ilusión parte 2.', '')
        ]
    ));

    nivel2EcoSer.series.push(new Serie(
        1,
        'Serie II. La transformación interna y externa del ser',
        'Enfocada en el crecimiento y desarrollo del ser como humano.',
        [
            new Objetivo('Practicar habilidades para develar la ilusión y cambiar la realidad.'),
        ],
        [
            new Taller(1, 'Taller I. La transformación interna y externa parte 1.', ''),
            new Taller(2, 'Taller II. La transformación interna y externa parte 2.', '')
        ]
    ));

    const nivel3EcoSer = new Nivel(
        3,
        'Nivel 3 Avanzado. La Realidad y la Misión de vida',
        'Enfocada en el entendimiento del Ser ante las pruebas y desafíos que la Realidad genuina y cambiante propone, conociendo que todo lo que acontece, son escalones de una Gran escalera, que uno decide si subir o bajar. Todo esto con el objetivo de llevar a cabo la verdadera Misión del Ser como Humano.',
        []
    );

    nivel3EcoSer.series.push(new Serie(
        1,
        'Serie I. Las pruebas y desafíos. El cambio',
        'Enfocada en el entendimiento del Ser.',
        [
            new Objetivo('Conocer los aspectos referentes a la misión de cada ser.'),
            new Objetivo('Crear habilidades para afrontar las pruebas y los desafíos.'),
            new Objetivo('Entender el cambio.'),
        ],
        [
            new Taller(1, 'Taller I. Las pruebas y desafíos.', ''),
            new Taller(2, 'Taller II. El verdadero cambio.', '')
        ]
    ));

    nivel3EcoSer.series.push(new Serie(
        1,
        'Serie II. La Misión y el propósito del Ser',
        'Enfocada en el entendimiento del Ser.',
        [
            new Objetivo('Entender el propósito primordial.'),
        ],
        [
            new Taller(1, 'Taller I. Misión y tareas.', ''),
            new Taller(2, 'Taller II. Propósito primordial del Ser.', '')
        ]
    ));

    const espacio = new Espacio(
        1,
        'Espacios_e',
        'Espacios_e es una propuesta de encuentros, talleres y seminarios, que propicia el aprendizaje, crecimiento y desarrollo humano personal y grupal, a través del conocimiento y entendimiento de los Saberes Integrados que constituyen la base del sostenimiento del Bienestar del Ser.',
        [nivel1EcoSer, nivel2EcoSer, nivel3EcoSer]
    );

    const ecoSer = new Eco(
        1,
        'Ecos del Ser',
        `Ecos del ser es una propuesta de Espacios_e para el conocimiento y entendimiento de los Saberes Integrados que constituyen la base del sostenimiento del Bienestar del Ser.

Se refiere a todo lo que está resonando como un eco dentro la conciencia profunda, como forma de llamar la atención de la conciencia superficial.

Su objetivo fundamental es aprender desde lo personal y lo grupal, aquellas lecciones básicas y silenciadas, que forman parte de nuestra sabiduría como seres humanos y que se entrelazan con los conocimientos avanzados del día de hoy.

La información incluye la realización de diversas actividades como talleres, seminarios, encuentros, coloquios, así como entrenamientos personalizados y grupales.

Los encuentros se implementan en 3 tiempos o niveles, donde cada nivel abarca series informativo-prácticas, que propicia de manera escalonada la conexión y adquisición de conocimientos y recursos para el aprendizaje, el crecimiento y el desarrollo humano personal y grupal.`,
        [nivel1EcoSer]
    );    

    return [espacio];
};