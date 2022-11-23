import { useState, useEffect } from "react";
import { SheetDataJSONStore } from "../utils/store.mjs";

export const SheetVisualization = () => {
  const [fields, setFields] = useState<string[]>();
  const sheetDataJSON = SheetDataJSONStore((state) => state.sheetDataJSON);

  // TODO Remove later
  console.log(sheetDataJSON);
  useEffect(() => {
    if (sheetDataJSON[0] !== null && sheetDataJSON[0] !== undefined) {
      console.log(Object.keys(sheetDataJSON[0]));
      setFields(Object.keys(sheetDataJSON[0]));
    }
  }, [sheetDataJSON]);

  return (
    <>
      {fields && (
        <div className="flex h-screen items-center justify-center pl-5 pr-5 text-xl leading-6 lg:text-2xl">
          <div className="w-screen rounded-3xl border-4 border-solid border-sky-300/60 bg-gradient-to-r from-slate-900/10 via-blue-900/20 to-zinc-900/10 p-5 text-center lg:p-10">
            <h1 className="text-4xl font-semibold tracking-wide">
              Found these{" "}
              <span className="font-semibold tracking-wide text-cyan-50/80 underline underline-offset-4">
                columns
              </span>{" "}
              on your spreadsheet:
            </h1>
            <ul>
              {fields?.map((field) => (
                <li
                  className="my-5 rounded-3xl border border-solid border-cyan-50 p-2 pl-5 text-left"
                  key={field.length}
                >
                  {`— ${field}`}
                </li>
              ))}
            </ul>
            <h1 className="text-justify">
              <span className="font-semibold tracking-wide text-cyan-50/75 underline underline-offset-4">
                Note
              </span>
              : If these are not the expected column names, please fix your
              spreadsheet so that it has only column names on the first row and
              then re-upload again.
            </h1>
          </div>
        </div>
      )}
    </>
  );
};
