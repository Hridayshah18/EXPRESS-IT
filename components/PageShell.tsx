import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { SiteNav } from "@/components/SiteNav";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
