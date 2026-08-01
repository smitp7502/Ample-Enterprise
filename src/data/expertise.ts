import type { ExpertiseItem } from '../types/site'

export const expertiseItems: ExpertiseItem[] = [
    {
        title: 'Schematic Design',
        description: 'Hierarchical capture with clean documentation, logical review paths, and robust design traceability.',
        icon: 'schema',
    },
    {
        title: 'Multi-layer Layout',
        description: 'High-density layout planning for controlled impedance, stackup clarity, and compact routing.',
        icon: 'layers',
    },
    {
        title: 'High Voltage Design',
        description: 'Creepage, clearance, and spacing discipline for power and industrial systems.',
        icon: 'zap',
    },
    {
        title: 'DFM & DRC Analysis',
        description: 'Manufacturer-aware checks that reduce fabrication risk and keep release cycles moving.',
        icon: 'shield-check',
    },
]
