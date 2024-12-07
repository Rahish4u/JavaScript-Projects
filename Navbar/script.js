document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector("nav button");
    const closeBtn = document.querySelector(".close-btn");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.createElement("div");
  
    // Add overlay to the body
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
  
    // Function to open sidebar
    function openSidebar() {
      sidebar.classList.add("open");
      overlay.classList.add("active");
    }
  
    // Function to close sidebar
    function closeSidebar() {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
    }
  
    // Event listeners for opening and closing sidebar
    toggleBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);
  });
  