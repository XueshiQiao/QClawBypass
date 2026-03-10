// qclaw_bypass.js
let mockResponse = {
   ret: 0,
   common: {
      code: 0,
      message: "success"
   },
   data: {
      already_verified: true
   },
   resp: {
      data: {
      already_verified: true
      },
      common: {
      code: 0,
      message: "success"
      }
   }
};

// Return the mocked response to the client
$done({
   status: 200,
   headers: {
      "Content-Type": "application/json"
   },
   body: JSON.stringify(mockResponse)
});
