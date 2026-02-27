import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href = "#",
}: ServiceCardProps) {
  return (
    <div className="group p-6 rounded-lg border border-border bg-card hover:border-accent/40 transition-all duration-300">
      <div className="mb-4 inline-flex items-center justify-center h-11 w-11 rounded-md bg-secondary">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
      >
        Learn More
        <span className="ml-1.5" aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  )
}
