import { useState } from "react";
import {
  useDropzone,
  type FileRejection,
  type DropEvent,
} from "react-dropzone";

export function ExcelFileUploader() {
  const [file, setFile] = useState<File>();

  const { getRootProps, getInputProps, open } = useDropzone({
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
      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);

        // TODO parseXLSX(acceptedFiles[0])
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
      <div
        {...getRootProps({ className: "dropzone" })}
        className="rounded-3xl border-2 border-solid border-sky-300/60 p-5 text-center lg:p-10"
      >
        <input {...getInputProps()} />
        <h1 className="text-2xl font-semibold tracking-wide text-cyan-100/90 lg:text-4xl">
          Drag &apos;n&apos; drop a Excel file!
        </h1>
        <button
          className="text-xl hover:text-teal-200/90 lg:text-2xl"
          onClick={open}
        >
          Or, click on me to upload :&#41;
        </button>
        <div>
          <h1>
            File uploaded:
            {file !== undefined ? <> {file.name}</> : <> None</>}
          </h1>
        </div>
      </div>
    </div>
  );
}
