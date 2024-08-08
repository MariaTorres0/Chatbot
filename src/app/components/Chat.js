"use client"; 

import React, { useState } from 'react'; 
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            setMessages([...messages, userMessage]);

            try {
                const response = await axios.post('/api/chat', { message: input });
                const botMessage = { text: response.data.reply, sender: 'bot' };
                setMessages([...messages, userMessage, botMessage]);
            } catch (error) {
                console.error('Error sending message:', error);
            }

            setInput('');
        }
    };

    const handleClear = () => {
        setMessages([]);
    };

    return (
        <div className="container mt-4" style={{ maxWidth: '800px' }}>
            <div className="card" style={{ height: '600px', backgroundColor: '#1E1E1E', borderColor: '#3F0A6B' }}>
                <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: '#3F0A6B', color: '#FFFFFF' }}>
                    <span>Chatbot estudiantil</span>
                    <button className="btn btn-danger btn-sm" onClick={handleClear}>Limpiar Chat</button>
                </div>
                <div className="card-body d-flex flex-column" style={{ overflowY: 'auto', flex: '1 1 auto' }}>
                    {messages.map((msg, index) => (
                        <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-end' : 'text-start'}`}>
                            <span
                                className={`badge ${msg.sender === 'user' ? '' : ''}`}
                                style={{ 
                                    backgroundColor: msg.sender === 'user' ? '#6F42C1' : '#6C757D', 
                                    color: '#FFFFFF',
                                    display: 'inline-block',
                                    wordBreak: 'break-word',
                                    maxWidth: '75%',
                                    textAlign: 'left'
                                }}>
                                {msg.text}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="card-footer" style={{ backgroundColor: '#3F0A6B' }}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Escribe tu mensaje"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            style={{ backgroundColor: '#FFFFFF', color: '#6F42C1', borderColor: '#6F42C1' }}/>
                        <button className="btn btn-primary" onClick={handleSend} style={{ backgroundColor: '#6F42C1', borderColor: '#3F0A6B' }}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
