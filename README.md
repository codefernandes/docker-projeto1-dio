#Rodando meu servidor apache com Docker#

## Estrtutura de pastas recomendadas

meu-servidor/
├── app/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── meu-servidor.yml

docker compose -f meu-servidor.yml up -d
