'use client'

import { useDiscordMembers } from "@/lib/hooks/useDiscordMembers";

export function ServerMemberCountInline({ slug }: { slug: string }) {
  const counts = useDiscordMembers(slug);
  const count = counts[slug];
  if (count === undefined) return null;

  return (
    <p className="text-sm text-muted-foreground">{count.toLocaleString()}+ members</p>
  );
}
