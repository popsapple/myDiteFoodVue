"use strict";
/* eslint-disable */
const winURL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`;

const { app, BrowserWindow, protocol } = require("electron");
const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(`http://localhost:9080`);
  } else {
    mainWindow.loadURL(
      url.format({
        pathname:
          "index.html" /* Attention here: origin is path.join(__dirname, 'index.html') */,
        protocol: "file",
        slashes: true
      })
    );
  }

  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", () => {
  protocol.interceptFileProtocol(
    "file",
    (request, callback) => {
      const url = request.url.substr(7); /* all urls start with 'file://' */
      callback({ path: path.normalize(`${__dirname}/${url}`) });
    },
    err => {
      if (err) console.error("Failed to register protocol");
    }
  );
  createWindow();
});

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});
/* eslint-enable */
