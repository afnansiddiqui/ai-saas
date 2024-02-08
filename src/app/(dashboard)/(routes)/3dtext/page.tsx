import ChatBotCanvas from "@/components/ChatBotCanvas";
import TextToSpeech from "@/components/TextToSpeech";
import Image from "next/image";
import { IsPlayingProvider } from "@/app/context/IsPlayingContext";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
		<>
			<Navbar />
			<div className="h-[90vh]">
				<IsPlayingProvider>
					<div className="h-[69vh] relative mb-10">
						<ChatBotCanvas />
					</div>
					<div className="top-10 w-full sm:static sm:w-auto">
						<TextToSpeech />
					</div>
				</IsPlayingProvider>
			</div>
		</>
	);
}
