import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SubMenu } from "@/components/layout/SubMenu";
import { 
  Brain, 
  AlertCircle, 
  CheckCircle, 
  TrendingUp, 
  MessageSquare,
  Clock,
  Target,
  Award,
  BarChart3,
  Settings
} from 'lucide-react';

const SupervisorIA = () => {
  const qualityMetrics = [
    {
      title: "Qualidade Geral",
      value: "92%",
      subtitle: "Baseado em 1.247 interações",
      icon: Award,
      color: "text-green-600",
      progress: 92
    },
    {
      title: "Precisão das Respostas",
      value: "89%",
      subtitle: "Respostas corretas",
      icon: Target,
      color: "text-blue-600",
      progress: 89
    },
    {
      title: "Tempo de Resposta",
      value: "1.8s",
      subtitle: "Média por resposta",
      icon: Clock,
      color: "text-purple-600"
    },
    {
      title: "Escalações",
      value: "13%",
      subtitle: "Para atendimento humano",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const recentAnalysis = [
    {
      id: 1,
      agent: "Atendente Virtual",
      conversation: "Dúvida sobre produto",
      quality: 95,
      issues: 0,
      suggestions: 2,
      timestamp: "há 5 min",
      status: "aprovado"
    },
    {
      id: 2,
      agent: "Vendas IA",
      conversation: "Qualificação de lead",
      quality: 78,
      issues: 1,
      suggestions: 3,
      timestamp: "há 12 min",
      status: "revisar"
    },
    {
      id: 3,
      agent: "Suporte Técnico",
      conversation: "Problema técnico",
      quality: 91,
      issues: 0,
      suggestions: 1,
      timestamp: "há 18 min",
      status: "aprovado"
    },
    {
      id: 4,
      agent: "Atendente Virtual",
      conversation: "Reclamação cliente",
      quality: 65,
      issues: 2,
      suggestions: 4,
      timestamp: "há 25 min",
      status: "atenção"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aprovado": return "bg-green-100 text-green-800";
      case "revisar": return "bg-yellow-100 text-yellow-800";
      case "atenção": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "aprovado": return CheckCircle;
      case "revisar": return AlertCircle;
      case "atenção": return AlertCircle;
      default: return MessageSquare;
    }
  };

  const insights = [
    {
      title: "Padrão Identificado",
      description: "Agente 'Vendas IA' tem dificuldade com objeções sobre preço",
      priority: "alta",
      action: "Revisar base de conhecimento sobre pricing"
    },
    {
      title: "Melhoria Sugerida",
      description: "Implementar resposta mais empática para reclamações",
      priority: "média",
      action: "Ajustar tom de voz do agente principal"
    },
    {
      title: "Oportunidade",
      description: "98% de satisfação em horário comercial vs 85% fora do horário",
      priority: "baixa",
      action: "Considerar ajustar agente para período noturno"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "alta": return "border-l-red-500 bg-red-50";
      case "média": return "border-l-yellow-500 bg-yellow-50";
      case "baixa": return "border-l-blue-500 bg-blue-50";
      default: return "border-l-gray-500 bg-gray-50";
    }
  };

  const QualityAnalysis = () => (
    <div className="space-y-6">
      {/* Quality Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {qualityMetrics.map((metric, index) => (
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
              {metric.progress && (
                <Progress value={metric.progress} className="mt-3 h-2" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Analysis */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">Análises Recentes</CardTitle>
            <CardDescription>
              Últimas conversas analisadas pelo supervisor
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAnalysis.map((analysis) => {
                const StatusIcon = getStatusIcon(analysis.status);
                return (
                  <div key={analysis.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <StatusIcon className={`h-5 w-5 ${
                        analysis.status === 'aprovado' ? 'text-green-600' : 
                        analysis.status === 'revisar' ? 'text-yellow-600' : 'text-red-600'
                      }`} />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900">{analysis.agent}</span>
                          <Badge className={getStatusColor(analysis.status)}>
                            {analysis.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{analysis.conversation}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                          <span>Qualidade: {analysis.quality}%</span>
                          <span>{analysis.issues} problemas</span>
                          <span>{analysis.suggestions} sugestões</span>
                          <span>{analysis.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Insights */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">Insights e Recomendações</CardTitle>
            <CardDescription>
              Sugestões de melhoria baseadas em análise de dados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className={`p-4 border-l-4 rounded-r-lg ${getPriorityColor(insight.priority)}`}>
                  <h4 className="font-semibold text-gray-900 mb-2">{insight.title}</h4>
                  <p className="text-sm text-gray-700 mb-3">{insight.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      Prioridade {insight.priority}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Aplicar
                    </Button>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 font-medium">{insight.action}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const submenuTabs = [
    {
      id: 'analysis',
      label: 'Análise de Qualidade',
      icon: Brain,
      content: <QualityAnalysis />
    },
    {
      id: 'reports',
      label: 'Relatórios',
      icon: BarChart3,
      content: <div className="p-8 text-center text-gray-500">Relatórios Detalhados - Em desenvolvimento</div>
    },
    {
      id: 'config',
      label: 'Configurações',
      icon: Settings,
      content: <div className="p-8 text-center text-gray-500">Configurações do Supervisor - Em desenvolvimento</div>
    }
  ];

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Supervisor IA</h2>
          <p className="text-gray-600">Análise de qualidade e otimização contínua</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Brain className="h-4 w-4 mr-2" />
          Gerar Relatório
        </Button>
      </div>

      {/* Status do Supervisor */}
      <Card className="border-0 shadow-md bg-gradient-to-r from-purple-50 to-blue-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Supervisor IA Ativo</h3>
                <p className="text-gray-600">Monitorando 3 agentes • 247 análises hoje</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">Analisando</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submenu */}
      <SubMenu tabs={submenuTabs} defaultTab="analysis" />
    </div>
  );
};

export default SupervisorIA;
