module.exports = {
  apps: [
    {
      name: "app",
      script: "./build/index.js",
      instances: "5",
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
