import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: "#FFF",
    height: "auto"
  },
  header: {

  },
  videoHero: {
    marginBottom: 40
  },
  videoList: {
    background: "#FFF",
    paddingTop: 30,
    width: "100%"
  },
  videoEntry: {
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: "flex-start",
    width: "100%",
    padding: "20px 15px",
    paddingLeft: 0,
    borderBottom: "2px solid #DDDDDD",
    background: "#FFF",
    cursor: "pointer",
    "&:hover": {
      background: "#FAFAFA",
      "& $thumbnail": {
        opacity: 0.8
      }
    },
   
  },
  videoEntryActive: {
    background: "#FAFAFA"
  },
  thumbnail: {
    width: 320,
    height: 180,
    borderRadius: 4,
    objectFit: "cover",
    marginRight: 15,
    background: "#000",
    boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.1)",
  },
  metadata: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: '100%'
  },
  channel: {
    margin: 0,
    marginBottom: 10
  },
  videoTitle: {
    margin: 0,
    marginBottom: 10,
  },
  description: {
    margin: 0,
    marginBottom: 10,
    fontWeight: 500
  }
}));