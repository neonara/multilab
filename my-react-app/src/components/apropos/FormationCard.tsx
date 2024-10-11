
export default function FormationCard({ formation }) {
  const isLevelNotFound = !formation.levels?.[0] || !formation.levels?.[1];
  return (
    <div className="py-4 sm:py-0 flex flex-col justify-between items-center w-[232px] h-[368px] sm:w-[300px] sm:h-[524px] rounded-lg shadow-lg">
      <div className="px-6 py-2 sm:py-6 flex flex-col justify-center items-center gap-3 sm:gap-6">
        <img
          loading="lazy"
          src={formation.image}
          alt="Formation"
          className="rounded-full w-[170px] h-[170px] sm:w-[240px] sm:h-[240px] object-cover shadow-lg"
        />

        <p className="text-marron sm:text-xl leading-5 text-center font-bold">
          {formation.title}
        </p>

        <div className="flex gap-2 sm:gap-6">
          <div
            className={`flex flex-col gap-1 ${
              isLevelNotFound ? "justify-center items-center" : ""
            }`}
          >
            <p className="text-xs sm:text-sm">{formation.prices[0]}</p>
            <p className="text-xs sm:text-sm">{formation.prices[1]}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs sm:text-sm">{formation.levels?.[0] || ""}</p>
            <p className="text-xs sm:text-sm">{formation.levels?.[1] || ""}</p>
          </div>
        </div>
      </div>

      <button className="reserver-button flex flex-col justify-center rounded-lg mb-4 sm:mb-6 px-16 sm:px-24 py-3 bg-bgColor text-marron">
        Réserver
      </button>
    </div>
  );
}