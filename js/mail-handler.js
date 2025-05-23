document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const existingMessage = document.getElementById("formMessage");
  if (existingMessage) existingMessage.remove();

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      const message = document.createElement("div");
      message.id = "formMessage";
      message.style.marginTop = "1rem";

      if (data.success) {
        message.style.color = "green";
        message.textContent = data.success;
        form.reset();
        grecaptcha.reset();
      } else if (data.error) {
        message.style.color = "red";
        message.textContent = data.error;
      } else {
        message.style.color = "orange";
        message.textContent = "Unexpected response from server.";
      }

      form.appendChild(message);
    })
    .catch((err) => {
      const message = document.createElement("div");
      message.id = "formMessage";
      message.style.color = "red";
      message.style.marginTop = "1rem";
      message.textContent =
        "There was an error submitting the form. Please try again.";
      form.appendChild(message);
    });
});
