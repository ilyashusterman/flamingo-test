import axios from "axios";

function extractJson(input: string): string {
  const regex = /setResponse\((.*)\);/;
  const match = input.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    throw new Error("JSON not found in the input string");
  }
}

function convertJsonToDictionary(json: any): Record<string, any>[] {
  // Extract labels from the first row
  let labels = json.table.cols.map(({ label }: { label: string }) =>
    label.replace(/\s/g, "")
  );
  let rowsIndex = 0;
  const rows = json.table.rows;
  if (labels[0] === "") {
    labels = rows[0].c.map((cell: { v: string }) =>
      cell.v.replace(/\s/g, "")
    );
    rowsIndex = 1;
  }

  // Map the rest of the rows to objects using the labels
  const data = rows.slice(rowsIndex).map((row: { c: { v: any }[] }) => {
    const obj: Record<string, any> = {};
    row.c.forEach((cell: { v: any }, index: number) => {
      if (cell !== null && cell !== undefined){
        obj[labels[index]] = cell.v;
      }
    });
    return obj;
  });

  return data;
}

export class GoogleSpreadSheetFetch {
  spreadSheetId: string;
  gid: string;
  url: string;

  constructor(spreadSheetId: string, gid: string) {
    this.spreadSheetId = spreadSheetId;
    this.gid = gid;
    this.url = this.makeUrl();
  }

  async fetchJSON(): Promise<Record<string, any>[]> {
    const data = await axios.get(this.url).then(({ data }) => data);
    return this.parseData(data);
  }

  private makeUrl(): string {
    return (
      `https://docs.google.com/spreadsheets/d/` +
      `${this.spreadSheetId}/gviz/tq?tqx=out:json&tq&gid=${this.gid}`
    );
  }

  private parseData(data: string): Record<string, any>[] {
    const jsonString = extractJson(data);
    const jsonRaw = JSON.parse(jsonString);
    const results = convertJsonToDictionary(jsonRaw);
    return results;
  }
}

export const fetchSpreadSheetJson = async (
  spreadSheetId: string,
  gid: string
): Promise<Record<string, any>[]> => {
  const googleSpreadSheet = new GoogleSpreadSheetFetch(spreadSheetId, gid);
  return await googleSpreadSheet.fetchJSON();
};

export const totalResponses = async (): Promise<number> => {
  const responses = await fetchSpreadSheetJson(
    // "11kcoZT3wo_sQuu1mNYszGRNpvYF8U4L782dgDqd18yc",
    // "701568104"
    "1se1gwLwWqaJmpOzsoKsvo-pfWaEijuAY78KxW0sqYcg",
    "636876432"
  );
  return responses.length;
};
