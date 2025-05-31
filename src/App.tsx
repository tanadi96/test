import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import CategoryMenu from './components/CategoryMenu';
import CampaignSlider from './components/CampaignSlider';

function App() {
  return (
    <Box>
      <Navbar />
      <Box sx={{ maxWidth: 'lg', mx: 'auto', px: 2 }}>
        <CategoryMenu />
        <CampaignSlider />
      </Box>
    </Box>
  )
}

export default App
