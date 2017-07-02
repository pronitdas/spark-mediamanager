import React, { Component } from "react"
import Paper from "material-ui/Paper"
import { withStyles, createStyleSheet } from "material-ui/styles"

import PosterOverlay from "./PosterOverlay"

const styles = createStyleSheet("Poster", theme => {
  return {
    poster: {
      width: 200,
      height: 300,
      cursor: "default",
      display: "flex",
      alignItems: "flex-end",
      backgroundSize: "cover",
      margin: 10,
      transition: "all .2s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)"
      }
    }
  }
})

@withStyles(styles)
class Poster extends Component {
  render(props) {
    const {
      classes,
      children,
      poster,
      showSubtitle = true,
      ...rest
    } = this.props
    return (
      <Paper
        style={{ backgroundImage: `url(${poster.posterImg})` }}
        className={classes.poster}
        elevation={24}
        {...rest}
      >
        {showSubtitle
          ? <PosterOverlay title={poster.title} year={poster.year} />
          : ""}
      </Paper>
    )
  }
}

export default Poster