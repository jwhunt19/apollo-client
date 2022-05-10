import { ListItem, ListItemText } from "@mui/material";

export default function Link({ url, slug }) {
  return (
    <ListItem>
      <ListItemText>URL: {url}</ListItemText>
      <ListItemText>slug: {slug}</ListItemText>
    </ListItem>
  );
}
