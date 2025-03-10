import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MyCard() {
  return(
    <Card sx={{ 
      maxWidth: 300,
      padding: 2,
      }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Material UI Card
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          이 카드는 Material UI를 이용해서 만들었습니다.
        </Typography>
      </CardContent>
    </Card>

  );
}