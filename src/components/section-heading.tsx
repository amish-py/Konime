import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  href?: string;
  action?: React.ReactNode;
  className?: string;
};

const SectionHeading = ({ title, href, action, className }: Props) => {
  return (
    <div className={cn("flex items-end justify-between gap-4 w-full", className)}>
      <div className="flex items-center gap-3 min-w-0">
        <span className="h-7 w-[3px] bg-konime-red shrink-0" />
        <h2 className="font-display text-xl sm:text-2xl tracking-wide uppercase text-white truncate">
          {title}
        </h2>
      </div>
      {action}
      {!action && href && (
        <Link
          href={href}
          className="shrink-0 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-white/50 hover:text-konime-red"
        >
          View all
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
