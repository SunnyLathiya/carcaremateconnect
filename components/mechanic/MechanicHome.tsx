"use client"
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useRouter } from "next/navigation";


interface MechanicHomeProps  {}

const MechanicHome: React.FC<MechanicHomeProps> = () => {
  const router = useRouter();

  const itemList = [
    {
      text: "HOME",
      icon: <HomeIcon />,
      onClick: () => router.push("/mechanic/home"),
    },
    {
      text: "FIND ORDERS",
      icon: <DriveEtaIcon />,
      onClick: () => router.push("/mechanic/findorders"),
    },
    {
      text: "MY ORDERS",
      icon: <MonetizationOnIcon />,
      onClick: () => router.push("/mechanic/myorders"),
    },
    {
      text: "Log Out",
      icon: <ExitToAppIcon />,
      onClick: () => router.push("/login"),
    },
  ];

  return (
    <div style={{marginTop:"80px", marginBottom:"20px"}}>

      <Drawer variant="permanent" style={{marginTop:"50px"}}>
      <div style={{backgroundColor:"grey", height:"700px"}}>

        <List style={{marginTop:"100px"}}>
          {itemList.map((item, index) => (
            <ListItem button key={item.text} onClick={item.onClick}>
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        </div>
      </Drawer>
    </div>
  );
};

export default MechanicHome;
