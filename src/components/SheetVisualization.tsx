import { useState, useEffect } from "react";
import { SheetDataJSONStore } from "../utils/store.mjs";
import ReactEcharts from "echarts-for-react";

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

  // TODO Remove later
  // dummy data
  // TODO Move to a separate file
  const chartOption = {
    title: { text: "Column 1 v/s Column  || Dummy Placeholder Chart" },
    xAxis: {
      name: "Field Name 1",
      type: "category",
    },
    yAxis: { name: "Field Name 2" },
    series: [
      {
        data: [10, 20, 30],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "#ffffff",
        },
      },
    ],
  };

  // Styles for eCharts
  // TODO: Move to a separate file
  // ? Maybe fix the height later
  const chartStyles = {
    width: "100%",
  };

  return (
    <>
      {fields && (
        <>
          <div className="flex h-[calc(100vh+100px)] items-center justify-center pl-5 pr-5 text-xl leading-6 lg:text-2xl">
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
                spreadsheet so that it has only column names on the first row
                and then re-upload again.
              </h1>
            </div>
          </div>
          <div className="items-center justify-center pl-5 pr-5">
            <div className="rounded-3xl border-4 border-solid border-sky-300/60 bg-gradient-to-r from-slate-900/10 via-blue-900/20 to-zinc-900/10 p-5 text-center lg:p-10">
              <ReactEcharts option={chartOption} style={chartStyles} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
