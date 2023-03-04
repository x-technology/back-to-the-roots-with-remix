const path = require("node:path");
const fs = require("node:fs/promises");

const walk = async (currentDirPath) => {
  const files = await fs.readdir(currentDirPath);
  const result = [];

  for (const file of files) {
    const filePath = path.join(currentDirPath, file);
    const stat = await fs.stat(filePath);
    if (stat.isFile()) {
      result.push({ filePath, stat });
    } else if (stat.isDirectory()) {
      const moreFiles = await walk(filePath);
      result.push(...moreFiles)
    }
  };

  return result;
}

exports.search = async () => {
  const files = await walk(process.cwd())
  return files
};
