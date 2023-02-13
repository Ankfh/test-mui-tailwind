import { styled } from '@mui/system';
import Button from '@mui/material/Button';


export const MyComponent = styled(Button)({
    color: 'darkslategray',
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
    "&:hover": {
        backgroundColor: "#31A246",
        boxShadow: "none",
      },
      "&:focus": {
        backgroundColor: "#266E20",
        boxShadow: "none",
      },
  });