import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
// import { Post } from "./entities/Post";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { COOKIE_NAME, __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";

// import { sendEmail } from "./utils/sendEmail";
// import { User } from "./entities/User";
const main = async () => {
    const conn = await createConnection({
        type: "postgres",
        database: "lireddit2",
        username: "postgres",
        password: "tuanga99",
        logging: true,
        synchronize: true,
        entities: [Post, User],
    });

    const app = express();
    const RedisStore = connectRedis(session);
    const redis = new Redis();
    app.use(
        cors({
            origin: "http://localhost:3000",
            credentials: true,
        })
    );
    app.use(
        session({
            name: COOKIE_NAME,
            store: new RedisStore({
                client: redis,
                disableTouch: true,
                disableTTL: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
                httpOnly: true,
                sameSite: "lax",
                secure: __prod__,
            },
            saveUninitialized: false,
            secret: "qqwesadwqsadwqbdbmpasldf",
            resave: false,
        })
    );
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver, UserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res, redis }),
    });

    apolloServer.applyMiddleware({
        app,
        cors: false,
    });
    app.listen(4000, () => {
        console.log("server started on local host:4000");
    });

    //   const post = orm.em.create(Post, { title: "my first post" });
    //   await orm.em.persistAndFlush(post);

    //   const posts = await orm.em.find(Post, {});
    //   console.log(posts);
};

main().catch((err) => {
    console.log(err);
});
