import { Box, Card, CardContent, CardHeader, Container, Stack, Button } from '@mui/material';
import { InfoCard } from "@/components/shared/cards";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import GroupIcon from '@mui/icons-material/Group';
import { LatestOrder, LatestTransactions, LatestProducts, LatestReviews, LatestMembers, LatestSellerReviews, Sellers } from '@/components/dashboard/components';
export const metadata = { title: 'Admin' };
export default function AdminPage() {
  const infoData = [
    {
      value: '359',
      label: 'Orders',
      color: 'success',
      icon: ShoppingCartIcon,
    },
    {
      value: '11',
      label: 'Products',
      color: 'primary',
      icon: InventoryIcon
    },
    {
      value: '2323',
      label: 'Pending Products',
      color: 'error',
      icon: PendingActionsIcon,
    },
    {
      value: '2222',
      label: 'Members',
      color: 'warning',
      icon: GroupIcon
    },
  ];
  return (
    <Container maxWidth={false}>
      <Stack spacing={2}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 2
        }}>
          {infoData.map((info, index) => (
            <InfoCard key={index} data={info} />
          ))}
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Card sx={{ flex: 1, borderRadius: 2 }}>
            <CardHeader title="Sellers" action={<Button size="small">View All</Button>} sx={{ pb: 1 }} />
            <CardContent sx={{ pt: 0 }}>
              <Sellers />
            </CardContent>
          </Card>
          <Card sx={{ flex: 3, borderRadius: 2 }}>
            <CardHeader title="Latest Orders" action={<Button size="small">View All</Button>} sx={{ pb: 1 }} />
            <CardContent sx={{ pt: 0 }}>
              <LatestOrder />
            </CardContent>
          </Card>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Card sx={{ flex: 3, borderRadius: 2 }}>
            <CardHeader title="Latest Transactions" action={<Button size="small">View All</Button>} sx={{ pb: 1 }} />
            <CardContent sx={{ pt: 0 }}>
              <LatestTransactions />
            </CardContent>
          </Card>
          <Card sx={{ flex: 1, borderRadius: 2 }}>
            <CardHeader title="Latest Reviews" action={<Button size="small">View All</Button>} sx={{ pb: 1 }} />
            <CardContent sx={{ pt: 0 }}>
              <LatestReviews />
            </CardContent>
          </Card>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Card sx={{ flex: 1, borderRadius: 2 }}>
            <CardHeader title="Latest Members" action={<Button size="small">View All</Button>} sx={{ pb: 1 }} />
            <CardContent sx={{ pt: 0 }}>
              <LatestMembers />
            </CardContent>
          </Card>
          <Card sx={{ flex: 3, borderRadius: 2 }}>
            <CardHeader title="Latest Offers" action={<Button size="small">View All</Button>} sx={{ pb: 1 }} />
            <CardContent sx={{ pt: 0 }}>
              <LatestProducts />
            </CardContent>
          </Card>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Card sx={{ flex: 1, borderRadius: 2 }}>
            <CardHeader title="Latest Pending Products" action={<Button size="small">View All</Button>} sx={{ pb: 1 }} />
            <CardContent sx={{ pt: 0 }}>
              <LatestProducts />
            </CardContent>
          </Card>
          <Card sx={{ flex: 1, borderRadius: 2 }}>
            <CardHeader title="Latest Seller Reviews" action={<Button size="small">View All</Button>} sx={{ pb: 1 }} />
            <CardContent sx={{ pt: 0 }}>
              <LatestSellerReviews />
            </CardContent>
          </Card>
        </Stack>

      </Stack>
    </Container>
  )
}
