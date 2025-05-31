import { Box, Typography, IconButton, Grid } from '@mui/material';
import {
  Home as HomeIcon,
  LocationCity as LocationCityIcon,
  Pets as PetsIcon,
  LocalHospital as LocalHospitalIcon,
  Park as ParkIcon,
  School as SchoolIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const CategoryButton = styled(IconButton)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(1),
  color: '#1DA1F2',
  '&:hover': {
    backgroundColor: 'rgba(29, 161, 242, 0.1)',
  },
}));

const categories = [
  { icon: <HomeIcon />, label: 'Lihat Semua' },
  { icon: <LocationCityIcon />, label: 'Rumah Ibadah' },
  { icon: <PetsIcon />, label: 'Menolong Hewan' },
  { icon: <LocalHospitalIcon />, label: 'Bantuan Medis' },
  { icon: <ParkIcon />, label: 'Lingkungan' },
  { icon: <SchoolIcon />, label: 'Beasiswa' },
];

const CategoryMenu = () => {
  return (
    <Box sx={{ py: 2, px: 1, overflowX: 'auto' }}>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item key={index}>
            <CategoryButton>
              {category.icon}
              <Typography variant="caption" sx={{ textAlign: 'center' }}>
                {category.label}
              </Typography>
            </CategoryButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryMenu;
