This is a simple form where a user can upload one or more x509 certificates (\*.cer), display them as a list and view some of their contents. A user can view the issuer's common name, subject's common name, valid from and valid until dates. There's some basic validation to exclude files without .cer extention, e.g. if a mix of .cer, .txt, .exe files is being dropped, the dropbox will not interrupt the upload of .cer files. Uploaded certificates are saved to local storage.

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the localhost

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).