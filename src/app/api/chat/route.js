import { NextResponse } from 'next/server'; // Importa NextResponse desde el módulo next/server para manejar las respuestas del servidor

// Define una función asincrónica que maneja las solicitudes POST
export async function POST(request) {
    // Extrae el mensaje del cuerpo de la solicitud y espera a que se convierta en un objeto JSON
    const { message } = await request.json();

    // Inicializa una variable de respuesta con un mensaje predeterminado
    let reply = 'No entiendo tu pregunta.';


    
