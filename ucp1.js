function updateDateTime() {
    var currentDate = new Date();
    var greeting = "";
    var hours = currentDate.getHours();

    if (hours < 12) {
      greeting = "Welcome";
    } else if (hours < 18) {
      greeting = "Welcome";
    } else {
      greeting = "Welcome";
    }

    var salutationElement = document.getElementById("salutation");
    salutationElement.innerText = greeting;

    var dateTimeElement = document.getElementById("date-time");
    dateTimeElement.innerText = currentDate.toLocaleString();
  }

  setInterval(updateDateTime, 1000);