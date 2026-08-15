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
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nikita-prajapati-753394182' },
    { label: 'Email', href: 'mailto:projects.amplegroup@gmail.com' },
    { label: 'WhatsApp', href: 'https://wa.me/919574325494' },
]

export const contactEmail = 'projects.amplegroup@gmail.com'
export const contactLocation = 'Ahmedabad, Gujarat, India'
export const contactPhone = '+91 9574325494'
export const contactPhoneDigits = '919574325494'
export const whatsappLink = `https://wa.me/${contactPhoneDigits}`
export const linkedInUrl = 'https://linkedin.com/in/nikita-prajapati-753394182'
export const linkedInLabel = 'Nikita Prajapati'
