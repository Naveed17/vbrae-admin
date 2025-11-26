import DashboardLayout from '@/components/dashboard/layouts/layout';

export const metadata = {
  title: '',
  description: '',
};

export default function Layout({ children }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
