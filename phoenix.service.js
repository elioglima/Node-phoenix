[Unit]
Description=Phoenix API  Http Service

[Service]
ExecStart=/home/ubuntu/phoenix/app.js
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=Phoenix-API

[Install]
WantedBy=multi-user.target