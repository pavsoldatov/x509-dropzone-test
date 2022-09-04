import styles from "./Dropzone.module.css";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import * as x509 from "@peculiar/x509";

const getCertificatePayload = (certificate) => {
  const serialNumber = certificate.serialNumber;
  const validFrom = certificate.notBefore;
  const validTill = certificate.notAfter;

  const subject = certificate.subject;
  const subjStartInx = subject.indexOf("CN=");
  const subjEndInx = subject.indexOf(",", subjStartInx);
  const subjCN = subject.slice(subjStartInx + 3, subjEndInx);

  const issuer = certificate.issuer;
  const issuerStartInx = issuer.indexOf("CN=");
  const issuerEndInx = issuer.indexOf(",", issuerStartInx);
  const issuerCN = issuer.slice(issuerStartInx + 3, issuerEndInx);

  const payload = {
    serialNumber: serialNumber, // our react key
    subjectCN: subjCN,
    issuerCN: issuerCN,
    validFrom: validFrom,
    validTill: validTill,
  };

  return payload;
};

const Dropzone = ({ onSetPayload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const promises = acceptedFiles.map(function (file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onabort = () => reject("file reading was aborted");
          reader.onerror = () => reject("file reading has failed");
          reader.onload = () => {
            const cert = new x509.X509Certificate(reader.result);
            const payload = getCertificatePayload(cert);
            resolve(payload);
          };
          reader.readAsArrayBuffer(file);
        });
      });

      Promise.all(promises).then((resultArr) => {
        onSetPayload(resultArr);
      });
    },
    [onSetPayload]
  );

  const { fileRejections, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pkix-cert": [".cer"],
      "application/x-x509-ca-cert": [".cer"],
    },
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <label key={file.path}>
      <strong>{file.path} відхилено.</strong>
      {errors.map((er) => (
        <p key={er.code}>Файл повинен мати розширення *.cer.</p>
      ))}
    </label>
  ));

  return (
    <div {...getRootProps({ className: styles.Dropzone })}>
      <input {...getInputProps()} />
      <p>Натисніть або перетягніть сертифікат сюди.</p>
      <em>Додати можна лише файли з розширенням *.cer.</em>
      <br />
      {fileRejectionItems}
    </div>
  );
};

export default Dropzone;
