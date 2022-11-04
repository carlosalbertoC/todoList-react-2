function Task({InputValue}) {
  return (
    <div className="card my-4">
      <div className="card-body">
        <h5 className="card-title">{InputValue.value}</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <button href="#" className="btn btn-primary">
          Button
        </button>
      </div>
    </div>
  );
}

export default Task;
