interface OverviewProps {
  description: string
}
export function Overview({ description }: OverviewProps) {
  return (
    <section>
      <h3 className="text-base font-medium">Overview</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </section>
  )
}
