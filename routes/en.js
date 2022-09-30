import express from "express";
import { Galeria } from "../models/galeria.js";
import { getLanguage } from "../lang.js";

const router = express.Router();
router.use(express.static("public"));

router.get("/", (req, res) => {
    res.render("index", { lang: getLanguage("en") });
});
router.get("/galeria", (req, res) => {
    Galeria.find()
        .then((result) => {
            //res.send(result)
            res.render("galeria", { galeria: result, lang: getLanguage("en") });
        })
        .catch((err) => {
            console.error(err);
            res.redirect("/");
        });
});

router.get("/kontakt", (req, res) => {
    res.render("kontakt", { lang: getLanguage("en") });
});

router.get("/realizacje", (req, res) => {
    res.render("realizacje", { lang: getLanguage("en") });
});
export const EN = router;
