"use client";

import { cn } from "@/lib/utils";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "flex items-center justify-center overflow-visible py-20",
          containerClassName
        )}
        style={{
          perspective: "1400px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative flex items-center justify-center overflow-visible transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96 overflow-visible [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  hoverBoostZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  /** Extra translateZ (px) while pointer is over the card; numeric `translateZ` only. */
  hoverBoostZ?: number;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  const asLen = (v: number | string) =>
    typeof v === "number" ? `${v}px` : v;

  useEffect(() => {
    handleAnimations();
  }, [
    isMouseEntered,
    translateX,
    translateY,
    translateZ,
    hoverBoostZ,
    rotateX,
    rotateY,
    rotateZ,
  ]);

  const handleAnimations = () => {
    if (!ref.current) return;
    const zVal =
      typeof translateZ === "number"
        ? translateZ + (isMouseEntered ? hoverBoostZ : 0)
        : translateZ;
    // Always keep the same transform function list (including rotateX/Y/Z)
    // to avoid GPU/compositing glitches in prod builds on some browsers.
    const rx = isMouseEntered ? rotateX : 0;
    const ry = isMouseEntered ? rotateY : 0;
    const rz = isMouseEntered ? rotateZ : 0;
    ref.current.style.transform = `translateX(${asLen(translateX)}) translateY(${asLen(
      translateY
    )}) translateZ(${asLen(zVal)}) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;
  };

  return (
    <Tag
      ref={ref}
      className={cn(
        "w-fit [backface-visibility:hidden] will-change-transform transition duration-200 ease-linear",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
