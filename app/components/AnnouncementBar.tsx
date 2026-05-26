export default function AnnouncementBar() {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #9A6A2F, #D6A354, #F1C87A, #D6A354, #9A6A2F)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 4s linear infinite',
      }}
      className="w-full py-2.5 text-center relative overflow-hidden"
    >
      <p className="text-xs sm:text-sm font-semibold text-black tracking-wide px-4">
        ⚡ Vagas abertas A inteligência artificial já está vendendo para seus concorrentes. E para você?
      </p>
    </div>
  );
}
