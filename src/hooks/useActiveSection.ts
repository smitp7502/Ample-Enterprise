import { useEffect, useState } from 'react'
import type { SectionId } from '../types/site'

export function useActiveSection(sectionIds: SectionId[]): SectionId {
    const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries.filter((entry) => entry.isIntersecting)

                if (visibleSections.length === 0) {
                    return
                }

                const bestEntry = visibleSections.reduce((previous, current) =>
                    current.intersectionRatio > previous.intersectionRatio ? current : previous,
                )

                setActiveSection(bestEntry.target.id as SectionId)
            },
            { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
        )

        sectionIds.forEach((sectionId) => {
            const element = document.getElementById(sectionId)

            if (element) {
                observer.observe(element)
            }
        })

        return () => observer.disconnect()
    }, [sectionIds])

    return activeSection
}
