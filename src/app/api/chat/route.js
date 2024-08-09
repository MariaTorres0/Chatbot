import { NextResponse } from 'next/server'; // Importa NextResponse desde el módulo next/server para manejar las respuestas del servidor

// Define una función asincrónica que maneja las solicitudes POST
export async function POST(request) {
    // Extrae el mensaje del cuerpo de la solicitud y espera a que se convierta en un objeto JSON
    const { message } = await request.json();

    // Inicializa una variable de respuesta con un mensaje predeterminado
    let reply = 'No entiendo tu pregunta.';


    //Información académica y administrativa

        //¿Cuál es el calendario académico para este semestre? 
    if (message.toLowerCase().includes('calendario académico')) {
        reply = 'Puedes encontrar el calendario académico para este semestre en la página oficial de la Universidad Don Bosco o en el portal estudiantil. Incluye las fechas de inicio y finalización de clases, períodos de exámenes y feriados.';

        //¿Dónde puedo encontrar mi horario de clases? 
    } else if (message.toLowerCase().includes('horario de clases')) {
        reply = 'Tu horario de clases está disponible en el portal estudiantil de la Universidad Don Bosco. Inicia sesión con tu usuario y contraseña, y dirígete a la sección de "Horario". Las clases se imparten de lunes a viernes de 6:00 a.m. a 8:00 p.m., y los sábados de 7:00 a.m. a 5:00 p.m.';

        //¿Cuándo son los períodos de inscripción para cursos? 
    } else if (message.toLowerCase().includes('períodos de inscripción')) {
        reply = 'Los períodos de inscripción para cursos suelen anunciarse en el calendario académico. Revisa el portal estudiantil, comunícate con la oficina de registro de la Universidad Don Bosco, o llama al 2251-8241 para más detalles.';


    // Recursos y servicios del campus

        //¿Dónde está la biblioteca y cuáles son sus horarios? 
    } else if (message.toLowerCase().includes('biblioteca')) {
        reply = 'La biblioteca de la Universidad Don Bosco está ubicada en el edificio principal del campus. Sus horarios son de lunes a viernes de 8:00 a.m. a 10:00 p.m., y los sábados de 9:00 a.m. a 5:00 p.m.';
        //¿Cómo puedo contactar al departamento de servicios estudiantiles?
    } else if (message.toLowerCase().includes('servicios estudiantiles')) {
        reply = 'Puedes contactar al departamento de servicios estudiantiles de la Universidad Don Bosco por correo electrónico, teléfono (2251-8241), o visitando su oficina en el edificio de servicios académicos. Los detalles de contacto están disponibles en el sitio web de la universidad.';
        //¿Hay algún evento importante en el campus esta semana? 
    } else if (message.toLowerCase().includes('evento importante')) {
        reply = 'Sí, puedes consultar la agenda de eventos en el portal estudiantil o en las carteleras alrededor del campus para ver los eventos importantes programados para esta semana en la Universidad Don Bosco.';


    // Apoyo y bienestar estudiantil

        //¿Dónde puedo obtener ayuda si estoy experimentando estrés o problemas emocionales?
    } else if (message.toLowerCase().includes('estrés') || message.toLowerCase().includes('problemas emocionales')) {
        reply = 'Puedes obtener ayuda contactando al centro de bienestar estudiantil de la Universidad Don Bosco. Ofrecen servicios de consejería y apoyo emocional. Puedes programar una cita en línea, visitarlos directamente en su oficina en el campus, o llamarlos al 2251-8241.';
        //¿Cuáles son los recursos disponibles para estudiantes con discapacidades? 
    } else if (message.toLowerCase().includes('recursos disponibles para estudiantes con discapacidades')) {
        reply = 'La Universidad Don Bosco ofrece varios recursos para estudiantes con discapacidades, incluyendo asistencia tecnológica, adaptaciones en exámenes, y apoyo personalizado. Puedes contactar a la oficina de servicios para estudiantes con discapacidades para más información llamando al 2251-8241.';
        //¿Qué servicios de asesoramiento o tutoría están disponibles para mejorar mi rendimiento académico? 
    } else if (message.toLowerCase().includes('asesoramiento') || message.toLowerCase().includes('tutoría')) {
        reply = 'La Universidad Don Bosco ofrece servicios de tutoría y asesoramiento académico a través del centro de aprendizaje. Puedes inscribirte para recibir tutorías en materias específicas o recibir asesoramiento sobre técnicas de estudio. Para más información, llama al 2251-8241.';


    // Orientación sobre carrera y desarrollo profesional

        //¿Cómo puedo encontrar pasantías o prácticas profesionales relevantes para mi carrera? 
    } else if (message.toLowerCase().includes('pasantías') || message.toLowerCase().includes('prácticas profesionales')) {
        reply = 'Puedes encontrar pasantías y prácticas profesionales a través del centro de carreras de la Universidad Don Bosco. También puedes asistir a ferias de empleo y talleres organizados en el campus. Para más detalles, puedes llamar al 2251-8241.';
        //¿Qué recursos ofrece la universidad para ayudarme a escribir mi currículum vitae? 
    } else if (message.toLowerCase().includes('currículum vitae')) {
        reply = 'El centro de desarrollo profesional de la Universidad Don Bosco ofrece talleres y sesiones de revisión de currículum. Puedes agendar una cita para recibir asesoramiento personalizado o asistir a los talleres programados. Para más información, comunícate al 2251-8241.';
        //¿Hay talleres disponibles para prepararme para entrevistas de trabajo?
    } else if (message.toLowerCase().includes('talleres disponibles para prepararme para entrevistas')) {
        reply = 'Sí, la Universidad Don Bosco organiza regularmente talleres de preparación para entrevistas de trabajo. Consulta el calendario de eventos del centro de carreras para ver las próximas fechas o llama al 2251-8241.';

    // Vida estudiantil y eventos sociales

        //¿Qué clubes o actividades extracurriculares están disponibles en el campus?
    } else if (message.toLowerCase().includes('clubes') || message.toLowerCase().includes('actividades extracurriculares')) {
        reply = 'La Universidad Don Bosco cuenta con una variedad de clubes y actividades extracurriculares, desde deportes hasta clubes académicos y culturales. Puedes encontrar una lista completa en el portal estudiantil o en la oficina de vida estudiantil. Para más información, llama al 2251-8241.';
        //¿Hay alguna actividad interesante planeada para el fin de semana? 
    } else if (message.toLowerCase().includes('actividad interesante planeada para el fin de semana')) {
        reply = 'Sí, puedes revisar la cartelera de eventos o el portal estudiantil para ver las actividades y eventos planeados para este fin de semana en la Universidad Don Bosco. Si tienes preguntas, comunícate al 2251-8241.';
        //¿Cuáles son las opciones de alimentación disponibles en el campus? 
    } else if (message.toLowerCase().includes('alimentación')) {
        reply = 'El campus de la Universidad Don Bosco ofrece varias opciones de alimentación en los chalets o kioscos distribuidos por el campus. Además, de vez en cuando, pequeños food trucks de empresas visitan el campus para ofrecer más variedad de comida. Consulta el mapa del campus para ubicarlos o llama al 2251-8241 para más detalles.';

    //Otros

    } else if (message.toLowerCase().includes('gracias')) {
        reply = 'Si necesitas ayuda sobre algo más en el futuro, no dudes en pedírmelo. ¡Que tengas un buen día!.';

    } else if (message.toLowerCase().includes('hola')) {
        reply = 'Hola. ¿En qué puedo ayudarte?';

    } else if (message.toLowerCase().includes('no sé')) {
        reply = 'Estoy aquí para ayudarte. Dime en qué necesitas apoyo y estare encantado de asistirte.';
    // Respuesta por defecto
    } else {
        reply = 'No logro comprender la pregunta. Por favor, intenta preguntar nuevamente pero de otra manera.';
    }

    // Devuelve la respuesta como un objeto JSON
    return NextResponse.json({ reply });
}