import { ResolutionCenterDetailsPage } from "@/components/dashboard/components";
export const metadata = {
    title: "Resolution Center Details",
    description: "Resolution Center Details",
};

export default function ResolutionDetailsPage({ params }) {
    return <ResolutionCenterDetailsPage id={params.id} />;
}
