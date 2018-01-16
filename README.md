# Flick

O Flick é um clone simples do Snapchat. Seu nome foi inspirado em um pesonagem do filme vida de inseto, que procura sempre se comunicar com os outros personagens.

## Sobre o app:

O app é divido em 4 partes:

A  tela principal é a camera, que tira fotos e após 3 fotos tiradas ele mostra em uma outra tela essas fotos. 
A ideia era por alguns efeitos e textos sobrepondo a imagem e salvando como "my Stories" para que outras pessoas pudessem visualizar.
Iria uitilizar a biblioteca [gl-react](https://github.com/gre/gl-react) para os efeitos e gerencimento de estado para os textos.
Nela você encontra dois botões, um para ligar e desligar o flash e outro para mudar a camera a visão das cameras. No topo a um botão a esquerda que leva para a tela de Discover onde  mostra ao usuario novos usuarios que não são seus contatos. Objetivo é conhecer e acompanhar a vida de novas pessoas.
A foto tirada na camera iria ser salva em uma API para mais tarde ser usada quando clicada no card. O botão a direita leva para a tela de Contacts que mostra a lista de pessoas que você tem como contato ja cadastrado e ao clicar em alguma delas é levado para a tela Profile onde mostra algumas informações sobre o contato selecionado. A ideia era mostrar os Stories assim como no Discover.

## Dependências:
Essas foram as dependências usadas no projeto
* Native-base
* React-Navigation
* Redux
* React-redux
* Redux-promise
* Axios

## Começando:
Para começar é bem simples:
* primeiro é necessário clonar o projeto e executar o seguinte código dentro do diretório para fazer o download das dependências:
```
npm install
```
Para utilizar camera em smartphones IOS é preciso colar o seguinte código

Para conectar a depenência da camera com o projeto é necessário executar esse comando:
```
react-native link react-native-camera
```

### Você já está pronto para usar o flick!!!
