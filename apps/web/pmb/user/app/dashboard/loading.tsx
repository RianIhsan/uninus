export default function Loading() {
  return (
    <section className="w-full h-screen flex bg-grayscale-1 gap-x-2">
      {/* <aside className="bg-grayscale-2 w-1/5 lg:h-screen lg:relative animate-pulse hidden lg:flex"></aside> */}
      <div className=" w-full h-auto flex flex-col p-4 lg:p-12 gap-y-4 animate-pulse">
        <div className="w-full h-auto flex justify-center lg:justify-start items-center lg:items-start flex-col gap-y-2">
          <span className="bg-grayscale-2 w-1/4 h-4 lg:h-7 rounded-lg"></span>
          <span className="bg-grayscale-2 w-1/6 h-4 lg:h-7 rounded-lg"></span>
        </div>
        <div className="w-full rounded-md h-[80vh] lg:h-[70vh] bg-slate-3"></div>
      </div>
    </section>
  );
}
