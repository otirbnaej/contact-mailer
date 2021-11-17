# Mailer

<h3><b>Aplicação para envio de emails de uma página web (Contato/feedback)</b></h3>
<br>
Criar arquivo '.env' com base no '.env.example'.

Inserir as seguintes variáveis:

- <b>SMTP_HOST</b> = É o host ou o endereço de ip do serviço de email ao qual se conectar. Ex. (hotmail): smtp.office365.com
- <b>SMTP_PORT</b> = É a porta da conexão SMTP. Ex. (hotmail): 587
- <b>SERVER_EMAIL</b> = Endereço de email a ser utilizado para envio das mensagens. Ex.: exemplo_123@hotmail.com
- <b>SERVER_PASS</b> = Senha do email escolhido. -<b> PORT </b>= Porta utilizada para execução da aplicação.

<br>
O <b>FRONTEND</b> deve enviar uma requisição do tipo <b>POST</b> contendo um <b>JSON</b> com os dados <b>"name"</b>, <b>"email"</b> e <b>"message"</b>.
