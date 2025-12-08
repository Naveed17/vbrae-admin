import { KinguinDetailsPageWrapper } from '@/components/dashboard/components';
export const metadata = {
    title: 'Kinguin Details',
    description: 'Kinguin Details',
};

export default function KinguinDetailsPage({ params }) {
    return <KinguinDetailsPageWrapper productId={params.productId} />;
}
