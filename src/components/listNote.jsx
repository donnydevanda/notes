import ItemNote from "./itemNote";
import Card from "./reusable/card";

function ListNote(props) {
  let activeDatas = props.data.filter((data) => data.archived === false);
  let inactiveDatas = props.data.filter((data) => data.archived === true);

  return (
    <div className="row">
      <div className="col">
        <Card class="px-3 py-3 mt-3">
          <h2 className="h5">Active Notes</h2>
          {inactiveDatas.length !== 0 ? (
            inactiveDatas.map((data) => (
              <ItemNote
                id={data.id}
                title={data.title}
                body={data.body}
                createdAt={data.createdAt}
                key={data.id}
                onDelete={props.onDelete}
              />
            ))
          ) : (
            <p>Notes Not Found</p>
          )}
        </Card>
      </div>
      <div className="col">
        <Card class="px-3 py-3 mt-3">
          <h2 className="h5">Inactive Notes</h2>
          {activeDatas.length !== 0 ? (
            activeDatas.map((data) => (
              <ItemNote
                id={data.id}
                title={data.title}
                body={data.body}
                createdAt={data.createdAt}
                key={data.id}
                onDelete={props.onDelete}
              />
            ))
          ) : (
            <p>Notes Not Found</p>
          )}
        </Card>
      </div>
    </div>
  );
}

export default ListNote;
