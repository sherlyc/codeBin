let json = '{"age" : 30}';

try {
  let user = JSON.parse(json)
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  console.log(user.name);

} catch (e) {
  console.log("JSON error: " + e.name) // JSON error: SyntaxError
  console.log("JSON error: " + e.message) // JSON error: Incomplete data: no name
  console.log("JSON error: " + e) //JSON error: SyntaxError: Incomplete data: no name
}
