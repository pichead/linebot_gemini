import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
// import * as adminModel from "../../model/admin"
import * as admin from "../../model/admin"
@Injectable()
export class AdminService {
  async create(createAdminDto: CreateAdminDto) {
    return "await adminModel.findAll()"
  }

  async findAll() {

    const data = await admin.findAll()

    return { message: "ok", data: data,version:1 }

  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
