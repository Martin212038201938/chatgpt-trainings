import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";

// Eagerly loaded: Homepage (LCP-critical) and essential pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy-loaded: All other pages (loaded on demand)
const BecomeTrainer = lazy(() => import("./pages/BecomeTrainer"));
const Wissen = lazy(() => import("./pages/Wissen"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Admin = lazy(() => import("./pages/Admin"));
const UeberUns = lazy(() => import("./pages/UeberUns"));
const TrainingKonfigurator = lazy(() => import("./pages/TrainingKonfigurator"));
const UnsereAngebote = lazy(() => import("./pages/UnsereAngebote"));
const TrainingDetail = lazy(() => import("./pages/TrainingDetail"));
const TrainerProfil = lazy(() => import("./pages/TrainerProfil"));
const ChatgptErinnerungen = lazy(() => import("./pages/ChatgptErinnerungen"));
const ChatgptNews = lazy(() => import("./pages/ChatgptNews"));
const ChatgptCanvasMode = lazy(() => import("./pages/ChatgptCanvasMode"));
const Microsoft365InChatgpt = lazy(() => import("./pages/Microsoft365InChatgpt"));
const ChatgptCustomGptsUndSkills = lazy(() => import("./pages/ChatgptCustomGptsUndSkills"));
const ChatgptDeepResearch = lazy(() => import("./pages/ChatgptDeepResearch"));
const ChatgptAgentMode = lazy(() => import("./pages/ChatgptAgentMode"));
const PromptEngineering = lazy(() => import("./pages/PromptEngineering"));
const KiRealitaet2026 = lazy(() => import("./pages/KiRealitaet2026"));
const PromptBibliothekenQuatsch = lazy(() => import("./pages/PromptBibliothekenQuatsch"));
const KiHalluzinationenVermeiden = lazy(() => import("./pages/KiHalluzinationenVermeiden"));
const ChatgptKostenUndLizenzen = lazy(() => import("./pages/ChatgptKostenUndLizenzen"));

const queryClient = new QueryClient();

// Minimal loading fallback (invisible to avoid layout shift)
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoading />}>
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
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
