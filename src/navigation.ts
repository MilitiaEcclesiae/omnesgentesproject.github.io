import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'SOBRE NOSOTROS',
      href: getPermalink('/about')
    },      
    {
      text: 'ACTUALIDAD',
      links: [
        {
          text: 'Las Ultimas Misiones',   
          href: getPermalink('misiones', 'category'),
        },
        {
          text: 'Testimonios',  
          href: getPermalink('testimonios', 'category'),
        },
        {
          text: 'Podcast',  
          href: `https://www.youtube.com/channel/UCZi70I4cl1Dp1KXFEVmbIQA`,
        },
      ],
    },
    {
      text: 'COLABORA',
      links: [
        {  
          text: 'Haz un Donativo', 
          href: getPermalink('/Donation'),
        },
        {  
          text: 'Haz un Donativo/Donorbox', 
          href: `https://donorbox.org/omnesgentesproject`,
        },
        {
          text: 'Ofrece una Misa',
          href: getPermalink('/misa'),
        },
        {
          text: 'Hazte Voluntario',  
          href: getPermalink('/voluntario'),
        },
      ],
    },
    {
      text: 'SEMINARIUM',
      links: [
        {  
          text: 'Domus Discipulorium', 
          href: getPermalink('/Seminario'),
        },
        {
          text: 'Scutum Fidei',  
          href: getPermalink('/ScutumFidei'),
        },
      ],
    },
  ],
  actions: [{ text: 'Donacion', href: 'https://donorbox.org/omnesgentesproject', target: '_blank' }],
  //HOW TO ADD BURGER NAV ICON TO INCLUDE ALL???  /donation
};

export const footerData = {
  links: [
    {
      title: 'ACTUALIDAD',
      links: [
        { text: 'Las Ultimas Misiones', href: getPermalink('misiones', 'category') },
        { text: 'Testimonios', href: getPermalink('testimonios', 'category') },
        { text: 'Podcast', href: `https://www.youtube.com/channel/UCZi70I4cl1Dp1KXFEVmbIQA` },
      ],
    },
    {
      title: 'COLABORA',
      links: [
        { text: 'Haz un Donativo', href: getPermalink('/Donation') },
        { text: 'Ofrece una Misa', href: getPermalink('/misa') },
        { text: 'Hazte Voluntario', href: getPermalink('voluntario') },
      ],
    },
    {
      title: 'SEMINARIUM',
      links: [
        { text: 'Domus Discipulorium', href: getPermalink(`/Seminario`) },
        { text: 'Scutum Fidei', href: getPermalink('/ScutumFidei') },
      ],
    },
  ],
  secondaryLinks: [  
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCZi70I4cl1Dp1KXFEVmbIQA' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/OmnesGentesProject1/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/omnes_gentes_project/' },
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: 'https://chat.whatsapp.com/CG4xxpAh8Y7FhAj2kOuNiK' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:info@omnesgentesproject.com' },
    //    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="src/assets/images/ChurchMilitiaICON.jpeg" loading="lazy"></img>
    by <a class="text-blue-600 underline dark:text-muted" href="#">Militia+Ecclesiae</a> · All rights reserved.
  `,
};



 //specific post href: getPermalink('get-started-website-with-astro-tailwind-css', 'post')
 //   href: getPermalink('tutorials', 'category'),
 //   href: getPermalink('astro', 'tag'),