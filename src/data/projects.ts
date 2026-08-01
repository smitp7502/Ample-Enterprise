import heroBoard from '../assets/images/project-control.svg'
import powerBoard from '../assets/images/project-power.svg'
import driverBoard from '../assets/images/project-driver.svg'
import hmiBoard from '../assets/images/project-hmi.svg'
import type { ProjectItem } from '../types/site'

export const projectItems: ProjectItem[] = [
    {
        title: 'Motor Driver PCB',
        category: 'Industrial Control',
        summary: 'High-current traces, thermal planning, and a robust four-layer board architecture.',
        image: driverBoard,
        features: ['High-current routing', 'Thermal management', '4-layer architecture'],
    },
    {
        title: 'Power Supply PCB',
        category: 'Power Electronics',
        summary: 'Compact AC/DC layout with EMI awareness and isolation-friendly spacing.',
        image: powerBoard,
        features: ['AC/DC SMPS design', 'EMI optimization', 'Compact 2-layer build'],
    },
    {
        title: 'Control PCB',
        category: 'Embedded Systems',
        summary: 'Clean digital routing for MCU-based systems with isolation and interface discipline.',
        image: heroBoard,
        features: ['MCU-based system', 'Isolation interfaces', 'Precision routing'],
    },
    {
        title: 'HMI Interface PCB',
        category: 'Interface Design',
        summary: 'Slim board integration for display and keypad assemblies with ergonomic fit.',
        image: hmiBoard,
        features: ['LCD/OLED integration', 'Keypad matrix', 'Ultra-slim profile'],
    },
]
