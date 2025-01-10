 
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

// Pagination functionality
let currentPage = 1;
let rowsPerPage = 5; // Default value
let totalPages = 1;

// Update pagination logic
function updatePagination() {
    const table = document.querySelector('.table');
    const kanbanView = document.getElementById('kanbanView');
    const rows = Array.from(table.querySelectorAll('tbody tr')).filter(row => !row.classList.contains('filtered-out'));
    const cards = Array.from(kanbanView.querySelectorAll('.card')).filter(card => !card.classList.contains('filtered-out'));

    const isTableVisible = table.style.display !== 'none';
    const items = isTableVisible ? rows : cards;

    // Calculate total pages
    totalPages = Math.ceil(items.length / rowsPerPage);

    // Update current page if it exceeds total pages
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    // Hide all items
    items.forEach(item => item.style.display = 'none');

    // Show items for current page
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    for (let i = start; i < end && i < items.length; i++) {
        items[i].style.display = isTableVisible ? 'table-row' : 'block';
    }

    // Update page number display
    document.getElementById('currentPage').textContent = currentPage;

    // Update prev/next button states
    document.getElementById('prevPage').parentElement.classList.toggle('disabled', currentPage === 1);
    document.getElementById('nextPage').parentElement.classList.toggle('disabled', currentPage === totalPages);
}

// Update changeEntriesPerPage function
function changeEntriesPerPage(select) {
    rowsPerPage = parseInt(select.value); // Update rowsPerPage dynamically
    currentPage = 1; // Reset to the first page
    updatePagination(); // Refresh pagination
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
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const table = document.querySelector(".table");
    const kanbanView = document.getElementById("kanbanView");
    const rows = table.querySelectorAll("tbody tr");
    const cards = kanbanView.querySelectorAll(".card");

    rows.forEach(row => {
        const td1 = row.querySelectorAll("td")[1]; // Title column
        const td2 = row.querySelectorAll("td")[3]; // Date column
        const txtValue1 = td1?.textContent || "";
        const txtValue2 = td2?.textContent || "";

        if (txtValue1.toUpperCase().includes(filter) || txtValue2.toUpperCase().includes(filter)) {
            row.classList.remove('filtered-out');
        } else {
            row.classList.add('filtered-out');
        }
    });

    cards.forEach(card => {
        const title = card.querySelector('.card-title')?.textContent || "";
        const date = card.querySelector('.text-muted.small')?.textContent || "";

        if (title.toUpperCase().includes(filter) || date.toUpperCase().includes(filter)) {
            card.classList.remove('filtered-out');
        } else {
            card.classList.add('filtered-out');
        }
    });

    currentPage = 1; // Reset to the first page
    updatePagination();
}


// Reset search function
function resetSearch() {
    document.getElementById("searchInput").value = "";
    const rows = document.querySelectorAll('.table tbody tr');
    const cards = document.querySelectorAll('#kanbanView .card');
    
    rows.forEach(row => row.classList.remove('filtered-out'));
    cards.forEach(card => card.classList.remove('filtered-out'));
    
    currentPage = 1; // Reset to the first page
    updatePagination();
}

// 
document.addEventListener('DOMContentLoaded', function() {
    const tableView = document.getElementById('tableView');
    const kanbanView = document.getElementById('kanbanView');
    const tableViewBtn = document.getElementById('tableViewBtn');
    const kanbanViewBtn = document.getElementById('kanbanViewBtn');
  
    tableViewBtn.addEventListener('click', function() {
      tableView.style.display = 'block';
      kanbanView.style.display = 'none';
      tableViewBtn.classList.add('active');
      kanbanViewBtn.classList.remove('active');
    });
  
    kanbanViewBtn.addEventListener('click', function() {
      tableView.style.display = 'none';
      kanbanView.style.display = 'block';
      kanbanViewBtn.classList.add('active');
      tableViewBtn.classList.remove('active');
    });
  });
//   imlage
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