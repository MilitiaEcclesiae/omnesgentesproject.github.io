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
          text: 'LAS ULTIMAS MISIONES',   
          href: getPermalink('misiones', 'category'),
        },
        // {
        //   text: 'Eventos',  //eventos/camapanas(DE ORACION etc)/actividades>>landing page   
        //   href: getPermalink(''),
        // },
        {
          text: 'TESTIMONIOS',  
          href: getPermalink('testimonios', 'category'),
        },
        {
          text: 'PODCAST',  
          href: `https://www.youtube.com/channel/UCZi70I4cl1Dp1KXFEVmbIQA`,
        },
      ],
    },
    {
      text: 'COLABORA',
      links: [
        {  
          text: 'HAZ UN DONATIVO', 
          href: getPermalink('/Donation'),
        },
        {
          text: 'OFRECE UNA MISA',
          href: getPermalink('/misa'),
        },
        {
          text: 'HAZTE VOLUNTARIO',  
          href: getPermalink('/voluntario'),
        },
      ],
    },
    {
      text: 'SEMINARIUM',
      links: [
        {  
          text: 'DOMUS DISCIPULORUM', 
          href: getPermalink('/Seminario'),
        },
        {
          text: 'SCUTUM FIDEI',  
          href: getPermalink('/ScutumFidei'),
        },
      ],
    },
  ],
  //actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
  //HOW TO ADD BURGER NAV ICON TO INCLUDE ALL??? 
};

export const footerData = {
  links: [
    {
      title: 'ACTUALIDAD',
      links: [
        { text: 'LAS ULTIMAS MISIONES', href: getPermalink('misiones', 'category') },
        { text: 'TESTIMONIOS', href: getPermalink('testimonios', 'category') },
        { text: 'PODCAST', href: `https://www.youtube.com/channel/UCZi70I4cl1Dp1KXFEVmbIQA` },
      ],
    },
    {
      title: 'COLABORA',
      links: [
        { text: 'HAZ UN DONATIVO', href: getPermalink('/Donation') },
        { text: 'OFRECE UNA MISA', href: getPermalink('/misa') },
        { text: 'HAZTE VOLUNTARIO', href: getPermalink('voluntario') },
      ],
    },
    {
      title: 'SEMINARIUM',
      links: [
        { text: 'DOMUS DISCIPULORUM', href: getPermalink(`/Seminario`) },
        { text: 'SCUTUM FIDEI', href: getPermalink('/ScutumFidei') },
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
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contact@yourdomain.com' },
    //    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="public/ChurchMilitiaICON.jpeg" loading="lazy"></img>
    by <a class="text-blue-600 underline dark:text-muted" href="#">Militia+Ecclesiae</a> · All rights reserved.
  `,
};



 //specific post href: getPermalink('get-started-website-with-astro-tailwind-css', 'post')
 //   href: getPermalink('tutorials', 'category'),
 //   href: getPermalink('astro', 'tag'),