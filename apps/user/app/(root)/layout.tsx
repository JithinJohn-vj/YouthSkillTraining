
import "@repo/ui/globals.css";
import { PageLayout } from "../layout/PageLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>
        <PageLayout>

        {children}
        </PageLayout>
      </body>
    </html>
  );
}
