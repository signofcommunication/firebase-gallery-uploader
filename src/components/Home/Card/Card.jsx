import { Card, CardMedia } from "@mui/material";

export default function Cards({ data: image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={image.imageUrl}
        alt="Paella dish"
      />
    </Card>
  );
}
