// import { config as dotenvConfig } from 'dotenv';
// dotenvConfig();

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  swagger_servers: process.env.SWAGGER_SERVERS
});
