import { Module } from "@nestjs/common";
import { PrismaModule } from "@uninus/api/models";
import {
  AuthModule,
  PmbModule,
  SelectModule,
  StudentModule,
  UserModule,
  FileModule
} from "@uninus/api/modules";

@Module({
  imports: [PrismaModule, AuthModule, PmbModule, StudentModule, UserModule, SelectModule, FileModule],
  controllers: [],
  providers: [],
})
export class MasterApi {}
