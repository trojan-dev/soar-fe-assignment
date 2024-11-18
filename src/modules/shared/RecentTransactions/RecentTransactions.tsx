export default function RecentTransactions() {
  return (
    <div>
      <h3 className="font-semibold text-[22px] text-[#343C6A] mb-4">
        Recent Transaction
      </h3>
      <div className="rounded-2xl bg-white p-3 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <img src="/assets/card-payment.svg" alt="" />
          <p className="flex flex-col">
            <span>Deposit from my card</span>
            <span>28 Jan 2021</span>
          </p>
          <p className="ml-auto text-red-400">-$850</p>
        </div>

        <div className="flex gap-2 items-center">
          <img src="/assets/paypal.svg" alt="" />
          <p className="flex flex-col">
            <span>Deposit paypal</span>
            <span>28 Jan 2021</span>
          </p>
          <p className="ml-auto text-green-400">+$1050</p>
        </div>

        <div className="flex gap-2 items-center">
          <img src="/assets/individual-payment.svg" alt="" />
          <p className="flex flex-col">
            <span>Jemi Weston</span>
            <span>28 Jan 2021</span>
          </p>
          <p className="ml-auto text-green-400">+$20000</p>
        </div>
      </div>
    </div>
  );
}
