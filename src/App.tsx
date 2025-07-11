import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import Atendimento from "./pages/Atendimento";
import Vendas from "./pages/Vendas";
import AgenteIA from "./pages/AgenteIA";
import SupervisorIA from "./pages/SupervisorIA";
import Canais from "./pages/Canais";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/atendimento" element={<Atendimento />} />
            <Route path="/vendas" element={<Vendas />} />
            <Route path="/agente-ia" element={<AgenteIA />} />
            <Route path="/supervisor-ia" element={<SupervisorIA />} />
            <Route path="/canais" element={<Canais />} />
            <Route path="/atendimento-cliente" element={<div className="p-8 text-center text-color-gray-500">Módulo Atendimento ao Cliente - Em desenvolvimento</div>} />
            <Route path="/financeiro" element={<div className="p-8 text-center text-color-gray-500">Módulo Financeiro - Em desenvolvimento</div>} />
            <Route path="/equipe" element={<div className="p-8 text-center text-color-gray-500">Módulo Gestão de Equipe - Em desenvolvimento</div>} />
            <Route path="/relatorios" element={<div className="p-8 text-center text-color-gray-500">Módulo Relatórios - Em desenvolvimento</div>} />
            <Route path="/tags" element={<div className="p-8 text-center text-color-gray-500">Módulo Gestão de Tags - Em desenvolvimento</div>} />
            <Route path="/configuracoes" element={<div className="p-8 text-center text-color-gray-500">Módulo Configurações - Em desenvolvimento</div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
