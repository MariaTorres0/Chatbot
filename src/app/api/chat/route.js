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
        reply = '';
        
        //¿Dónde puedo encontrar mi horario de clases? 
    } else if (message.toLowerCase().includes('horario de clases')) {
        reply = '';
        
        //¿Cuándo son los períodos de inscripción para cursos? 
    } else if (message.toLowerCase().includes('períodos de inscripción')) {
        reply = '';


    // Recursos y servicios del campus

        //¿Dónde está la biblioteca y cuáles son sus horarios? 
    } else if (message.toLowerCase().includes('biblioteca')) {
        reply = '';
        //¿Cómo puedo contactar al departamento de servicios estudiantiles?
    } else if (message.toLowerCase().includes('servicios estudiantiles')) {
        reply = '';
        //¿Hay algún evento importante en el campus esta semana? 
    } else if (message.toLowerCase().includes('evento importante')) {
        reply = '';


    // Apoyo y bienestar estudiantil

        //¿Dónde puedo obtener ayuda si estoy experimentando estrés o problemas emocionales?
    } else if (message.toLowerCase().includes('estrés') || message.toLowerCase().includes('problemas emocionales')) {
        reply = '';
        //¿Cuáles son los recursos disponibles para estudiantes con discapacidades? 
    } else if (message.toLowerCase().includes('recursos para estudiantes con discapacidades')) {
        reply = '';
        //¿Qué servicios de asesoramiento o tutoría están disponibles para mejorar mi rendimiento académico? 
    } else if (message.toLowerCase().includes('asesoramiento') || message.toLowerCase().includes('tutoría')) {
        reply = '';


    // Orientación sobre carrera y desarrollo profesional

        //¿Cómo puedo encontrar pasantías o prácticas profesionales relevantes para mi carrera? 
    } else if (message.toLowerCase().includes('pasantías') || message.toLowerCase().includes('prácticas profesionales')) {
        reply = '';
        //¿Qué recursos ofrece la universidad para ayudarme a escribir mi currículum vitae? 
    } else if (message.toLowerCase().includes('currículum vitae')) {
        reply = '';
        //¿Hay talleres disponibles para prepararme para entrevistas de trabajo?
    } else if (message.toLowerCase().includes('talleres para entrevistas')) {
        reply = '';

    // Vida estudiantil y eventos sociales

        //¿Qué clubes o actividades extracurriculares están disponibles en el campus?
    } else if (message.toLowerCase().includes('clubes') || message.toLowerCase().includes('actividades extracurriculares')) {
        reply = '';
        //¿Hay alguna actividad interesante planeada para el fin de semana? 
    } else if (message.toLowerCase().includes('actividad interesante para el fin de semana')) {
        reply = '';
        //¿Cuáles son las opciones de alimentación disponibles en el campus? 
    } else if (message.toLowerCase().includes('alimentación')) {
        reply = '';

    //Otros

    } else if (message.toLowerCase().includes('gracias')) {
        reply = 'Si necesitas ayuda sobre algo más en el futuro, no dudes en pedírmelo. ¡Que tengas un buen día!.';
   
    } else if (message.toLowerCase().includes('hola')) {
        reply = 'Hola. ¿En qué puedo ayudarte?';

    // Respuesta por defecto
    } else {
        reply = 'No logro comprender la pregunta. Por favor, intenta preguntar nuevamente pero de otra manera.';
    }

    // Devuelve la respuesta como un objeto JSON
    return NextResponse.json({ reply });
}
