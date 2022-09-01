import ASN1 from "@lapo/asn1js";
import Base64 from "@lapo/asn1js/base64";

import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import { useCallback } from "react";

import * as x509 from "@peculiar/x509";

import styles from "./CardContent.module.css";
import Aside from "../UI/Aside";

const CardContent = (props) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const base64 = reader.result.split("base64,")[1];
        const cert = new x509.X509Certificate(base64);

        console.log(cert);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <section className={styles.CardContent}>
      <Aside />
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  );
};

export default CardContent;
