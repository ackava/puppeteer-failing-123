import puppeteer from "puppeteer-core";
import process from "process";

const p = await puppeteer.launch({
    channel: "chrome"
});

const page = await p.newPage();
await page.setContent(`<div><span>A</span></div>`);
await page.screenshot({
    path: "/app/a.png"
});
