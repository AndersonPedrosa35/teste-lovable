
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Download, Calendar, TrendingUp, Clock, Users, Star } from 'lucide-react';

const performanceData = [
  { hour: '08:00', conversas: 12, tempo: 2.1, satisfacao: 4.5 },
  { hour: '09:00', conversas: 23, tempo: 1.8, satisfacao: 4.7 },
  { hour: '10:00', conversas: 34, tempo: 2.3, satisfacao: 4.4 },
  { hour: '11:00', conversas: 28, tempo: 2.0, satisfacao: 4.6 },
  { hour: '12:00', conversas: 18, tempo: 2.5, satisfacao: 4.3 },
  { hour: '13:00', conversas: 15, tempo: 2.8, satisfacao: 4.2 },
  { hour: '14:00', conversas: 31, tempo: 2.1, satisfacao: 4.5 },
  { hour: '15:00', conversas: 37, tempo: 1.9, satisfacao: 4.8 },
  { hour: '16:00', conversas: 29, tempo: 2.2, satisfacao: 4.6 },
  { hour: '17:00', conversas: 22, tempo: 2.4, satisfacao: 4.4 },
  { hour: '18:00', conversas: 16, tempo: 2.7, satisfacao: 4.3 }
];

const agentPerformance = [
  { name: 'Maria Santos', conversas: 45, tempo: 1.8, satisfacao: 4.9, resolucao: 94 },
  { name: 'Carlos Pereira', conversas: 38, tempo: 2.1, satisfacao: 4.7, resolucao: 91 },
  { name: 'Ana Silva', conversas: 42, tempo: 2.0, satisfacao: 4.8, resolucao: 93 },
  { name: 'Bot IA', conversas: 156, tempo: 0.5, satisfacao: 4.2, resolucao: 78 }
];

export const SupportReports = () => {
  return (
    <div className="space-y-6">
      {/* Filtros */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Relatórios de Atendimento</CardTitle>
            <div className="flex items-center gap-3">
              <Select defaultValue="hoje">
                <SelectTrigger className="w-40">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hoje">Hoje</SelectItem>
                  <SelectItem value="semana">Esta Semana</SelectItem>
                  <SelectItem value="mes">Este Mês</SelectItem>
                  <SelectItem value="trimestre">Trimestre</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Exportar
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* KPIs do Dia */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Total Conversas</p>
                <p className="text-2xl font-bold">347</p>
                <p className="text-xs text-green-600">+12% vs ontem</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Tempo Médio</p>
                <p className="text-2xl font-bold">2.1min</p>
                <p className="text-xs text-green-600">-8% vs ontem</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">Satisfação</p>
                <p className="text-2xl font-bold">4.6/5</p>
                <p className="text-xs text-green-600">+0.2 vs ontem</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Resolução</p>
                <p className="text-2xl font-bold">87%</p>
                <p className="text-xs text-red-600">-2% vs ontem</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance por Hora */}
        <Card>
          <CardHeader>
            <CardTitle>Performance por Hora</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="conversas" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  name="Conversas"
                />
                <Line 
                  type="monotone" 
                  dataKey="tempo" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  name="Tempo (min)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance dos Agentes */}
        <Card>
          <CardHeader>
            <CardTitle>Performance dos Agentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {agentPerformance.map((agent, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{agent.name}</h4>
                    <Badge variant="outline">
                      {agent.resolucao}% resolução
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Conversas</p>
                      <p className="font-bold text-blue-600">{agent.conversas}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Tempo Médio</p>
                      <p className="font-bold text-purple-600">{agent.tempo}min</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Satisfação</p>
                      <p className="font-bold text-orange-600">{agent.satisfacao}/5</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Relatório Detalhado */}
      <Card>
        <CardHeader>
          <CardTitle>Relatório Detalhado por Canal</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { canal: 'WhatsApp', conversas: 147, tempo: 2.3, satisfacao: 4.7 },
              { canal: 'Telefone', tempo: 4.1, conversas: 89, satisfacao: 4.5 },
              { canal: 'E-mail', conversas: 203, tempo: 45, satisfacao: 4.3 },
              { canal: 'Web Chat', conversas: 134, tempo: 1.9, satisfacao: 4.8 },
              { canal: 'Instagram', conversas: 67, tempo: 3.2, satisfacao: 4.4 },
              { canal: 'Facebook', conversas: 92, tempo: 2.8, satisfacao: 4.6 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="canal" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="conversas" fill="#3B82F6" name="Conversas" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
