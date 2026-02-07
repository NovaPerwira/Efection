/* ================= CARD COMPONENT ================= */
import Link from "next/link";

interface CompetitionCardProps {
  title: string;
  w: number;
  h: number;
  slug: string;
  icon?: string;
  iconSize?: number;
}

export default function CompetitionCard({
  title,
  w,
  h,
  slug,
  icon,
  iconSize,
}: CompetitionCardProps) {
   return (
    <Link href={`/competition/${slug}`}>
      <div
        className="bg-[#F4D35E] rounded-xl
                   shadow-[0_12px_0_rgba(0,0,0,0.25)]
                   px-6 py-8
                   flex flex-col items-center gap-6
                   cursor-pointer hover:scale-105 transition"
        style={{
          width: `${w}px`,
          height: `${h}px`,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
        }}
      >
        {/* TITLE */}
        <span
          style={{
            fontFamily: "Grenze, serif",
            fontSize: "48px",
            color: "#fff",
            textShadow: "0 3px 6px rgba(0,0,0,0.4)",
          }}
        >
          {title}
        </span>

        {/* ICON */}
        {icon && (
          <div className="relative">
            {/* GLOW */}
            <div className="absolute inset-0 rounded-full blur-xl bg-white/40" />

            <img
              src={icon}
              alt={`${title} icon`}
              style={{
                width: iconSize ?? 50,
                height: iconSize ?? 50,
              }}
              className="relative object-contain animate-float"
            />
          </div>
        )}
      </div>
    </Link>
  );
}

