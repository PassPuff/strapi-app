export default ({ env }) => ({
  host: env('HOST', '206.81.26.245'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
