import { MessageSquare, X } from "lucide-react";
import { useState } from "react";

const TEAMS_CHAT_URL = "https://teams.microsoft.com/l/chat/0/0?users=martin@yellow-boat.com";

const FloatingChatButton = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const openChat = () => {
    window.open(TEAMS_CHAT_URL, "_blank", "width=700,height=700,noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg px-4 py-3 max-w-[220px] text-sm text-gray-700 relative">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-1.5 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Schließen"
        >
          <X className="w-3.5 h-3.5" />
        </button>
        <p className="font-semibold text-gray-900 mb-0.5 pr-4">Teams Chat</p>
        <p className="text-gray-500 leading-snug">Kurze Frage? Direkt anschreiben – oft antworte ich noch heute.</p>
      </div>

      {/* Chat button */}
      <button
        onClick={openChat}
        className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Teams Chat starten"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingChatButton;
