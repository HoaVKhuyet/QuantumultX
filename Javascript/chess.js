let obj = JSON.parse($response.body);
let time = new Date();
obj.data.is_premium = 1;
obj.data.type = "diamond";
obj.data.sku = "diamond_yearly_032022";
obj.data.is_apple_subscriber = true;
obj.data.date.start = Math.floor(time / 1000);
time.setFullYear(time.getFullYear() + 1);
obj.data.date.expires = Math.floor(time / 1000);
$done({body: JSON.stringify(obj)});
