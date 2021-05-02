import { AppBar, Button, Drawer, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from "react";
import SimpleList from "../components/SimpleList";


import {
     Route, Switch
} from "react-router-dom";
import DraftPage from "../pages/DraftsPage";
import InboxPage from "../pages/InboxPage";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function MainLayout() {


    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();

    return (
        <React.Fragment>

            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={function () {
                        setDrawerOpen(!drawerOpen);
                    }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <SimpleList setDrawerOpen={setDrawerOpen}/>
            </Drawer>

                <Switch>
                    <Route path="/drafts" exact>
                        <DraftPage />
                    </Route>
                    <Route path="/inbox" exact>
                        <InboxPage />
                    </Route>
                </Switch>

        </React.Fragment>

    );
}

export { MainLayout };
