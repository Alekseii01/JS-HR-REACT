import { HeaderLink, FooterLinksProps } from "../types/Product";

const linksConfig = {
  headerLinks: [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu", authOnly: true },
    { name: "Company", href: "/company" },
  ] as HeaderLink[],
  footerLinks: [
    {
      title: "Company",
      links: [
        { name: "About us", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Template",
      links: [
        { name: "Style Guide", href: "https://www.google.com/" },
        { name: "Changelog", href: "https://www.google.com/" },
        { name: "License", href: "https://www.google.com/" },
        { name: "Webflow University", href: "https://www.google.com/" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
      ],
    },
  ] as FooterLinksProps[],
};

export default linksConfig;