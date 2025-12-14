//importing
import express, { json } from "express";
import router from "./routes";

//declaracion of app
const app = express();

//middlewars
app.use(json());
app.use(router);

app.listen(3000, () => {
    console.log("App running on port 3000. http://localhost:3000");
})
