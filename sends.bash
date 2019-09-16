#!/bin/bash

# FOLDER_REMOTE="phenix"
# FOLDER_REMOTE_TRANS="transfer"
# PUBLICKEY="-i ./KeyServidorAWS01.pem"
# URL_AWS="ubuntu@ec2-18-228-42-87.sa-east-1.compute.amazonaws.com"
# ssh $PUBLICKEY $URL_AWS 'rm -rf ~/'$FOLDER_REMOTE_TRANS'/*'

# ssh $PUBLICKEY $URL_AWS 'mkdir ~/'$FOLDER_REMOTE_TRANS'/api'
# scp $PUBLICKEY -r ./api/* $URL_AWS:~/$FOLDER_REMOTE_TRANS/api/

# ssh $PUBLICKEY $URL_AWS 'mkdir ~/'$FOLDER_REMOTE_TRANS'/config'
# scp $PUBLICKEY -r ./config/* $URL_AWS:~/$FOLDER_REMOTE_TRANS/config/

# ssh $PUBLICKEY $URL_AWS 'mkdir ~/'$FOLDER_REMOTE_TRANS'/db'
# scp $PUBLICKEY -r ./db/* $URL_AWS:~/$FOLDER_REMOTE_TRANS/db/

# ssh $PUBLICKEY $URL_AWS 'mkdir ~/'$FOLDER_REMOTE_TRANS'/libs'
# scp $PUBLICKEY -r ./libs/* $URL_AWS:~/$FOLDER_REMOTE_TRANS/libs/

# scp $PUBLICKEY -r ./app.js $URL_AWS:~/$FOLDER_REMOTE_TRANS/libs/

#scp -i ~/.ssh/id_rsa.pub USER@SERVER:/home/USER/FILENAME /home/USER/FILENAME
ssh -i './KeyServidorAWS01.pem' ubuntu@ec2-18-228-42-87.sa-east-1.compute.amazonaws.com

