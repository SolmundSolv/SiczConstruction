import express from "express";
import { Galeria } from "../models/galeria.js";
import { getLanguage } from "../lang.js";
import nodemailer from "nodemailer";
const router = express.Router();
router.use(express.static("public"));

router.get("/", (req, res) => {
    res.render("index", { lang: getLanguage("pl") });
});
router.get("/galeria", (req, res) => {
    Galeria.find()
        .then((result) => {
            //res.send(result)
            res.render("galeria", { galeria: result, lang: getLanguage("pl") });
        })
        .catch((err) => {
            console.error(err);
            res.redirect("/");
        });
});

router.get("/kontakt", (req, res) => {
    res.render("kontakt", { lang: getLanguage("pl") });
});

router.get("/realizacje", (req, res) => {
    res.render("realizacje", { lang: getLanguage("pl") });
});
export const PL = router;

router.post("/kontakt", (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "konradqxd@gmail.com",
            pass: "tmiaqbdsdrfwinnj",
        },
    });
    const mailOptions = {
        from: req.body.email,
        to: "prokop.k99@gmail.com",
        subject: `Message from ${req.body.email}: ${req.body.name}`,
        text: req.body.connect,
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
            res.send("error");
        } else {
            console.log("Email sent: " + info.response);
            res.send("success");
        }
    });
});
// router.get("/add", (req, res) => {
//     Galeria.findByIdAndUpdate("63318a6bd43b4e3d1ad589a5", { converted: "06ab6a4bb1-44.jpg" }, () => {
//         console.log("done");
//     });
//     Galeria.findByIdAndUpdate("63318a6bd43b4e3d1ad589aa", { converted: "06e9a794e9-11.jpg" }, () => {
//         console.log("done");
//     });
//     Galeria.findByIdAndUpdate("63318a6bd43b4e3d1ad589a6", { converted: "9f1e049726-55.jpg" }, () => {
//         console.log("done");
//     });
//     Galeria.findByIdAndUpdate("63318a6bd43b4e3d1ad589a9", { converted: "32b51697f8-Drogi i place betonowe 2.jpg" }, () => {
//         console.log("done");
//     });
//     Galeria.findByIdAndUpdate("63318a6bd43b4e3d1ad589a3", { converted: "318eacc8e9-tło2.jpg" }, () => {
//         console.log("done");
//     });
//     Galeria.findByIdAndUpdate("63318a6bd43b4e3d1ad589a4", { converted: "c3ec8883bb-Mury oporowe1.jpg" }, () => {
//         console.log("done");
//     });
//     Galeria.findByIdAndUpdate("63318a6bd43b4e3d1ad589a7", { converted: "c4a14b6414-66.jpg" }, () => {
//         console.log("done");
//     });
//     Galeria.findByIdAndUpdate("63318a6bd43b4e3d1ad589a8", { converted: "f18eafcf11-Posadzka betonowa1.jpg" }, () => {
//         console.log("done");
//     });
// });
