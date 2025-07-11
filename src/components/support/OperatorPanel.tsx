
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageSquare, Mail, Clock, Headphones, Mic, MicOff } from 'lucide-react';

export const OperatorPanel = () => {
  return (
    <div className="space-y-6">
      {/* Status do Operador */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Headphones className="h-5 w-5" />
            Painel do Operador
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Status:</span>
                <Badge className="bg-green-100 text-green-700">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Conversas Ativas:</span>
                <span className="font-bold">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Tempo Online:</span>
                <span className="font-bold">4h 32min</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button className="w-full" variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Pausar Atendimento
              </Button>
              <Button className="w-full" variant="outline">
                <Mic className="h-4 w-4 mr-2" />
                Testar Microfone
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fila de Atendimento */}
      <Card>
        <CardHeader>
          <CardTitle>Fila de Atendimento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp</p>
                    <p className="text-xl font-bold">5</p>
                    <p className="text-xs text-gray-500">na fila</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Telefone</p>
                    <p className="text-xl font-bold">2</p>
                    <p className="text-xs text-gray-500">na fila</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-8 w-8 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">E-mail</p>
                    <p className="text-xl font-bold">8</p>
                    <p className="text-xs text-gray-500">na fila</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Métricas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">23</p>
              <p className="text-xs text-gray-600">Atendimentos Hoje</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">1.8min</p>
              <p className="text-xs text-gray-600">Tempo Médio</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">4.9/5</p>
              <p className="text-xs text-gray-600">Avaliação</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">96%</p>
              <p className="text-xs text-gray-600">Resolução</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
