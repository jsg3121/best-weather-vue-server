module.exports = {
  apps: [
    {
      name: "app",
      script: "./build/index.js",
      max_memory_restart: "50M",
      instances: "2",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      exec_mode: "cluster",
    },
  ],
};
