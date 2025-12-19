import { EditTranslationsPageWrapper } from '@/components/dashboard/components/settings/general';

export const metadata = {
    title: 'Edit Translations',
};

export default async function EditTranslationsPage({ params }) {
    const { language } = await params;
    return <EditTranslationsPageWrapper language={language} />;
}
