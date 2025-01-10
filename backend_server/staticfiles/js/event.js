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