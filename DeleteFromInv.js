//jeno

var ItemID = IDHERE // change this to the ID of the item you want to delete
$.ajax({
  method: "POST",
  url: "https://www.roblox.com/asset/delete-from-inventory",
  contentType: "application/json",
  data: JSON.stringify({
      "assetId": ItemID
  })
}).then(data => console.log(data)).fail(error => alert(error.responseJSON.errors[0].message));
// Logs `{success:true}` if success or website alert if error.
