import React from 'react';
import './App.css';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
function App() {
  const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 14);
  const startDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
  const enddate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 20);
  return (
    <div>
      <DatePickerComponent placeholder="Enter Date"
      value={dateValue}
      min={startDate}
      max={enddate}
      format="dd-MMM-yy"
      // Uncomment below properties to show month picker. Note that, range restiction (min and max properties) should be removed for this case. 
      // start="Year"
      // depth="Year"
      ></DatePickerComponent>
    </div>
  );
}

export default App;
