export default function Cards() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-[22px] text-[#343C6A]">My Cards</h3>
        <button>See All</button>
      </div>
      <div className="flex gap-5">
        <IndividualCard variant="primary" />
        <IndividualCard variant="secondary" />
      </div>
    </div>
  );
}

function IndividualCard({ variant }: { variant: "primary" | "secondary" }) {
  return (
    <div
      className={`rounded-2xl shadow-md ${
        variant === "primary" ? "my-card__black" : "my-card__white"
      } flex-1`}
    >
      <div className="flex justify-between p-4">
        <p className="flex flex-col">
          <span className="font-normal text-[12px]">Balance</span>
          <span className="font-semibold text-[20px]">$5,800</span>
        </p>
        {variant === "primary" ? (
          <img src="/assets/card-chip-white.svg" />
        ) : (
          <img src="/assets/card-chip-black.svg" />
        )}
      </div>
      <div className="flex gap-8 mt-2 px-4">
        <p className="flex flex-col">
          <span className="font-normal text-[12px]">Card Holder</span>
          <span className="font-semibold text-[15px] text-[#FFF/0.7]">
            Eddy Cusma
          </span>
        </p>
        <p className="flex flex-col">
          <span className="font-normal text-[12px]">Valid Thru</span>
          <span className="font-semibold text-[15px]">12/24</span>
        </p>
      </div>
      <div className="my-card__black-bottom mt-6 p-4 flex justify-between items-center">
        <span className="font-medium text-[22px]">3650 **** **** 3650</span>
        {variant === "primary" ? (
          <img src="/assets/visa-sign.svg" />
        ) : (
          <img className="invert" src="/assets/visa-sign.svg" />
        )}
      </div>
    </div>
  );
}
