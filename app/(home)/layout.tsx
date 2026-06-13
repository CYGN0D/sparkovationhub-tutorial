import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

