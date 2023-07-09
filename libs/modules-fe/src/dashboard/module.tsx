'use client';
import { DashboardLayout } from '../layouts';
import { ReactElement, FC } from 'react';
import Image from 'next/image';

export const DashboardModule: FC = (): ReactElement => {
  return (
    <DashboardLayout>
      <section className="flex flex-col gap-4 px-10">
        <h1 className="text-4xl font-semibold">Hallo, Mawar Saidah</h1>
        <p className="text-lg font-normal w-2/3">
          Selamat Datang Di Aplikasi Penerimaan Mahasiswa Baru Universitas Islam
          Nusantara
        </p>
        <p className="text-lg pr-16">
          Calon mahasiswa yang ingin mendaftarkan diri di Universitas Islam
          Nusantara, dapat mengisi kelengkapan seluruh data yang diperlukan
          dalam dashboard ini. Kemudian lakukan pendaftaran PMB Uninus pada menu
          Pendaftaran.
        </p>

        <figure className="w-full px-16 py-8">
          <Image
            src={'/illustrations/tata_cara.png'}
            alt="profil"
            width={584}
            height={400}
            quality={100}
            priority
          />
        </figure>
      </section>
    </DashboardLayout>
  );
};
