export default function QuickTransfer() {
  return (
    <div className="h-36">
      <h3 className="font-semibold text-[22px] text-[#343C6A] mb-4">
        Quick Transfer
      </h3>
      <div className="bg-white p-4 rounded-xl h-[240px]">
        <section className="flex max-w-[100%] overflow-scroll gap-5">
          <div className="flex flex-col items-center">
            <img className="rounded-full" src="/assets/avatar.svg" />
            <p className="font-normal text-base mt-3">Randy Press</p>
            <p className="font-normal text-[15px] text-[#718EBF]">Director</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="rounded-full" src="/assets/avatar.svg" />
            <p className="font-normal text-base mt-3">Randy Press</p>
            <p className="font-normal text-[15px] text-[#718EBF]">Director</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="rounded-full" src="/assets/avatar.svg" />
            <p className="font-normal text-base mt-3">Randy Press</p>
            <p className="font-normal text-[15px] text-[#718EBF]">Director</p>
          </div>
        </section>
        <div className="mt-6 flex items-center">
          <p className="text-[#718EBF] text-[14px] font-normal">Write Amount</p>
          <div className="flex rounded-full ml-3 flex-1">
            <input
              className="bg-[#EDF1F7] rounded-full pl-7 border-none outline-none"
              type="text"
              name=""
              id=""
            />
            <button className="bg-black text-white flex items-center relative -left-10 p-3 rounded-full gap-3 send-btn">
              <span>Send</span> <img id="send-icon" src="/assets/send.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
