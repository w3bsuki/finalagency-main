import { SolutionsNavigation } from "@/components/shared/sections/solutions/navigation";

interface SolutionsLayoutProps {
  children: React.ReactNode;
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 