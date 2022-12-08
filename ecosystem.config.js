module.exports = {
  apps: [
    {
      name: "server",
      script: "/root/Web04-Fitory/server/dist/main.js",
      instances: 0,
      exec_mode: "cluster",
      wait_ready: true,
      autorestart: true,
      max_restarts: 10,
      listen_timeout: 50000,
      kill_timeout: 5000,
    },
  ],
};
