const fs = require("fs");
const mimeType = require("mime-types");

export const img2Base64: (path: string) => string | undefined = (path: string) => {
  try {
    const fileStat = fs.statSync(path);
    if (!fileStat.isFile()) {
      return undefined;
    }
    const fileType = mimeType.lookup(path);
    if (!fileType.toString().includes("image")) {
      return undefined;
    }

    let data = fs.readFileSync(path);
    data = Buffer.from(data).toString('base64');
    return `data:${fileType};base64,${data}`;
  } catch (e) {
    return undefined;
  }

};
