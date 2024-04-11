export default function ThreeTables() {
      return (
        <div>
          <h1>Three Tables Example</h1>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Table 1 Header 1</th>
                  <th>Table 1 Header 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                </tr>
                <tr>
                  <td>Data 3</td>
                  <td>Data 4</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Table 2 Header 1</th>
                  <th>Table 2 Header 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data 5</td>
                  <td>Data 6</td>
                </tr>
                <tr>
                  <td>Data 7</td>
                  <td>Data 8</td>
                </tr>
                {/* Add more rows if needed */}
              </tbody>
            </table>
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Table 3 Header 1</th>
                  <th>Table 3 Header 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data 9</td>
                  <td>Data 10</td>
                </tr>
                <tr>
                  <td>Data 11</td>
                  <td>Data 12</td>
                </tr>
                {/* Add more rows if needed */}
              </tbody>
            </table>
          </div>
        </div>
      );
  }