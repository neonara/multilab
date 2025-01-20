function searchStage() {
    var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementsByClassName("table")[0];
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td1 = tr[i].getElementsByTagName("td")[1]; // Get the first column (title)
        td2 = tr[i].getElementsByTagName("td")[2];
        td3 = tr[i].getElementsByTagName("td")[3]; // Get the first column (Nom et Prénom)
        td4 = tr[i].getElementsByTagName("td")[4]; // Get the second column (created_at)
        if (td1 && td2 && td3 &&td4)  {
            txtValue1 = td1.textContent || td1.innerText;
            txtValue2 = td2.textContent || td2.innerText;
            txtValue3 = td3.textContent || td3.innerText;
            txtValue4 = td4.textContent || td4.innerText;
            if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1|| txtValue4.toUpperCase().indexOf(filter) > -1) {
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

function initializeSelect2() {
$('#id_client').select2({
    placeholder: 'Search for a client...',
    allowClear: true // optional, adds a clear button
});
}

// Call the function when the document is ready
$(document).ready(function() {
initializeSelect2();
});

// File input change event
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
const fileInput = document.getElementById('id_image');
const imagePreview = document.getElementById('imagePreview');

fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            imagePreview.src = event.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});
});

function previewImage(input) {
const imagePreview = document.getElementById('imagePreview');

if (input.files && input.files[0]) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
    };
    
    reader.readAsDataURL(input.files[0]);
} else {
    imagePreview.src = '';
    imagePreview.style.display = 'none';
}
}
function previewImage2(input, previewId) {
const preview = document.getElementById(previewId);

if (input.files && input.files[0]) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
    };
    
    reader.readAsDataURL(input.files[0]);
} else {
    preview.src = '';
    preview.style.display = 'none';
}
}

document.addEventListener('DOMContentLoaded', function() {
// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];

// Add click event to event images
document.querySelectorAll('.transfer-logo img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Close modal when clicking X
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});
});

// Global variables for pagination
let currentPage = 1;
let rowsPerPage = 5; // Default value
let totalPages = 1;

// Main pagination update function
function updatePagination() {
    const table = document.querySelector('.table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr:not(.filtered-out)'));
    
    // Calculate total pages
    totalPages = Math.ceil(rows.length / rowsPerPage);
    
    // Adjust current page if it exceeds total pages
    if (currentPage > totalPages) {
        currentPage = totalPages || 1;
    }
    
    // Hide all rows first
    rows.forEach(row => row.style.display = 'none');
    
    // Calculate which rows to show
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, rows.length);
    
    // Show rows for current page
    for (let i = startIndex; i < endIndex; i++) {
        rows[i].style.display = 'table-row';
    }
    
    // Update pagination UI
    updatePaginationUI();
}

// Update pagination UI elements
function updatePaginationUI() {
    // Update current page display
    const currentPageElement = document.getElementById('currentPage');
    if (currentPageElement) {
        currentPageElement.textContent = currentPage;
    }
    
    // Update prev/next buttons state
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    
    if (prevButton) {
        prevButton.parentElement.classList.toggle('disabled', currentPage === 1);
    }
    if (nextButton) {
        nextButton.parentElement.classList.toggle('disabled', currentPage === totalPages);
    }
}

// Modified entries per page change handler
function changeEntriesPerPage(select) {
    rowsPerPage = parseInt(select.value);
    currentPage = 1; // Reset to first page
    updatePagination();
}

// Event listeners for pagination controls
document.addEventListener('DOMContentLoaded', function() {
    // Initialize pagination
    updatePagination();
    
    // Add event listeners for pagination buttons
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    
    if (prevButton) {
        prevButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
            }
        });
    }
});

// Modified search function to work with pagination
function searchStage() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const tbody = document.querySelector('.table tbody');
    const rows = tbody.getElementsByTagName('tr');
    
    for (let row of rows) {
        const cells = row.getElementsByTagName('td');
        let found = false;
        
        for (let cell of cells) {
            const text = cell.textContent || cell.innerText;
            if (text.toUpperCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }
        
        if (found) {
            row.classList.remove('filtered-out');
        } else {
            row.classList.add('filtered-out');
        }
    }
    
    // Reset to first page and update pagination
    currentPage = 1;
    updatePagination();
}

// Modified reset function
function resetSearch() {
    const input = document.getElementById('searchInput');
    input.value = '';
    
    const rows = document.querySelectorAll('.table tbody tr');
    rows.forEach(row => row.classList.remove('filtered-out'));
    
    currentPage = 1;
    updatePagination();
}