import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
  font-family: "Poppins";
}
* {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0;
}
p {
  margin: 0;
}
img {
  display: block;
  width: 100%;
}
input {
  outline: none;
}
textarea {
  outline: none;
  resize: none;
}
button{
  cursor: pointer;
}
`;

export default GlobalStyle;



