import React from "react";
import FooterData from "./FooterContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    backgroundColor: "#3f51b5",
    height: "100vh",
    marginTop: "0px"
  },
  container: {
    display: "flex",
    textAlign: "left",
    color: "#FFF",
    padding: "1em"
  },
  innerContainer: {
    marginLeft: "2em"
  },
  heading: {
    fontSize: "18px",
    lineHeight: "27px",
    letterSpacing: "0.04em",
    color: "#FFF"
  },
  child: {
    fontWeight: "300",
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "0.02em"
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {FooterData.map((data) => {
          return (
            <div className={classes.innerContainer}>
              <div className={classes.heading}>{data.heading}</div>
              {data.children.map((child) => {
                return <div className={classes.child}>{child}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
