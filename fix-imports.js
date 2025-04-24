const fs = require('fs');
const path = require('path');

// Diretório que contém os arquivos a serem modificados
const directoryPath = path.join(__dirname, 'arquivos', 'components', 'ui');

// Função para corrigir importações em um arquivo
function fixImportsInFile(filePath) {
  try {
    // Ler o conteúdo do arquivo
    let content = fs.readFileSync(filePath, 'utf8');

    // Substituir importações de @/lib/utils
    content = content.replace(/import\s+{([^}]*)}\s+from\s+["']@\/lib\/utils["']/g, 
      'import {$1} from "../../../src/app/lib/utils"');

    // Substituir importações de @/components/ui/
    content = content.replace(/import\s+{([^}]*)}\s+from\s+["']@\/components\/ui\/([^"']*)["']/g, 
      'import {$1} from "../../../src/app/components/ui/$2"');

    // Substituir importações de @/hooks/
    content = content.replace(/import\s+{([^}]*)}\s+from\s+["']@\/hooks\/([^"']*)["']/g, 
      'import {$1} from "../../../src/app/hooks/$2"');

    // Escrever o conteúdo modificado de volta ao arquivo
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Corrigido: ${filePath}`);
  } catch (error) {
    console.error(`Erro ao processar ${filePath}:`, error);
  }
}

// Função para processar todos os arquivos em um diretório
function processDirectory(directoryPath) {
  // Ler todos os arquivos no diretório
  const files = fs.readdirSync(directoryPath);

  // Processar cada arquivo
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // Se for um diretório, processar recursivamente
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      // Se for um arquivo .tsx ou .ts, corrigir importações
      fixImportsInFile(filePath);
    }
  }
}

// Iniciar o processamento
processDirectory(directoryPath);
console.log('Processamento concluído!');
