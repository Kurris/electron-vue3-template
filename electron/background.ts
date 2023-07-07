import path from "path";
import { app, BrowserWindow } from "electron";


let mainWindow: BrowserWindow;

app.whenReady().then(() => {



}).then(() => {

  createMainWindow()

  // mac系统处理
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  });
})


const createMainWindow = () => {

  mainWindow = new BrowserWindow({
    frame: false,
    titleBarStyle: "hidden",//customButtonsOnHover 可以用html自定义缩小,放大,关闭按钮(可以,但是没必要,会缺少平台特定功能)
    titleBarOverlay: {
      color: 'rgba(2, 3, 4, 0)',
      // symbolColor: "rgba(36,41,46,0.9)"
      // height: 5
    }, // 需要设置titleBarStyle才生效, mac上设置:true , windows使用该对象不为undefined即可
    resizable: true,
    height: 850,
    width: 1380,
    webPreferences: {
      contextIsolation: true, // 是否开启隔离上下文
      nodeIntegration: true, // 渲染进程使用Node API
      preload: path.join(__dirname, "../electron/preload.js"), // 需要引用js文件
    },
  });

  if (app.isPackaged) {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
  } else {
    mainWindow.loadURL('http://localhost:3000')
  }

}


// 关闭窗口
app.on("window-all-closed", () => {
  app.quit();
});

