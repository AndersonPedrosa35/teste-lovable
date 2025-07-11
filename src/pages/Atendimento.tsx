
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubMenu } from "@/components/layout/SubMenu";
import { ActiveConversations } from "@/components/support/ActiveConversations";
import { ChannelStats } from "@/components/support/ChannelStats";
import { CustomerTimeline } from "@/components/support/CustomerTimeline";
import { OperatorPanel } from "@/components/support/OperatorPanel";
import { SupportReports } from "@/components/support/SupportReports";
import { Users, Clock, CheckCircle, MessageSquare, BarChart3, Headphones, History, Settings } from 'lucide-react';

const Atendimento = () => {
  const submenuTabs = [
    {
      id: 'conversas',
      label: 'Conversas Ativas',
      icon: MessageSquare,
      content: <ActiveConversations />
    },
    {
      id: 'painel',
      label: 'Painel Operador',
      icon: Headphones,
      content: <OperatorPanel />
    },
    {
      id: 'historico',
      label: 'Histórico Cliente',
      icon: History,
      content: <CustomerTimeline />
    },
    {
      id: 'relatorios',
      label: 'Relatórios',
      icon: BarChart3,
      content: <SupportReports />
    },
    {
      id: 'config',
      label: 'Configurações',
      icon: Settings,
      content: <div className="p-8 text-center text-gray-500">Configurações de Atendimento - Em desenvolvimento</div>
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Atendimento Omnichannel</h1>
          <p className="text-gray-600 mt-1">Central unificada de conversas em tempo real</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            Pausar Atendimento
          </Button>
          <Button>
            Iniciar Plantão
          </Button>
        </div>
      </div>

      {/* Channel Stats */}
      <ChannelStats />

      {/* Team Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Agentes Online</p>
                <p className="text-xl font-bold">12/15</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Tempo Médio</p>
                <p className="text-xl font-bold">2.4min</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Conversas Hoje</p>
                <p className="text-xl font-bold">347</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">IA Automática</p>
                <p className="text-xl font-bold">94.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Submenu */}
      <SubMenu tabs={submenuTabs} defaultTab="conversas" />
    </div>
  );
};

export default Atendimento;
