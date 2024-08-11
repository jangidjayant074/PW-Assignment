const urlRegex = /^(http:\/\/|https:\/\/)[A-Za-z0-9.-]+[A-Za-z]+$/;

function isValidURL(input) {
  if (urlRegex.test(input)) {
    console.log("Valid URL");
  } else {
    console.log("Invalid URL");
  }
}

// Test cases
isValidURL("http://example.com");    
isValidURL("https://www.example.com"); 
isValidURL("ftp://invalid.com");       
isValidURL("http://invalid");         

