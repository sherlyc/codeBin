// Imports the Google Cloud client library
const { Storage } = require('@google-cloud/storage');
const fs = require('fs');

// Creates a client
const storage = new Storage({
  projectId: 'notional-portal-245304'
});

const bucketName = 'just-testing-1199';

//This reads the folder where the images are stored
fs.readdir('./vrt/__image_snapshots__/', (err, files) => {
  if (err) {
    console.error('Could not read the directory.', err);
    process.exit(1);
  }

  const path = './vrt/__image_snapshots__/';

  // storage.bucket(bucketName).upload(filename);
  files.forEach(async (file, index) => {
    console.log('logging file', file);

    // Upload a local file to a new file to be created in the bucket
    await storage
      .bucket(bucketName)
      .upload(
        path + file,
        { destination: '__image_snapshots__/' + file },
        (err, file) => {
          if (err) {
            console.log('erroring', err);
            return console.error(err);
          }
          console.log(`${file} has been uploaded`);
        }
      );
  });
});
