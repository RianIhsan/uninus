import { z } from "zod";
import { EGender, EReligion, ECitizenship } from "../../../enum";

export const VSUpdateStudent = z.object({
  avatar: z
    .any()
    .refine((file) => ["image/jpeg", "image/jpg", "image/png"].includes(file?.[0]?.type))
    .optional(),
  fullname: z.string().optional(),
  nik: z
    .string()
    .refine((value) => value.length === 16, {
      message: "NIK harus 16 digit",
    })
    .optional(),
  nisn: z
    .string()
    .refine((value) => value.length === 10, {
      message: "NISN harus 10 digit",
    })
    .optional(),
  birth_place: z.string().optional(),
  birth_date: z.string().optional(),
  gender: z.nativeEnum(EGender).optional(),
  phone_number: z.string().optional(),
  religion: z.nativeEnum(EReligion).optional(),
  citizenship: z.nativeEnum(ECitizenship).optional(),
  marital_status: z.string().optional(),
  country: z.string().optional(),
  address: z.string().optional(),
  postal_code: z.string().optional(),
  subdistrict: z.string().optional(),
  province: z.string().optional(),
  city: z.string().optional(),
  school_type: z.string().optional(),
  graduation_year: z.string().optional(),
  school_major: z.string().optional(),
  school_name: z.string().optional(),
  school_npsm: z.string().optional(),
  school_address: z.string().optional(),
  school_postal_code: z.string().optional(),
  school_subdistrict: z.string().optional(),
  school_province: z.string().optional(),
  school_city: z.string().optional(),
  school_phone_number: z.string().optional(),
  father_name: z.string().optional(),
  mother_name: z.string().optional(),
  guardian_name: z.string().optional(),
  father_status: z.string().optional(),
  mother_status: z.string().optional(),
  guardian_status: z.string().optional(),
  parent_address: z.string().optional(),
  parent_postal_code: z.string().optional(),
  parent_subdistrict: z.string().optional(),
  parent_province: z.string().optional(),
  parent_city: z.string().optional(),
  father_education: z.string().optional(),
  mother_education: z.string().optional(),
  guardian_education: z.string().optional(),
  father_occupation: z.string().optional(),
  mother_occupation: z.string().optional(),
  guardian_occupation: z.string().optional(),
  father_income: z.string().optional(),
  mother_income: z.string().optional(),
  guardian_income: z.string().optional(),
  guardian_address: z.string().optional(),
  guardian_postal_code: z.string().optional(),
  guardian_subdistrict: z.string().optional(),
  guardian_province: z.string().optional(),
  guardian_city: z.string().optional(),
  faculty_type: z.string().optional(),
  education_programs: z.string().optional(),
  study_program: z.string().optional(),
  selection_type: z.string().optional(),
  family_card: z.string().optional(),
  pass_photo: z.string().optional(),
  ktp_card: z.string().optional(),
  school_report_card: z.string().optional(),
  birth_certificate: z.string().optional(),
  additional_documents: z.string().optional(),
  ijazah_card: z.string().optional(),
  kipk_card: z.string().optional(),
  academic_year: z.string().optional(),
  registration_wave: z.string().optional(),
  registration_status: z.string().optional(),
});

export type TVSUpdateStudent = z.infer<typeof VSUpdateStudent>;
