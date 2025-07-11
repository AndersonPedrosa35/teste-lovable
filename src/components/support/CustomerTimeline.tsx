
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Mail, Play, Download } from 'lucide-react';

const timelineEvents = [
  {
    id: '1',
    type: 'whatsapp',
    title: 'Mensagem WhatsApp',
    description: 'Cliente: "Preciso de ajuda com o produto X"',
    timestamp: '14:32 - Hoje',
    agent: 'Maria Santos',
    status: 'respondido'
  },
  {
    id: '2',
    type: 'call',
    title: 'Ligação Recebida',
    description: 'Duração: 8min 32s - Suporte técnico',
    timestamp: '10:15 - Hoje',
    agent: 'Carlos Pereira',
    status: 'concluido',
    hasRecording: true
  },
  {
    id: '3',
    type: 'email',
    title: 'E-mail Enviado',
    description: 'Assunto: "Instruções de configuração do produto"',
    timestamp: '16:45 - Ontem',
    agent: 'Maria Santos',
    status: 'enviado'
  },
  {
    id: '4',
    type: 'whatsapp',
    title: 'Mensagem WhatsApp',
    description: 'Cliente: "Muito obrigado pelo atendimento!"',
    timestamp: '09:22 - Ontem',
    agent: 'Bot IA',
    status: 'respondido'
  },
  {
    id: '5',
    type: 'call',
    title: 'Ligação Realizada',
    description: 'Duração: 12min 18s - Follow-up pós-venda',
    timestamp: '14:30 - 2 dias atrás',
    agent: 'Ana Silva',
    status: 'concluido',
    hasRecording: true
  }
];

export const CustomerTimeline = () => {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'whatsapp':
        return <MessageSquare className="h-4 w-4 text-green-600" />;
      case 'call':
        return <Phone className="h-4 w-4 text-blue-600" />;
      case 'email':
        return <Mail className="h-4 w-4 text-purple-600" />;
      default:
        return <MessageSquare className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'concluido':
      case 'respondido':
      case 'enviado':
        return 'bg-green-100 text-green-700';
      case 'pendente':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Histórico do Cliente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                  {getEventIcon(event.type)}
                </div>
                {index < timelineEvents.length - 1 && (
                  <div className="w-px h-12 bg-gray-200 mt-2" />
                )}
              </div>
              
              <div className="flex-1 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <Badge className={`text-xs ${getStatusColor(event.status)}`}>
                      {event.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    {event.hasRecording && (
                      <>
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{event.timestamp}</span>
                  <span>por {event.agent}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
