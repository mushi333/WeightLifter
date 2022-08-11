import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header">
        <h1>Header</h1>
        <p>Resize the browser window to see the responsive effect.</p>
      </div>

      <div class="topnav">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </div>

      <div class="row">
        <div class="column side">
          <h2>Side</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        </div>
        
        <div class="column middle">
          <h2>Main Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
        </div>
        
        <div class="column side">
          <h2>Side</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        </div>
      </div>

      <div class="footer">
        <p>Footer</p>
      </div>
    </div>
  );
}

export default App;
