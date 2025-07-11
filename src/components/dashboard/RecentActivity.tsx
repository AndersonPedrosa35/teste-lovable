
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Mail, User, CreditCard } from 'lucide-react';

interface Activity {
  id: string;
  type: 'call' | 'message' | 'email' | 'client' | 'payment';
  title: string;
  description: string;
  time: string;
  status?: 'success' | 'pending' | 'failed';
  user?: string;
}

const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'call',
    title: 'Ligação finalizada',
    description: 'João Silva - Suporte técnico produto X',
    time: '2 min atrás',
    status: 'success',
    user: 'Maria Santos'
  },
  {
    id: '2',
    type: 'message', 
    title: 'WhatsApp recebido',
    description: 'Empresa ABC Ltda - Dúvida sobre proposta',
    time: '5 min atrás',
    status: 'pending',
    user: 'Bot IA'
  },
  {
    id: '3',
    type: 'client',
    title: 'Novo cliente cadastrado',
    description: 'TechStart Solutions - CNPJ: 12.345.678/0001-90',
    time: '12 min atrás',
    status: 'success',
    user: 'Carlos Pereira'
  },
  {
    id: '4',
    type: 'payment',
    title: 'Pagamento recebido',
    description: 'Fatura #4521 - R$ 2.450,00',
    time: '34 min atrás', 
    status: 'success',
    user: 'Sistema'
  },
  {
    id: '5',
    type: 'email',
    title: 'E-mail de cobrança enviado',
    description: 'Premium Corp - Fatura vencida há 15 dias',
    time: '1h atrás',
    status: 'success',
    user: 'Bot Financeiro'
  }
];

export const RecentActivity = () => {
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'call':
        return <Phone className="h-4 w-4 text-green-500" />;
      case 'message':
        return <MessageSquare className="h-4 w-4 text-blue-500" />;
      case 'email':
        return <Mail className="h-4 w-4 text-purple-500" />;
      case 'client':
        return <User className="h-4 w-4 text-indigo-500" />;
      case 'payment':
        return <CreditCard className="h-4 w-4 text-green-600" />;
    }
  };

  const getStatusColor = (status?: Activity['status']) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'failed':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Atividade Recente</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {mockActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex-shrink-0 mt-1">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-medium text-gray-900">
                  {activity.title}
                </p>
                {activity.status && (
                  <Badge className={`text-xs ${getStatusColor(activity.status)}`}>
                    {activity.status}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-gray-600 mb-1">
                {activity.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{activity.time}</span>
                {activity.user && <span>por {activity.user}</span>}
              </div>
            </div>
          </div>
        ))}
        
        <Button variant="ghost" className="w-full text-sm mt-4">
          Ver histórico completo
        </Button>
      </CardContent>
    </Card>
  );
};
