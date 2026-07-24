import { InfoIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function NoticeAlert() {
  return (
    <Alert>
      <InfoIcon />
      <AlertTitle>Portfolio under active development</AlertTitle>
      <AlertDescription>
        This isn't the final version of the portfolio. Content, layout, and
        design are subject to change.
      </AlertDescription>
    </Alert>
  )
}
