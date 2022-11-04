var Posts = () => {
  return (
    <div className="content">
      <h2>Posts</h2>
      <p>welcome to posts page!</p>
      <div className="posts">
        {/* card */}
        <div className="card">
          <div className="card_img">
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80" alt="image" />
            <span>3 minute ago</span>
          </div>
          <h3>card title</h3>
          <p>description</p>
          <a href="#">go..</a>
        </div>
        {/* end card */}
        {/* card */}
        <div className="card">
          <div className="card_img">
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80" alt="image" />
            <span>3 minute ago</span>
          </div>
          <h3>card title</h3>
          <p>description</p>
          <a href="#">go..</a>
        </div>
        {/* end card */}
      </div>
    </div>
  );
};

export default Posts;
