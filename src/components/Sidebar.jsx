import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuImage from "../img/Icon feather-menu.png";
import { IconButton, SpeedDial, SpeedDialIcon } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import Sport from "../img/Sport.png";
import CloseIcon from '@mui/icons-material/Close';

function Sidebar({ mobileBar, setMobileBar }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack
        direction="column"
        spacing={2}
        justifyContent="space-between"
        borderBottom="solid #e0e0e0 1px"
      >

          <img width={120} src={Sport} alt="" />

        <List className="flex-col-mobile">
          <li>
            <Link to="sa">????????</Link>
          </li>
          <li>
            <Link to="sa">????????????</Link>
          </li>
          <li>
            <Link to="sa">??????????????</Link>
          </li>
          <li>
            <Link to="sa">??????????</Link>
          </li>
          <li>
            <Link to="sa">?????????? ??????????</Link>
          </li>
          <li>
            <Link to="sa">????????????</Link>
          </li>
          <li>
            <Link to="sa">????</Link>
          </li>
          <li>
            <Link to="/login">???????????? / ??????????????</Link>
          </li>

          <li>
            <IconButton size="large" aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
          </li>
        </List>
      </Stack>
    </Box>
  );

  return (
    <div>
      {mobileBar &&
        ["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <img onClick={toggleDrawer(anchor, true)} src={MenuImage} alt="" />
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
                <SpeedDial
                onClick={toggleDrawer(anchor, false)}
                  ariaLabel="SpeedDial openIcon example"
                  icon={<SpeedDialIcon openIcon={<CloseIcon />} />}>
              </SpeedDial>
            </Drawer>
          </React.Fragment>
        ))}
    </div>
  );
}

export default Sidebar;
