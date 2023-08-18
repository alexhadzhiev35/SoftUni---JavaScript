function echo(data) {
  if (typeof data === "string" || tupeof(data) === "number") {
    console.log(typeof data);
    console.log(data);
  } else {
    console.log("object");
    console.log("Parameter is not suitable for printing");
  }
}
echo("alex");
