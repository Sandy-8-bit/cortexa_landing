'use client';
import { X, CheckCircle2 } from 'lucide-react';
export function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return message ? (
    <div className="toast" role="status">
      <CheckCircle2 size={20} aria-hidden="true" />
      <span>{message}</span>
      <button onClick={onClose} aria-label="Dismiss notification">
        <X size={18} />
      </button>
    </div>
  ) : null;
}
