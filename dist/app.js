const generateBtn = document.getElementById("btn");
const defaultBtn = document.getElementById("simplebtn");
const body = document.body;
const colorGrad = document.getElementById("colorgrad"); // Assuming you have an element to show color codes
const copyBtn = document.getElementById("copybtn"); // A new button to copy the gradient

// Store the default gradient (capturing the entire backgroundImage)
const defaultGradient = getComputedStyle(body).backgroundImage; // Capture the default backgroundImage

// Function to generate a random hex color
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Function to generate a random linear gradient
function generateLinearGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return `linear-gradient(to left, ${color1}, ${color2})`;
}
function generateLinearGradient2() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return `linear-gradient(to right, ${color1}, ${color2})`;
}

// Function to generate a random radial gradient
function generateRadialGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return `radial-gradient(farthest-corner, ${color1}, ${color2})`;
}
function generateRadialGradientellipse() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return `radial-gradient(ellipse, ${color1}, ${color2})`;
}
function generateRadialGradientcirle() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return `radial-gradient(circle, ${color1}, ${color2})`;
}
function generateRadialGradientfarthestside() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return `radial-gradient(farthest-side, ${color1}, ${color2})`;
}
function generateRadialGradientclosestside() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return `radial-gradient(closest-side, ${color1}, ${color2})`;
}


// Function to randomly select one of the gradients
function generateRandomGradient() {
  const gradients = [
    generateLinearGradient(),
    generateLinearGradient(),
    generateRadialGradient(),
    generateRadialGradientcirle(),
    // generateRadialGradientellipse(),
    // generateRadialGradientfarthestside(),
    // generateRadialGradientclosestside(),
    generateLinearGradient2(),
    generateLinearGradient2(),
  ];

  // Randomly select one gradient type
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  // Apply the random gradient to the background
  body.style.backgroundImage = randomGradient;

  // Show the generated gradient code
  colorGrad.textContent = randomGradient;
  colorGrad.dataset.gradient = randomGradient; // Store the gradient in a data attribute for easy access
}

// Function to set a random gradient and show its color codes
function setRandomGradientOld() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const gradient = `linear-gradient(to left, ${color1}, ${color2})`;
  body.style.backgroundImage = gradient;
  showColor(color1, color2); // Show the color codes of the generated gradient
  colorGrad.dataset.gradient = gradient; // Store the gradient in a data attribute for easy access
}

// Function to revert to the default gradient (the gradient you want)
function setDefaultGradient() {
  body.style.backgroundImage = defaultGradient;  // Set the default gradient back
  colorGrad.textContent = `Default Gradient: ${defaultGradient}`;  // Show the default gradient code
  colorGrad.dataset.gradient = defaultGradient; // Store the default gradient in a data attribute
}

// Function to copy the gradient to the clipboard
function copyGradient() {
  const gradientToCopy = colorGrad.dataset.gradient; // Get the gradient stored in the data attribute
  if (gradientToCopy) {
    navigator.clipboard.writeText(gradientToCopy) // Copy it to clipboard
      .then(() => {
        alert("Gradient copied to clipboard!"); // Notify user
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  }
}

// Event listeners
generateBtn.addEventListener("click", generateRandomGradient); // Replace setRandomGradient with generateRandomGradient
defaultBtn.addEventListener("click", setDefaultGradient);
copyBtn.addEventListener("click", copyGradient); // Add event listener for the copy button
