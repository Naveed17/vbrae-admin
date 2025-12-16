import { TicketDetailsPageWrapper } from '@/components/dashboard/components';
export const metadata = {
    title: 'Ticket Details',
    description: 'Ticket Details Page',
};

export default function TicketDetailsPage() {
    return <TicketDetailsPageWrapper ticketId={1} />;
}
