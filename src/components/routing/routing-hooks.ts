import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export function useOnRouteChange(handler: VoidFunction | null) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const savedCallbackRef = useRef<VoidFunction | null>(handler);

  useEffect(() => {
    savedCallbackRef.current = handler;
  }, [handler]);

  useEffect(() => {
    return () => {
      savedCallbackRef.current?.();
    };
  }, [pathname, searchParams]);
}

export function useOnPathnameChange(handler: VoidFunction | null) {
  const pathname = usePathname();
  const savedCallbackRef = useRef<VoidFunction | null>(handler);

  useEffect(() => {
    savedCallbackRef.current = handler;
  }, [handler]);

  useEffect(() => {
    return () => {
      savedCallbackRef.current?.();
    };
  }, [pathname]);
}
