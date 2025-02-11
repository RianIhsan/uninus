import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@uninus/api/models";
import {
  TCitizenshipResponse,
  TDepartmentResponse,
  TFacultyResponse,
  TGenderResponse,
  TMaritalStatusResponse,
  TReligionResponse,
  TSalaryResponse,
  TSelectionResponse,
  ISelectRequest,
  TEducationHistoryResponse,
  TDegreeProgramResponse,
  ISelectFacultyRequest,
  ISelectDepartmentRequest,
  TOccupationResponse,
  TDisabilitiesResponse,
  TYearGraduationResponse,
  ISelectEducationHistoryRequest,
  TScholarshipResponse,
  TOccupationPositionResponse,
  IOccupationPositionRequest,
  TSchoolTypeResponse,
  TCreateQuestionRequest,
  TUpdateQuestionRequest,
  TDeleteQuestionResponse,
} from "@uninus/entities";

@Injectable()
export class GeneralService {
  constructor(private prisma: PrismaService) {}

  async getDegreeProgram({ search }: ISelectRequest): Promise<TDegreeProgramResponse> {
    const degreeProgram = await this.prisma.degreeProgram.findMany({
      where: {
        name: {
          ...(search && { contains: search }),
          mode: "insensitive",
        },
      },
      select: {
        id: true,
        name: true,
        department: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!degreeProgram) {
      throw new NotFoundException("Data Fakultas Tidak Ditemukan!");
    }

    return { degree_program: degreeProgram };
  }

  async getFaculty({
    search,
    degree_program_id,
  }: ISelectFacultyRequest): Promise<TFacultyResponse> {
    const faculty = await this.prisma.faculty.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },

        ...(degree_program_id && {
          degreeProgram_id: Number(degree_program_id),
        }),
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!faculty) {
      throw new NotFoundException("Data Fakultas Tidak Ditemukan!");
    }

    return { faculty };
  }

  async getDepartment({
    search,
    faculty_id,
    degree_program_id,
  }: ISelectDepartmentRequest): Promise<TDepartmentResponse> {
    const department = await this.prisma.department.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },
        ...(faculty_id && { faculty_id: Number(faculty_id) }),
        ...(degree_program_id && { degree_program_id: Number(degree_program_id) }),
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!department) {
      throw new NotFoundException("Data Program Studi Tidak Ditemukan!");
    }

    return { department };
  }

  async getReligion({ search }: ISelectRequest): Promise<TReligionResponse> {
    const religion = await this.prisma.religion.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!religion) {
      throw new NotFoundException("Data Religion Tidak Ditemukan!");
    }

    return { religion };
  }

  async getMaritalStatus({ search }: ISelectRequest): Promise<TMaritalStatusResponse> {
    const maritalStatus = await this.prisma.maritalStatus.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!maritalStatus) {
      throw new NotFoundException("Data Status Pernikahan Tidak Ditemukan!");
    }

    return { maritalStatus };
  }

  async getGender({ search }: ISelectRequest): Promise<TGenderResponse> {
    const gender = await this.prisma.gender.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!gender) {
      throw new NotFoundException("Data Gender Tidak Ditemukan!");
    }

    return { gender };
  }

  async getCitizenship({ search }: ISelectRequest): Promise<TCitizenshipResponse> {
    const citizenship = await this.prisma.citizenship.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!citizenship) {
      throw new NotFoundException("Data Kewarganegaraan Tidak Ditemukan!");
    }

    return { citizenship };
  }

  async getSelectionPath({ search }: ISelectRequest): Promise<TSelectionResponse> {
    const selection = await this.prisma.selectionPath.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!selection) {
      throw new NotFoundException("Data Jalur Seleksi Tidak Ditemukan!");
    }

    return { selection };
  }

  async getSalary({ search }: ISelectRequest): Promise<TSalaryResponse> {
    const salary = await this.prisma.salary.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!salary) {
      throw new NotFoundException("Data Gaji Tidak Ditemukan!");
    }

    return { salary };
  }

  async getEducationHistory({
    search,
    npsn,
  }: ISelectEducationHistoryRequest): Promise<TEducationHistoryResponse> {
    const educationHistory = await this.prisma.educationHistory.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },
        npsn: { ...(npsn && { contains: npsn }) },
      },
      select: {
        id: true,
        npsn: true,
        name: true,
        province: true,
        sub_district: true,
        district_city: true,
        street_address: true,
      },
    });

    if (!educationHistory || educationHistory.length === 0) {
      throw new NotFoundException("Data Pendidikan Tidak Ditemukan!");
    }

    return { education_history: educationHistory };
  }

  async getOccupation({ search }: ISelectRequest): Promise<TOccupationResponse> {
    const occupation = await this.prisma.occupation.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },
      },
      select: {
        id: true,
        name: true,
      },
    });
    if (!occupation) {
      throw new NotFoundException("Data Pekerjaan Tidak Ditemukan!");
    }

    return { occupation };
  }

  async getOccupationPosition({
    search,
    occupation_id,
  }: IOccupationPositionRequest): Promise<TOccupationPositionResponse> {
    const occupationPosition = await this.prisma.occupationPosition.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },
        ...(occupation_id && { occupation_id: Number(occupation_id) }),
      },
      select: {
        id: true,
        name: true,
      },
    });
    if (!occupationPosition) {
      throw new NotFoundException("Data Jabatan Tidak Ditemukan!");
    }

    return { occupation_position: occupationPosition };
  }

  async getDisabilites({ search }: ISelectRequest): Promise<TDisabilitiesResponse> {
    const disabilities = await this.prisma.disabilities.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },
      },
      select: {
        id: true,
        name: true,
      },
    });
    if (!disabilities) {
      throw new NotFoundException("Data Disabilitas Tidak Ditemukan!");
    }

    return { disabilities };
  }

  async getYearGraduate(): Promise<TYearGraduationResponse> {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 40;

    const year = Array.from({ length: currentYear - startYear + 1 }, (_, index) => {
      const year = startYear + index;
      const id = index + 1;
      return { id: +id, name: year };
    });

    return { year };
  }

  async getScholarship({ search }: ISelectRequest): Promise<TScholarshipResponse> {
    const scholarship = await this.prisma.scholarship.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!scholarship) {
      throw new NotFoundException("Data Beasiswa Tidak Ditemukan!");
    }

    return { scholarship };
  }

  async getSchoolType({ search }: ISelectRequest): Promise<TSchoolTypeResponse> {
    const schoolTypes = await this.prisma.schoolTypes.findMany({
      where: {
        name: { ...(search && { contains: search }), mode: "insensitive" },
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!schoolTypes) {
      throw new NotFoundException("Data Jenis Sekola Tidak Ditemukan!");
    }

    return { school_type: schoolTypes };
  }

  async getAllQuestion() {
    const questions = await this.prisma.questions.findMany();
    return questions;
  }

  async createQuestion(data: TCreateQuestionRequest) {
    const { question } = data;

    const existingQuestion = await this.prisma.questions.findFirst({
      where: { question },
    });

    if (existingQuestion) {
      throw new ConflictException("Duplicate Question");
    }

    const newQuestion = await this.prisma.questions.create({
      data: data,
    });

    return newQuestion;
  }

  async updateQuestion(id: number, data: TUpdateQuestionRequest) {
    const existingQuestion = await this.prisma.questions.findFirst({
      where: {
        question: data.question,
      },
    });

    if (existingQuestion && existingQuestion.id !== id) {
      throw new ConflictException("Duplicate Question at this Id");
    }

    await this.prisma.questions.update({
      where: { id },
      data: data,
    });

    return this.prisma.questions.findUnique({ where: { id } });
  }

  async deleteQuestion(id: number): Promise<TDeleteQuestionResponse> {
    const question = await this.prisma.questions.findUnique({
      where: {
        id,
      },
    });
    if (!question) {
      throw new NotFoundException("Question not found");
    }

    await this.prisma.questions.delete({ where: { id } });
    return {
      message: "Question deleted",
    };
  }
}
