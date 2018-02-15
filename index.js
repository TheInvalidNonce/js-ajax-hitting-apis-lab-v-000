const baseURL = "https://api.github.com"

function getRepositories() {
  let user = document.getElementById("username").value;
  const req = new XMLHttpRequest();
  
  req.addEventListener("load", showRepositories())
  
  req.open("GET", baseURL + '/users/' + user + '/repos')
  
  req.send()
}

function showRepositories() {
  let repos = JSON.parse(this.responseText)
  console.log(repos);
  
  
const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - https://github.com/' + r.full_name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  
  document.getElementById('repositories').innerHTML = repoList
}