import { MapPin, Phone, Mail } from "lucide-react"

interface LocationCardProps {
  state: string
  city: string
  address: string
  phone: string
  email: string
}

export function LocationCard({ state, city, address, phone, email }: LocationCardProps) {
  return (
    <div className="p-6 rounded-lg border border-border bg-card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground mb-0.5">{state}</h3>
        <p className="text-sm text-accent font-medium">{city}</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">{address}</p>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <a href={`tel:${phone}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
            {phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <a href={`mailto:${email}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
            {email}
          </a>
        </div>
      </div>
    </div>
  )
}
