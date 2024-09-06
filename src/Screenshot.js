const puppeteer = require("puppeteer");

const captureScreenshot = async (url, width, height, savePath) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width, height });

  await page.goto(url, { waitUntil: "networkidle2" });

  await page.screenshot({ path: savePath });

  await browser.close();
};

const fs = require("fs");
const path = require("path");

// 获取指定目录中所有 index.js 文件的路径
function getIndexFiles(directory) {
  const indexFiles = [];

  // 读取目录中的所有文件和子目录
  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file);

    // 如果是子目录，则递归调用
    if (fs.lstatSync(fullPath).isDirectory()) {
      indexFiles.push(...getIndexFiles(fullPath)); // 递归遍历子目录
    } else if (file === "index.js") {
      indexFiles.push(fullPath); // 收集 index.js 文件的路径
    }
  });

  return indexFiles;
}

const indexFilePaths = getIndexFiles(path.resolve(__dirname, "./pages"));
const pages = indexFilePaths.map((indexFilePath) => {
  const parentDirectory = path
    .basename(path.dirname(indexFilePath))
    .replace("Page", "")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();

  const url = `http://localhost:3000/${parentDirectory}`;

  const savePath = `../public/images/${parentDirectory}.png`;

  return { url, savePath };
});

const width = 800;
const height = 800;

console.log(pages);

const runScreenshots = async () => {
  for (const { url, savePath } of pages) {
    try {
      await captureScreenshot(url, width, height, savePath);
      console.log(`Screenshot saved to ${savePath}`);
    } catch (error) {
      console.error("Error capturing screenshot:", error);
    }
  }
};

runScreenshots();
