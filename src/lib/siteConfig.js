export const SITE_URL = '';
export const APPROVED_POSTERS_GH_USERNAME = ['jastuccio'];
export const GH_USER_REPO = 'jastuccio/armchair-indy'; // used for pulling github issues and offering comments
export const SITE_TITLE = 'Armchair Indy';
export const SITE_DESCRIPTION = "An adventure travel blogsite";
export const DEFAULT_OG_IMAGE =
  'https://res.cloudinary.com/jastuccio/image/upload/v1681741520/armchair-indy/baja-beach-camping.png';
export const MY_TWITTER_HANDLE = '';
export const MY_YOUTUBE = 'https://www.youtube.com/channel/UC6m_8OPJpnRwcHCiPc9XcGA';
export const POST_CATEGORIES = ['Travels', 'Gear', 'Misc']; // Other categories you can consider adding: Talks, Tutorials, Snippets, Podcasts, Notes...
export const GH_PUBLISHED_TAGS = ['Published'];

// auto generated variables
export const REPO_URL = 'https://github.com/' + GH_USER_REPO;
export const REPO_OWNER = GH_USER_REPO.split('/')[0];

// dont forget process.env.GH_TOKEN
// if supplied, raises rate limit from 60 to 5000
// https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
