
console.log("here we go");
(function() {
navigator.usb.requestDevice({ filters: [{ vendorId: 0x5117}] })
.then(device => {
  console.log(device.productName);      // "Arduino Micro"
  console.log(device.manufacturerName); // "Arduino LLC"
})
.catch(error => { console.log(error); });
})();