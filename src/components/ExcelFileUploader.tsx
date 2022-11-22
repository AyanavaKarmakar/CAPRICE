import { useState } from "react";
import { useDropzone } from "react-dropzone";

export function ExcelFileUploader() {
  const [file, setFile] = useState<File>();

  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
        // parseXLSX(acceptedFiles[0]);
      }
    },
  });

  return (
    <section className="flex h-screen items-center justify-center">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>
          Drag &apos;n&apos; drop some Excel files here, or click to select
          files!
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
