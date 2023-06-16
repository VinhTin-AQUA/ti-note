import http from "../../http-common";

async function getQuickText() {
  try {
    const text = http.get("/quick-text");
    return text;
  } catch (error) {
    log(error);
  }
}

async function saveQuickText(textData) {
  try {
    const text = http.post(`/quick-text/save-quick-text/${textData.quicktext_id}`, textData);
    return text;
  } catch (error) {
    console.log(error);
  }
}

export { getQuickText, saveQuickText };
