
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Phone, Mail } from 'lucide-react';

const activeConversations = [
  {
    id: '1',
    customer: 'João Silva',
    channel: 'WhatsApp',
    subject: 'Dúvida sobre produto X',
    agent: 'Maria Santos',
    status: 'Em andamento',
    time: '5 min',
    priority: 'high'
  },
  {
    id: '2',
    customer: 'Empresa ABC Ltda',
    channel: 'Telefone',
    subject: 'Suporte técnico urgente',
    agent: 'Bot IA',
    status: 'Aguardando',
    time: '12 min',
    priority: 'high'
  },
  {
    id: '3',
    customer: 'TechStart Solutions',
    channel: 'E-mail',
    subject: 'Proposta comercial',
    agent: 'Carlos Pereira',
    status: 'Respondido',
    time: '1h 23min',
    priority: 'medium'
  }
];

export const ActiveTickets = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Tickets Ativos</CardTitle>
          <Badge variant="outline">125 total</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activeConversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {conversation.channel === 'WhatsApp' && (
                    <MessageSquare className="h-10 w-10 text-green-600 bg-green-50 p-2 rounded-lg" />
                  )}
                  {conversation.channel === 'Telefone' && (
                    <Phone className="h-10 w-10 text-blue-600 bg-blue-50 p-2 rounded-lg" />
                  )}
                  {conversation.channel === 'E-mail' && (
                    <Mail className="h-10 w-10 text-purple-600 bg-purple-50 p-2 rounded-lg" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{conversation.customer}</h3>
                    <Badge 
                      variant={conversation.priority === 'high' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {conversation.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{conversation.subject}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{conversation.channel}</span>
                    <span>Agente: {conversation.agent}</span>
                    <span>Há {conversation.time}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Badge 
                  variant={conversation.status === 'Em andamento' ? 'default' : conversation.status === 'Respondido' ? 'secondary' : 'outline'}
                  className="text-xs"
                >
                  {conversation.status}
                </Badge>
                <Button variant="outline" size="sm">
                  Atender
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
