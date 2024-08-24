document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".offer-heading");
  const tabContents = document.querySelectorAll(".offer-content");
  const radioLabels = document.querySelectorAll('.offer-header input[type="radio"]');

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const parent = this.parentNode;
      
      //getting the node by catching the child node
      const child = parent.childNodes[3].childNodes[1].childNodes[1];
      // Close other tabs if one is opened
      document
        .querySelectorAll(".offer")
        .forEach((tab) => tab.classList.remove("active"));

      // Open the clicked tab
      parent.classList.add("active");
      child.checked =true;
      console.log(child)
    });
  });

  tabContents.forEach((tabContent) => {
    tabContent.classList.add("hide");
  });
});
