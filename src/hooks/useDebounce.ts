import { useEffect, useState } from "react";

/**
 * Debounce any value (commonly used with search)
 * @param value - the actual input
 * @param delay - delay in ms (default 500)
 * @returns debounced value
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
