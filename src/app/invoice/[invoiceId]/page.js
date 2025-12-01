import InvoiceDetail from '@/components/invoice/invoiceDetail';
import React from 'react'
export const metadata = { title: 'Invoice' };
function InvoicePage({ params }) {
    return (
        <InvoiceDetail invoiceId={params.invoiceId} />
    )
}

export default InvoicePage
