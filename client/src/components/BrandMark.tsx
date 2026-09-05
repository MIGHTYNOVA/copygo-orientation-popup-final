/**
 * Style reminder: Black Cherry Orientation — restrained luxury technology.
 * Use Coffee Bean, Black Cherry, Racing Red, and Alabaster Grey only.
 */
export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand-mark" aria-label="CopyGo Pro">
      <span className="brand-symbol" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      {!compact && <span className="brand-type">CopyGo <em>Pro</em></span>}
    </div>
  );
}

