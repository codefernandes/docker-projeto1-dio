# Rodando meu servidor apache com Docker


## Estrtutura de pastas recomendadas

No diretório do servidor, crie uma pasta chamada app e coloque todos os arquivos html nele.

meu-servidor/

meu-servidor/meu-servidor.yml

meu-servidor/app/

meu-servidor/app/index.html

meu-servidor/app/style.css

meu-servidor/app/script.js



docker compose -f meu-servidor.yml up -d
