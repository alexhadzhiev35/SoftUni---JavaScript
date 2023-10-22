function notify(message) {
  const msgContent = message;
  const notificationRef = document.getElementById("notification");
  notificationRef.textContent = msgContent;
  notificationRef.style.display = "block";

  notificationRef.addEventListener("click", hideNotification);

  function hideNotification() {
    notificationRef.style.display = "none";
  }
}
