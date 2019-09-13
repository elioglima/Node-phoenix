[Unit]
Description=Phoenix API  Http Service
PIDFile=/tmp/phoenix-pid.pid
Restart=always
KillSignal=SIGQUIT
WorkingDirectory=/home/ubuntu/phoenix/
ExecStart=/home/ubuntu/phoenix/app.js
WantedBy=multi-user.target