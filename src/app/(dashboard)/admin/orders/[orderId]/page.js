import OrderDetails from '@/components/dashboard/components/orders/orderDetails';

export async function generateMetadata({ params }) {
    return {
        title: `Order #${params.orderId} - Details`
    };
}

export default function OrderDetailsPage({ params }) {
    return <OrderDetails orderId={params.orderId} />;
}