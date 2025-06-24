document.querySelectorAll("form.contact-form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const existingAlert = form.querySelector(".alert");
    if (existingAlert) existingAlert.remove();

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const alertDiv = document.createElement("div");
        alertDiv.classList.add("alert", "mt-3", "fade", "show");

        if (data.success) {
          alertDiv.classList.add("alert-success");
          alertDiv.textContent = data.success;
          form.reset();
          if (typeof grecaptcha !== "undefined") grecaptcha.reset();
        } else if (data.error) {
          alertDiv.classList.add("alert-danger");
          alertDiv.textContent = data.error;
        } else {
          alertDiv.classList.add("alert-warning");
          alertDiv.textContent = "Unexpected response from the server.";
        }

        form.appendChild(alertDiv);

        setTimeout(() => {
          alertDiv.classList.remove("show");
          setTimeout(() => alertDiv.remove(), 150);
        }, 6000);
      })
      .catch(() => {
        const alertDiv = document.createElement("div");
        alertDiv.classList.add("alert", "alert-danger", "mt-3", "fade", "show");
        alertDiv.textContent =
          "There was an error submitting the form. Please try again.";
        form.appendChild(alertDiv);

        setTimeout(() => {
          alertDiv.classList.remove("show");
          setTimeout(() => alertDiv.remove(), 150);
        }, 6000);
      });
  });
});
