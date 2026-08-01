export type SectionId = 'hero' | 'about' | 'expertise' | 'skills' | 'process' | 'projects' | 'strengths' | 'contact'

export interface NavigationItem {
    label: string
    href: `#${SectionId}`
    sectionId: SectionId
}

export interface ExpertiseItem {
    title: string
    description: string
    icon: string
}

export interface SkillItem {
    name: string
    description: string
}

export interface ProcessStep {
    title: string
    description: string
    icon: string
}

export interface ProjectItem {
    title: string
    category: string
    summary: string
    image: string
    features: string[]
}

export interface ServiceItem {
    title: string
    description: string
}

export interface SocialLink {
    label: string
    href: string
}
