"use client";

import { AppContext } from "@/app/context/IsPlayingContext";
import { sendTextToOpenAi } from "@/utils/sendTextToOpenai";
import React, { FormEvent, useContext, useState } from "react";

const TextToSpeech = () => {
	const [userText, setUserText] = useState("");
	const [isLoading, setisLoading] = useState(false);
	const { isPlaying, setIsPlaying } = useContext(AppContext);
	const [responseText, setResponseText] = useState("");
	const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
	const voices = synth?.getVoices();

	const selectedVoices = voices?.find((voice) => voice.name === "Albert");

	const speak = (textToSpeak: string) => {
		const utterance = new SpeechSynthesisUtterance(textToSpeak);
		utterance.voice = selectedVoices!;
		synth?.speak(utterance);
		setIsPlaying(true);
		utterance.onend = () => {
			setIsPlaying(false);
		};
	};

	const handleUserText = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setisLoading(true);
		try {
			const message = await sendTextToOpenAi(userText);
			speak(message);
			setResponseText(message);
		} catch (error) {
			let message = "";
			if (error instanceof Error) message = error.message;
			console.log(message);
		} finally {
			setisLoading(false);
			setUserText("");
		}
	};

	return (
		<div className="bottom-0 w-full mt-16 flex flex-col items-center">
			<form
				onSubmit={handleUserText}
				className="flex flex-col items-center pb-8"
			>
				<input
					value={userText}
					onChange={(e) => setUserText(e.target.value)}
					className="bg-transparent w-full lg:w-[510px] border border-white/80 outline-none rounded-lg placeholder:text-white p-2 text-white mb-2"
					type="text"
					placeholder="What do you want me to say....."
				/>
				<button
					disabled={isLoading}
					className="text-white p-2 border border-white rounded-lg disabled:text-blue-100 disabled:cursor-not-allowed disabled:bg-gray-500 hover:scale-110 hover:text-white hover:bg-green-500 duration-300 transition-all mt-2"
				>
					{isLoading ? "thinking..." : "Ask"}
				</button>
			</form>
			{responseText && (
				<div className="text-white mt-4 text-center mb-4 text-lg">
					{responseText}
				</div>
			)}
		</div>
	);
};

export default TextToSpeech;
