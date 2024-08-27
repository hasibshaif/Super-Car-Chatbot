"use client";

import { useState, useRef, useEffect, FormEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CircularProgress } from "@mui/material";
import { useChat } from "ai/react";
import { useRouter } from "next/navigation";

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit: baseHandleSubmit } = useChat({
        api: 'api/ferrari_chat',
        onError: (e) => {
            console.log(e);
            setLoading(false);
        },
        onResponse: () => {
            setLoading(false);
        },
    });

    const [loading, setLoading] = useState(false);
    const chatParent = useRef<HTMLUListElement>(null);
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        baseHandleSubmit(event); 
    };

    useEffect(() => {
        const domNode = chatParent.current;
        if (domNode) {
            domNode.scrollTop = domNode.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="relative min-h-screen ferrari-chat">
            <Button
                onClick={() => router.back()}
                className="absolute top-4 left-4 z-10 px-4 py-2 bg-black text-white rounded shadow-md"
            >
                ← BACK
            </Button>

            <main className="flex flex-col w-full h-full max-h-dvh overflow-auto">
                <header className="p-6 border-b w-full bg-black bg-opacity-60">
                    <h1 className="text-4xl font-bold text-white text-center">Ferrari Maintenance Chatbot 🏎</h1>
                    <h4 className="text-xl text-white mt-2 text-center">Ask any questions about maintaining your Ferrari 458 Spider.</h4>
                </header>

                <section className="p-6 flex flex-col flex-grow">
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4">
                        <Input
                            className="flex-grow px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                            placeholder="Type your question here..."
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                        <Button
                            className="px-4 py-2 text-white bg-red-900 rounded-md hover:bg-red-500 focus:outline-none"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'SEND ⇒'}
                        </Button>
                    </form>
                </section>

                <section className="flex-grow p-4">
                    <ul ref={chatParent} className="h-full bg-transparent rounded-lg">
                        {messages.map((m, index) => (
                            <div key={index}>
                                {m.role === 'user' ? (
                                    <li className="p-4 bg-gradient-to-r from-blue-100 to-gray-200 rounded-lg shadow-md mb-2">
                                        <p className="text-gray-800">{m.content}</p>
                                    </li>
                                ) : (
                                    <li className="p-4 bg-gradient-to-l from-blue-100 to-gray-200 rounded-lg shadow-md mb-2 text-right">
                                        <p className="text-gray-800">{m.content}</p>
                                    </li>
                                )}
                            </div>
                        ))}
                        {loading && (
                            <li className="flex justify-center">
                                <CircularProgress size={24} />
                            </li>
                        )}
                    </ul>
                </section>
            </main>
        </div>
    );
}
