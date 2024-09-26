# Chemical Supplies Table

This project is a web application that allows users to manage a list of chemical supplies. Users can view, sort, edit, add, delete, move rows, and save data. The table supports sorting on various columns and features an external edit panel for modifying row data.

## Features
- **Dynamic Table**: Displays a list of chemicals with properties like name, vendor, density, viscosity, packaging, and more.
- **Sorting**: Click on the column headers to sort the table in ascending or descending order.
- **Edit Functionality**: Rows can be edited by clicking on them. An edit panel will appear where users can modify the chemical details.
- **Add/Delete Rows**: Users can add new rows, delete existing rows, or move rows up and down.
- **Save and Refresh**: Users can save the current data or refresh the table view.
- **Custom Save Notification**: Displays a success message when data is saved.
  
## Technologies Used
- **HTML**: Structure of the webpage.
- **CSS**: Styling of the table and page layout.
- **JavaScript**: Logic to handle sorting, editing, and other user interactions.

## Project Structure

```
.
├── index.html       # Main HTML file
├── style.css        # CSS for the table and layout
├── script.js        # JavaScript file handling table functionality
└── README.md        # This file
```

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd chemical-supplies-table
   ```

3. **Open the `index.html` file** in your preferred browser:
   ```bash
   open index.html
   ```

   Alternatively, you can directly double-click the `index.html` file to run the application in your default browser.

## How to Use the Application

1. **View Data**: The table lists the chemicals with their properties.
2. **Sorting**: Click on any column header to sort the table based on that column. The sort order toggles between ascending and descending.
3. **Edit Row**: Click on any row to select it for editing. The row's details will appear in the edit panel where changes can be made. Click **Save** to update the row, or **Cancel** to discard changes.
4. **Add Row**: Click the "Add" button (➕) in the toolbar to add a new chemical row to the table.
5. **Delete Row**: Select a row and click the "Delete" button (🗑️) in the toolbar to remove it from the table.
6. **Move Row**: Use the "Move Up" (⬆️) and "Move Down" (⬇️) buttons to adjust the order of rows.
7. **Save Data**: After making changes, click the **Save** button (💾) to store the data. A success message will appear confirming that the data has been saved.
8. **Refresh Data**: Use the refresh button (🔄) to reload the table data to its original state.

