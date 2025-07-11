import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SubMenu } from "@/components/layout/SubMenu";
import { KanbanBoard } from "@/components/sales/KanbanBoard";
import { OpportunityList } from "@/components/sales/OpportunityList";
import { 
  Target, 
  TrendingUp, 
  Users, 
  DollarSign,
  Plus,
  Filter,
  Search,
  Settings,
  SquareKanban,
  List,
  BarChart,
  FileText
} from 'lucide-react';

const Vendas = () => {
  const { toast } = useToast();
  const [isNewOpportunityOpen, setIsNewOpportunityOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const handleNewOpportunity = (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewOpportunityOpen(false);
    toast({
      title: "Nova Oportunidade Criada",
      description: "A oportunidade foi adicionada ao pipeline com sucesso.",
    });
  };

  const handleConfigSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfigOpen(false);
    toast({
      title: "Configurações Salvas",
      description: "As configurações de vendas foram atualizadas.",
    });
  };

  const kpis = [
    {
      title: "Meta Mensal",
      value: "R$ 450.000",
      subtitle: "75% atingido",
      icon: Target,
      progress: 75,
      color: "text-blue-600"
    },
    {
      title: "Vendas Fechadas",
      value: "R$ 337.500",
      subtitle: "+12% vs mês anterior",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Leads Qualificados",
      value: "248",
      subtitle: "32 novos hoje",
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Taxa de Conversão",
      value: "18.5%",
      subtitle: "+2.3% vs média",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const ReportsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Relatórios de Vendas</CardTitle>
          <CardDescription>Análises e métricas de performance</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Relatórios detalhados em desenvolvimento...</p>
        </CardContent>
      </Card>
    </div>
  );

  const ProposalsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gestão de Propostas</CardTitle>
          <CardDescription>Crie e gerencie suas propostas comerciais</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Sistema de propostas em desenvolvimento...</p>
        </CardContent>
      </Card>
    </div>
  );

  const subMenuTabs = [
    {
      id: 'kanban',
      label: 'Pipeline Kanban',
      icon: SquareKanban,
      content: <KanbanBoard />
    },
    {
      id: 'lista',
      label: 'Lista de Oportunidades',
      icon: List,
      content: <OpportunityList />
    },
    {
      id: 'relatorios',
      label: 'Relatórios',
      icon: BarChart,
      content: <ReportsContent />
    },
    {
      id: 'propostas',
      label: 'Propostas',
      icon: FileText,
      content: <ProposalsContent />
    }
  ];

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Vendas</h2>
          <p className="text-gray-600">Gerencie seu funil de vendas e propostas</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isConfigOpen} onOpenChange={setIsConfigOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Configurações de Vendas</DialogTitle>
                <DialogDescription>
                  Configure parâmetros do módulo de vendas
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleConfigSave} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meta">Meta Mensal (R$)</Label>
                  <Input id="meta" defaultValue="450000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comissao">Taxa de Comissão (%)</Label>
                  <Input id="comissao" defaultValue="5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pipeline">Estágios do Pipeline</Label>
                  <Textarea id="pipeline" defaultValue="Descoberta, Qualificação, Proposta, Negociação, Fechamento" />
                </div>
                <Button type="submit" className="w-full">Salvar Configurações</Button>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog open={isNewOpportunityOpen} onOpenChange={setIsNewOpportunityOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Nova Oportunidade
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nova Oportunidade</DialogTitle>
                <DialogDescription>
                  Adicione uma nova oportunidade ao pipeline
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleNewOpportunity} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" placeholder="Nome da empresa" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contato">Contato</Label>
                  <Input id="contato" placeholder="Nome do contato" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valor">Valor (R$)</Label>
                  <Input id="valor" placeholder="Ex: 50000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estagio">Estágio</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o estágio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="descoberta">Descoberta</SelectItem>
                      <SelectItem value="qualificacao">Qualificação</SelectItem>
                      <SelectItem value="proposta">Proposta</SelectItem>
                      <SelectItem value="negociacao">Negociação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">Criar Oportunidade</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, index) => (
          <Card key={index} className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {kpi.title}
              </CardTitle>
              <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
              <p className="text-xs text-gray-500 mt-1">{kpi.subtitle}</p>
              {kpi.progress && (
                <Progress value={kpi.progress} className="mt-3 h-2" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* SubMenu com diferentes visualizações */}
      <SubMenu tabs={subMenuTabs} defaultTab="kanban" />
    </div>
  );
};

export default Vendas;
