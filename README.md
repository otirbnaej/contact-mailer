# Mailer
Aplicação para envio de emails de uma página web (Contato/feedback)

Criar arquivo '.env' com base no '.env.example'.

Inserir as seguintes variáveis:

-	SMTP_HOST = É o host ou o endereço de ip do serviço de email ao qual se conectar.
-	SMTP_PORT = É a porta da conexão SMTP.
-	SERVER_EMAIL = Endereço de email a ser utilizado para envio das mensagens
-	SERVER_PASS = Senha do email escolhido.
- PORT = Porta utilizada para execução da aplicação.

O FRONTEND deve enviar uma requisição do tipo POST contendo um JSON com os dados "name", "email" e "message".
