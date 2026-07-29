import home from "@/assets/aircnc/aircnc-home.png"
import roomCheckout from "@/assets/aircnc/room-checkout.png"
import roomConfirmation from "@/assets/aircnc/room-confirmation.png"
import paymentConfirmation from "@/assets/aircnc/payment-confirmation.png"
import hostAddRoom from "@/assets/aircnc/host-add-room.png"

export function ProjectImage() {
  return (
    <div className="grid auto-rows-[160px] grid-cols-1 gap-4 sm:auto-rows-[170px] sm:grid-cols-2 lg:auto-rows-[180px] lg:grid-cols-12">
      <img
        src={home.src}
        alt=""
        className="col-span-1 h-full w-full rounded-xl object-cover sm:col-span-2 md:row-span-2 lg:col-span-8"
      />
      <img
        src={roomCheckout.src}
        alt=""
        className="col-span-1 h-full w-full rounded-xl object-cover lg:col-span-4"
      />
      <img
        src={roomConfirmation.src}
        alt=""
        className="col-span-1 h-full w-full rounded-xl object-cover lg:col-span-4"
      />
      <img
        src={paymentConfirmation.src}
        alt=""
        className="col-span-1 h-full w-full rounded-xl object-cover sm:col-span-2 lg:col-span-6"
      />
      <img
        src={hostAddRoom.src}
        alt=""
        className="col-span-1 h-full w-full rounded-xl object-cover sm:col-span-2 lg:col-span-6"
      />
    </div>
  )
}
