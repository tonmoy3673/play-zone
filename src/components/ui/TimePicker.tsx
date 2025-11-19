'use client';
import React, { useRef } from 'react';
import Icon from '@/utils/icon';

interface TimePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  placeholder = "Select time",
  className = ""
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const isAmPmFormat = (val?: string) => {
    if (!val) return false;
    return /(am|pm)$/i.test(val.trim());
  };

  // Normalize incoming value to 24h "HH:MM" for the native input
  const to24Hour = (val?: string) => {
    if (!val) return '';
    const trimmed = val.trim();
    if (isAmPmFormat(trimmed)) {
      // e.g., "06:00 PM"
      const match = trimmed.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
      if (!match) return '';
      let hour = parseInt(match[1], 10);
      const minute = match[2];
      const suffix = match[3].toUpperCase();
      if (suffix === 'PM' && hour !== 12) hour += 12;
      if (suffix === 'AM' && hour === 12) hour = 0;
      return `${String(hour).padStart(2, '0')}:${minute}`;
    }
    // Already 24h "HH:MM"
    const parts = trimmed.split(':');
    if (parts.length >= 2) {
      const [hh, mm] = parts;
      if (hh.length <= 2 && mm.length === 2) {
        return `${String(parseInt(hh, 10)).padStart(2, '0')}:${mm}`;
      }
    }
    return '';
  };

  // Convert "HH:MM" 24h to "hh:MM AM/PM"
  const toAmPm = (val?: string) => {
    if (!val) return '';
    const parts = val.split(':');
    if (parts.length < 2) return '';
    const hours = parseInt(parts[0], 10);
    const minutes = parts[1];
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;
    return `${String(hour12)}:${minutes} ${ampm}`;
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const new24 = e.target.value; // "HH:MM"
      // Preserve the incoming format: if the provided value had AM/PM, emit AM/PM, else emit 24h
      if (isAmPmFormat(value)) {
        onChange(toAmPm(new24));
      } else {
        onChange(new24);
      }
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      // Try native showPicker, then click, then focus
      const maybeShowPicker = (inputRef.current as unknown as { showPicker?: () => void })?.showPicker;
      if (typeof maybeShowPicker === 'function') {
        try {
          maybeShowPicker.call(inputRef.current);
          return;
        } catch {
          // fallthrough
        }
      }
      try {
        inputRef.current.click();
        return;
      } catch {
        // fallthrough
      }
      inputRef.current.focus();
    }
  };

  const formatTimeForDisplay = (timeString: string) => {
    if (!timeString) return placeholder;
    // If already AM/PM, keep it; else convert from 24h
    return isAmPmFormat(timeString) ? timeString : toAmPm(timeString);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        ref={inputRef}
        type="time"
        value={to24Hour(value)}
        onChange={handleTimeChange}
        className="absolute inset-0 opacity-0 pointer-events-none"
        aria-hidden="true"
      />
      <div
        onClick={handleClick}
        className="flex items-center gap-3 bg-[#F8F9FA] border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <Icon name="clock" height={20} width={20} />
        <span className="text-gray-700 text-sm">
          {value ? formatTimeForDisplay(value) : placeholder}
        </span>
      </div>
    </div>
  );
};

export default TimePicker;