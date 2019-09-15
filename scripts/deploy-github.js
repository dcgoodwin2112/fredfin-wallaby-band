const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/dcgoodwin2112/fredfin-wallaby-band-gh-page.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
