
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SubMenu } from "@/components/layout/SubMenu";
import { 
  Smartphone, 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Facebook,
  Settings,
  Plus,
  CheckCircle,
  XCircle,
  AlertCircle,
  BarChart3
} from 'lucide-react';

const Canais = () => {
  const channels = [
    {
      id: 1,
      name: "WhatsApp Business",
      type: "whatsapp",
      icon: Smartphone,
      status: "connected",
      description: "API oficial do WhatsApp",
      phone: "+55 11 99999-9999",
      credits: "R$ 0,10 por mensagem"
    },
    {
      id: 2,
      name: "Telefonia VoIP",
      type: "voip",
      icon: Phone,
      status: "connected",
      description: "PBX FreeSWITCH",
      phone: "+55 11 3000-0000",
      credits: "R$ 0,05 por minuto"
    },
    {
      id: 3,
      name: "E-mail Corporativo",
      type: "email",
      icon: Mail,
      status: "connected",
      description: "SMTP/IMAP configurado",
      phone: "contato@empresa.com.br",
      credits: "R$ 0,02 por e-mail"
    },
    {
      id: 4,
      name: "SMS",
      type: "sms",
      icon: MessageCircle,
      status: "disconnected",
      description: "Gateway SMS não configurado",
      phone: "Não configurado",
      credits: "R$ 0,08 por SMS"
    },
    {
      id: 5,
      name: "Instagram Direct",
      type: "instagram",
      icon: Instagram,
      status: "pending",
      description: "Aguardando aprovação Meta",
      phone: "@empresa_oficial",
      credits: "R$ 0,05 por mensagem"
    },
    {
      id: 6,
      name: "Facebook Messenger",
      type: "facebook",
      icon: Facebook,
      status: "connected",
      description: "Messenger integrado",
      phone: "facebook.com/empresa",
      credits: "R$ 0,05 por mensagem"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'disconnected':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <XCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Conectado</Badge>;
      case 'disconnected':
        return <Badge variant="destructive">Desconectado</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pendente</Badge>;
      default:
        return <Badge variant="secondary">Inativo</Badge>;
    }
  };

  const ChannelList = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {channels.map((channel) => (
        <Card key={channel.id} className="relative transition-all hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <channel.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">{channel.name}</CardTitle>
                  <CardDescription className="text-sm">{channel.description}</CardDescription>
                </div>
              </div>
              {getStatusIcon(channel.status)}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Status:</span>
              {getStatusBadge(channel.status)}
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Identificador:</span>
                <span className="font-medium">{channel.phone}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Custo:</span>
                <span className="font-medium text-green-600">{channel.credits}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1 gap-2">
                <Settings className="h-4 w-4" />
                Configurar
              </Button>
              {channel.status === 'connected' && (
                <Button size="sm" className="flex-1">
                  Testar
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const submenuTabs = [
    {
      id: 'channels',
      label: 'Canais',
      icon: MessageCircle,
      content: <ChannelList />
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      content: <div className="p-8 text-center text-gray-500">Analytics de Canais - Em desenvolvimento</div>
    },
    {
      id: 'config',
      label: 'Configurações',
      icon: Settings,
      content: <div className="p-8 text-center text-gray-500">Configurações Globais - Em desenvolvimento</div>
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Canais de Comunicação</h1>
          <p className="text-gray-600 mt-1">Configure e gerencie todos os canais de atendimento</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Adicionar Canal
        </Button>
      </div>

      {/* Submenu */}
      <SubMenu tabs={submenuTabs} defaultTab="channels" />
    </div>
  );
};

export default Canais;
