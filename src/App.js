import "./App.css";
import {
  Drawer,
  CssBaseline,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Grid,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Divider } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import SensorsIcon from "@material-ui/icons/Sensors";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./App.css";
import BarChart from "./Component/BarChart";
import LineChart from "./Component/LineChart";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: 'hidden',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  toolbar: theme.mixins.toolbar,
  item__largeIcon: {
    transform: "scale(1.3)",
  },
  item__listItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  item__largeText: {
    fontSize: "1.2rem",
  },
  item__heading: {
    fontSize: "2.2rem",
    fontWeight: "bolder",
  },
  item__divider: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

function App() {
  const classes = useStyles();
  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      text: "Customers",
      icon: <PeopleIcon />,
    },
    {
      text: "Sensors",
      icon: <SensorsIcon />,
    },
    {
      text: "Products",
      icon: <ShoppingCartIcon />,
    },
  ];

  return (
    <div className="App">
    <Box className={classes.root}>
      <CssBaseline />
      <Box>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
        >
          {/* list list items */}

          <List>
            {menuItems.map((item) => (
              <ListItem
                className={classes.item__listItem}
                button
                key={item.text}
              >
                <ListItemIcon className={classes.item__largeIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.item__largeText}>
                    {item.text}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
      <Box className="right" p={2}>
        <Typography className={classes.item__heading}>Dashboard</Typography>
        <Divider className={classes.item__divider} />
        <Box className='chart'>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper className={classes.paper}><BarChart /></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}><LineChart /></Paper>
          </Grid>
        </Grid>
        </Box>
      </Box>
    </Box>
    </div>
  );
}
export default App;
