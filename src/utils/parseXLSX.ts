import { read, utils, type Sheet2JSONOpts } from "xlsx";

export async function parseXLSX(file: File): Promise<Sheet2JSONOpts[]> {
  let sheetDataJSON: Sheet2JSONOpts = [];

  const bufferData = await file.arrayBuffer();

  const { Sheets: sheets, SheetNames: sheetNames } = read(bufferData);

  if (sheetNames !== undefined) {
    sheetDataJSON = utils.sheet_to_json(sheets[sheetNames[0]]);
  }

  return sheetDataJSON;
}
