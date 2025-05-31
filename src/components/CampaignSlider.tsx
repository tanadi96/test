import { Box, Button, Paper, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CampaignSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box sx={{ my: 1 }}>
      <Slider {...settings}>
        <Box>
          <Paper
            sx={{
              p: 2,
              m: 1,
              backgroundImage: 'url("/campaign-1.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 200,
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              }}
            >
              <Typography variant="h6" color="white">
                Bantuan Pengembangan Yayasan Rumah Berkat Bersama
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 1, backgroundColor: '#1DA1F2' }}
              >
                Donasi sekarang
              </Button>
            </Box>
          </Paper>
        </Box>
        {/* Add more slides as needed */}
      </Slider>
    </Box>
  );
};

export default CampaignSlider;
