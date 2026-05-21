exports.config = {

  app_name: ['api-devops'],

  license_key: process.env.NEW_RELIC_LICENSE_KEY,

  logging: {
    level: 'info',
  },
  distributed_tracing: {
    enabled: true
  }

};