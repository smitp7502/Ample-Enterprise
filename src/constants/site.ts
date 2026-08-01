import type { NavigationItem, SocialLink } from '../types/site'

export const navigationItems: NavigationItem[] = [
    { label: 'About', href: '#about', sectionId: 'about' },
    { label: 'Expertise', href: '#expertise', sectionId: 'expertise' },
    { label: 'Skills', href: '#skills', sectionId: 'skills' },
    { label: 'Process', href: '#process', sectionId: 'process' },
    { label: 'Projects', href: '#projects', sectionId: 'projects' },
    { label: 'Strengths', href: '#strengths', sectionId: 'strengths' },
    { label: 'Contact', href: '#contact', sectionId: 'contact' },
]

export const socialLinks: SocialLink[] = [
    { label: 'LinkedIn', href: '#' },
    { label: 'Email', href: 'mailto:contact@ampleenterprise.com' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
]

export const contactEmail = 'contact@ampleenterprise.com'
export const contactLocation = 'Bangalore, Tech Hub, India'
export const contactPhone = '+91 95743 25494'
export const contactPhoneDigits = '919574325494'
export const whatsappLink = `https://wa.me/${contactPhoneDigits}`
