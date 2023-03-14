export default {
  mongo: {
    host: process.env.MONGO_HOST || "mongo:27017",
    db: process.env.MONGO_DB || "live_stream_mall",
  },
  host: process.env.HOST || "0.0.0.0",
  port: process.env.PORT || 80,
};
