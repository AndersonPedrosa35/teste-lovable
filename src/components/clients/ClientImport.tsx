
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, Download, CheckCircle, AlertCircle, Users } from 'lucide-react';

export const ClientImport = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [importStatus, setImportStatus] = useState<'idle' | 'processing' | 'completed'>('idle');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleImport = () => {
    if (!file) {
      toast({
        title: "Erro",
        description: "Selecione um arquivo para importar",
        variant: "destructive"
      });
      return;
    }

    setImportStatus('processing');
    
    // Simular processo de importação
    setTimeout(() => {
      setImportStatus('completed');
      toast({
        title: "Importação Concluída",
        description: "247 clientes foram importados com sucesso",
      });
    }, 3000);
  };

  const importHistory = [
    {
      id: 1,
      filename: 'clientes_janeiro_2024.csv',
      date: '15/01/2024',
      records: 125,
      status: 'sucesso',
      errors: 0
    },
    {
      id: 2,
      filename: 'leads_campanha_social.xlsx',
      date: '08/01/2024',
      records: 89,
      status: 'sucesso',
      errors: 3
    },
    {
      id: 3,
      filename: 'empresas_parceiras.csv',
      date: '02/01/2024',
      records: 45,
      status: 'erro',
      errors: 12
    }
  ];

  return (
    <div className="space-y-6">
      {/* Upload de Arquivo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Importar Clientes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="file">Arquivo de Dados</Label>
            <Input
              id="file"
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileUpload}
            />
            <p className="text-xs text-gray-500">
              Formatos suportados: CSV, Excel (.xlsx, .xls)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="separator">Separador CSV</Label>
              <Select defaultValue="comma">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="comma">Vírgula (,)</SelectItem>
                  <SelectItem value="semicolon">Ponto e vírgula (;)</SelectItem>
                  <SelectItem value="tab">Tab</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="encoding">Codificação</Label>
              <Select defaultValue="utf8">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utf8">UTF-8</SelectItem>
                  <SelectItem value="latin1">Latin-1</SelectItem>
                  <SelectItem value="ascii">ASCII</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mapping">Mapeamento de Campos</Label>
            <Textarea
              id="mapping"
              placeholder="Nome -> nome_empresa&#10;E-mail -> email_contato&#10;Telefone -> telefone_principal"
              rows={4}
            />
          </div>

          {file && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">{file.name}</p>
                  <p className="text-sm text-blue-700">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            </div>
          )}

          <Button 
            onClick={handleImport} 
            disabled={!file || importStatus === 'processing'}
            className="w-full"
          >
            {importStatus === 'processing' ? (
              <>Processando...</>
            ) : (
              <>
                <Upload className="h-4 w-4 mr-2" />
                Importar Clientes
              </>
            )}
          </Button>

          {importStatus === 'completed' && (
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-medium">
                  Importação concluída com sucesso!
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Template de Exemplo */}
      <Card>
        <CardHeader>
          <CardTitle>Template de Importação</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Baixe nosso template para facilitar a importação dos seus dados.
          </p>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Baixar Template CSV
          </Button>
        </CardContent>
      </Card>

      {/* Histórico de Importações */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Importações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {importHistory.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">{item.filename}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{item.date}</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {item.records} registros
                      </span>
                      {item.errors > 0 && (
                        <span className="flex items-center gap-1 text-red-600">
                          <AlertCircle className="h-4 w-4" />
                          {item.errors} erros
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <Badge 
                  variant={item.status === 'sucesso' ? 'default' : 'destructive'}
                >
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
