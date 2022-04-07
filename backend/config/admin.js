module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5870f619e2aef6bb6488e1bca551c030'),
  },
});
