[Unit]
Description=Phoenix API  Http Service

[Service]
WorkingDirectory=/home/ubuntu/phoenix
ExecStart=node /home/ubuntu/phoenix/app.js
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=Phoenix-API

[Install]
WantedBy=multi-user.target