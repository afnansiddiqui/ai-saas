import ChatBotCanvas from '@/components/ChatBotCanvas'
import TextToSpeech from '@/components/TextToSpeech'
import Image from 'next/image'
import { IsPlayingProvider } from "@/app/context/IsPlayingContext";

export default function Home() {
  return (
    <div className="h-screen">
      <IsPlayingProvider>
        <div className='h-screen relative mb-10'>
          <ChatBotCanvas />
        </div>
        <div className="top-10 w-full sm:static sm:w-auto">
          <TextToSpeech />
        </div>
      </IsPlayingProvider>
    </div>
  );
}