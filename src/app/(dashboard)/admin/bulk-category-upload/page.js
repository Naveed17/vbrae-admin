import { BulkCategoryUploadPageWrapper } from '@/components/dashboard/components/products/categories';

export const metadata = {
  title: 'Bulk Category Upload',
  description: 'Upload categories in bulk using CSV file'
};

export default function BulkCategoryUploadPage() {
  return <BulkCategoryUploadPageWrapper />;
}
