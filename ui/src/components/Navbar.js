import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Navbar(props) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setOpen(open);
  };

  return (
    <AppBar
      className="NavBarTop"
      position="absolute"
      sx={{
        zIndex: theme => theme.zIndex.drawer + 10,
        color: "black",
        backgroundColor: "white",
        boxShadow: "none"
      }}
    >
      <Toolbar sx={{ borderBottom: "4px solid #e65c00" }}>
      
        <Typography
          variant="h5"
          display="flex"
          justifyContent="center"
          sx={{
            flexGrow: "1",
            fontWeight: 700,
            paddingLeft: ".5em",
            paddingTop: ".5em",
            color: "black",
            textDecoration: "none",
            
          }}
        >
          <svg width="76px" height="76px" viewBox="0 0 128 128" ariaHidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M31.05 41.19s-2.96-22.81 9.71-21.4c12.52 1.39 14.98 16.93 30.97 29C94.68 66.11 104.82 66.81 109.04 73c4.22 6.19 3.1 11.54 3.1 11.54s-34.49.99-51.81-13.8s-29.28-29.55-29.28-29.55z" fill="#f8af3c"></path><path d="M17.11 13.31c8.96-4.48 17.1 1.9 19.01 7.32C37.9 25.73 47.38 40.76 54 47.66C59.1 52.99 74.66 67.61 87.08 73c13.94 6.05 26.19 4.79 31.68 8.73c5.49 3.94 6.44 14.43 3.77 17.67c-2.67 3.24-9.26 6.83-19.96 2.89c-10.7-3.94-45.19-11.83-61.24-28.58S8.39 26.12 9.65 22.6s2.96-7.03 7.46-9.29z" fill="#ec6b31"></path><path d="M15.99 45.55c-3.16-5.74-7.88-10.63-7.18-19.43c.35-4.36 2.82-7.81 2.82-7.81s-.56 6.26 3.1 8.94s9.01 4.5 13.09 10.28s9.85 20.27 28.16 34.35c18.64 14.34 33.65 12.95 40.4 17.46c6.76 4.5 8.31 11.83 16.33 11.68c8.02-.14 10.7-3.24 10.7-3.24s-2.39 8.31-11.4 9.15s-16.05-3.1-19.99-4.5s-43.78-13.8-54.9-27.45s-19.58-26.61-21.13-29.43z" fill="#af5832"></path><path d="M29.5 95.11c18.76 14.93 41.53 22.38 55.75 18.86c16.71-4.14 14.94-14.5 13.66-17.18c-1.83-3.8-8.59-6.48-15.06-8.02c-6.48-1.55-21.72-5.34-37.03-19.43c-17.74-16.33-21.49-36.92-31.4-37.02c-6.54-.07-10.2 3.31-11.12 13.23c-.96 10.41 5.92 34.21 25.2 49.56z" fill="#f5b03c"></path><path d="M26.87 14.3c-2.58-1.56-4.83.79-5.07 5.26c-.19 3.57 1.22 6.96 5.26 8.92c3.38 1.64 8.59 3 10.37 6.52s.19 15.49 5.26 20.51s16.64 3.93 21.09 8.53s5.37 13.48 11.85 16.81c6.48 3.33 12.39-1.36 18.35.47c5.96 1.83 10.84 10.18 11.5 11.4c.66 1.22 2.79 3.66 4.93 2.25c2.34-1.55.19-4.27-.56-5.63c-.75-1.36-7.09-11.73-14.92-13.89s-11.83 1.74-16.42-.19c-4.6-1.92-4.74-12.44-11.54-16.94s-15.77-3-19.8-7.18s-1.04-15.21-4.08-19.71C39.66 26.36 29 24.23 27.7 20.82c-1.08-2.76 1.27-5.25-.83-6.52z" fill="#ffe361"></path></g></svg>
          <Typography variant="h4" sx={{paddingTop: ".25em",fontWeight: 700,fontFamily: "'Rajdhani', sans-serif"}}>HotDogz</Typography>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}