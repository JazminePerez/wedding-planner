function planSeating() {
  var guests = parseInt(prompt("Enter the number of guests:"));
  var tables = parseInt(prompt("Enter the number of tables:"));

  if (isNaN(guests) || isNaN(tables) || guests <= 0 || tables <= 0) {
    alert("Please enter valid positive numbers for guests and tables.");
    return;
  }

  var baseGuestsPerTable = Math.floor(guests / tables);
  var tablesWithExtraGuest = guests % tables;
  var tablesWithBaseGuests = tables - tablesWithExtraGuest;

  var result = `Your ${guests} guests will be seated as follows:\n `;

  if (tablesWithExtraGuest > 0) {
    result += `${tablesWithExtraGuest} table${tablesWithExtraGuest > 1 ? 's' : ''} of ${baseGuestsPerTable + 1}, `;
  }

  result += `${tablesWithBaseGuests} table${tablesWithBaseGuests > 1 ? 's' : ''} of ${baseGuestsPerTable}.`;

  alert(result);
}
