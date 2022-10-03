import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { Galeria } from "./models/galeria.js";
import { PL } from "./routes/pl.js";
import { EN } from "./routes/en.js";
const DBURI = `mongodb+srv://kprokop:${process.env.DB_PASS}@siczconstruction.1sc7a3e.mongodb.net/SiczConstruction?retryWrites=true&w=majority`;
const app = express();

mongoose
    .connect(DBURI)
    .then(() => {
        app.listen(3001);
        console.log("conected to db");
    })
    .catch((err) => {
        console.error(err);
    });
//setup view engine
app.set("view engine", "ejs");
//setup logger
app.use(morgan("dev"));
//make public static files
app.use(express.static("public"));
app.use(express.json());

app.use("/pl", PL);
app.use("/en", EN);

app.get("/", (req, res) => {
    res.redirect("/pl");
});
app.post("/send-email", (req, res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "konradqxd@gmail.com",
            pass: process.env.EMAIL_PASS,
        },
    });
    const mailOptions = {
        from: req.body.email,
        to: "prokop.k99@gmail.com",
        subject: `Message from ${req.body.company}: ${req.body.name} ${req.body.email}`,
        text: req.body.content,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.send("error");
        } else {
            console.log("Email sent: " + info.response);
            res.send("success");
        }
    });
});
// app.get("/galeria", (req, res) => {
//     Galeria.find()
//         .then((result) => {
//             //res.send(result)
//             res.render("galeria", { galeria: result });
//         })
//         .catch((err) => {
//             console.error(err);
//             res.redirect("/");
//         });
// });

// app.get("/kontakt", (req, res) => {
//     res.render("kontakt");
// });

// app.get("/realizacje", (req, res) => {
//     res.render("realizacje");
// });
// app.get("/dodaj", (req,res) =>{
//     Galeria.insertMany([
//         {obraz: "https://sicz.eu/onewebstatic/318eacc8e9-t%C5%82o2.jpg", opis: "Zakład Mechaniczno – Biologicznego Przetwarzania Odpadów Komunalnych- Zakłady Usługowe „Południe” w Przemyślu"},
//         {obraz: "https://sicz.eu/onewebstatic/c3ec8883bb-Mury%20oporowe1.jpg", opis: "Zakład Mechaniczno – Biologicznego Przetwarzania Odpadów Komunalnych- Zakłady Usługowe „Południe” w Przemyślu"},
//         {obraz: "https://sicz.eu/onewebstatic/06ab6a4bb1-44.jpg", opis: "Międzygminny Związek Celowy we Włodawie- plac magazynowania odpadów"},
//         {obraz: "https://sicz.eu/onewebstatic/9f1e049726-55.jpg", opis: "Międzygminny Związek Celowy we Włodawie- plac magazynowania odpadów"},
//         {obraz: "https://sicz.eu/onewebstatic/c4a14b6414-66.jpg", opis: "Budowa kompostowni odpadów biodegradalnych w Leżachowie- plac leżakowania"},
//         {obraz: "https://sicz.eu/onewebstatic/f18eafcf11-Posadzka%20betonowa1.jpg", opis: "P & P Consulting S.p. z.o.o.- plac betonowy"},
//         {obraz: "https://sicz.eu/onewebstatic/32b51697f8-Drogi%20i%20place%20betonowe%202.jpg", opis: "Drogi i place betonowe-"},
//         {obraz: "https://sicz.eu/onewebstatic/06e9a794e9-11.jpg", opis: "Zakład Mechaniczno – Biologicznego Przetwarzania Odpadów Komunalnych- Zakład Usługowy „Południe” w Przemyślu"},

// ],function(err){})
// })
