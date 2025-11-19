'use client';
import React, { useRef } from 'react';
import Icon from '@/utils/icon';

interface DatePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  placeholder = "Select date",
  className = ""
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Convert MM/DD/YYYY -> YYYY-MM-DD for the native input
  const convertMmDdYyyyToIso = (dateString?: string) => {
    if (!dateString) return '';
    const parts = dateString.split('/');
    if (parts.length !== 3) return '';
    const [mm, dd, yyyy] = parts;
    if (!mm || !dd || !yyyy) return '';
    const month = mm.padStart(2, '0');
    const day = dd.padStart(2, '0');
    return `${yyyy}-${month}-${day}`;
  };

  // Convert YYYY-MM-DD (from input) -> MM/DD/YYYY for app state
  const convertIsoToMmDdYyyy = (iso?: string) => {
    if (!iso) return '';
    const parts = iso.split('-');
    if (parts.length !== 3) return '';
    const [yyyy, mm, dd] = parts;
    return `${mm.padStart(2, '0')}/${dd.padStart(2, '0')}/${yyyy}`;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      // Native input gives YYYY-MM-DD; emit MM/DD/YYYY to match caller expectation
      onChange(convertIsoToMmDdYyyy(e.target.value));
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      // Prefer native picker if available; otherwise fall back to click/focus
      const maybeShowPicker = (inputRef.current as unknown as { showPicker?: () => void })?.showPicker;
      if (typeof maybeShowPicker === 'function') {
        try {
          maybeShowPicker.call(inputRef.current);
          return;
        } catch {
          // ignore and try other fallbacks
        }
      }
      try {
        inputRef.current.click();
        return;
      } catch {
        // ignore and try focus
      }
      inputRef.current.focus();
    }
  };

  const formatDateForDisplay = (dateString: string) => {
    if (!dateString) return placeholder;
    // dateString is expected as MM/DD/YYYY in app state
    const [mm, dd, yyyy] = dateString.split('/');
    const isoForDate = yyyy && mm && dd ? `${yyyy}-${mm}-${dd}` : '';
    const date = isoForDate ? new Date(isoForDate) : new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className={`relative ${className}`}>
      <input
        ref={inputRef}
        type="date"
        value={convertMmDdYyyyToIso(value)}
        onChange={handleDateChange}
        className="absolute inset-0 opacity-0 pointer-events-none"
        aria-hidden="true"
      />
      <div
        onClick={handleClick}
        className="flex items-center gap-3 bg-[#F8F9FA] border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <Icon name="calendar" height={20} width={20} />
        <span className="text-gray-700 text-sm">
          {value ? formatDateForDisplay(value) : placeholder}
        </span>
      </div>
    </div>
  );
};

export default DatePicker;