
import React from 'react';
import { 
  Home, 
  Users, 
  MessageSquare, 
  Target, 
  Bot, 
  Brain, 
  UserCheck2, 
  CreditCard, 
  UserCog, 
  Settings,
  BarChart,
  Tag,
  Headphones,
  Smartphone,
  Phone
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { useLocation, Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

const mainMenuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
    description: "Visão Geral"
  },
  {
    title: "Clientes",
    url: "/clientes", 
    icon: Users,
    description: "Empresas e Contatos"
  },
  {
    title: "Atendimento",
    url: "/atendimento",
    icon: MessageSquare,
    description: "Omnichannel"
  },
  {
    title: "Vendas",
    url: "/vendas",
    icon: Target,
    description: "Funil e Propostas"
  }
];

const aiMenuItems = [
  {
    title: "Agente de IA",
    url: "/agente-ia",
    icon: Bot,
    description: "Assistente Inteligente"
  },
  {
    title: "Supervisor IA",
    url: "/supervisor-ia", 
    icon: Brain,
    description: "Análise e Qualidade"
  }
];

const channelsMenuItems = [
  {
    title: "Canais",
    url: "/canais",
    icon: Smartphone,
    description: "WhatsApp, SMS, Telefonia"
  }
];

const managementMenuItems = [
  {
    title: "Atendimento ao Cliente",
    url: "/atendimento-cliente",
    icon: Headphones,
    description: "Tickets e Chamados"
  },
  {
    title: "Financeiro",
    url: "/financeiro",
    icon: CreditCard,
    description: "Cobranças e Pagamentos"
  },
  {
    title: "Equipe",
    url: "/equipe",
    icon: UserCog,
    description: "Gestão de Pessoas"
  },
  {
    title: "Relatórios",
    url: "/relatorios",
    icon: BarChart,
    description: "Analytics e Insights"
  }
];

const systemMenuItems = [
  {
    title: "Tags",
    url: "/tags",
    icon: Tag,
    description: "Marcadores"
  },
  {
    title: "Configurações", 
    url: "/configuracoes",
    icon: Settings,
    description: "Sistema"
  }
];

export function AppSidebar() {
  const location = useLocation();

  const MenuSection = ({ title, items }: { title: string; items: typeof mainMenuItems }) => (
    <SidebarGroup className="mb-4">
      <SidebarGroupLabel className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3">
        {title}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="space-y-2">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild
                className={cn(
                  "flex items-center gap-3 px-3 py-4 rounded-xl text-sm font-medium transition-all duration-200 group mx-2 min-h-[60px]",
                  location.pathname === item.url 
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <Link to={item.url} className="flex items-center gap-3 w-full">
                  <item.icon className={cn(
                    "h-5 w-5 transition-transform group-hover:scale-110 flex-shrink-0",
                    location.pathname === item.url ? "text-white" : "text-gray-500"
                  )} />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="font-medium truncate leading-tight">{item.title}</span>
                    <span className={cn(
                      "text-xs truncate transition-colors leading-tight mt-0.5",
                      location.pathname === item.url ? "text-blue-100" : "text-gray-400"
                    )}>
                      {item.description}
                    </span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar className="border-r-0 bg-white shadow-xl">
      <SidebarHeader className="border-b border-gray-100 p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
            <span className="text-white font-bold text-lg">CX</span>
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-bold text-gray-900 text-lg leading-tight">CXCenter</h2>
            <p className="text-xs text-gray-500 font-medium leading-tight">IA + Omnichannel</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="py-6 px-2">
        <MenuSection title="Principal" items={mainMenuItems} />
        <MenuSection title="Inteligência Artificial" items={aiMenuItems} />
        <MenuSection title="Configuração" items={channelsMenuItems} />
        <MenuSection title="Gestão" items={managementMenuItems} />
        <MenuSection title="Sistema" items={systemMenuItems} />
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-100 p-6">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-700">Saldo de Créditos</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">R$ 2.847,50</div>
          <div className="text-xs text-gray-500">
            Renovação em 15 dias
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
