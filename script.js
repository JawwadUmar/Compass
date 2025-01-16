function startCompass() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", (event) => {
        let heading;
  
        // Use webkitCompassHeading if available (True North)
        if (event.webkitCompassHeading !== undefined) {
          heading = event.webkitCompassHeading; // True North
        } else if (event.alpha !== null) {
          heading = event.alpha; // Fallback to Magnetic North
        } else {
          document.getElementById("heading").textContent = "Unable to detect heading.";
          return;
        }
  
        // Normalize the heading (0–360)
        heading = (heading + 360) % 360;
  
        // Determine cardinal direction based on heading
        let direction = "";
        if (heading >= 337.5 || heading < 22.5) {
          direction = "North";
        } else if (heading >= 22.5 && heading < 67.5) {
          direction = "Northeast";
        } else if (heading >= 67.5 && heading < 112.5) {
          direction = "East";
        } else if (heading >= 112.5 && heading < 157.5) {
          direction = "Southeast";
        } else if (heading >= 157.5 && heading < 202.5) {
          direction = "South";
        } else if (heading >= 202.5 && heading < 247.5) {
          direction = "Southwest";
        } else if (heading >= 247.5 && heading < 292.5) {
          direction = "West";
        } else if (heading >= 292.5 && heading < 337.5) {
          direction = "Northwest";
        }
  
        // Update the UI with heading and direction
        document.getElementById("heading").textContent = `${heading.toFixed(2)}°`;
        document.getElementById("direction").textContent = direction;
      });
    } else {
      alert("Device Orientation is not supported on this device.");
    }
  }
  