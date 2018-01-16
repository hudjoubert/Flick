# Flick

O Flick é um clone simples do Snapchat. Seu nome foi inspirado em um pesonagem do filme vida de inseto, que procura sempre se comunicar com os outros personagens.

## Sobre o app:

O app é divido em 4 partes:

A camera tira fotos e após 3 fotos tiradas ele mostra em uma outra tela essas fotos. 
A ideia era por alguns efeitos e textos sobrepondo a imagem e salvando como "my Stories" para que outras pessoas pudessem visualizar.
Iria uitilizar a biblioteca [gl-react](https://github.com/gre/gl-react) para os efeitos e gerencimento de estado para os textos.

A tela Discover mostra ao usuario novos usuarios que não são seus contatos. Objetivo é conhecer e acompanhar a vida de novas pessoas.
A foto tirada na camera iria ser salva em uma API para mais tarde ser usada quando clicada no card. 

A tela Contacts mostra a lista de pessoas que você tem como contato ja cadastrado.

O Profile mostra algumas informações sobre o contato selecionado. A ideia era mostrar os Stories assim como no Discover.

## Dependências:
Essas foram as dependências usadas no projeto
* Native-base
* React-Navigation
* Redux
* React-redux
* Redux-promise
* Axios

## Começando:
### Requisitos
* JDK >= 1.7 (se rodar no 1.6 vai aparecer o erro "_cameras = new HashMap<>();")
* Com o iOS 10 e superior você precisa adicionar a chave "Privacidade - Camera Usage Description" para o Info.plist do seu projeto.
Pode ser encontrado em 'your_project/ios/your_project/Info.plist'. Adcionar o seguinte códido:
```
<key>NSCameraUsageDescription</key>
<string>Your message to user when the camera is accessed for the first time</string>

<!-- Include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>

<!-- Include this only if you are planning to use the microphone for video recording -->
<key>NSMicrophoneUsageDescription</key>
<string>Your message to user when the microphone is accessed for the first time</string>
```
* No Android, você precisa do buildToolsVersion de 25.0.2+. Isso deve ser baixado
facilmente e automaticamente pelo SDK Manager do Android Studio.
*No iOS 11 e posterior você precisa adicionar a chave NSPhotoLibraryAddUsageDescription ao Info.plist. Esta chave permite que
você descreva o motivo pelo qual seu aplicativo busca acesso somente para escrita à biblioteca de fotos do usuário. Info.plist 
pode ser encontrado em 'your_project / ios / your_project / Info.plist'. Adicione o seguinte código:
```
<!-- Include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>
```
## Instalação
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
