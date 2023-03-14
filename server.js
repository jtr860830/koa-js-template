import Koa from "koa";
import { koaBody as bodyParser } from "koa-body";
import logger from "koa-pino-logger";
import cors from "@koa/cors";

// if db is needed, uncomment the following line
// import db from "./lib/db.js";
import TemplateRouter from "./routes/template.js";
import config from "./config.js";

const server = new Koa();
const { port, host } = config;

// if db is needed, uncomment the following line
// server.context.db = await db.conn();

server.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = { err: err.message };
  }
});
server.use(cors());
server.use(bodyParser({
  urlencoded: false,
  text: false
}));
server.use(logger());
server.use(TemplateRouter.prefix("/template").routes());

server.listen(port, host, () => console.info(`server is listening on ${host}:${port}`));
