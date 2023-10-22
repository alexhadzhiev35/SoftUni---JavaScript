function validator(data) {
  const methodEnum = ["GET", "POST", "DELETE", "CONNECT"];
  const uriRegExp = /^[a-z.0-9]+$/gm;
  const messageRegExp = /^[a-z- :\/.%*0-9+]*$/gm;

  const reqTemp = { method: "", uri: "", version: "", message: "" };

  function toUpper(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  for (let [key, value] of Object.entries(reqTemp)) {
    if (!data.hasOwnProperty(key)) {
      throw new Error(
        `Invalid request header: Invalid ${
          key === "uri" ? "URI" : toUpper(key)
        }`
      );
    }
  }

  if (!methodEnum.includes(data.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (!data.uri.match(uriRegExp) && data.uri !== "*") {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (!data.message.match(messageRegExp)) {
    throw new Error("Invalid request header: Invalid Message");
  }

  if (data.version) {
    let [, ver] = data.version.split("/");

    if (ver !== "0.9" && ver !== "1.0" && ver !== "1.1" && ver !== "2.0") {
      throw new Error("Invalid request header: Invalid Version");
    }
  }

  return data;
}

validator({
  method: "POST",
  uri: "*",
  version: "HTTP/1.0",
  message: "rm -rf /*",
});
