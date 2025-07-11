
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const opportunities = [
  {
    id: 1,
    company: "TechCorp Solutions",
    contact: "João Silva",
    value: "R$ 45.000",
    stage: "Proposta",
    probability: 80,
    lastActivity: "2 horas atrás"
  },
  {
    id: 2,
    company: "Inovação Digital",
    contact: "Maria Santos",
    value: "R$ 32.000",
    stage: "Negociação",
    probability: 65,
    lastActivity: "1 dia atrás"
  },
  {
    id: 3,
    company: "StartUp Plus",
    contact: "Pedro Costa",
    value: "R$ 28.500",
    stage: "Qualificação",
    probability: 45,
    lastActivity: "3 horas atrás"
  },
  {
    id: 4,
    company: "Global Systems",
    contact: "Ana Oliveira",
    value: "R$ 67.000",
    stage: "Descoberta",
    probability: 30,
    lastActivity: "5 horas atrás"
  }
];

const getStageColor = (stage: string) => {
  switch (stage) {
    case "Proposta": return "bg-green-100 text-green-800";
    case "Negociação": return "bg-blue-100 text-blue-800";
    case "Qualificação": return "bg-yellow-100 text-yellow-800";
    case "Descoberta": return "bg-gray-100 text-gray-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export const OpportunityList = () => {
  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">Lista de Oportunidades</CardTitle>
        <CardDescription>
          Visualização em lista das oportunidades de venda
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {opportunities.map((opp) => (
            <div key={opp.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900">{opp.company}</h3>
                  <Badge className={getStageColor(opp.stage)}>
                    {opp.stage}
                  </Badge>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span>Contato: {opp.contact}</span>
                  <span>Última atividade: {opp.lastActivity}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">{opp.value}</div>
                <div className="text-sm text-gray-500">{opp.probability}% probabilidade</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
