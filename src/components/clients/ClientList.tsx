
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, User, Phone, Mail, Search, Filter, Eye, Edit, MoreHorizontal } from 'lucide-react';

const clients = [
  {
    id: 1,
    type: 'company',
    name: 'TechStart Solutions Ltda',
    contact: 'João Silva',
    email: 'joao@techstart.com.br',
    phone: '+55 11 99999-0001',
    status: 'ativo',
    lastContact: '2 dias atrás',
    value: 'R$ 25.000',
    tags: ['Premium', 'SaaS']
  },
  {
    id: 2,
    type: 'person',
    name: 'Maria Santos',
    contact: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '+55 11 99999-0002',
    status: 'ativo',
    lastContact: '1 semana atrás',
    value: 'R$ 5.500',
    tags: ['Lead', 'E-commerce']
  },
  {
    id: 3,
    type: 'company',
    name: 'Inovação Digital Corp',
    contact: 'Carlos Pereira',
    email: 'carlos@inovacao.com',
    phone: '+55 11 99999-0003',
    status: 'inativo',
    lastContact: '1 mês atrás',
    value: 'R$ 45.000',
    tags: ['Enterprise', 'Consultoria']
  },
  {
    id: 4,
    type: 'person',
    name: 'Ana Costa',
    contact: 'Ana Costa',
    email: 'ana.costa@startup.com',
    phone: '+55 11 99999-0004',
    status: 'prospect',
    lastContact: 'hoje',
    value: 'R$ 12.000',
    tags: ['Startup', 'MVP']
  }
];

export const ClientList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo': return 'bg-green-100 text-green-700';
      case 'inativo': return 'bg-red-100 text-red-700';
      case 'prospect': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'todos' || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Lista de Clientes</CardTitle>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar clientes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="ativo">Ativo</SelectItem>
                <SelectItem value="inativo">Inativo</SelectItem>
                <SelectItem value="prospect">Prospect</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredClients.map((client) => (
            <div key={client.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  {client.type === 'company' ? (
                    <Building className="h-6 w-6 text-gray-600" />
                  ) : (
                    <User className="h-6 w-6 text-gray-600" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{client.name}</h3>
                    <Badge className={getStatusColor(client.status)}>
                      {client.status}
                    </Badge>
                    {client.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {client.contact}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {client.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {client.phone}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                    <span>Último contato: {client.lastContact}</span>
                    <span>Valor: {client.value}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
