
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Phone, Mail, Instagram, Facebook, Globe } from 'lucide-react';

const channelStats = [
  {
    name: 'WhatsApp',
    icon: MessageSquare,
    active: 23,
    waiting: 5,
    resolved: 147,
    avgTime: '2.3min',
    status: 'online',
    color: 'text-green-600'
  },
  {
    name: 'Telefone',
    icon: Phone,
    active: 8,
    waiting: 2,
    resolved: 89,
    avgTime: '4.1min',
    status: 'online',
    color: 'text-blue-600'
  },
  {
    name: 'E-mail',
    icon: Mail,
    active: 12,
    waiting: 8,
    resolved: 203,
    avgTime: '45min',
    status: 'online',
    color: 'text-purple-600'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    active: 4,
    waiting: 1,
    resolved: 67,
    avgTime: '3.2min',
    status: 'online',
    color: 'text-pink-600'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    active: 6,
    waiting: 3,
    resolved: 92,
    avgTime: '2.8min',
    status: 'online',
    color: 'text-blue-700'
  },
  {
    name: 'Web Chat',
    icon: Globe,
    active: 15,
    waiting: 7,
    resolved: 134,
    avgTime: '1.9min',
    status: 'online',
    color: 'text-orange-600'
  }
];

export const ChannelStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {channelStats.map((channel, index) => (
        <Card key={index} className="relative">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <channel.icon className={`h-6 w-6 ${channel.color}`} />
              <Badge 
                variant={channel.status === 'online' ? 'default' : 'secondary'}
                className="text-xs"
              >
                {channel.status}
              </Badge>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-2">{channel.name}</h3>
            
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Ativas:</span>
                <span className="font-medium text-green-600">{channel.active}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Aguardando:</span>
                <span className="font-medium text-yellow-600">{channel.waiting}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Resolvidas:</span>
                <span className="font-medium text-blue-600">{channel.resolved}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tempo médio:</span>
                <span className="font-medium">{channel.avgTime}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
