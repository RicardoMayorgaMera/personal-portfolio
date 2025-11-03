import { cn } from "@/lib/utils";
import React from "react";

export function Word({
  children,
  scale,
  italic,
  offset = 0,
  style,
}: Readonly<{
  children: string;
  scale: number;
  italic?: boolean;
  offset?: number;
  style?: React.CSSProperties; // Takes inline styles now
}>) {
  return (
    <span
      className={`
        basis-0 min-h-8 m-0 p-0
        text-foreground
        [&:nth-child(3n+2):not([data-italic])]:text-neutral-500
        [&:nth-child(3n+3):not([data-italic])]:text-neutral-700
        data-italic:text-red-800
        [&[data-italic]:nth-child(3n+2)]:text-yellow-300
        [&[data-italic]:nth-child(3n+3)]:text-blue-600
        [&[data-italic]:nth-child(3n+4)]:text-red-500
      `}
      style={{
        flexGrow: scale,
        minWidth: `calc(${scale + "px"} + ${scale} * 0.1vw)`,
        ...style,
      }}
      data-italic={italic}
    >
      <span className="flex items-start justify-center h-full overflow-hidden relative">
        <svg className="aspect-[inherit] w-full" viewBox={`0 0 ${scale} 22`}>
          <text
            className={cn(
              "fill-current font-display text-[28px] font-extrabold leading-none uppercase",
              italic &&
                "font-serif tracking-[-0.05em] text-[29px] italic font-light normal-case"
            )}
            x={offset}
            y={21}
          >
            {children}
          </text>
        </svg>
      </span>
    </span>
  );
}

// The Container component, converted to Tailwind
export function Container({
  path,
  children,
  href,
  className, // Changed from `style` to `className`
}: Readonly<{
  path: string;
  children: React.ReactNode;
  href?: string;
  className?: string; // Standard string className prop
}>) {
  const safePath = path.split("/").pop();
  const wordCounts: { [key: string]: number } = {};

  const words: string[] = [];

  const childrenWithNames = React.Children.map(children, (child, i) => {
    const isLast = i === React.Children.count(children) - 1;
    if (
      child != null &&
      typeof child === "object" &&
      "type" in child &&
      child.type === Word
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let word = (child as any).props.children;
      const origWord = word;
      if (typeof word !== "string") {
        return child;
      }
      words.push(word);
      word = word.toLocaleLowerCase().replace(/[^a-z0-9\s-_]/g, "");

      const count = wordCounts[word] ?? 0;
      wordCounts[word] = (wordCounts[word] ?? 0) + 1;

      return React.cloneElement(child as React.ReactElement<typeof Word>, {
        key: child.key ?? i,
        // The dynamic viewTransitionName is now passed as an inline style
        // @ts-expect-error does not recognize style prop
        style: {
          viewTransitionName:
            "_" +
            safePath +
            "________" +
            word +
            (count > 0 ? "___" + count : ""),
        },
        "aria-hidden": true,
        children: isLast ? origWord : origWord + " ",
      });
    }
    if (
      child != null &&
      typeof child === "object" &&
      "type" in child &&
      child.type === "br"
    ) {
      // Replaced stylex.props(styles.br) with Tailwind classes
      return <div key={"br-" + i} className="w-full shrink-0" />;
    }
    return child;
  });

  const el = (
    <h1
      className={cn(
        "flex items-center justify-center flex-wrap w-full max-w-216 mx-auto gap-y-2",
        href !== null ? "mb-0" : "mb-32",
        className
      )}
      aria-label={words.join(" ")}
    >
      <span aria-hidden={true} style={{ display: "contents" }}>
        {childrenWithNames}
      </span>
    </h1>
  );

  if (href != null) {
    return (
      // Replaced stylex.props(styles.link) with Tailwind classes
      <a
        className="block mb-32 mx-auto max-w-216 outline-none w-full"
        href={href}
      >
        {el}
      </a>
    );
  }
  return el;
}
