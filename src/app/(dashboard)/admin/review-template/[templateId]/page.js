import { ReviewTemplatePageWrapper } from '@/components/dashboard/components';
import React from 'react';

export const metadata = { title: 'Review Template' };

function ReviewTemplatePage({ params }) {
    return (
        <ReviewTemplatePageWrapper templateId={params.templateId} />
    );
}

export default ReviewTemplatePage;
