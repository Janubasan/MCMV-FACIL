import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { GuideReaderModal } from './components/GuideReaderModal';
import { DiagnosticModal } from './components/DiagnosticModal';
import { EmpreendimentoModal } from './components/EmpreendimentoModal';
import { ExitIntentModal } from './components/ExitIntentModal';
import { CrmDrawer } from './components/CrmDrawer';

// Views
import { HomeView } from './views/HomeView';
import { DuvidasView } from './views/DuvidasView';
import { QuizView } from './views/QuizView';
import { DocumentosView } from './views/DocumentosView';
import { PassoAPassoView } from './views/PassoAPassoView';
import { EmpreendimentosView } from './views/EmpreendimentosView';
import { SobreView } from './views/SobreView';
import { ContatoView } from './views/ContatoView';
import { ObrigadoView } from './views/ObrigadoView';
import { BlogView } from './views/BlogView';

const MainContent: React.FC = () => {
  const { currentView, toastMessage } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-xl border border-slate-700 animate-in fade-in slide-in-from-top duration-200 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && <HomeView />}
        {currentView === 'duvidas' && <DuvidasView />}
        {currentView === 'quiz' && <QuizView />}
        {currentView === 'documentos' && <DocumentosView />}
        {currentView === 'passo-a-passo' && <PassoAPassoView />}
        {currentView === 'empreendimentos' && <EmpreendimentosView />}
        {currentView === 'sobre' && <SobreView />}
        {currentView === 'contato' && <ContatoView />}
        {currentView === 'obrigado' && <ObrigadoView />}
        {currentView === 'blog' && <BlogView />}
      </main>

      {/* Footer with Compliance Notices */}
      <Footer />

      {/* Modals & Overlays */}
      <FloatingWhatsApp />
      <LeadCaptureModal />
      <GuideReaderModal />
      <DiagnosticModal />
      <EmpreendimentoModal />
      <ExitIntentModal />
      <CrmDrawer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
