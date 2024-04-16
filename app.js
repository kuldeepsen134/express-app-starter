import cors from "cors";
import express from "express";
import connectDB from "./app/db/index.js";

const app = express();

connectDB()
// global middlewares
app.use(
    cors({
        origin:
            process.env.CORS_ORIGIN === "*"
                ? "*" // This might give CORS error for some origins due to credentials set to true
                : process.env.CORS_ORIGIN?.split(","), // For multiple cors origin for production. Refer https://github.com/hiteshchoudhary/apihub/blob/a846abd7a0795054f48c7eb3e71f3af36478fa96/.env.sample#L12C1-L12C12
        credentials: true,
    })
);

app.get('/', (req, res) => {
    res.send('Server is ready');
})

const port = process.env.PORT || 5500;


app.listen(port, () => console.log(`Server is running port on ${port}`))