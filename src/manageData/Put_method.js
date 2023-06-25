const PutData = async (baseUrl, id) => {
  fetch(baseUrl + id, {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "iPhone Galaxy +1",
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};

export { PutData };
