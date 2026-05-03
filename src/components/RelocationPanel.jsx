import {relocationData} from '../data/relocationData';
import RelocationMap from './RelocationMap';
function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

function getDistanceMiles(lat1, lon1, lat2, lon2) {
    const earthRadiusMiles = 3958.8; // Radius of the Earth in miles
    const latitudeDifference = toRadians(lat2 - lat1);
    const longitudeDifference = toRadians(lon2 - lon1);

    const a = Math.sin(latitudeDifference / 2) * Math.sin(latitudeDifference / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(longitudeDifference / 2) * Math.sin(longitudeDifference / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadiusMiles * c;

}

export default function RelocationPanel() {
    const distanceInMiles = Math.round(
        getDistanceMiles(
            relocationData.current.lat, relocationData.current.lng, relocationData.next.lat, relocationData.next.lng
        )
    );
    return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-2">
              Relocation Panel
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold">
              Charlottesville → Santa Barbara
            </h3>
          </div>

          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
            {relocationData.status}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-center mb-6">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
            <p className="text-sm uppercase tracking-[0.16em] text-slate-400 mb-2">
              {relocationData.current.label}
            </p>
            <h4 className="text-xl font-semibold mb-1">
              {relocationData.current.city}
            </h4>
          </div>

          <div className="flex flex-col items-center justify-center min-w-[180px]">
            <div className="w-3 h-3 rounded-full bg-cyan-300 mb-2" />
            <div className="w-24 md:w-32 h-[2px] bg-gradient-to-r from-cyan-300 via-slate-500 to-cyan-300" />
            <div className="w-3 h-3 rounded-full bg-cyan-300 mt-2" />

            <p className="text-2xl font-semibold mt-4">
              {distanceInMiles.toLocaleString()} mi
            </p>
            <p className="text-sm text-slate-400 mt-1 text-center">
              Approximate move distance
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
            <p className="text-sm uppercase tracking-[0.16em] text-slate-400 mb-2">
              {relocationData.next.label}
            </p>
            <h4 className="text-xl font-semibold mb-1">
              {relocationData.next.city}
            </h4>
          </div>
        </div>

        <div className="mb-6">
          <RelocationMap />
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-5">
          <p className="text-sm uppercase tracking-[0.16em] text-cyan-300 mb-2">
            Move Status
          </p>
          <p className="text-slate-300 leading-7">
            {relocationData.detail}
          </p>
        </div>
      </div>
    </section>
  );
}