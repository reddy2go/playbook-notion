module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '454c63bd36ae4e9ea9a22dfdb7cdbf13',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'the playbook',
  domain: 'playbook.reddy2go.com',
  author: 'reddy2go',

  // open graph metadata (optional)
  description: 'the playbook of kindergarten for adults',
  socialImageTitle: 'the playbook',
  socialImageSubtitle: 'kindergarten for adults 🕹',

  // social usernames (optional)
  twitter: 'reddy2go',
  github: '',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
     '/lets-make-a-racket': '9e3b07d11bc046bebd62e92c9c5338c4'
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
   }
  //pageUrlOverrides: null
}
