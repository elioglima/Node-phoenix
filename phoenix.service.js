[Unit]
Description=Phoenix API  Http Service

[Service]
Environment=NODE_PORT=3000
Type=simple
User=ubuntu
ExecStart=/bin/bash -c '$$(which node) /home/ubuntu/phoenix/app.js'

[Install]
WantedBy=multi-user.target