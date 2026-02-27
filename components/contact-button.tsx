"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Mail, Copy, Check } from "lucide-react"

const teamMembers = [
  {
    name: "Mitchel Angelina",
    role: "Operations Executive",
    email: "mitchelangelina@aol.com",
  },
  {
    name: "Christopher Leschen",
    role: "Vault Manager",
    email: "christopherleschen3@gmail.com",
  },
  {
    name: "Lara Mathias",
    role: "Client Relations Manager",
    email: "laramatthias1@outlook.com",
  },
]

export function ContactButton() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => setCopiedEmail(null), 2000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Mail className="h-4 w-4" />
          Contact Team
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-foreground">Contact Our Team</DialogTitle>
          <DialogDescription>Reach out to our team members for assistance</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.email} className="flex items-start justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
              <div>
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <a href={`mailto:${member.email}`} className="text-sm text-primary hover:underline break-all mt-1">
                  {member.email}
                </a>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(member.email)}
                className="flex-shrink-0 ml-2"
              >
                {copiedEmail === member.email ? (
                  <Check className="h-4 w-4 text-accent" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
