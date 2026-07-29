interface ProjectTechStackProps {
  lists: readonly string[]
}
export function ProjectTechStack({ lists }: ProjectTechStackProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-base font-medium">Libraries Used</h3>
      <div className="flex flex-wrap gap-1">
        {lists.map((list) => (
          <span className="chip" key={list}>
            {list}
          </span>
        ))}
      </div>
    </div>
  )
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://github.com/farhannilok.png"
        alt="@shadcn"
        className="size-8.5 grayscale hover:grayscale-0"
      />
      <AvatarFallback>FN</AvatarFallback>
    </Avatar>
  )
}
