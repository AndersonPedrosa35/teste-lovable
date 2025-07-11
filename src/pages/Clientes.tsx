
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubMenu } from "@/components/layout/SubMenu";
import { ClientList } from "@/components/clients/ClientList";
import { ClientAnalytics } from "@/components/clients/ClientAnalytics";
import { ClientImport } from "@/components/clients/ClientImport";
import { Plus, Building, User, Phone, Mail, Users, BarChart3, Upload } from 'lucide-react';

const Clientes = () => {
  const submenuTabs = [
    {
      id: 'lista',
      label: 'Lista de Clientes',
      icon: Users,
      content: <ClientList />
    },
    {
      id: 'analytics',
      label: 'Análises',
      icon: BarChart3,
      content: <ClientAnalytics />
    },
    {
      id: 'import',
      label: 'Importar',
      icon: Upload,
      content: <ClientImport />
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clientes e Contatos</h1>
          <p className="text-gray-600 mt-1">Gerencie empresas, pessoas e relacionamentos</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Cliente
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Empresas</p>
                <p className="text-xl font-bold">1,247</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <User className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Pessoas</p>
                <p className="text-xl font-bold">1,600</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Phone className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Contatos Ativos</p>
                <p className="text-xl font-bold">2,847</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Mail className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">Interações Mês</p>
                <p className="text-xl font-bold">18,392</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Submenu */}
      <SubMenu tabs={submenuTabs} defaultTab="lista" />
    </div>
  );
};

export default Clientes;
