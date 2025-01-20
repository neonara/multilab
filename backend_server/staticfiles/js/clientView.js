function searchAnalyse() {
    var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementsByClassName("table")[0];
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td1 = tr[i].getElementsByTagName("td")[0]; // Get the first column (title))
        td2 = tr[i].getElementsByTagName("td")[1]; // Get the second column (created_at)
        if (td1 && td2) {
            txtValue1 = td1.textContent || td1.innerText;
            txtValue2 = td2.textContent || td2.innerText;
            if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
  }
  
  function resetSearch() {
    var input = document.getElementById("searchInput");
    input.value = "";
    var rows = document.querySelectorAll('.table tbody tr');
    rows.forEach(function(row) {
        row.style.display = 'table-row';
    });
}
function changeEntriesPerPage(select) {
  var table = document.querySelector('.table');
  var rows = table.querySelectorAll('tbody tr');

  // Hide all rows
  rows.forEach(function(row) {
      row.style.display = 'none';
  });

  // Show only selected number of rows
  var selectedValue = parseInt(select.value);
  for (var i = 0; i < selectedValue; i++) {
      if (rows[i]) {
          rows[i].style.display = 'table-row';
      }
  }
}
document.getElementById('tableViewBtn').addEventListener('click', function() {
document.getElementById('tableView').style.display = 'block';
document.getElementById('kanbanView').style.display = 'none';
this.classList.add('active');
document.getElementById('kanbanViewBtn').classList.remove('active');
});

document.getElementById('kanbanViewBtn').addEventListener('click', function() {
document.getElementById('tableView').style.display = 'none';
document.getElementById('kanbanView').style.display = 'block';
this.classList.add('active');
document.getElementById('tableViewBtn').classList.remove('active');
});
// Pagination functionality
let currentPage = 1;
const rowsPerPage = 5; // Default value, will be updated by entries dropdown
let totalPages = 1;

function updatePagination() {
const table = document.querySelector('.table');
const rows = table.querySelectorAll('tbody tr');

// Calculate total pages
totalPages = Math.ceil(rows.length / rowsPerPage);

// Update current page if it exceeds total pages
if (currentPage > totalPages) {
  currentPage = totalPages;
}

// Hide all rows
rows.forEach(row => row.style.display = 'none');

// Show rows for current page
const start = (currentPage - 1) * rowsPerPage;
const end = start + rowsPerPage;

for (let i = start; i < end && i < rows.length; i++) {
  rows[i].style.display = '';
}

// Update page number display
document.getElementById('currentPage').textContent = currentPage;

// Update prev/next button states
document.getElementById('prevPage').parentElement.classList.toggle('disabled', currentPage === 1);
document.getElementById('nextPage').parentElement.classList.toggle('disabled', currentPage === totalPages);
}

// Update changeEntriesPerPage function
function changeEntriesPerPage(select) {
rowsPerPage = parseInt(select.value);
currentPage = 1;
updatePagination();
}

// Event listeners for pagination buttons
document.getElementById('prevPage').addEventListener('click', function(e) {
e.preventDefault();
if (currentPage > 1) {
  currentPage--;
  updatePagination();
}
});

document.getElementById('nextPage').addEventListener('click', function(e) {
e.preventDefault();
if (currentPage < totalPages) {
  currentPage++;
  updatePagination();
}
});

// Initial pagination setup
document.addEventListener('DOMContentLoaded', function() {
updatePagination();
});

// Update search function to reset pagination
function searchAnalyse() {
var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
input = document.getElementById("searchInput");
filter = input.value.toUpperCase();
table = document.getElementsByClassName("table")[0];
tr = table.getElementsByTagName("tr");

for (i = 0; i < tr.length; i++) {
  td1 = tr[i].getElementsByTagName("td")[1]; // Title column
  td2 = tr[i].getElementsByTagName("td")[3]; // Date column
  if (td1 && td2) {
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
          tr[i].classList.remove('filtered-out');
      } else {
          tr[i].classList.add('filtered-out');
      }
  }
}

currentPage = 1;
updatePagination();
}

// Update reset function
function resetSearch() {
document.getElementById("searchInput").value = "";
const rows = document.querySelectorAll('.table tbody tr');
rows.forEach(row => row.classList.remove('filtered-out'));
currentPage = 1;
updatePagination();
}
// Enhanced Sidebar Toggle Functionality
document.getElementById('sidebarToggle').addEventListener('click', function() {
document.getElementById('sidebar').classList.toggle('active');
});