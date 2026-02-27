import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  title: string
  category: string
  description: string
  imageUrl: string
  href?: string
  date?: string
}

export function BlogCard({ title, category, description, imageUrl, href = "#", date }: BlogCardProps) {
  return (
    <Link href={href}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card hover:border-accent/40 transition-all duration-300">
        <div className="relative h-48 w-full overflow-hidden bg-secondary">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-block px-2.5 py-1 text-xs font-medium bg-secondary text-accent rounded-md">
              {category}
            </span>
            {date && <span className="text-xs text-muted-foreground">{date}</span>}
          </div>
          <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  )
}
