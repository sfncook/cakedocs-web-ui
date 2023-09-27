
export default async function handler(req, res) {
  console.log(`query.js ${req.body.query} ${req.body.repo_url}`)
  await fetch("https://us-central1-cook-250617.cloudfunctions.net/llm/query_llm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "git_url": req.body.repo_url,
      "query": req.body.query
    }),
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