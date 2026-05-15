import { useCallback } from "react";

export function usePdfDownload() {
  const downloadPdf = useCallback(() => {
    window.print();
  }, []);

  return { downloadPdf, loading: false };
}
