import dotenv from 'dotenv';

function initConfig() {
  const config = dotenv.config();
  console.log(config)
  console.log(config.PORT)
  
}

export default initConfig;