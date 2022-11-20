// 如果不使用BoxJS配置，可以在这里修改
let config = {
  username: "hoavokhuyet", // 用户名
  token: "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", // token
};

// load user prefs from box
const boxConfig = $prefs.valueForKey("github_private_repo");
if (boxConfig) {
  config = JSON.parse(boxConfig);
}

const username = $request.url.match(
  /https:\/\/(?:raw|gist)\.githubusercontent\.com\/([^\/]+)\//
)[1];
// rewrite headers for specific user
if (username == config.username) {
  console.log(`ACCESSING PRIVATE REPO: ${$request.url}`);
  $done({ headers: {...$request.headers, Authorization: `token ${config.token}`} });
} else $done({});
