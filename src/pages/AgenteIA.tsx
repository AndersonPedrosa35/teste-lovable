
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { SubMenu } from "@/components/layout/SubMenu";
import { 
  Bot, 
  MessageSquare, 
  Brain, 
  Zap,
  Settings,
  Play,
  Pause,
  BarChart3
} from 'lucide-react';

const AgenteIA = () => {
  const agents = [
    {
      id: 1,
      name: "Atendente Virtual",
      description: "Agente principal para atendimento ao cliente",
      status: "Ativo",
      conversations: 147,
      satisfaction: 4.7,
      channels: ["WhatsApp", "Web Chat", "Instagram"]
    },
    {
      id: 2,
      name: "Vendas IA",
      description: "Especializado em qualificação de leads",
      status: "Ativo",
      conversations: 89,
      satisfaction: 4.5,
      channels: ["WhatsApp", "Facebook"]
    },
    {
      id: 3,
      name: "Suporte Técnico",
      description: "Resolve dúvidas técnicas e troubleshooting",
      status: "Pausado",
      conversations: 23,
      satisfaction: 4.3,
      channels: ["Web Chat", "Email"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo": return "bg-green-100 text-green-800";
      case "Pausado": return "bg-yellow-100 text-yellow-800";
      case "Inativo": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const metrics = [
    {
      title: "Conversas Ativas",
      value: "34",
      subtitle: "12 aguardando resposta",
      icon: MessageSquare,
      color: "text-blue-600"
    },
    {
      title: "Taxa de Resolução",
      value: "87%",
      subtitle: "Sem escalação humana",
      icon: Brain,
      color: "text-green-600"
    },
    {
      title: "Tempo Médio",
      value: "2.3min",
      subtitle: "Por conversa",
      icon: Zap,
      color: "text-purple-600"
    },
    {
      title: "Satisfação",
      value: "4.6/5",
      subtitle: "Baseado em 156 avaliações",
      icon: BarChart3,
      color: "text-orange-600"
    }
  ];

  const AgentList = () => (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">Agentes Configurados</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {agents.map((agent) => (
            <div key={agent.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                    <Badge className={getStatusColor(agent.status)}>
                      {agent.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{agent.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{agent.conversations} conversas</span>
                    <span>★ {agent.satisfaction} satisfação</span>
                    <span>{agent.channels.join(", ")}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  {agent.status === "Ativo" ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const submenuTabs = [
    {
      id: 'agentes',
      label: 'Agentes',
      icon: Bot,
      content: <AgentList />
    },
    {
      id: 'analytics',  
      label: 'Analytics',
      icon: BarChart3,
      content: <div className="p-8 text-center text-gray-500">Analytics de IA - Em desenvolvimento</div>
    },
    {
      id: 'config',
      label: 'Configurações',
      icon: Settings,
      content: <div className="p-8 text-center text-gray-500">Configurações Avançadas - Em desenvolvimento</div>
    }
  ];

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Agente de IA</h2>
          <p className="text-gray-600">Configure e monitore seus assistentes inteligentes</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Agente Principal</span>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      {/* Status Geral */}
      <Card className="border-0 shadow-md bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Sistema IA Ativo</h3>
                <p className="text-gray-600">3 agentes em operação • 34 conversas ativas</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">Online</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Métricas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {metric.title}
              </CardTitle>
              <metric.icon className={`h-5 w-5 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <p className="text-xs text-gray-500 mt-1">{metric.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Submenu */}
      <SubMenu tabs={submenuTabs} defaultTab="agentes" />
    </div>
  );
};

export default AgenteIA;
