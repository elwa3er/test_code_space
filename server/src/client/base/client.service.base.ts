/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Client } from "@prisma/client";
import { PaginatedInterface } from "../../util/PaginatedInterface";
import { DbService } from "src/dbService/db.service";

export class ClientServiceBase {
  constructor(protected readonly prisma: DbService) {}

  async count<T extends Prisma.ClientFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientFindManyArgs>
  ): Promise<number> {
    return await this.prisma.client.count(args);
  }

  async findMany<T extends Prisma.ClientFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientFindManyArgs>
  ): Promise<PaginatedInterface<Client>> {
    const [data, totalCount] = await Promise.all([
      this.prisma.client.findMany(args),
      this.prisma.client.count({ where: { deletedAt: null } }),
    ]);

    return { paginatedResult: data, totalCount };
  }
  async findOne<T extends Prisma.ClientFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientFindUniqueArgs>
  ): Promise<Client | null> {
    return await this.prisma.client.findUnique(args);
  }
  async create<T extends Prisma.ClientCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientCreateArgs>
  ): Promise<Client> {
    return await this.prisma.client.create<T>(args);
  }
  async createMany<T extends Prisma.ClientCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientCreateManyArgs>
  ): Promise<Prisma.BatchPayload> {
    return await this.prisma.client.createMany<T>(args);
  }
  async update<T extends Prisma.ClientUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientUpdateArgs>
  ): Promise<Client> {
    return await this.prisma.client.update<T>(args);
  }
  async delete<T extends Prisma.ClientDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientDeleteArgs>
  ): Promise<Client> {
    return await this.prisma.client.delete(args);
  }

  async updateMany<T extends Prisma.ClientUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientUpdateManyArgs>
  ): Promise<Prisma.BatchPayload> {
    return await this.prisma.client.updateMany(args);
  }
}
