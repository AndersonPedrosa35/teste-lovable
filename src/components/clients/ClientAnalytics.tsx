
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Building, Target, Calendar } from 'lucide-react';

const monthlyData = [
  { month: 'Jan', novos: 15, ativos: 120, inativos: 8 },
  { month: 'Fev', novos: 22, ativos: 135, inativos: 12 },
  { month: 'Mar', novos: 18, ativos: 140, inativos: 15 },
  { month: 'Abr', novos: 28, ativos: 155, inativos: 10 },
  { month: 'Mai', novos: 35, ativos: 175, inativos: 18 },
  { month: 'Jun', novos: 42, ativos: 190, inativos: 22 }
];

const segmentData = [
  { name: 'Enterprise', value: 35, color: '#3B82F6' },
  { name: 'SMB', value: 45, color: '#10B981' },
  { name: 'Startup', value: 20, color: '#F59E0B' }
];

const metrics = [
  {
    title: 'Taxa de Retenção',
    value: '94.2%',
    change: '+2.1%',
    icon: Target,
    color: 'text-green-600'
  },
  {
    title: 'Lifetime Value',
    value: 'R$ 32.500',
    change: '+15.3%',
    icon: TrendingUp,
    color: 'text-blue-600'
  },
  {
    title: 'Ticket Médio',
    value: 'R$ 18.750',
    change: '+8.7%',
    icon: Calendar,
    color: 'text-purple-600'
  }
];

export const ClientAnalytics = () => {
  return (
    <div className="space-y-6">
      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <p className={`text-sm ${metric.color}`}>{metric.change} vs mês anterior</p>
                </div>
                <metric.icon className={`h-8 w-8 ${metric.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Evolução Mensal */}
        <Card>
          <CardHeader>
            <CardTitle>Evolução de Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="novos" stackId="a" fill="#3B82F6" name="Novos" />
                <Bar dataKey="ativos" stackId="a" fill="#10B981" name="Ativos" />
                <Bar dataKey="inativos" stackId="a" fill="#EF4444" name="Inativos" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Segmentação */}
        <Card>
          <CardHeader>
            <CardTitle>Segmentação de Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <ResponsiveContainer width="60%" height={200}>
                <PieChart>
                  <Pie
                    data={segmentData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                  >
                    {segmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="space-y-3">
                {segmentData.map((segment, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: segment.color }}
                    />
                    <span className="text-sm font-medium">{segment.name}</span>
                    <span className="text-sm text-gray-600">{segment.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Health Score */}
      <Card>
        <CardHeader>
          <CardTitle>Health Score dos Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { client: 'TechStart Solutions', score: 85, status: 'Saudável' },
              { client: 'Inovação Digital Corp', score: 92, status: 'Excelente' },
              { client: 'StartupXYZ', score: 65, status: 'Atenção' },
              { client: 'Enterprise ABC', score: 78, status: 'Bom' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{item.client}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">{item.score}%</span>
                      <Badge variant={item.score >= 80 ? 'default' : item.score >= 70 ? 'secondary' : 'destructive'}>
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={item.score} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
