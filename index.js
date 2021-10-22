const linksSocialMedia = {
  github: 'lucas28mateus',
  linkedin: 'in/lucas-mateus-a9557a207',
  facebook: 'lucasmateusbarroscosta',
  instagram: 'lucas28mateus',
  twitter: 'lucasma04869585'
}

const changeSocialMedia = () => {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}/`
  }
}

changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      profileUser.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
