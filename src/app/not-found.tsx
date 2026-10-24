import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="font-display text-8xl text-konime-red">404</p>
      <h1 className="font-display text-3xl uppercase mt-2">Page not found</h1>
      <p className="text-sm text-white/50 mt-3 max-w-sm">
        This route does not exist. Head back to the catalog.
      </p>
      <Link
        href={ROUTES.HOME}
        className="mt-8 px-6 py-2.5 bg-konime-red text-white text-xs uppercase tracking-widest"
      >
        Back home
      </Link>
    </div>
  );
}
