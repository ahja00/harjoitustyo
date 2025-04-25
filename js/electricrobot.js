document.addEventListener("DOMContentLoaded", function () {
    fetch("../status.json")
      .then(response => response.json())
      .then(data => {
        const menuBox = document.querySelector(".menu-box ul");
        const item = document.createElement("li");
        item.textContent = data.message;
  
        if (data.status === "cheap") {
          item.style.color = "green";
        } else if (data.status === "expensive") {
          item.style.color = "red";
        } else {
          item.style.color = "gray";
        }
  
        menuBox.appendChild(item);
      })
      .catch(error => {
        const menuBox = document.querySelector(".menu-box ul");
        const item = document.createElement("li");
        item.textContent = "Error loading electrical data.(start live server?)";
        item.style.color = "gray";
        menuBox.appendChild(item);
      });
  });