import { LuCheck, LuMail } from "react-icons/lu"
import { useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("nilok774@gmail.com")
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <div
              aria-label={copied ? "Email copied!" : "Copy email"}
              onClick={handleCopyEmail}
              className="inline-flex size-auto cursor-pointer items-center justify-center gap-2 rounded-md border p-2 text-sm font-medium transition-colors hover:bg-secondary focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              <span className="size-3.5 md:size-4">
                {copied ? <LuCheck /> : <LuMail />}
              </span>
            </div>
          }
        />
        <TooltipContent>
          <p>{copied ? "Email copied!" : "Copy email"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
