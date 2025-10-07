'use strict';

const tableBody = document.querySelector('tbody');
const sortedRows = Array.from(tableBody.querySelectorAll('tr'));
const headerCells = document.querySelectorAll('thead th');

headerCells.forEach((headerCell, index) => {
  headerCell.addEventListener('click', () => {
    sortedRows.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      if (index === 0 || index === 1) {
        return cellA.localeCompare(cellB);
      } else if (index === 2) {
        const numA = parseFloat(cellA);
        const numB = parseFloat(cellB);

        return numA - numB;
      } else if (index === 3) {
        const cleanA = cellA.replace(/[^0-9.]/g, '');
        const cleanB = cellB.replace(/[^0-9.]/g, '');

        const numA = parseFloat(cleanA);
        const numB = parseFloat(cleanB);

        return numA - numB;
      }

      return 0;
    });

    sortedRows.forEach((row) => {
      tableBody.appendChild(row);
    });
  });
});
