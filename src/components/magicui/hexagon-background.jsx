'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

function HexagonBackground({
  className,
  children,
  hexagonProps,
  hexagonSize: initialHexagonSize,
  hexagonMargin = 3,
  ...props
}) {
  const containerRef = React.useRef(null);
  const [hexagonSize, setHexagonSize] = React.useState(initialHexagonSize || 75);

  const [gridDimensions, setGridDimensions] = React.useState({
    rows: 0,
    columns: 0,
  });

  const updateSettings = React.useCallback(() => {
    if (!containerRef.current) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    // Responsive hexagon size
    let size = initialHexagonSize || 75;
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) size = initialHexagonSize ? initialHexagonSize * 0.7 : 45;
      else if (window.innerWidth < 1024) size = initialHexagonSize ? initialHexagonSize * 0.85 : 60;
    }
    setHexagonSize(size);

    const rowSpacing = size * 0.8;
    const hexagonWidth = size;

    const rows = Math.ceil(height / rowSpacing) + 2;
    const columns = Math.ceil(width / hexagonWidth) + 2;
    setGridDimensions({ rows, columns });
  }, [initialHexagonSize]);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(() => {
      updateSettings();
    });

    observer.observe(containerRef.current);
    window.addEventListener('resize', updateSettings);
    
    updateSettings();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateSettings);
    };
  }, [updateSettings]);

  const hexagonWidth = hexagonSize;
  const hexagonHeight = hexagonSize * 1.1;
  const baseMarginTop = -36 - 0.275 * (hexagonSize - 100);
  const computedMarginTop = baseMarginTop + hexagonMargin;
  const oddRowMarginLeft = -(hexagonSize / 2);
  const evenRowMarginLeft = hexagonMargin / 2;

  return (
    <div
      ref={containerRef}
      data-slot="hexagon-background"
      className={cn(
        'relative size-full overflow-hidden bg-transparent pointer-events-none',
        className,
      )}
      {...props}
    >
      <style>{`:root { --hexagon-margin: ${hexagonMargin}px; }`}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: gridDimensions.rows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            style={{
              marginTop: rowIndex === 0 ? 0 : computedMarginTop,
              marginLeft:
                ((rowIndex + 1) % 2 === 0
                  ? evenRowMarginLeft
                  : oddRowMarginLeft) - (hexagonSize / 4),
            }}
            className="inline-flex whitespace-nowrap"
          >
            {Array.from({ length: gridDimensions.columns }).map(
              (_, colIndex) => (
                <div
                  key={`hexagon-${rowIndex}-${colIndex}`}
                  {...hexagonProps}
                  style={{
                    width: hexagonWidth,
                    height: hexagonHeight,
                    marginLeft: hexagonMargin,
                    ...hexagonProps?.style,
                  }}
                  className={cn(
                    'relative shrink-0',
                    '[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]',
                    "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full dark:before:bg-neutral-950 before:bg-white before:opacity-100 before:transition-all before:duration-1000",
                    "after:content-[''] after:absolute after:inset-[var(--hexagon-margin)] dark:after:bg-neutral-950 after:bg-white",
                    'after:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]',
                    'hover:before:bg-neutral-200 dark:hover:before:bg-neutral-800 hover:before:opacity-100 hover:before:duration-0 dark:hover:after:bg-neutral-900 hover:after:bg-neutral-100 hover:after:opacity-100 hover:after:duration-0',
                    hexagonProps?.className,
                  )}
                />
              ),
            )}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

export { HexagonBackground };
