
const Button = ({ onClick = null, children = null, estilos=null }) => (
  <><button className={ estilos } onClick={onClick} >
    {children}
  </button>
  </>


);

export default Button;
