sudo apt-get install mailutils
ls
zip -r reports.zip . -i coverage/*
echo "Pipeline executado com o commit '$COMMIT_MESSAGE', segue os relatórios em anexo." | mail -s "Pipeline executado com sucesso" -A reports.zip "$EMAIL_TO_SEND"