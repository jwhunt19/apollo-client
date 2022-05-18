import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function LinkForm() {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");

  const CREATE = gql`
    mutation Mutation($url: String!, $slug: String) {
      setLink(url: $url, slug: $slug) {
        url
        slug
      }
    }
  `;

  const [createLink, { loading, error, data }] = useMutation(CREATE);

  return (
    <Grid container spacing={2}>
      <Grid item>
        <p>URL to shorten</p>
      </Grid>
      <Grid item>
        <TextField
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          variant="standard"
        ></TextField>
      </Grid>
      <Grid item>
        <p>Custom slug</p>
      </Grid>
      <Grid item>
        <TextField
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          variant="standard"
          placeholder="leave blank for auto"
        ></TextField>
      </Grid>
      <Grid item>
        <Button
          onClick={() => {
            createLink({ variables: { url, slug } });
            setUrl("");
            setSlug("");
          }}
          variant="outlined"
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
}
