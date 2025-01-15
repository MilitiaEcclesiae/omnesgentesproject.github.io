import { getPermalink } from './utils/permalinks';
//getBlogPermalink, getAsset

export const headerData = {
  links: [
    {
      text: 'ABOUT THE OGP',
      href: getPermalink('/about'),
    },
    {
      text: 'UPDATES',
      links: [
        {
          text: 'Missions',
          href: getPermalink('missions', 'category'),
        },
        {
          text: 'Testimonials',
          href: getPermalink('testimonials', 'category'),
        },
        {
          text: 'Podcast',   
          href: `https://www.youtube.com/channel/UCZi70I4cl1Dp1KXFEVmbIQA`,
        },
      ],
    },
    {
      text: 'GET INVOLVED',
      links: [
        {
          text: 'Donation',
          href: getPermalink('/getinvolved/donation'),
        },
        {
          text: 'Mass',
          href: getPermalink('/getinvolved/mass'),
        },
        {
          text: 'Voluntary',  
          href: getPermalink('/getinvolved/voluntary'),
        },
      ],
    },
  ],
  actions: [{ text: 'Donation', href: 'https://donorbox.org/omnesgentesproject', target: '_blank' }],
};
//add own donation page w/API; BurgerNav; resources
//href: getPermalink('/media'), //youtube/podcast/AILab
//Shop
export const footerData = {
  links: [
    {
      title: 'Resources',
      links: [
        { text: 'ScutumFidei', href: '/ScutumFidei' },
        { text: 'Missionary Mercies', href: 'www.fw3h29-zx.myshopify.com' },
        { text: 'Media', href: '/media' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCZi70I4cl1Dp1KXFEVmbIQA' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/omnes_gentes_project/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/OmnesGentesProject1/' },
    //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },  NOTE: need import getAsset
    // { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: 'https://chat.whatsapp.com/CG4xxpAh8Y7FhAj2kOuNiK' },
    // { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:info@omnesgentesproject.com' },
    
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://res.cloudinary.com/dqk5ejjai/image/upload/v1736551564/ChurchMilitiaICON_xswmw2.jpg" loading="lazy"></img>
    by <a class="text-blue-600 underline dark:text-muted" href="#">Militia+Ecclesiae</a> · All rights reserved.
  `,
};



// {
//   text: 'Blog List',
//   href: getBlogPermalink(),
// },
// 
// {
//   text: 'Article',
//   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
// },
// {
//   text: 'Category Page',
//   href: getPermalink('tutorials', 'category'),
// },
// {
//   text: 'Tag Page',
//   href: getPermalink('astro', 'tag'),
// },