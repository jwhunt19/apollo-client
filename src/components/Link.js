import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Link({ url, slug }) {
  return (
    <Grid container columns={{ xs: 4, md: 10 }}>
      <Grid item xs={4} md={4}>
        URL: {url.length > 40 ? url.slice(0, 40) + "..." : url}
      </Grid>
      <Grid item xs={4} md={4}>
        slug: {slug.length > 20 ? slug.slice(0, 20) + "..." : slug}
      </Grid>
      <Grid item xs={2} md={1}>
        <Button
          variant="outlined"
          onClick={() =>
            navigator.clipboard.writeText(window.location.href + slug)
          }
        >
          <ContentCopyIcon />
        </Button>
      </Grid>
      <Grid item xs={2} md={1}>
        <Button variant="outlined" href={url}>
          <NavigateNextIcon />
        </Button>
      </Grid>
    </Grid>
  );
}
