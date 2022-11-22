import { useState } from "react";
import {
  useDropzone,
  type FileRejection,
  type DropEvent,
} from "react-dropzone";
import { read, utils } from "xlsx";

export function ExcelFileUploader() {
  const [file, setFile] = useState<File>();
  const [loadingText, setLoadingText] = useState<string>();

  /**
   * ! FIX ME: send help
   * @param event
   */
  function parseXLSX(event: DropEvent) {
    event.preventDefault();
    if (event.target.files) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = utils.sheet_to_json(worksheet);
        // TODO - do something with the json
        console.log(json);
        setLoadingText("Done!");
      };
      reader.readAsArrayBuffer(event.target.files[0]);
    }
  }

  const { getInputProps, open } = useDropzone({
    noClick: true,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
    onDrop: (
      acceptedFiles: File[],
      filesRejections: FileRejection[],
      event: DropEvent
    ) => {
      if (acceptedFiles.length > 0 && acceptedFiles[0] !== undefined) {
        setFile(acceptedFiles[0]);
        setLoadingText("Processing your file...");
        parseXLSX(event);
      }

      if (filesRejections.length > 0) {
        // TODO show error alert
        alert("Please upload a valid excel file");
      }

      event && event.preventDefault();
    },
  });

  return (
    <div className="flex h-screen items-center justify-center pl-5 pr-5 text-xl leading-6 lg:text-2xl">
      <div className="rounded-3xl border-4 border-solid border-sky-300/60 bg-gradient-to-r from-slate-900/10 via-blue-900/20 to-zinc-900/10 p-5 text-center lg:p-10">
        <input {...getInputProps()} />
        <h1 className="text-2xl font-semibold tracking-wide text-cyan-100/90 lg:text-4xl">
          CAPRICE
        </h1>
        <button
          className="text-xl hover:text-teal-200/90 lg:text-2xl"
          onClick={open}
        >
          Click on me to upload :&#41;
        </button>
        <div>
          <h1>
            File uploaded:
            {file !== undefined ? <> {file.name}</> : <> None</>}
          </h1>
          <h1>{loadingText}</h1>
        </div>
      </div>
    </div>
  );
}
