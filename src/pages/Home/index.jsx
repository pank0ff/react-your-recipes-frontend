import { Grid, makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom>
            Homepage
          </Typography>
          <Typography variant="body1" gutterBottom>
          My application is called "YourRecipes". This application is a recipe book that has an additional function:
          </Typography>
          <Typography variant="body1" gutterBottom>
          1. Each recipe will have the function of choosing the portion size: by the number of components (a good example is 10 or 12 dumplings) || by gramme || by calories.
          </Typography>
          <Typography variant="body1" gutterBottom>
          2. The possibility of communication between authorized users will be implemented. Exchange of recipes, discussion of them.
          </Typography>
          <Typography variant="body1" gutterBottom>
          3. Each recipe can be discussed using the comments below.
          </Typography>
          <Typography variant="body1" gutterBottom>
          4. There will be a function of selecting recipes using the ingredients that the user has. Those. he introduces, relatively speaking, “egg”, and receives the answer: “You can cook “Boiled Egg” or “Fried Egg".” This function will be convenient for all those who want to eat, but at the same time does not have a huge base of recipes in their head.
          </Typography>
          <Typography variant="body1" gutterBottom>
          5. Users can add their recipes, which will be uploaded after successfully passed moderation.
          </Typography>
          <Typography variant="body1" gutterBottom>
          6. Mark your favorite recipes.
          </Typography>
          <Typography variant="body1" gutterBottom>
          7. It will also be possible to set timers right inside the applications, so as not to perform unnecessary actions. 
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
