'use client';
import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { UserAvatar } from '@/components/user-avatar';
import { BotAvatar } from '@/components/bot-avatar';

export default function App() {
  const { listening, transcript } = useSpeechRecognition();
  const [thinking, setThinking] = useState(false)
  const [aiText, setAIText] = useState("")

  async function callGpt3API(message: string) {
    setThinking(true);
  
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  
    if (!apiKey) {
      console.error('OpenAI API key is missing.');
      return;
    }
  
    const systemMessage = {
      role: "system",
      content: "You are Jarvis, a voice AI assistant. Answer questions concisely."
    };
  
    const data = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        messages: [systemMessage, { role: "user", content: message }],
        model: 'gpt-3.5-turbo'
      })
    }).then((res) => res.json());
  
    setThinking(false);
  
    return data.choices[0].message.content;
  }

  useEffect(() => {
    if(!listening && transcript){
      callGpt3API(transcript).then((response) => {
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(response)
        speechSynthesis.speak(utterance)
        setAIText(response)
      })
    }

  },[transcript,listening] )

  return (
		<>
			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-col w-[100vw] h-[75vh] p-10 gap-5">
					{transcript && (
						<div className="flex gap-5">
							<UserAvatar />
							<p>{transcript}</p>
						</div>
					)}
					{thinking && (
						<div className="flex gap-5">
							<BotAvatar />
							<p>Thinking...</p>
						</div>
					)}
					{aiText && (
						<div className="flex gap-5">
							<BotAvatar />
							<p>{aiText}</p>
						</div>
					)}
				</div>
				<div className="flex flex-col items-center justify-center">
					{listening ? (
						<p>Go Ahead I&apos;m Listening......</p>
					) : (
						<p>Click the button and ask me anything</p>
					)}
					<button
						onClick={() => {
							SpeechRecognition.startListening();
						}}
						className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
					>
						Ask me anything
					</button>
				</div>
			</div>
		</>
	);
}
