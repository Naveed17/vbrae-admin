import DashboardLayout from '@/components/dashboard/layouts/layout';

export const metadata = {
  title: 'MY Offers - VBRAE | Affordable Game Codes',
  description: 'Manage your game codes, offers, sales and orders on VBRAE dashboard',
};

export default function Layout({ children }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
