module.exports = ({ env }) => ({
  auth: {
    secret: env(
      "ADMIN_JWT_SECRET",
      "9294cd6ff112229cecd76eba8cea3d3e16ccb655eb1c35a6672b6bb54fc08882"
    ),
  },
});
