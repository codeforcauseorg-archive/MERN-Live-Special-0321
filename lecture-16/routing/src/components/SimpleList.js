import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: 260,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function SimpleList({setDrawerOpen}) {
    const classes = useStyles();

    const history = useHistory();

    console.log(history);

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={() => {
                    history.push("/inbox");
                    setDrawerOpen(false);
                }}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button onClick={() => {
                        history.push("/drafts");
                        setDrawerOpen(false);
                    }} >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button onClick={() => {
                        history.push("/trash");
                        setDrawerOpen(false);
                    }}>
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem button onClick={() => {
                        history.push("/spam");
                        setDrawerOpen(false);
                    }}>
                    <ListItemText primary="Spam" />
                </ListItem>
            </List>
        </div>
    );
}
