### Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the localhost
4. Dummy certificates can be found at `src\test_certs` for testing purposes.

### About

#### Idea:
A simple form where a user can upload one or more x509 certificates (`*.cer`), display them as a list and view some of their contents. The list of certificates appears on the left side as a list of clickable options. When clicked, a certificate will display the issuer's common name (CN), subject's common name, valid from and valid until dates on the right side of the form.

The button below the list will conditionally toggle between the content output and dropbox components. However, the toggle will also fire when one of the certiciates is clicked.

#### Technicalities:
Files are uploaded via the File Reader API. Because File Reader uploads files one by one, the array of the data parsed from these files is constructed with the use of `useCallback()` and `Promises` exactly after the files are being dropped.

If one or more certificate from the existing list contains the same serial number as the newly uploaded certificate(s), the new and old certificates will merge into a single list without duplicates with the help of `new Set()`.

There's some basic validation to exclude files without `.cer` extention, e.g. if a mix of `.cer`, `.txt`, `.exe` files is being dropped, the dropbox will not interrupt the upload of `.cer` files. Uploaded certificates are saved to local storage, and the list is rendered from local storage on reload.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).