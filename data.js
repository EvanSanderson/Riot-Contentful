const contentful = require('contentful');
const SPACE_ID = 'euaffrmeoroh'
const ACCESS_TOKEN = 'a208477d2a2ec8855110293712be50b3510ccc5eb969d523db6e47b8eff994ee'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

console.log('\x1b[32m Fetching entries ... \x1b[32m')

module.exports = client;
