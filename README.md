# Mailer

<h3><b>Aplicação para envio de emails de uma página web (Contato/feedback)</h3>
<br>
Criar arquivo '.env' com base no '.env.example'.

Inserir as seguintes variáveis:

-<b> SMTP_HOST </b>= É o host ou o endereço de ip do serviço de email ao qual se conectar.
-<b> SMTP_PORT </b>= É a porta da conexão SMTP.
-<b> SERVER_EMAIL </b>= Endereço de email a ser utilizado para envio das mensagens
-<b> SERVER_PASS </b>= Senha do email escolhido.
	-<b> PORT </b>= Porta utilizada para execução da aplicação.

O FRONTEND deve enviar uma requisição do tipo POST contendo um JSON com os dados "name", "email" e "message".
