"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import LoadingDots from "./LoadingDots";
import languages from "../utils/languages";
import { Toaster, toast } from "react-hot-toast";
import { Input } from "./ui/input";

const AudioTranslate = () => {
	const [loading, setLoading] = useState(false);
	const [language, setLanguage] = useState<string>(languages[0].value);
	const [generatedTranslation, setGeneratedTranslation] = useState<string>("");
	const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

	const url = "https://api.openai.com/v1/audio/transcriptions";

	const transcribe = async () => {
		const formData = new FormData();
		if (selectedFile) {
			formData.append("file", selectedFile);
		}

		formData.append("model", "whisper-1");
		formData.append("response_format", "verbose_json");
		if (language) {
			formData.append("language", language);
		}

		const headers = new Headers();
		headers.append(
			"Authorization",
			`Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
		);

		return fetch(url, {
			method: "POST",
			body: formData,
			headers: headers,
		})
			.then((response) => response.json())
			.catch((error) => console.error(error));
	};

	const translateAudio = async () => {
		setGeneratedTranslation("");
		setLoading(true);

		const transcribed = await transcribe();

		console.log(transcribed.text);
		setGeneratedTranslation(transcribed.text);
		setLoading(false);
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0];
		if (file) {
			setSelectedFile(file);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value;
		const selectedLabel = languages.find(
			(language) => language.value === selectedValue
		)?.value;
		if (selectedLabel) {
			setLanguage(selectedLabel);
		}
	};

	const fileUrl = "/audio.mp3";

	function handleDownload() {
		const link = document.createElement("a");
		link.href = fileUrl;
		link.download = "audio.mp3";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	const [isLightMode, setIsLightMode] = useState(false);

	useEffect(() => {
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: light)").matches
		) {
			setIsLightMode(true);
		}
	}, []);

	return (
		<div>
			<div className="max-w-xl w-full">
				<div className="flex mt-10 items-center space-x-3">
					<div className="h-10 flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
							/>
						</svg>
					</div>
					<div className="">
						<p className="text-left font-medium ">
							Upload Audio File <span className="text-slate-500 ">:</span>
						</p>
					</div>
				</div>

				<label className="block my-1 ml-1 text-sm text-left font-medium text-gray-900 dark:text-white">
					Upload file:
					<input
						className="block mb-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						type="file"
						accept="audio/*"
						onChange={handleFileChange}
					/>
				</label>

				<p className="my-2 text-sm text-gray-500 dark:text-gray-300">
					The following file formats are accepted: m4a, mp3, webm, mp4, mpga,
					wav, and mpeg.
				</p>

				<div className="flex mb-5 items-center space-x-3">
					<Image
						src={isLightMode ? "/afnan.png" : "/2-black.png"}
						width={30}
						height={30}
						alt="1 icon"
					/>
					<p className="text-left font-medium">Choose your Language.</p>
				</div>

				<select
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
					onChange={handleChange}
					value={language}
				>
					{languages.map((language) => (
						<option key={language.value} value={language.value}>
							{language.label}
						</option>
					))}
				</select>

				{!loading && (
					<button
						className="bg-primary rounded-xl text-primary-foreground font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-primary/80 w-full"
						onClick={translateAudio}
					>
						Translate &rarr;
					</button>
				)}
				{loading && (
					<button
						className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
						disabled
					>
						<LoadingDots color="white" style="large" />
					</button>
				)}

				{generatedTranslation && (
					<>
						<label className="block my-2 text-md text-left font-medium text-gray-900 dark:text-white">
							Translation:
						</label>
						<div
							className="p-2.5 w-full text-sm  rounded-lg cursor-pointer"
							onClick={() => {
								navigator.clipboard.writeText(generatedTranslation);
								toast("Translation copied to clipboard", {
									icon: "📋",
								});
							}}
						>
							<p> {generatedTranslation}</p>
						</div>
						<p className="my-1 text-sm text-gray-500 dark:text-gray-300">
							Click on translation to copy on clipboard
						</p>
						<div className="mb-[-80px]" />
					</>
				)}
			</div>
		</div>
	);
};

export default AudioTranslate;
