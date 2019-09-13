[Unit]
Description=Phoenix API  Http Service

[Service]
ExecStart=/home/ubuntu/phoenix/app.js
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=nodejs-example

[Install]
WantedBy=multi-user.target