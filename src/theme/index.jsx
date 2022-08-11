import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#f05545",
      main: "#b71c1c",
      dark: "#7f0000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#eceff1",
      main: "#263238",
      dark: "#000a12",
      contrastText: "#fff",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "back" },
          style: {
            backgroundColor: "#263238",
            color: "#fff",
            textTransform: "capitalize",
            ":hover": {
              backgroundColor: "#000a12",
            },
          },
        },
      ],
    },
  },
});
