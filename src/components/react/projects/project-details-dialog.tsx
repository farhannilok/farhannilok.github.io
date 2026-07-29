import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type React from "react"
import { Button } from "@/components/ui/button"
import { LuPresentation } from "react-icons/lu"

interface ProjectDetailsProps {
  title: string
  description: string
  children: React.ReactNode
}

export function ProjectDetailsDialog({
  title,
  description,
  children,
}: ProjectDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline" size="icon" title="Project Details">
            <LuPresentation />
          </Button>
        }
      />
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[60vh] space-y-3 overflow-y-auto px-4">
          {children}
          {/*{Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}*/}
        </div>
      </DialogContent>
    </Dialog>
  )
}
