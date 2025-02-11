"use client";
import { CopyOutlined, DownloadOutlined } from "@ant-design/icons";
import { BreadCrumb, Button, KartuPembayaran } from "@uninus/web/components";
import dynamic from "next/dynamic";
import { FC, Fragment, ReactElement, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p className="text-primary-green">Menyiapkan dokumen..</p>,
  },
);

const BlobProvider = dynamic(() => import("@react-pdf/renderer").then((mod) => mod.BlobProvider), {
  ssr: false,
  loading: () => <p className="text-primary-green">Tunggu sebentar..</p>,
});

export const pembayaranBreadcrumb = [
  {
    name: "Registrasi",
    link: "/dashboard/registrasi/biodata",
  },
  {
    name: "Pembayaran",
    link: "/dashboard/registrasi/pembayaran",
  },
];

export const Pembayaran: FC = (): ReactElement => {
  const [textToCopy, setTextToCopy] = useState("4444081904377804");

  const copyText = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("kode berhasil disalin", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.error("Error copying text:", error);
      });
  };

  return (
    <Fragment key="dashboard-pembayaran">
      <div className="flex flex-col items-center lg:items-start p-5 lg:p-0 lg:py-4">
        <span className="flex gap-2">
          <h1 className="text-xs md:text-sm text-slate-5 font-bold">PMB/</h1>
          <BreadCrumb items={pembayaranBreadcrumb} />
        </span>

        <p className="text-lg font-bold text-secondary-green-4">Pembayaran Registrasi</p>
      </div>
      <section className="h-auto w-[90vw] lg:w-[60vw] xl:w-[70vw] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10)] flex flex-col">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="flex justify-between items-center w-full px-3 md:px-5">
          <h1 className="font-bold text-[1.2rem]">Pembayaran</h1>
          <div className="h-auto">
            <PDFDownloadLink
              document={<KartuPembayaran />}
              fileName="4103700434832748_Kartu Pembayaran.pdf"
            >
              {({ loading }) =>
                loading ? (
                  <p className="text-primary-green">hampir selesai...</p>
                ) : (
                  <Button variant="green-outline" size="sm">
                    <div className="flex justify-center items-center gap-2">
                      <DownloadOutlined />
                      Download Bukti
                    </div>
                  </Button>
                )
              }
            </PDFDownloadLink>
          </div>
        </div>

        <div className="bg-primary-green w-full h-[3px] mt-3"></div>

        <div className="border border-primary-orange rounded-md mt-7 h-[6rem] xl:h-[5rem] w-[80vw] sm:w-[85vw] lg:w-[55vw] xl:w-[65vw] flex flex-col justify-evenly mx-auto pl-3 md:pl-5">
          <h1 className="text-primary-orange font-bold text-[1rem] ml-2">
            Segera Selesaikan Pembayaranmu!
          </h1>
          <div className="w-[80%]">
            <h2 className="text-grayscale-9 text-[0.8rem] sm:text-[1rem] ml-2">
              Sedikit Lagi Kamu akan terdaftar di Universitas Islam Nusantara
            </h2>
          </div>
        </div>

        <h2 className="text-grayscale-6 mt-5 ml-3 md:ml-5">Nomor Virtual Account</h2>
        <div className="mt-2 flex justify-between mx-3 md:mx-5">
          <h2 className="font-bold">4444081904377804</h2>
          <div
            className="flex gap-2 justify-between items-center hover:cursor-pointer"
            onClick={copyText}
          >
            <p className="text-primary-green">salin</p>
            <CopyOutlined className="text-primary-green" />
          </div>
        </div>

        <h2 className="text-grayscale-6 mt-5 ml-3 md:ml-5">
          Total Pembayaran (Belum termasuk admin)
        </h2>
        <div className="mt-2 flex justify-between mx-3 md:mx-5">
          <h2 className="font-bold">Rp. 250.000</h2>
          <BlobProvider document={<KartuPembayaran />}>
            {({ url }) => (
              <a
                href={url != null ? url : ""}
                target="_blank"
                rel="noreferrer"
                className="text-primary-green"
              >
                Lihat Detail
              </a>
            )}
          </BlobProvider>
        </div>

        <h2 className="text-grayscale-6 mt-5 ml-3 md:ml-5">Selesaikan Pembayaran Sebelum</h2>
        <h2 className="font-bold mt-2 py-2 ml-3 md:ml-5">22 Agustus 2023, 23:59 WIB</h2>
      </section>
    </Fragment>
  );
};
