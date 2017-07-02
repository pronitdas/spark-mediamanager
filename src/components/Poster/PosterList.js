import React, { Component } from "react"
import Poster from "./Poster"
import { withStyles, createStyleSheet } from "material-ui/styles"

const styles = createStyleSheet("PosterList", theme => ({
  posterList: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: theme.palette.background.default
  }
}))

@withStyles(styles)
class PosterList extends Component {
  sortPosters(posters) {
    return posters.sort((posterA, posterB) => {
      if (posterA.title < posterB.title) return -1
      if (posterA.title > posterB.title) return 1
      return 0
    })
  }

  render() {
    const { children, classes, posters = [] } = this.props
    return (
      <div className={classes.posterList}>
        {this.sortPosters(posters).map((poster, i) =>
          <Poster poster={poster} key={i} />
        )}
      </div>
    )
  }
}

export default PosterList