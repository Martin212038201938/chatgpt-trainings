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
    <>
      {/* Tooltip bubble – absolut positioniert über dem Button, kein flex-parent */}
      <div
        style={{
          position: "fixed",
          bottom: "88px",
          right: "24px",
          zIndex: 50,
          width: "220px",
          // Safari-Fix: eigener transform-context, kein Erben von Eltern-Transforms
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
        }}
        className="bg-white border border-gray-200 rounded-xl shadow-lg px-4 py-3 text-sm text-gray-700"
      >
        <button
          onClick={() => setDismissed(true)}
          style={{ position: "absolute", top: "6px", right: "8px" }}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Schließen"
        >
          <X className="w-3.5 h-3.5" />
        </button>
        <p className="font-semibold text-gray-900 mb-0.5 pr-4">Teams Chat</p>
        <p className="text-gray-500 leading-snug">Kurze Frage? Direkt anschreiben – oft antworten wir noch heute.</p>
      </div>

      {/* Chat-Button */}
      <button
        onClick={openChat}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 50,
          width: "56px",
          height: "56px",
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
        }}
        className="bg-green-600 hover:bg-green-700 text-white rounded-full shadow-xl flex items-center justify-center transition-colors duration-200"
        aria-label="Teams Chat starten"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </>
  );
};

export default FloatingChatButton;
