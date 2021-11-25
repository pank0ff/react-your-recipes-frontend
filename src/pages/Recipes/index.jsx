import { Grid, makeStyles, Container, Typography } from "@material-ui/core";
import BodyData from "../../dataSearch";
import Table from "../../table";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function Recipes() {
  const classes = useStyles();

  return (
    <><Container maxWidth="sm" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom>
            Recipes
          </Typography>
        </Grid>
      </Grid>
    </Container><BodyData /><Table /></>
  );
}

export default Recipes;
