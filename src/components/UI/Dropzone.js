import styles from "./Dropzone.module.css";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import * as x509 from "@peculiar/x509";

const getCommonName = (subject) => {
  const indxStart = subject.indexOf("CN=");
  const indxEnd = subject.indexOf(",", indxStart);
  return subject.slice(indxStart + 3, indxEnd);
};

const Dropzone = (props) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // const base64 = reader.result.split("base64,")[1];
        const cert = new x509.X509Certificate(reader.result);
        const commonName = getCommonName(cert.subject);

        props.onAddCommonName(commonName);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pkix-cert": [".cer"],
      "application/x-x509-ca-cert": [".cer"],
    },
  });

  return (
    <div {...getRootProps({ className: styles.Dropzone })}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files.</p>
      <em>Only *.cer files will be accepted.</em>
    </div>
  );
};

export default Dropzone;
