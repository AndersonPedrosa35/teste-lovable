
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, AlertTriangle, TrendingUp, Clock } from 'lucide-react';

interface AIInsight {
  id: string;
  type: 'alert' | 'suggestion' | 'trend';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  action?: string;
  timestamp: string;
}

const mockInsights: AIInsight[] = [
  {
    id: '1',
    type: 'alert',
    title: 'Ticket #1247 necessita atenção',
    description: 'Cliente relatou problema técnico há 4h sem resposta adequada',
    priority: 'high',
    action: 'Revisar ticket',
    timestamp: '2 min atrás'
  },
  {
    id: '2', 
    type: 'suggestion',
    title: 'Operador Maria com baixa eficiência',
    description: 'Performance 23% abaixo da média nos últimos 3 dias',
    priority: 'medium',
    action: 'Agendar feedback',
    timestamp: '15 min atrás'
  },
  {
    id: '3',
    type: 'trend',
    title: 'Aumento de 34% em dúvidas sobre produto X',
    description: 'Padrão identificado nas últimas 24h - possível problema',
    priority: 'medium', 
    action: 'Investigar produto',
    timestamp: '1h atrás'
  }
];

export const AIInsights = () => {
  const getInsightIcon = (type: AIInsight['type']) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'suggestion':
        return <Brain className="h-4 w-4 text-blue-500" />;
      case 'trend':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
    }
  };

  const getPriorityColor = (priority: AIInsight['priority']) => {
    switch (priority) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'default';
      case 'low':
        return 'secondary';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-600" />
          <CardTitle className="text-lg">Supervisor de IA</CardTitle>
          <Badge variant="outline" className="text-xs">
            Real-time
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockInsights.map((insight) => (
          <div
            key={insight.id}
            className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex-shrink-0 mt-0.5">
              {getInsightIcon(insight.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {insight.title}
                </p>
                <Badge variant={getPriorityColor(insight.priority)} className="text-xs">
                  {insight.priority}
                </Badge>
              </div>
              <p className="text-xs text-gray-600 mb-2">
                {insight.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  {insight.timestamp}
                </div>
                {insight.action && (
                  <Button variant="outline" size="sm" className="text-xs h-6">
                    {insight.action}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
        
        <Button variant="ghost" className="w-full text-sm">
          Ver todos os insights
        </Button>
      </CardContent>
    </Card>
  );
};
