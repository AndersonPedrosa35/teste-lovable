
import React from 'react';
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, User, Settings } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTrigger } from '../ui/dialog';

export const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-gray-500 hover:text-gray-700" />
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
            <Badge variant="secondary" className="text-xs">
              IA Ativa
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar clientes, tickets..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">
                  <p className="text-center w-full">3</p>
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Notificações</DropdownMenuLabel>
              <DropdownMenuItem>
                <p>Notificação 1</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <p>Notificação 2</p>
              </DropdownMenuItem>
            </DropdownMenuContent>

          </DropdownMenu>

          {/* Settings */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Configurações</DropdownMenuLabel>
              <DropdownMenuItem>
                <p>Configuração 1</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <p>Configuração 2</p>
              </DropdownMenuItem> 
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:block">Admin</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>Teste</DialogHeader>
              <DialogDescription>Teste do modal</DialogDescription>
              {/* <DialogOverlay>Overlay</DialogOverlay> */}
              <DialogFooter><Button type="submit">Ok</Button></DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};
