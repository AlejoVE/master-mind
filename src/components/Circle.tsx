
type ButtonProps = {
  size: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,

};

function Circle(props: ButtonProps) {
  return (
    <button
      className="button"
      onClick={props.onClick}
      data-color={props.color}
      style={{
        backgroundColor: `${props.color || "#53483F"}`,
        width: `${props.size}rem`,
        minWidth: `${props.size}rem`,
        height: `${props.size}rem`,
        minHeight: `${props.size}rem`
      }}
    ></button>
  );
}

export default Circle;
