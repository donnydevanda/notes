import Card from "./reusable/card";

function SearchNote() {
  return (
    <Card class="px-3 py-3 mt-3">
      <h2 className="h5">Search Notes</h2>
      <div className="row-12 mt-1">
        <label className="form-label">Title:</label>
        <input type="text" className="form-control" />
      </div>
      <div className="row-6 mt-2">
        <button className="btn btn-primary mt-2">Search</button>
      </div>
    </Card>
  );
}

export default SearchNote;
