sudo apt-get install mailutils
zip -r reports.zip . -i coverage/*
ls
echo "EMAIL_TO_SEND: $EMAIL_TO_SEND"
echo "COMMIT_MESSAGE: $COMMIT_MESSAGE"
echo "Pipeline executado com o commit '$COMMIT_MESSAGE', segue os relatórios em anexo." | mail -s "Pipeline executado com sucesso" -A reports.zip "$EMAIL_TO_SEND"