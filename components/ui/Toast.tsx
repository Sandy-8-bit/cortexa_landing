'use client';
import { X, CheckCircle2 } from 'lucide-react';
export function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return message ? (
    <div className="toast fixed z-[60] bottom-[24px] right-[24px] w-[min(520px,_calc(100vw_-_40px))] flex items-center gap-[16px] [padding:20px_18px_20px_24px] bg-(--cx-black) text-(--cx-white) [border:1px_solid_#777] text-[13px] leading-[1.5]" role="status">
      <CheckCircle2 size={20} aria-hidden="true" />
      <span>{message}</span>
      <button onClick={onClose} aria-label="Dismiss notification">
        <X size={18} />
      </button>
    </div>
  ) : null;
}
