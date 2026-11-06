import {useState} from "react";
import { ChevronDown, Mic, Plus } from 'lucide-react';

const ChatInput = () => {
      const [message, setMessage] = useState("");
      const [model, setModel] = useState("Gemini Auto");
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if(!message.trim())return;
            console.log("Message:", message);
            setMessage("");
      };
      return (
            <form onSubmit = {handleSubmit} className = "mx-auto flex min-h-[86px] w-full max-w-[890px] items-center gap-3 rounded-[45px] bg-[#1f1f1f] px-5 py-4 shadow-lg sm:gap-5 sm:px-7">
                  <button type="button" className="shrink-0 text-white transition hover:text-gray-400">
                        <Plus size={29} strokeWidth={1.8}/>
                  </button>
                  <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask Gemini" className="min-w-0 flex-1 bg-transparent text-[17px] text-white outline-none placeholder:text-[#b5b5b5] sm:text-[20px]"/>
                  <div className="relative hidden items-center sm:flex">
                        <select value={model} onChange={(e) => setModel(e.target.value)} className="max-w-[135px] cursor-pointer appearance-none bg-transparent pr-7 text-[16px] font-medium text-[#ddd] outline-none">
                              <option className="bg-[##252525]" value="Gemini Auto">Gemini Auto</option>
                              <option className="bg-[##252525]" value="Gemini Fast">Gemini Fast</option>
                              <option className="bg-[##252525]" value="Gemini Pro">Gemini Pro</option> 
                        </select>
                        <ChevronDown size={19} className="pointer-events-none absolute right-0 text-[#bbb]"/>
                  </div>
                  <button type="button" className="shrink-0 text-white transition hover:text-gray-400">
                        <Mic size={24}/>
                  </button>
            </form>
      )
}
export default ChatInput;