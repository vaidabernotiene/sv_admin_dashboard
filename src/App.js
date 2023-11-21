import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
        <fieldset>
            <legend>Personal info:</legend>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" required maxlength="5"/><br></br>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" readonly/><br></br>
            <label for="birthday">Birthday:</label>
            <input type="date" id="birthday" name="birthday"/><br></br>
            <label for="myfile">Select a file: </label>
            <input type="file" name="myfile"/><br></br>
            <select name="" id="" >
                <option value="">1</option>
                <option value="">2</option>
            </select>
            <button><strong>Submit</strong></button>
            <button>Reset</button>
        </fieldset>
    </form>
      </header>
    </div>
  );
}

export default App;
