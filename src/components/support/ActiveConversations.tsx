
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Phone, Mail, Clock, User } from 'lucide-react';

const activeConversations = [
  {
    id: '1',
    customer: 'João Silva',
    channel: 'WhatsApp',
    lastMessage: 'Preciso de ajuda com o produto X',
    agent: 'Maria Santos',
    status: 'Em conversa',
    time: '2 min',
    unreadCount: 3,
    priority: 'normal'
  },
  {
    id: '2',
    customer: 'Empresa ABC Ltda',
    channel: 'Telefone',
    lastMessage: 'Chamada em andamento',
    agent: 'Carlos Pereira',
    status: 'Em ligação',
    time: '5 min',
    unreadCount: 0,
    priority: 'high'
  },
  {
    id: '3',
    customer: 'Ana Costa',
    channel: 'E-mail',
    lastMessage: 'Obrigada pelo retorno, aguardo...',
    agent: 'Bot IA',
    status: 'Aguardando',
    time: '12 min',
    unreadCount: 1,
    priority: 'low'
  },
  {
    id: '4',
    customer: 'TechStart Solutions',
    channel: 'WhatsApp',
    lastMessage: 'Quando posso agendar uma demo?',
    agent: 'Não atribuído',
    status: 'Novo',
    time: '23 min',
    unreadCount: 2,
    priority: 'normal'
  }
];

export const ActiveConversations = () => {
  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'WhatsApp':
        return <MessageSquare className="h-4 w-4 text-green-600" />;
      case 'Telefone':
        return <Phone className="h-4 w-4 text-blue-600" />;
      case 'E-mail':
        return <Mail className="h-4 w-4 text-purple-600" />;
      default:
        return <MessageSquare className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Em conversa':
      case 'Em ligação':
        return 'bg-green-100 text-green-700';
      case 'Aguardando':
        return 'bg-yellow-100 text-yellow-700';
      case 'Novo':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Conversas Ativas</CardTitle>
          <Badge variant="outline">{activeConversations.length} abertas</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activeConversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-shrink-0 relative">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                    {getChannelIcon(conversation.channel)}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">{conversation.customer}</h3>
                    {conversation.unreadCount > 0 && (
                      <Badge variant="destructive" className="text-xs h-5 w-5 rounded-full p-0 flex items-center justify-center">
                        {conversation.unreadCount}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 truncate mb-2">{conversation.lastMessage}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Há {conversation.time}
                    </span>
                    <span>Agente: {conversation.agent}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Badge className={`text-xs ${getStatusColor(conversation.status)}`}>
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
