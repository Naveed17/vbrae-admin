'use client';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
  IconButton,
  ButtonGroup,
  Button
} from '@mui/material';
import {
  ExpandMore,
  Edit,
  Delete
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const categoryData = [
  {
    id: 135,
    name: 'PSN',
    isMainMenu: true,
    isVisible: true,
    children: [
      { id: 138, name: 'PS5', isMainMenu: true, isVisible: true },
      { id: 137, name: 'PS4', isMainMenu: true, isVisible: true },
      { id: 136, name: 'PS3', isMainMenu: true, isVisible: true },
      { id: 178, name: 'Game Accounts', isMainMenu: true, isVisible: true }
    ]
  },
  {
    id: 134,
    name: 'XBOX',
    isMainMenu: true,
    isVisible: true,
    children: [
      { id: 141, name: 'CHEAP XBOX GAME KEYS FOR SALE', isMainMenu: true, isVisible: true },
      { id: 145, name: 'Buy Xbox Series X|S Game Keys Online', isMainMenu: true, isVisible: true },
      { id: 156, name: 'Xbox 360', isMainMenu: true, isVisible: true },
      { id: 177, name: 'XBOX ACCOUNTS FOR SALE', isMainMenu: true, isVisible: true }
    ]
  },
  {
    id: 139,
    name: 'GIFT CARDS',
    isMainMenu: true,
    isVisible: true,
    children: [
      { id: 179, name: 'Apple Gift Card', isMainMenu: true, isVisible: true },
      { id: 152, name: 'Google Play', isMainMenu: true, isVisible: true },
      { id: 161, name: 'Amazon', isMainMenu: true, isVisible: true },
      { id: 162, name: 'STEAM GIFT CARD FOR SALE', isMainMenu: true, isVisible: true }
    ]
  }
];

function CategoryItem({ category, level = 0, isLast = false, parentIsLast = [] }) {
  const hasChildren = category.children && category.children.length > 0;
  const router = useRouter();

  const handleExpandClick = (event) => {
    if (!hasChildren) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/admin/categories/update-category/${category.id}`);
  };

  if (!hasChildren) {
    return (
      <Box sx={{
        ml: level * 2,
        borderRadius: 1,
      }}>
        <Box sx={{ p: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography>{category.name}</Typography>
            <Typography variant="caption" color="text.secondary">
              (Id: {category.id})
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {category.isMainMenu && (
              <Chip label="Main Menu" size="small" color="warning" />
            )}
            {category.isVisible && (
              <Chip label="Visible" size="small" color="success" />
            )}

            <ButtonGroup size="small">
              <Button
                startIcon={<Edit />}
                onClick={handleEditClick}
              >
                Edit
              </Button>
              <Button startIcon={<Delete />} size="small" color="error">
                Delete
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Accordion sx={{
      ml: level * 3
    }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mr: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography>{category.name}</Typography>
            <Typography variant="caption" color="text.secondary">
              (Id: {category.id})
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {category.isMainMenu && (
              <Chip label="Main Menu" size="small" color="warning" />
            )}
            {category.isVisible && (
              <Chip label="Visible" size="small" color="success" />
            )}

            <ButtonGroup size="small">
              <Button
                startIcon={<Edit />}
                onClick={handleEditClick}
              >
                Edit
              </Button>
              <Button startIcon={<Delete />} size="small" color="error">
                Delete
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </AccordionSummary>

      {category.children && (
        <AccordionDetails>
          {category.children.map((child, index) => (
            <CategoryItem
              key={child.id}
              category={child}
              level={level + 1}
              isLast={index === category.children.length - 1}
            />
          ))}
        </AccordionDetails>
      )}
    </Accordion>
  );
}

function CategoryTree() {
  return (
    <Box>
      {categoryData.map((category, index) => (
        <CategoryItem
          key={category.id}
          category={category}
          isLast={index === categoryData.length - 1}
        />
      ))}
    </Box>
  );
}

export default CategoryTree;