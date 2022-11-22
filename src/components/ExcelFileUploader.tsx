import { useState } from "react";
import { useDropzone } from "react-dropzone";
import type { FileRejection, DropEvent } from "react-dropzone";

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
    <section className="flex h-screen items-center justify-center text-2xl">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>
          Drag &apos;n&apos; drop a Excel file here, or click to select files!
        </p>
        <button onClick={open}>Open File Dialog</button>
      </div>
      <aside>
        <h4>Files</h4>
        {file !== undefined ? <ul>{file.name}</ul> : <ul>None</ul>}
      </aside>
    </section>
  );
}
