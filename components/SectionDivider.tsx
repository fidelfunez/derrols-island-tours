export function SectionDivider({ align = "center" }: { align?: "center" | "start" }) {
  return (
    <div
      className={`flex py-2 ${align === "start" ? "justify-start" : "justify-center"}`}
      aria-hidden
    >
      <div className="h-px w-24 max-w-[40%] rounded-full bg-coral/80" />
    </div>
  );
}
