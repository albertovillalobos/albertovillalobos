// This is just a shortcut so that I can run `forever production.js`
const { exec } = require('child_process');
exec('serve -p 9080 -s build', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
