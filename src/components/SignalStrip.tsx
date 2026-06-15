export function SignalStrip() {
  return (
    <div
      className="fixed left-0 top-0 z-[60] flex h-1 w-full"
      aria-hidden="true"
    >
      <span className="flex-1 bg-uae-red" />
      <span className="flex-1 bg-uae-green" />
      <span className="flex-1 bg-off-white" />
      <span className="flex-1 bg-black" />
    </div>
  );
}
