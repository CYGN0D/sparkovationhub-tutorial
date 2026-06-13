import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { SiteHeader } from '@/components/layout/site-header';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <div className="flex-grow flex flex-col">
        <DocsLayout tree={source.getPageTree()} {...baseOptions()} nav={{ enabled: false }}>
          {children}
        </DocsLayout>
      </div>
    </div>
  );
}

