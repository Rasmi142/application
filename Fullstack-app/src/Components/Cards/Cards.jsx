import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import cardData from '../../Data/cardData.json'; // Ensure the path is correct

export default function Cards() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop:'3rem' }}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ width: 320, margin: 2, backgroundColor: '#1F2937' }}>
          <div>
            <Typography level="title-lg" sx={{ color: 'white' }}>
              {card.title}
            </Typography>
            <Typography level="body-sm" sx={{ color: 'white' }}>
              {card.description}
            </Typography>
            
            <IconButton
              aria-label={`bookmark ${card.title}`}
              variant="plain"
              color="white"
              size="sm"
              sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
            >
              <BookmarkAdd />
            </IconButton>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={card.imageUrl}
              loading="lazy"
              alt={card.title}
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
          <Typography level="body-base" sx={{ color: 'white', fontWeight: 'bold' }}>
              {card.price} {/* Displaying the price */}
            </Typography>
            <Button
              variant="solid"
              size="md"
              backgroundColor="#615EFC"
              color="white" // You can replace this with a specific hex color if needed
              aria-label={`Explore ${card.title}`}
              sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, color: 'white', backgroundColor:"#615EFC" }}
            >
              Explore
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
