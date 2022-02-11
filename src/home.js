import { __exportStar } from "tslib";
import home from "../home/home";

const home =require("./home");

var homeBanner = {
    title: string,
    subtitle: string,
    image: string,
    cta: {
        text: string,
        href: string,
    }
};

exports.homeBanner = home;