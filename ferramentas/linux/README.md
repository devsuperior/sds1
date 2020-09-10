# SDS1: Instalação das ferramentas no Linux (Ubuntu/Debian)

## ATENÇÃO:

**É MUITO IMPORTANTE que todos instalem as mesmas versões para evitar imprevistos durante a construção do projeto, e aumentar as chances de que suas dúvidas sejam respondidas.**

## Ferramentas que você deverá instalar no seu computador:

- Curl
- Git
- Java JDK 11
- Maven
- STS
- Postman
- Postgresql e pgAdmin
- Heroku CLI
- NPM
- VS Code

## Curl

- Instalar o curl: sudo apt-get install -y curl
- Conferir a instalação: curl

## Git

- Instalar: sudo apt-get install -y git
- Conferir a instalação: git

## Java JDK 11

- Instalar Java: sudo apt install openjdk-11-jdk
- Verificar a instalação: java -version
- Configurar JAVA_HOME:
  - Verificar caminho Java: sudo update-alternatives --config java
  - Copie o caminho do Java
  - Edite o arquivo .bashrc: sudo gedit ~/.bashrc
  - Copie o código abaixo no final do arquivo. Salve o arquivo.
  - Abra um novo terminal e teste: echo $JAVA_HOME

JAVA_HOME=/usr/...
export JAVA_HOME
export PATH=$PATH:$JAVA_HOME

## Maven

- Instalar Java: sudo apt-get install maven
- Verificar a instalação: mvn -v

## STS

- Google: STS
- Baixar
- Descompactar (exemplo: /home/user/apps)
- Iniciar STS
  - Selecione um workspace (exemplo: /home/user/Workspaces/ws-sts)
- Liberar permissão na pasta do workspace: sudo chmod -R ugo+rw /home/user/Workspaces/ws-sts

## Postman

- Instalar com snap: snap install postman
