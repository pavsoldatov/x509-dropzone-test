import styles from "./Dropzone.module.css";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import * as x509 from "@peculiar/x509";

const Dropzone = (props) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // const base64 = reader.result.split("base64,")[1];
        const cert = new x509.X509Certificate(reader.result);
        props.onAddCerts(cert);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  console.log(acceptedFiles);
  return (
    <div {...getRootProps({ className: styles.Dropzone })}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
};

export default Dropzone;
