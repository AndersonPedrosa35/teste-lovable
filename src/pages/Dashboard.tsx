
import React from 'react';
import { KPICard } from "@/components/dashboard/KPICard";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { 
  Users, 
  Phone, 
  Target, 
  CreditCard, 
  TrendingUp, 
  Clock,
  MessageSquare,
  AlertTriangle
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Painel Inteligente</h1>
          <p className="text-gray-600 mt-1">Visão geral 360º com IA - Hoje, 25 de Junho</p>
        </div>
      </div>

      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total de Clientes"
          value="2,847"
          change="+12%"
          changeType="positive"
          icon={Users}
          description="384 novos este mês"
          color="blue"
        />
        <KPICard
          title="Oportunidades Ativas"
          value="156"
          change="+8.2%"
          changeType="positive"
          icon={Target}
          description="R$ 1.2M em pipeline"
          color="green"
        />
        <KPICard
          title="Chamadas Pendentes"
          value="23"
          change="-15%"
          changeType="positive"
          icon={Phone}
          description="Tempo médio: 4min"
          color="yellow"
        />
        <KPICard
          title="Inadimplência"
          value="R$ 45.2K"
          change="+3.1%"
          changeType="negative"
          icon={CreditCard}
          description="12 clientes em atraso"
          color="red"
        />
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="IA Performance"
          value="94.2%"
          change="+2.1%"
          changeType="positive"
          icon={TrendingUp}
          description="Resoluções automáticas"
          color="purple"
        />
        <KPICard
          title="Tempo Médio Resposta"
          value="2.4min"
          change="-18%"
          changeType="positive"
          icon={Clock}
          description="Meta: <3min"
          color="blue"
        />
        <KPICard
          title="WhatsApp Ativos"
          value="87"
          change="+24%"
          changeType="positive"
          icon={MessageSquare}
          description="Conversas em andamento"
          color="green"
        />
        <KPICard
          title="Alertas Críticos"
          value="4"
          change="-50%"
          changeType="positive"
          icon={AlertTriangle}
          description="Requer atenção imediata"
          color="red"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AIInsights />
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;
