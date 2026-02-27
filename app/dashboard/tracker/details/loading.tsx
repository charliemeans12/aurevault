import { Loader2 } from "lucide-react"

export default function TrackingDetailsLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24">
      <div className="text-center space-y-4">
        <div className="relative">
          <Loader2 className="h-16 w-16 animate-spin text-primary mx-auto" />
          <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-primary/20" />
        </div>
        <p className="text-xl font-medium">Loading tracking information...</p>
        <p className="text-sm text-muted-foreground">Please wait while we retrieve your asset data</p>
      </div>
    </div>
  )
}
