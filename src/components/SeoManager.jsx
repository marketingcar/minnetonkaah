
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SEO_DATA = {
  '/': {
    title: 'Minnetonka Animal Hospital | Compassionate Vet Care MN',
    description: 'Personalized, compassionate veterinary care in Minnetonka, MN. Offering comprehensive medical, surgical, and dental services for your pets.',
  },
  '/about': {
    title: 'About Us | Minnetonka Animal Hospital',
    description: "Learn about Minnetonka Animal Hospital's history, mission, and our commitment to providing exceptional veterinary care since 1986.",
  },
  '/services': {
    title: 'Veterinary Services | Minnetonka Animal Hospital',
    description: 'Explore our comprehensive veterinary services including wellness exams, dentistry, surgery, diagnostics, and senior pet care.',
  },
  '/services/integrative-medicine': {
    title: 'Integrative Vet Medicine | Acupuncture & Laser Therapy',
    description: "Holistic veterinary care including acupuncture, laser therapy, and herbal medicine to complement traditional treatments for your pet's wellness.",
  },
  '/about/meet-the-team': {
    title: 'Meet Our Team | Minnetonka Animal Hospital Vets',
    description: 'Meet our dedicated team of veterinarians, technicians, and support staff committed to the health and happiness of your furry family members.',
  },
  '/new-clients': {
    title: 'New Clients | Minnetonka Animal Hospital',
    description: 'Welcome to Minnetonka Animal Hospital! Find new client forms, what to expect during your first visit, and how to prepare.',
  },
  '/about/pet-resources': {
    title: 'Pet Resources | Client Education & Links',
    description: "Access helpful pet resources, educational materials, and trusted links to help you make informed decisions about your pet's health.",
  },
  '/contact': {
    title: 'Contact Us | Minnetonka Animal Hospital',
    description: 'Visit Minnetonka Animal Hospital at 17408 Minnetonka Blvd. Contact us at 952.473.1239 for appointments and inquiries.',
  },
};

const SeoManager = () => {
  const location = useLocation();
  
  // Normalize path to remove trailing slash (unless it's just root)
  const currentPath = location.pathname === '/' 
    ? '/' 
    : location.pathname.replace(/\/$/, '');
  
  const defaultSEO = {
    title: 'Minnetonka Animal Hospital',
    description: 'Compassionate veterinary care in Minnetonka, MN.',
  };

  const seo = SEO_DATA[currentPath] || defaultSEO;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={`https://minnetonkaanimal.com${location.pathname}`} />
    </Helmet>
  );
};

export default SeoManager;
