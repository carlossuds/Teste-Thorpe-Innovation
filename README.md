# Teste  [Thorpe Innovation <img width="50" align="center" src="https://media-exp1.licdn.com/dms/image/C4E0BAQFufiSIoExTfg/company-logo_200_200/0?e=1597881600&v=beta&t=LbKRTCFcYKseTtboXwTMRVBJUx6WRLXoRps_hPEoNRw">](https://www.linkedin.com/company/thorpe-system/)

## [Backend](./backend) em Node
- Cadastrar usuários com e-mail e senha
- Senha deve ser salva com hash no banco 
- Token de login para permitir que usuário se mantenha logado
- Validar token para realizar requisições
- Informações enviadas devem ser salvas no banco
- Retornar informações para os aplicativos que consomem a API.

## [Web](./web) em React
- Tela de Login com 02 inputs, para o e-mail e a senha digitados. Retornar erro caso não tenha permissão de logar
- Tela de Cadastro. A tela irá recolher nome, e-mail e senha
- Tela principal que irá conter 01 input para que novos itens sejam adicionados. Será possível deletar itens da lista. Deverá fazer requisições à API passando o token de autenticação. As informações devem ser consumidas da API.

## [Mobile](./todo) em React Native
- Deverá ter as mesmas features e funcionalidades da página WEB acima;
- Deverá ter modulo para manipulação de imagem para manipulação de foto extraída da biblioteca de fotos e/ou da câmera
do dispositivo mobile. 
- A feature deverá ser capaz de manipular mesmo que minimamente a imagem e guardar foto de antes e depois da manipulação
