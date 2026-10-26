'use client'

import { Users } from 'lucide-react'
import { useDiscordMembers } from "@/lib/hooks/useDiscordMembers";

interface ServerMemberPillProps {
  slug: string;
}

export function ServerMemberPill({ slug }: ServerMemberPillProps) {
  const counts = useDiscordMembers(slug);
  const count = counts[slug];
  if (count === undefined) return null;

  return (
    <div className="flex flex-col items-center rounded-2xl border border-border bg-surface px-6 py-4 text-center shadow-lg">
      <Users className="mb-1 h-5 w-5 text-muted-foreground" />
      <p className="text-2xl font-bold">{count.toLocaleString()}+</p>
      <p className="text-xs text-muted-foreground">members</p>
    </div>
  )
}
