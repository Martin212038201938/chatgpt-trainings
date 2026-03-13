import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Static imports required for react-snap pre-rendering compatibility
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BecomeTrainer from "./pages/BecomeTrainer";
import Wissen from "./pages/Wissen";
import Impressum from "./pages/Impressum";
import Admin from "./pages/Admin";
import UeberUns from "./pages/UeberUns";
import TrainingKonfigurator from "./pages/TrainingKonfigurator";
import UnsereAngebote from "./pages/UnsereAngebote";
import TrainingDetail from "./pages/TrainingDetail";
import TrainerProfil from "./pages/TrainerProfil";
import ChatgptErinnerungen from "./pages/ChatgptErinnerungen";
import ChatgptNews from "./pages/ChatgptNews";
import ChatgptCanvasMode from "./pages/ChatgptCanvasMode";
import Microsoft365InChatgpt from "./pages/Microsoft365InChatgpt";
import ChatgptCustomGptsUndSkills from "./pages/ChatgptCustomGptsUndSkills";
import ChatgptDeepResearch from "./pages/ChatgptDeepResearch";
import ChatgptAgentMode from "./pages/ChatgptAgentMode";
import PromptEngineering from "./pages/PromptEngineering";
import KiRealitaet2026 from "./pages/KiRealitaet2026";
import PromptBibliothekenQuatsch from "./pages/PromptBibliothekenQuatsch";
import KiHalluzinationenVermeiden from "./pages/KiHalluzinationenVermeiden";
import ChatgptKostenUndLizenzen from "./pages/ChatgptKostenUndLizenzen";
import ChatgptDsgvoKonform from "./pages/ChatgptDsgvoKonform";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trainer-werden" element={<BecomeTrainer />} />
          <Route path="/wissen" element={<Wissen />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/unsere-angebote" element={<UnsereAngebote />} />
          <Route path="/trainings/:slug" element={<TrainingDetail />} />
          <Route path="/trainer/:id" element={<TrainerProfil />} />
          <Route path="/training-konfigurator" element={<TrainingKonfigurator />} />
          {/* ChatGPT Wissen articles */}
          <Route path="/wissen/chatgpt-erinnerungen" element={<ChatgptErinnerungen />} />
          <Route path="/wissen/chatgpt-news" element={<ChatgptNews />} />
          <Route path="/wissen/chatgpt-canvas-mode" element={<ChatgptCanvasMode />} />
          <Route path="/wissen/microsoft-365-daten-in-chatgpt" element={<Microsoft365InChatgpt />} />
          <Route path="/wissen/chatgpt-custom-gpts-und-skills" element={<ChatgptCustomGptsUndSkills />} />
          <Route path="/wissen/chatgpt-deep-research" element={<ChatgptDeepResearch />} />
          <Route path="/wissen/chatgpt-agent-mode" element={<ChatgptAgentMode />} />
          <Route path="/wissen/prompt-engineering" element={<PromptEngineering />} />
          <Route path="/wissen/ki-realitaet-beratungsfirmen-2026" element={<KiRealitaet2026 />} />
          <Route path="/wissen/prompt-bibliotheken-vs-training" element={<PromptBibliothekenQuatsch />} />
          <Route path="/wissen/ki-halluzinationen-vermeiden" element={<KiHalluzinationenVermeiden />} />
          <Route path="/wissen/chatgpt-kosten-und-lizenzen-unternehmen" element={<ChatgptKostenUndLizenzen />} />
          <Route path="/wissen/chatgpt-im-unternehmen-dsgvo-konform" element={<ChatgptDsgvoKonform />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
