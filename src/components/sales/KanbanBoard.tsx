
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Plus, MoreHorizontal, Edit, Trash2 } from 'lucide-react';

interface Opportunity {
  id: number;
  company: string;
  contact: string;
  value: string;
  probability: number;
  lastActivity: string;
}

interface Stage {
  id: string;
  name: string;
  color: string;
  opportunities: Opportunity[];
}

export const KanbanBoard = () => {
  const { toast } = useToast();
  const [isNewStageOpen, setIsNewStageOpen] = useState(false);
  const [stages, setStages] = useState<Stage[]>([
    {
      id: 'descoberta',
      name: 'Descoberta',
      color: 'bg-gray-100 text-gray-800',
      opportunities: [
        {
          id: 4,
          company: "Global Systems",
          contact: "Ana Oliveira",
          value: "R$ 67.000",
          probability: 30,
          lastActivity: "5 horas atrás"
        }
      ]
    },
    {
      id: 'qualificacao',
      name: 'Qualificação',
      color: 'bg-yellow-100 text-yellow-800',
      opportunities: [
        {
          id: 3,
          company: "StartUp Plus",
          contact: "Pedro Costa",
          value: "R$ 28.500",
          probability: 45,
          lastActivity: "3 horas atrás"
        }
      ]
    },
    {
      id: 'proposta',
      name: 'Proposta',
      color: 'bg-green-100 text-green-800',
      opportunities: [
        {
          id: 1,
          company: "TechCorp Solutions",
          contact: "João Silva",
          value: "R$ 45.000",
          probability: 80,
          lastActivity: "2 horas atrás"
        }
      ]
    },
    {
      id: 'negociacao',
      name: 'Negociação',
      color: 'bg-blue-100 text-blue-800',
      opportunities: [
        {
          id: 2,
          company: "Inovação Digital",
          contact: "Maria Santos",
          value: "R$ 32.000",
          probability: 65,
          lastActivity: "1 dia atrás"
        }
      ]
    }
  ]);

  const handleNewStage = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const stageName = formData.get('stageName') as string;
    
    const newStage: Stage = {
      id: stageName.toLowerCase().replace(/\s+/g, '-'),
      name: stageName,
      color: 'bg-purple-100 text-purple-800',
      opportunities: []
    };
    
    setStages([...stages, newStage]);
    setIsNewStageOpen(false);
    toast({
      title: "Novo Estágio Criado",
      description: `O estágio "${stageName}" foi adicionado ao pipeline.`,
    });
  };

  const deleteStage = (stageId: string) => {
    setStages(stages.filter(stage => stage.id !== stageId));
    toast({
      title: "Estágio Removido",
      description: "O estágio foi removido do pipeline.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Pipeline Kanban</h3>
          <p className="text-sm text-gray-600">Visualize e gerencie suas oportunidades por estágio</p>
        </div>
        <Dialog open={isNewStageOpen} onOpenChange={setIsNewStageOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Novo Estágio
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar Novo Estágio</DialogTitle>
              <DialogDescription>
                Adicione um novo estágio ao seu pipeline de vendas
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleNewStage} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="stageName">Nome do Estágio</Label>
                <Input 
                  id="stageName" 
                  name="stageName"
                  placeholder="Ex: Apresentação, Fechamento..." 
                  required
                />
              </div>
              <Button type="submit" className="w-full">Criar Estágio</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {stages.map((stage) => (
          <div key={stage.id} className="flex-shrink-0 w-80">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-sm font-medium">{stage.name}</CardTitle>
                    <Badge className={stage.color}>
                      {stage.opportunities.length}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteStage(stage.id)}
                    className="h-6 w-6 p-0 text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {stage.opportunities.map((opp) => (
                  <Card key={opp.id} className="border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-gray-900">{opp.company}</h4>
                        <p className="text-xs text-gray-600">Contato: {opp.contact}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-green-600">{opp.value}</span>
                          <span className="text-xs text-gray-500">{opp.probability}%</span>
                        </div>
                        <p className="text-xs text-gray-400">{opp.lastActivity}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button variant="ghost" className="w-full justify-center text-gray-500 hover:text-gray-700 border-2 border-dashed border-gray-300 hover:border-gray-400">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Oportunidade
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
