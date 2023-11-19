var Illaoi = {
  nome: "PlayAposentado",
  kill: 0,
  death: 0,
  assist: 0
};

var Kayn = {
  nome: "josuewilliamy",
  kill: 0,
  death: 0,
  assist: 0
};

var Azir = {
  nome: "DaZn",
  kill: 0,
  death: 0,
  assist: 0
};

var KogMaw = {
  nome: "Acid Ghost97",
  kill: 0,
  death: 0,
  assist: 0
};

var Bardo = {
  nome: "Rhinox",
  kill: 0,
  death: 0,
  assist: 0
};

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
  elementoTabela.innerHTML = `
          <tr>
              <td><img src="https://cdn.mobalytics.gg/assets/tft/images/champions/icons/set9-5/illaoi.png?v=48">${Illaoi.nome}</td>
              <td>${Illaoi.kill}</td>
              <td>${Illaoi.death}</td>
              <td>${Illaoi.assist}</td>
              <td><button onClick="adicionarKill(Illaoi)">Kill</button></td>
              <td><button onClick="adicionarDeath(Illaoi)">Death</button></td>
              <td><button onClick="adicionarAssist(Illaoi)">Assist</button></td>
         </tr>
         
         <tr>
              <td><img src="https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.22.1/CHAMPION/141/ICON">${Kayn.nome}</td>
              <td>${Kayn.kill}</td>
              <td>${Kayn.death}</td>
              <td>${Kayn.assist}</td>
              <td><button onClick="adicionarKill(Kayn)">Kill</button></td>
              <td><button onClick="adicionarDeath(Kayn)">Death</button></td>
              <td><button onClick="adicionarAssist(Kayn)">Assist</button></td>
         </tr>
         
         <tr>
              <td><img src="https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.22.1/CHAMPION/268/ICON">${Azir.nome}</td>
              <td>${Azir.kill}</td>
              <td>${Azir.death}</td>
              <td>${Azir.assist}</td>
              <td><button onClick="adicionarKill(Azir)">Kill</button></td>
              <td><button onClick="adicionarDeath(Azir)">Death</button></td>
              <td><button onClick="adicionarAssist(Azir)">Assist</button></td>
         </tr>

         <tr>
              <td><img src="https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.21.1/CHAMPION/96/ICON">${KogMaw.nome}</td>
              <td>${KogMaw.kill}</td>
              <td>${KogMaw.death}</td>
              <td>${KogMaw.assist}</td>
              <td><button onClick="adicionarKill(KogMaw)">Kill</button></td>
              <td><button onClick="adicionarDeath(KogMaw)">Death</button></td>
              <td><button onClick="adicionarAssist(KogMaw)">Assist</button></td>
         </tr>
         
         <tr>
              <td><img src="https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.22.1/CHAMPION/432/ICON">${Bardo.nome}</td>
              <td>${Bardo.kill}</td>
              <td>${Bardo.death}</td>
              <td>${Bardo.assist}</td>
              <td><button onClick="adicionarKill(Bardo)">Kill</button></td>
              <td><button onClick="adicionarDeath(Bardo)">Death</button></td>
              <td><button onClick="adicionarAssist(Bardo)">Assist</button></td>
         </tr>
      `;
}

function adicionarKill(jogador) {
  jogador.kill++;
  exibirNaTela();
}

function adicionarDeath(jogador) {
  jogador.death++;
  exibirNaTela();
}

function adicionarAssist(jogador) {
  jogador.assist++;
  exibirNaTela();
}
