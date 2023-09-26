
export default function handler(req, res) {
  res.status(200).json({ repos: [
      { repo_name: 'sfncook/gpt-interview-coach', repo_url: 'https://github.com/sfncook/gpt-interview-coach'}
    ] })
}