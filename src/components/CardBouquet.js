import * as React from "react";
import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  IconButton,
  CardMedia
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardBouquet = ({ bouquet }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box width="300px">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            width="150"
            image={require(`../images/${bouquet.src}`)}
            alt="floral bouquet"
          />

          <CardContent align="center">
            <Typography gutterBottom variant="h5" component="div">
              {bouquet.src.slice(0, -4)}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {bouquet.price}$
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>

          <IconButton aria-label="add to cart">
            <AddShoppingCartIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>{bouquet.flowers.join(', ')}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default CardBouquet;
