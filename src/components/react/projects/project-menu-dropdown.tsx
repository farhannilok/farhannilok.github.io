import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LuEllipsisVertical, LuGithub, LuPresentation } from "react-icons/lu"

import { ProjectDetailsDialog } from "@/components/react/projects/project-details-dialog"
import { Overview } from "@/components/react/projects/overview"
import { ProjectTechStack } from "@/components/react/projects/tech-stack"

interface ProjectMenuDropdownProps {
  repoLink: string
  title: string
  description: string
}

export function ProjectMenuDropdown({
  repoLink,
  title,
  description,
}: ProjectMenuDropdownProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="outline" size="icon">
              <LuEllipsisVertical />
            </Button>
          }
        />
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="cursor-pointer">
            <LuPresentation /> View Details
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href={repoLink} className="inline-flex items-center gap-1">
              <LuGithub />
              Repository
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ProjectDetailsDialog title={title} description={description}>
        <Overview
          description="AirCNC is a full-stack accommodation booking platform inspired by Airbnb.
           It allows guests to discover and book rooms while enabling hosts to create
           and manage listings through a modern React frontend backed by an Express
           and MongoDB REST API."
        />
        <ProjectTechStack
          lists={[
            "React",
            "Node",
            "Express",
            "Javascript",
            "Typescript",
            "JWT",
            "React Router Dom",
            "TailwindCSS",
          ]}
        />
      </ProjectDetailsDialog>
    </>
  )
}
