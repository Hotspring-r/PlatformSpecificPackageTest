module.exports = { execute };
function execute() {
  const path = getNativePath();
  const { execSync } = require("child_process");

  const result = execSync(path);
  return result.toString();
}

function getNativePath() {
  switch (process.platform) {
    case "win32":
      return require("nativetest-win");
    case "linux":
      return require("nativetest-linux");
  }
  throw new Error("unsupported platform.");
}
