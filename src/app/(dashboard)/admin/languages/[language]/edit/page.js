import { EditLanguagePageWrapper } from '@/components/dashboard/components/settings/general';

export const metadata = {
    title: 'Edit Language',
};

export default async function EditLanguagePage({ params }) {
    const { language } = await params;
    return <EditLanguagePageWrapper language={language} />;
}
