import { BiFontSize } from "react-icons/bi";
import { Colors } from "./Colors";

export const Styles = {
    screen: {
      padding: "2rem 1rem 2rem 1rem"
    },
    primaryButton: {
      backgroundColor: Colors.primaryBG,
      color: Colors.primaryFG,
    },
    secondaryButton: {
      backgroundColor: Colors.secondaryBG,
      color: Colors.secondaryFG
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem 0 1rem 0'
    },
    input: {
      height: '2rem',
      borderRadius: 10,
      fontSize: '14px'
    },
    button: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '3rem',
      borderRadius: 10,
      fontSize: '16px',
      fontWeight: '600',
      gap: '1rem'
    }
};

export const Themes = {
  primaryBG: {

  }
}
  