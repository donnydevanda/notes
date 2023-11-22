function format(inputDate) {
  var date = new Date(inputDate);
  if (!isNaN(date.getTime())) {
    return (
      date.getDate() + 1 + " - " + date.getMonth() + " - " + date.getFullYear()
    );
  }
}

function ItemNote(props) {
  return (
    <div className="card shadow-sm my-2 note-item">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-3 text-body-secondary">
          {format(props.createdAt)}
        </h6>
        <p>{props.body}</p>
        <button className="btn btn-sm btn-warning mt-2">Move</button>
        <button
          onClick={() => props.onDelete(props.id)}
          className="btn btn-sm btn-danger mt-2 mx-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemNote;
