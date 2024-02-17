import React from "react";
import { Button } from "@nextui-org/react";
import DownloadIcon from '@mui/icons-material/Download';

export const PrincipalButton = ({text, background, textColor, shadow, onClick}) => {
  return(
    <>
      <Button 
        className={`${background} ${textColor} ${shadow} w-16 py-1 rounded-full`}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  )
}

 export const PdfDownloadButton = ({ pdfUrl, pdfName, extraClass }) => {
  const handleDownload = () => {
    // Crear un elemento <a> temporal
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = pdfName;

    // Simular clic en el elemento temporal para iniciar la descarga
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className={`w-fit mx-auto p-3 rounded-full cursor-pointer ${extraClass}`}>
      <DownloadIcon onClick={handleDownload}>Descargar PDF</DownloadIcon>
    </div>
  );
};
