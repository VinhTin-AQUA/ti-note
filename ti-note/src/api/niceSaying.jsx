import http from "../../http-common";

async function getSaying() {
  try {
    const saying = http.get("/saying");
    return saying;
  } catch (error) {
    console.log(error);
  }
}

async function addSaying(sayingData) {
  try {
    const saying = http.post("/saying/create-saying", sayingData);
    return saying;
  } catch (error) {
    console.log(error);
  }
}

async function updateSaying(sayingData) {
  try {
    const saying = http.put(
      `/saying/update/${sayingData.saying_id}`,
      sayingData
    );
    return saying;
  } catch (error) {
    console.log(error);
  }
}

async function deleteSaying(saying_id) {
  try {
    const saying = http.delete(`/saying/delete-saying/${saying_id}`);
    return saying;
  } catch (error) {
    console.log(error);
  }
}

export { getSaying, updateSaying, addSaying, deleteSaying };
