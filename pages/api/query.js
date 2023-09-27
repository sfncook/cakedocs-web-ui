
export default async function handler(req, res) {
  console.log(`query.js ${req.body.query} ${req.body.repo_url}`)
  const body = {
    "repo_url": req.body.repo_url,
    "query": req.body.query,
    "msgs": req.body.msgs,
  }
  // console.log(JSON.stringify(body))
  await fetch("https://us-central1-cook-250617.cloudfunctions.net/llm/query_llm", {
  // await fetch("http://127.0.0.1:5000/llm/query_llm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(apiResponse => apiResponse.text())
    .then(apiResponse => {
      console.log(apiResponse)
      res.status(200).json({
        assistantResponse: apiResponse,
      });
    })
  console.log('done')
}