import React from "react";
import {
  TextField,
  InputAdornment,
  withStyles,
  IconButton
} from "@material-ui/core";
import classNames from "classnames";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  //NOTE: Keep these in sync a) config.js=>mapPopup.controls.search, b)search-component=>styles.searchComponent c)devicemap.scss =>.search-box-control
  searchComponent: {
    width: "520px"
  },
  margin: {},
  textfield: {
    color: theme.palette.secondary.main,
    paddingLeft: theme.spacing.unit,
    width: "25%"
  },
  emptyTextfield: {
    color: "#9b9b9b"
  },
  //introduce a divider before clearicons
  clearSeperator: {
    height: "100%",
    borderRight: "1px solid #979797",
    marginRight: "5px"
  },
  iconButton: {
    width: "24px",
    height: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
});

export class SearchAndSortComponent extends React.Component {
  state = {
    searchText: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSearch = () => {
    this.props.handleSearch && this.props.handleSearch(this.state.searchText);
  };

  render() {
    const { searchText } = this.state;
    const { classes } = this.props;
    const inputProps = {
      disableUnderline: true,

      endAdornment: (
        <InputAdornment position="end">
          <div className={classes.clearSeperator} />
          <div>
            <IconButton
              id="device-search-icon"
              onClick={this.handleSearch}
              disabled={!searchText}
              className={classes.iconButton}
            >
              <SearchIcon
                style={{ color: searchText ? "#0064d2" : "#9b9b9b" }}
              />
            </IconButton>
          </div>
        </InputAdornment>
      )
    };
    return (
      <TextField
        id="searchText"
        color="secondary"
        name="searchText"
        className={classNames(classes.margin, classes.textfield)}
        value={searchText}
        onChange={this.handleChange}
        autoComplete="off"
        placeholder="Search"
        style={{ width: "25%" }}
        InputProps={inputProps}
      />
    );
  }
}

export default withStyles(styles)(SearchAndSortComponent);