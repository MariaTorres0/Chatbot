import Head from 'next/head';
import Chat from './components/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css';

export default function Home() {
    return (
        <div className="container">
            <main className="my-5">
                <h1 className="text-center mb-4">Bienvenido al chatbot de soporte estudiantil</h1>
                <Chat />
            </main>
        </div>
    );
}
