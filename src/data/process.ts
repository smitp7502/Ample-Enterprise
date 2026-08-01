import type { ProcessStep } from '../types/site'

export const processSteps: ProcessStep[] = [
    { title: 'Requirement Analysis', description: 'Clarify constraints, timelines, compliance needs, and manufacturing assumptions.', icon: 'file-search' },
    { title: 'Schematic Capture', description: 'Translate product logic into a reviewable and maintainable circuit structure.', icon: 'square-terminal' },
    { title: 'Footprint Creation', description: 'Create accurate land patterns and component definitions for the library.', icon: 'scan-line' },
    { title: 'PCB Layout', description: 'Place, route, and refine the board for reliability and clean production handoff.', icon: 'layout-grid' },
    { title: 'DRC Check', description: 'Run validation passes and resolve violations before release.', icon: 'check-circle-2' },
    { title: 'Gerber Generation', description: 'Package release artifacts with documentation and fabrication exports.', icon: 'file-output' },
    { title: 'Manufacturing Support', description: 'Stay available through fab, assembly, and first-article feedback.', icon: 'life-buoy' },
]
