import { MainLayout } from "@/components/layout/MainLayout";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgenteIA from "./pages/AgenteIA";
import Atendimento from "./pages/Atendimento";
import Canais from "./pages/Canais";
import Clientes from "./pages/Clientes";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import SupervisorIA from "./pages/SupervisorIA";
import Vendas from "./pages/Vendas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path={`${process.env.URL_FRONT}/`} element={<Dashboard />} />
            <Route path={`${process.env.URL_FRONT}/clientes`} element={<Clientes />} />
            <Route path={`${process.env.URL_FRONT}/atendimento`} element={<Atendimento />} />
            <Route path={`${process.env.URL_FRONT}/vendas`} element={<Vendas />} />
            <Route path={`${process.env.URL_FRONT}/agente-ia`} element={<AgenteIA />} />
            <Route path={`${process.env.URL_FRONT}/supervisor-ia`} element={<SupervisorIA />} />
            <Route path={`${process.env.URL_FRONT}/canais`} element={<Canais />} />
            <Route path={`${process.env.URL_FRONT}/atendimento-cliente`} element={<div className="p-8 text-center text-color-gray-500">Módulo Atendimento ao Cliente - Em desenvolvimento</div>} />
            <Route path={`${process.env.URL_FRONT}/financeiro`} element={<div className="p-8 text-center text-color-gray-500">Módulo Financeiro - Em desenvolvimento</div>} />
            <Route path={`${process.env.URL_FRONT}/equipe`} element={<div className="p-8 text-center text-color-gray-500">Módulo Gestão de Equipe - Em desenvolvimento</div>} />
            <Route path={`${process.env.URL_FRONT}/relatorios`} element={<div className="p-8 text-center text-color-gray-500">Módulo Relatórios - Em desenvolvimento</div>} />
            <Route path={`${process.env.URL_FRONT}/tags`} element={<div className="p-8 text-center text-color-gray-500">Módulo Gestão de Tags - Em desenvolvimento</div>} />
            <Route path={`${process.env.URL_FRONT}/configuracoes`} element={<div className="p-8 text-center text-color-gray-500">Módulo Configurações - Em desenvolvimento</div>} />
            <Route path={`${process.env.URL_FRONT}/*`} element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
