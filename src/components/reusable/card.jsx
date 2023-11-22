function Card(props) {
  return (
    <div className={"card shadow-sm" + props.class}>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
