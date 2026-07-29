export function Features() {
  return (
    <section className="space-y-3">
      <h3 className="text-lg font-semibold">Key Features</h3>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h4 className="font-medium">Host Features</h4>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Create accommodation listings</li>
            <li>Manage posted rooms</li>
            <li>Delete room listings</li>
            <li>Update booking availability</li>
          </ul>
        </div>

        <div className="rounded-lg border p-4">
          <h4 className="font-medium">Guest Features</h4>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Browse available accommodations</li>
            <li>View detailed room information</li>
            <li>Book available rooms</li>
            <li>Manage existing bookings</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
