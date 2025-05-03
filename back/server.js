const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const normalizeText = (text) => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  const normalizedMessage = normalizeText(userMessage);
  let botResponse = 'Desculpe, não entendi sua mensagem.';

  if (normalizedMessage.includes('ola') || normalizedMessage.includes('oi')) {
    botResponse = 'Olá furioso! Como posso ajudar você?';
  } else if (normalizedMessage.includes('tchau')) {
    botResponse = 'Tchau furioso! Tenha um ótimo dia!';
  } else if (normalizedMessage.includes('time') || normalizedMessage.includes('equipe') || normalizedMessage.includes('lineup') || normalizedMessage.includes('line') || normalizedMessage.includes('players')){
    botResponse = 'Quer saber sobre nosso time de CS? Conheça nossos players:\n\n Molodoy - Nosso Awper do Cazaquistão \n Yekindar - Nosso agressivo Rifler da Latvia \n FalleN - Maior jogador brasileiro da história \n Kscerato - Hoje tem clutch do KSCERATO?? \n Yuurih - Nosso entry fragger '
  } else if (normalizedMessage.includes('agenda') || normalizedMessage.includes('jogos')){
    botResponse = 'Gosta de acompanhar os campeonatos? Então se prepara que vem muita coisa por aí! \n\n Fica ligado nos próximos campeonatos que estaremos presentes: \n\n => PGL Astana 2025 - 10/05/25 à 18/05/25 \n => IEM Dallas 2025 - 19/05/25 à 25/05/25 \n => Austin Major 2025 - 03/06/25 à 22/06/25 \n \n Se prepara para torcer com a gente! '
  } else if (normalizedMessage.includes('resultados') || normalizedMessage.includes('passados') || normalizedMessage.includes('antigos')){
    botResponse = 'Perdeu algum jogo? Então vem que eu te mostro nossos últimos resultados! \n \n PGL Bucharest 2025 - 09/04/25 - Furia 0 x 2 The MongolZ \n PGL Bucharest 2025 - 08/04/25 - Furia 0 x 2 The Virtus.pro \n PGL Bucharest 2025 - 07/04/25 - Furia 1 x 2 Complexity \n PGL Bucharest 2025 - 06/04/25 - Furia 2 x 1 Apogee'
  }

  res.json({ response: botResponse });
});

app.use(express.static(path.join(__dirname, '../front/build')));

app.listen(port, () => {
  console.log(`Servidor backend rodando em http://localhost:${port}`);
});
