
export default function handler(req, res) {
  res.status(200).json({ repos: [
      { repo_name: 'sfncook/gpt-interview-coach', repo_url: 'https://github.com/sfncook/gpt-interview-coach'},
      { repo_name: 'sfncook/hello', repo_url: 'https://github.com/sfncook/hello'},
      { repo_name: 'sfncook/spring-petclinic', repo_url: 'https://github.com/sfncook/spring-petclinic'},
      { repo_name: 'bryantjk/SoulGroups', repo_url: 'https://github.com/bryantjk/SoulGroups'},
    ] })
}